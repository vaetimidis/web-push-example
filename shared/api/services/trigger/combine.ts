import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface ITriggerMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies ITriggerMethods
}

const service: IService = { createMethods, name: ApiNames.Trigger }

export type { ITriggerMethods }
export { service as triggerService }
