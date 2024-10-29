import { createApi } from '~/shared/api'
import type { ApiNames, CreateApiParams, IApi } from '~/shared/api'

// Типизация для useApi
export type UseApiInitParams = Partial<CreateApiParams & { servicesNames: ApiNames[] }>
export type UseApi = () => {
  init: (params: UseApiInitParams) => Promise<void>
  api: IApi
}

let api: IApi = {} as IApi

const useApi: UseApi = () => {
  const init = async (params: Partial<UseApiInitParams>) => {
    api = createApi(params)
  }

  return { init, api }
}

export { useApi }
