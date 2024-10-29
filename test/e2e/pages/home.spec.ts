import { expect, test } from '@nuxt/test-utils/playwright'

test('home page', async ({ page, goto }) => {
  await page.setViewportSize({ width: 420, height: 1000 })

  await goto('/', { waitUntil: 'hydration' })

  await expect(page).toHaveScreenshot('home.png')
})
