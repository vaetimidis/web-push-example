import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import UILink from '~/components/ui-kit/link.vue'
import { ELinkTypes } from '~/shared/types/constant/link'

it('link component', async () => {
  const component = await mountSuspended(UILink, {
    props: {
      to: '/',
      type: ELinkTypes.LINK,
    },
    slots: {
      default: () => `link`,
    },
  })
  expect(component.html()).toMatchInlineSnapshot(`"<a href="/" class="link">link</a>"`)
})
