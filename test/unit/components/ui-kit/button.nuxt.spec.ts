import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import UIButton from '~/components/ui-kit/button.vue'

it('button component', async () => {
  const component = await mountSuspended(UIButton, {
    props: {
      type: 'button',
    },
    slots: {
      default: () => `button`,
    },
  })
  expect(component.html()).toMatchInlineSnapshot(`"<button class="button" type="button">button</button>"`)
})
