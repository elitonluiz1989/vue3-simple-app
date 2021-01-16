<template>
  <div class="activities screen">
    <app-screen-title
      class="activities_section"
      :title="templateTexts.title" />

    <div class="container-fluid">
      <div class="row justify-content-center" v-if="hasActivities">
        <div
          class="col-10"
          v-for="(activitie, key) in activities" :key="key">
          <activitie
            :location="activitie.location"
            :description="activitie.description"
            :calendar="activitie.calendar" />
        </div>
      </div>
    </div>

    <p class="text-center pt-2 pb-2" v-if="!hasActivities">
      {{ templateTexts.empty }}
    </p>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted } from 'vue';
  import { useStore } from 'vuex';

  import ActivitieComponent from '@/components/activities/Activitie.vue';
  import AppScreenTitle from '@/components/layout/AppScreenTitle.vue';

  import Activitie from '@/entities/activities/Activitie';

  import { useLocalizedText } from '@/hooks/useTranslator';

  export default defineComponent({
    name: "ActivitiesScreen",
    
    components: { AppScreenTitle, Activitie: ActivitieComponent },

    setup() {
      const templateTexts = {
        title: useLocalizedText('activities.title'),
        empty: useLocalizedText('activities.empty')
      };
      const store = useStore();

      onMounted((): void => {
        store.dispatch('activities/all');
      });

      //computed
      const activities = computed((): Activitie[] => store.getters['activities/all']);
      const hasActivities = computed(() => activities.value !== undefined && activities.value.length > 0);

      return {
        templateTexts,
        activities,
        hasActivities
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  .activities {
    background-color: $lightest-color;
  }
</style>