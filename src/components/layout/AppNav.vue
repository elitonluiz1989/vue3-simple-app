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
        to="/">Home</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppNav",

  setup() {
    const showMenu = ref(false);

    const navClass = computed(() => 
      showMenu.value ? 'nav_container nav--show' : 'nav_container nav--hide'
    );

    const navBtnOpenClass = computed(() => 
      showMenu.value ? 'nav_btn nav_btn--open invisible' : 'nav_btn nav_btn--open'
    );

    const toggleNav = () => (showMenu.value = !showMenu.value);

    return {
      navClass,
      navBtnOpenClass,
      toggleNav,
    }
  },
})
</script>
