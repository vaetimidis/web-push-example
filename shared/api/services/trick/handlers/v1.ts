import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    idk() {
      return instance<unknown>(`/v1/`, { method: 'GET' })
    },
  }
}

export default method
