<template>
  <app-header />

  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import AppHeader from "./components/layout/AppHeader.vue";

  export default defineComponent({
    name: "App",
    components: {
      AppHeader,
    },
  });
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
</style>
