<template>
  <div :class="styles.default">
    <div :class="styles.content">      
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCarouselItem',

  setup() {
    const styles = {
      default: [
        'carousel_item', 
        'd-flex',
        'justify-content-center',
        'align-items-center', 
        'overflow-hidden'
      ],
      content: [
        'carousel_item-content',
        'w-100'
      ]
    };

    return {
      styles
    }
  }
})
</script>

<style lang="scss" scoped>
  .carousel_item {
    $self: &;
    width: 0;
    height: 0;

    &-content {
      opacity: 0;
      transition: opacity .25s;
    }

    &--active {
      width: 100%;
      height: 100%;

      & #{$self}-content {
        opacity: 1;
      }
    }
  }
</style>