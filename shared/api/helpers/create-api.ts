/* eslint-disable no-console */
import { createInstance } from '.'
import type { FetchOption, IApi, IService } from '../types'

const services: IService[] = [
  trickService,
  triggerService,
]

interface CreateApiParams {
  interceptops: FetchOption<unknown>[]
  verbose: boolean
  baseUrl: string
}

function createApi(params: Partial<CreateApiParams>) {
  const {
    interceptops = [],
    verbose = true,
    baseUrl = '',
  } = params

  console.log(`💫 %c[API]`, 'color: #9400D3; font-weight: bold;', 'baseUrl:', baseUrl)

  const api = {} as IApi

  services.forEach((service) => {
    const serviceInstance = createInstance({
      baseUrl,
      interceptops,
      verbose,
    })
    const serviceMethods = service.createMethods(serviceInstance)

    api[service.name] = serviceMethods
  })

  return api
}

export { createApi }
export type { CreateApiParams }
