<template>
  <div :class="styles.default" v-if="showIndicators">
    <button
      :class="indicatorItemStyles(index - 1)"
      v-for="index in quantity"
      :key="index"
      @click="indicatorClick(index - 1)">
      <font-awesome-icon
        :icon="icons.indicator"
        :key="icons.indicator" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCarousel',

  props: {
    limit: {
      type: Number,
      default: 10,
    },

    quantity: {
      type: Number,
      default: 0
    },

    selected: {
      type: Number,
      default: 0
    }
  },

  setup(props, { emit }) {    
    const icons = {
      indicator: 'circle'
    }
    const styles = {
      default: [
        'carousel_indicators',
        'd-flex',
        'justify-content-center',
        'w-100'
      ],
      item: {
        default: [
          'carousel_indicators-item',
          'h-100'
        ],
        selected: 'carousel_indicators-item--selected',
      }
    };

    const indicatorItemStyles = (index: number): string|Array<string> => {
      return (index === props.selected) ?
        [styles.item.selected, ...styles.item.default] :
        styles.item.default
    }

    const indicatorClick = (index: number): void => emit('set-selected-item', index);

    const showIndicators = computed(() => props.quantity <= props.limit);

    return {
      // settings
      icons,
      styles,
      // Computed methods
      showIndicators,
      // methods
      indicatorItemStyles,
      indicatorClick
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/carousel";

  .carousel_indicators {
    height: 1.5rem;
    align-items: center;
    margin: 0;

    &-item {
      width: 1rem;
      color: #888;
      font-size: 0.5rem;

      @extend .carousel_btn;
    }

    &-item--selected {
      color: #555;
      font-size: 0.65rem;
    }
  }
</style>