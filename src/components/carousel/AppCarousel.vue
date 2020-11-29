<template>
  <div :class="styles.default">
    <app-carousel-arrow
      size="2x"
      direction="left"
      @arrow-click="previous()"
      v-show="showArrows"/>

<div class="flex-fill">
    <div
      :class="styles.container"
      ref="containerElement">        
        <slot />
    </div>

    <app-carousel-indicators
      limit="15"
      :quantity="numItems"
      :selected="selectedItem"
      @set-selected-item="setSelectedItem"
      v-show="showIndicators" />
      </div>
    
    <app-carousel-arrow
      size="2x"
      direction="right"
      @arrow-click="next()"
      v-show="showArrows"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import AppCarouselArrow from './AppCarouselArrow.vue';
import AppCarouselIndicators from './AppCarouselIndicators.vue';

export default defineComponent({
  components: { AppCarouselArrow, AppCarouselIndicators },
  name: 'AppCarousel',

  props: {
    showArrows: {
      type: Boolean,
      default: false,
    },

    showIndicators: {
      type: Boolean,
      default: false,
    },

    defaultSelected: {
      type: String,
      default: 'start'
    }
  },

  setup(props) {
    const styles = {
      default: 'carousel d-flex',
      container: [
        'carousel_container',
        'flex-fill',
        'position-relative'
      ]
    }
    const containerElement = ref<HTMLDivElement>();
    const selectedItem = ref(0);    
    const numItems = ref(0);
    let items: HTMLCollection;

    const setSelectedItem = (index: number): void => {
      items.item(selectedItem.value)?.classList.remove('carousel_item--active');
      items.item(index)?.classList.add('carousel_item--active');

      selectedItem.value = index;
    };

    const setDefaultSelected = () => {
      let defaultSelected = 0;

      if (props.defaultSelected === 'middle') {
        defaultSelected = Math.ceil(numItems.value / 2);
        defaultSelected -= 1;          
      }

      if (props.defaultSelected === 'end') { 
        defaultSelected = numItems.value - 1;
      }

      setSelectedItem(defaultSelected);
    }
    
    const previous = (): void => {
      let index = (selectedItem.value === 0) ? numItems.value: selectedItem.value;
      index = index - 1;

      setSelectedItem(index);
    }

    const next = (): void => {
      const index = (selectedItem.value === (numItems.value - 1)) ? 0: selectedItem.value + 1;

      setSelectedItem(index);
    };

    // Live-cicle events
    onMounted(() => {
      if (containerElement.value !== undefined) {
        items = containerElement.value.children;
        numItems.value = items.length;

        setDefaultSelected();
      }
    });

    return {
      // Settings
      styles,
      // Refs
      containerElement,
      // General vars
      numItems,
      selectedItem,
      // methods
      setSelectedItem,
      previous,
      next
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/carousel";

  .carousel {
    background-color: whitesmoke;

    &_container {
      height: $carousel-container-height;
      margin: 0;
      padding: 0.9rem 0;
      overflow: hidden;
    }

    &_indicators {
      margin-top: -0.9rem;
    }
  }
</style>