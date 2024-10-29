import {
  type ApiStatus,
  type IRequestReturn,
  type IRequestWrapperPayload,
  useRequestWrapperStore,
} from '../store/request-wrapper.store'

// Типизация для useRequest
export type UseRequest = <T>(payload: IRequestWrapperPayload<T>) => Promise<IRequestReturn<Awaited<T>>>

// Типизация для useRequestStatus
export type UseRequestStatus = (keys: string[], status?: ApiStatus) => boolean

const useRequest: UseRequest = (payload) => {
  return useRequestWrapperStore().requestWrapper(payload)
}

const useRequestStatus: UseRequestStatus = (keys, status) => {
  return useRequestWrapperStore().checkStatus(keys, status ?? 'PENDING')
}

export { useRequest, useRequestStatus }
