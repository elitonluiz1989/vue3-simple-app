<template>
    <button
      :class="styles.default"
      @click="click()">
      <font-awesome-icon
        :icon="icon"
        :size="size"
        :key="icon" />
    </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCarouselArrow',

  props: {
    type: {
      type: String,
      default: 'angle'
    },

    direction: {
      type: String,
      required: true,
    },
    
    size: {
      type: String,
      default: null
    },
  },

  setup(props, { emit }) {
    const styles = {
      default: 'carousel_arrow',
    };

    const click = () => {
      emit('arrow-click');
    }

    const icon = computed(() => `${props.type}-${props.direction}`);

    return {
      // settings
      styles,
      // computed
      icon,
      // methods
      click
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/carousel";

  .carousel_arrow {
    width: 1.8rem;
    height: $carousel-container-height;
    align-self: center;
    color: #444;

    @extend .carousel_btn;
  }
</style>