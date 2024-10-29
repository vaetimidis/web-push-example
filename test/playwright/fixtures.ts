import fs from 'node:fs'
import path from 'node:path'

import { test as baseTest, request } from '@playwright/test'

export * from '@playwright/test'

export const test = baseTest.extend<object, { workerStorageState: string }>({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [async (_, use) => {
    // Use parallelIndex as a unique identifier for each worker.
    const id = test.info().parallelIndex
    const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`)

    if (fs.existsSync(fileName)) {
      // Reuse existing authentication state if any.
      await use(fileName)
      return
    }

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const context = await request.newContext({ storageState: undefined })

    // Send authentication request. Replace with your own.
    await context.post('https://.../api/v3/auth/login/web', {
      data: {
        login: 'admin',
        password: 'admin',
      },
    })

    await context.storageState({ path: fileName })
    await context.dispose()
    await use(fileName)
  }, { scope: 'worker' }],
})
