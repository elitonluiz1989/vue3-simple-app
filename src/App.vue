<template>
  <app-header />

  <router-view />

  <app-footer />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from './components/layout/AppFooter.vue';

  export default defineComponent({
    name: "App",
    components: {
      AppHeader,
        AppFooter,
    },
  });
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
</style>
