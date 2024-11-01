export type ApiStatus =
  'NONE' |
  'PENDING' |
  'FULFILLED' |
  'REJECTED'

interface IRequestWrapperState {
  _status: Map<string, ApiStatus>
  _error: Map<string, IError | null>
}

interface IRequestReturn<T> { data?: T, error?: IError | null, status: ApiStatus }
interface IRequestWrapperPayload<T> {
  key: string
  attemptCounts?: number
  fn: (payload: ICallback) => T extends boolean ? void : T
  onSuccess?: (payload: SuccessCallback<T>) => Promise<void> | void | unknown
  onError?: (payload: ErrorCallback) => Promise<void> | void | unknown
}

interface IError {
  status: number
  arguments: unknown
  code: string
  description: string
}
interface ICallback {
  state: IRequestWrapperState
  api: IApi
}
type SuccessCallback<T> = Omit<ICallback, 'api'> & { data: Awaited<T> }
type ErrorCallback = Omit<ICallback, 'api'> & { error: IError }

interface IRetryResult<T> {
  result?: Awaited<T> | null
  error: IError | null
}

export type {
  ICallback,
  IError,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  IRetryResult,
}

const useRequestWrapperStore = defineStore('request', {
  state: (): IRequestWrapperState => ({
    _status: new Map(),
    _error: new Map(),
  }),

  actions: {
    _setLoading(key: string, value: ApiStatus) {
      this._status.set(key, value)
    },
    _setError(key: string, value: IError | null) {
      if (value)
        this._error.set(key, value)
      else
        this._error.delete(key)
    },

    async requestWrapper<T = boolean>(payload: IRequestWrapperPayload<T>): Promise<IRequestReturn<Awaited<T>>> {
      const {
        key,
        fn,
        onSuccess,
        onError,
        attemptCounts,
      } = payload

      this._setLoading(key, 'PENDING')
      this._setError(key, null)

      const { result, error } = await this.retryAsync(fn, attemptCounts ?? 2)

      try {
        await (result && !error
          ? onSuccess?.({
            data: result as Awaited<T>,
            state: this.$state,
          })
          : onError?.({
            error: error as IError,
            state: this.$state,
          }))
      }
      finally {
        this._setLoading(key, result ? 'FULFILLED' : 'REJECTED')
        this._setError(key, error)
      }

      return {
        data: result as Awaited<T>,
        error,
        status: result ? 'FULFILLED' : 'REJECTED',
      }
    },
    async retryAsync<T>(
      fn: (payload: ICallback) => T,
      attemptCounts: number,
    ): Promise<IRetryResult<T>> {
      const { api } = useApi()
      let error: IError = {} as IError

      for (let i = 0; i < attemptCounts; i++) {
        try {
          const result = ((await fn({ state: this.$state, api })) ?? true) as Awaited<T>

          return { result, error: null }
        }
        catch (e: any) {
          error = {
            status: e.status,
            ...e?.response?.data?.error ?? e,
          }

          console.error('[REQUEST ERROR] - ', e)
        }
      }

      return { error }
    },

    getStatus(key: string): ApiStatus {
      return this._status.get(key)!
    },
    checkStatus(keys: string[], status = 'PENDING'): boolean {
      return keys.some(s => this.getStatus(s) === status)
    },
    isAnyLoading(keys: string[]) {
      return computed(() => this.checkStatus(keys, 'PENDING'))
    },
  },
})

export { useRequestWrapperStore }
