import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    setupFiles: ['./test/setup-env.ts'],
    globals: true,
    include: ['./test/unit/**/**/*.spec.ts'],
    coverage: {
      include: ['shared/**/**'],
    },
  },
})
