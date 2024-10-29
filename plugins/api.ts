export default defineNuxtPlugin({
  name: 'api-client',
  enforce: 'pre',
  async setup(nuxtApp) {
    const { api, init } = useApi()

    const { apiUrl } = useRuntimeConfig().public

    const interceptops = [{
      onRequest: ({ options }) => {
        const headers = options.headers ||= {} as Headers

        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${useCookie(TOKEN_KEY, { sameSite: true }).value}`])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${useCookie(TOKEN_KEY, { sameSite: true }).value}`)
        }
        else {
          // @ts-expect-error headers is never and now init field
          headers.Authorization = `Bearer ${useCookie(TOKEN_KEY, { sameSite: true }).value}`
        }
      },
    } satisfies FetchOption<unknown>]

    init({
      baseUrl: `${apiUrl}`,
      verbose: true,
      interceptops,
    })

    nuxtApp.vueApp.config.globalProperties.$api = api
    nuxtApp.provide('api', api)
  },
})
