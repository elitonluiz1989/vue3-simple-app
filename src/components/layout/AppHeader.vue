<template>
  <header class="header container">
    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-3 col-md-2 col-xl-1 d-flex justify-content-center">
        <div
          class="header_logo d-flex justify-content-center align-self-center">
          <img
            src="../../assets/img/logo.png"
            :alt="headerContent.title"
            class="img-fluid">
        </div>
      </div>

      <div class="col-12 col-sm-8 col-md-6 col-xl-5">
        <h1 class="header_title text-center">{{ headerContent.title }}</h1>
      </div>
    </div>

    <div class="row">
      <app-nav />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import { useTranslate } from '@/hooks/useTranslate';

import AppNav from "./AppNav.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    AppNav
  },

  setup() {
    const headerContent = {
      title: useTranslate('app.title')
    };

    return {
      headerContent
    };
  },
});
</script>