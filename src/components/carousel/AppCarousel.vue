<template>
  <div :class="styles.default">
    <app-carousel-arrow
      :size="icons.size"
      direction="left"
      @arrow-click="previous()"
      v-show="showArrows"/>

    <div class="flex-fill">
      <div
        :class="containerStyles"
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
      :size="icons.size"
      direction="right"
      @arrow-click="next()"
      v-show="showArrows"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref} from 'vue';
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

    autoplay: {
      type: Boolean,
      default: false
    },

    autoplaySpeed: {
      type: Number,
      default: 5
    },

    defaultSelected: {
      type: String,
      default: 'start'
    }
  },

  setup(props) {
    const styles = {
      default: [
        'carousel',
        'd-flex'
      ],
      container: {
        default: [
          'carousel_container',
          'w-100'
        ],
        hasIndicators: 'carousel_container--has-indicators'
      }
    };
    const icons = {
      size: '2x'
    };
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

      if (props.autoplay) {
        setInterval(() => {
          next();
        }, props.autoplaySpeed * 1000);
      }
    });

    // Computed
    const containerStyles = computed((): string[] => {
      return props.showIndicators ? 
        [styles.container.hasIndicators, ...styles.container.default] :
        styles.container.default;
    });

    return {
      // Settings
      styles,
      icons,
      // Refs
      containerElement,
      // General vars
      numItems,
      selectedItem,
      // methods
      setSelectedItem,
      previous,
      next,
      // computed
      containerStyles
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

      &--has-indicators {
        padding-bottom: 0;
      }
    }
  }
</style>