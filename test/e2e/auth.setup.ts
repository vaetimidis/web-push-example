import { expect, test as setup } from '@playwright/test'

const authFile = 'playwright/.auth/auth.json'

setup('authenticate', async ({ page }) => {
  await page.goto('auth')
  await page.waitForSelector('text=boilerplate auth')

  await page.getByLabel('Логин').fill('admin')
  await page.getByLabel('Пароль').fill('admin')

  const responsePromise = page.waitForResponse('**/api/v3/auth/login/web')
  await page.getByRole('button', { name: 'Авторизоваться' }).click()
  const response = await responsePromise
  const data = (await response.json())
  expect(data.accessToken).toBeTruthy()

  await page.context().storageState({ path: authFile })
})
