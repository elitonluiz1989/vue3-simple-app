<template>
  <div class="home container-fluid">
    <app-carousel show-arrows show-indicators defaultSelected="middle">
      <app-carousel-item v-for="(photo, index) in photos" :key="index">
        <img class="w-100 h-auto" :src="photo.src" :alt="photo.description">
      </app-carousel-item>
    </app-carousel>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

import AppCarousel from '@/components/carousel/AppCarousel.vue';
import AppCarouselItem from '@/components/carousel/AppCarouselItem.vue';
import Photos from '@/entities/Photos';

export default defineComponent({
  name: "HomeScreen",
  
  components: {
    AppCarousel,
    AppCarouselItem
  },

  setup() {
    const store = useStore();

    onMounted((): void => {
      store.dispatch('photos/all');
    });

    //computed
    const photos: ComputedRef<Photos[]> = computed(() => store.getters['photos/all']);

    return {
      photos
    }
  }
});
</script>