import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface ITrickMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies ITrickMethods
}

const service: IService = { createMethods, name: ApiNames.Trick }

export type { ITrickMethods }
export { service as trickService }
