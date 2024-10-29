<script setup lang="ts">
import { ELinkTypes } from '~/shared/types/constant/link'
</script>

<template>
  <div class="ui-kit">
    <ul>
      <UIAccordion title="UIButton">
        <li>
          <UIButton>
            i am button
          </UIButton>
        </li>
      </UIAccordion>
      <UIAccordion title="Icon">
        <li>
          <Icon name="icon:book" size="20" />
        </li>
      </UIAccordion>
      <UIAccordion title="UILink">
        <li>
          <UILink :type="ELinkTypes.LINK" title="i am link" to="/">
            i am link
          </UILink>
        </li>
      </UIAccordion>
      <UIAccordion title="UIPicture">
        <li>
          <UIPicture src="" />
        </li>
      </UIAccordion>
    </ul>
  </div>
</template>

<style scoped>
.ui-kit {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
