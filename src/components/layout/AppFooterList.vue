<template>
  <ul class="footer_list text-white">
    <li
      class="d-flex"
      v-if="hasHeaderContent">
      <div
        class="footer_list-icon"
        v-if="icon">
        <font-awesome-icon :icon="icon" />
      </div>

      <h7
        class="m-0 font-weight-bolder"
        v-if="title">{{ title }}</h7>
    </li>

    <slot />
  </ul>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { empty } from '@/utils';

  export default defineComponent({
    name: "AppFooterList",

    props: {
      title: {
        type: String,
        required: false
      },

      icon: {
        type: String,
        required: false
      }
    },

    setup(props) {
      const hasHeaderContent = computed(() => !empty(props.icon) || !empty(props.title));

      return {
        hasHeaderContent
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  .footer_list {
    margin: 0 auto 0.5rem;
    padding: 0;
    font-size: 1.1rem;
    list-style: none;

    &-icon {
      margin: auto 0.5rem auto 0;
    }
  }
</style>