import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import UIAccordion from '~/components/ui-kit/accordion.vue'

it('accordion component', async () => {
  const component = await mountSuspended(UIAccordion, {
    props: {
      title: 'test title',
    },
    slots: {
      default: () => `button`,
    },
  })
  expect(component.html()).toMatchInlineSnapshot(`
    "<div data-v-bc2c5938="" class="accordion-item">
      <div data-v-bc2c5938="" class="accordion-header"><span data-v-bc2c5938="">test title</span><span data-v-bc2c5938="" class="accordion-icon">+</span></div>
      <transition-stub data-v-bc2c5938="" name="accordion" appear="false" persisted="false" css="true">
        <!--v-if-->
      </transition-stub>
    </div>"
  `)
})
