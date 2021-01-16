<template>
  <nav>
    <a
      :class="navBtnOpenClass"
      @click="toggleNav">      
      <font-awesome-icon icon="bars" />
    </a>

    <div :class="navClass">
      <a
        class="nav_btn nav_btn--close"
        @click="toggleNav">      
        <font-awesome-icon icon="times" />
      </a>

      <router-link
        class="nav_item nav_item--active d-block"
        :to="templateTexts.home.route">
        {{ templateTexts.home.title }}
      </router-link>

      <router-link
        class="nav_item nav_item--active d-block"
        :to="templateTexts.activities.route">
        {{ templateTexts.activities.title }}
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";

  import { useLocalizedText } from '@/hooks/useTranslator';

  export default defineComponent({
    name: "AppNav",

    setup() {
      const templateTexts = {
        home: {
          title: useLocalizedText('home.title'),
          route: useLocalizedText('home.route')
        },
        activities: {
          title: useLocalizedText('activities.title'),
          route: useLocalizedText('activities.route')
        },
      };
      const showMenu = ref(false);

      const navClass = computed(() => 
        showMenu.value ? 'nav_container nav--show' : 'nav_container nav--hide'
      );

      const navBtnOpenClass = computed(() => 
        showMenu.value ? 'nav_btn nav_btn--open invisible' : 'nav_btn nav_btn--open'
      );

      const toggleNav = () => (showMenu.value = !showMenu.value);

      return {
        templateTexts,
        navClass,
        navBtnOpenClass,
        toggleNav,
      }
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";
  
  $nav-border-color: darken($dark-color, 5%);
  $nav-transition-duraction: .25s;

  .nav {
    &--show,
    &--hide {
      transition: width $nav-transition-duraction;
    }

    &--show > *,
    &--hide > * {
      transition: opacity $nav-transition-duraction;
    }

    &--show {
      width: 60% !important;
    }

    &--show > * {
      opacity: 1;
    }

    &--hide {
      width: 0 !important;
    }

    &--hide > * {
      opacity: 0;
    }

    &_btn {
      position: absolute;
      top: 0.5rem;
      z-index: 10000;
      background-color: transparent;
      color: $lightest-color;
    }

    &_btn {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    &_btn:hover {
      color: $lightest-color;
    }

    &_btn--open {
      right: 0.5rem;
    }

    &_btn--close {
      top: 0;
      right: 0;
    }

    &_container {
      width: 0;
      height: 100%;
      padding: 2.5rem 0;
      overflow: hidden;
      position: absolute;
      z-index: 9999;
      top: 0;
      left: 0;
      background-color: $dark-color;
      border-right: 1px solid $nav-border-color;
    }

    &_item {
      margin: 0 0.5rem 0.5rem;
      padding: 0.5rem;
      color: $lightest-color;
      border-bottom: 1px solid lighten($nav-border-color, 30%);
    }

    &_item--active {
      background-color: $lightest-color;
      border-radius: 0.25rem;
      color: darken($nav-border-color, 5%);
    }
  }
</style>
