import type { FetchOptions } from 'ofetch'
import type {
  ApiNames,
  ITrickMethods,
  ITriggerMethods,
} from '~/shared/api'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods =
  ITrickMethods |
  ITriggerMethods

export interface IApi {
  trick: ITrickMethods
  trigger: ITriggerMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
