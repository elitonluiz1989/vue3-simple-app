<template>
  <h2 class="screen_title">{{ title }}</h2>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "AppScreenTitle",

    props: {
      title: {
        type: String,
        required: true
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables';

  .screen_title {    
    padding: 0.5rem 0 0.5rem 1rem;
    border-bottom: 2px solid $primary-color;
    font-size: 2rem;
  }
</style>