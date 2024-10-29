import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import UIPicture from '~/components/ui-kit/picture.vue'

it('picture component', async () => {
  const component = await mountSuspended(UIPicture, {
    props: {
      src: '/images/mock.svg',
    },
    slots: {
      default: () => `button`,
    },
  })
  expect(component.html()).toMatchInlineSnapshot(`"<picture><img alt="" src="/images/mock.svg"></picture>"`)
})
