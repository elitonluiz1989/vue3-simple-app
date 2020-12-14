<template>
  <div class="home container-fluid">
    <app-carousel
      show-arrows
      show-indicators
      autoplay
      autoplaySpeed="10"
      defaultSelected="middle">
      <app-carousel-item v-for="(photo, index) in photos" :key="index">
        <img class="w-100 h-auto" :src="photo.src" :alt="photo.description">
      </app-carousel-item>
    </app-carousel>

    <app-article
      :title="institutionalContent.title"
      :written-info="writtenInfo"
      v-if="hasInstitutionalContent">
      {{ institutionalContent.content }}
    </app-article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

import AppCarousel from '@/components/carousel/AppCarousel.vue';
import AppCarouselItem from '@/components/carousel/AppCarouselItem.vue';
import AppArticle from '@/components/article/AppArticle.vue';
import Institutional from '@/entities/about/Institutional';
import Photos from '@/entities/Photos';
import { WrittenInfo } from '@/components/article/interfaces';

export default defineComponent({
  name: "HomeScreen",
  
  components: {
    AppCarousel,
    AppCarouselItem,
    AppArticle
  },

  setup() {
    const store = useStore();

    onMounted((): void => {
      store.dispatch('about/intitutionalContent');
      store.dispatch('photos/all');
    });

    //computed
    const photos = computed((): Photos[] => store.getters['photos/all']);
    const institutionalContent = computed((): Institutional => store.getters['about/institutional']);
    const hasInstitutionalContent = computed(() => institutionalContent.value !== null);
    const writtenInfo = computed((): WrittenInfo|undefined => {
      if (hasInstitutionalContent.value) {
        return {
          author: institutionalContent.value.author ?? '',
          date: institutionalContent.value.written?.date ?? '',
          time: institutionalContent.value.written?.time ?? '' ,
        };
      }
    });

    return {
      photos,
      institutionalContent,
      hasInstitutionalContent,
      writtenInfo
    }
  }
});
</script>