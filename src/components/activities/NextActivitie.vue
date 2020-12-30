<template>
  <div class="next-activitie d-flex flex-column">
    <div class="next-activitie_message text-white">{{ useLocalizedText('activities.next.title') }}</div>

    <router-link :to="route">
      <div class="next-activitie_content d-flex flex-fill">
        <div class="next-activitie_calendar">      
          <div class="next-activitie_time text-center text-white">{{ calendar.time.raw }}</div>
        </div>

        <div class="next-activitie_info flex-fill">      
          <div class="next-activitie_location text-center">{{ location }}</div>

          <div class="next-activitie_separator"></div>

          <div class="next-activitie_description text-center">{{ description }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ActivitieCalendar from '@/entities/activities/ActivitieCalendar';
import { useLocalizedText } from '@/hooks/useTranslator';

export default defineComponent({
  name: 'NextActivitie',

  props: {
    route: {
      type: String,
      default: '/'
    },

    location: {
      type: String
    },

    description: {
      type: String
    },

    calendar: {
      type: Object as () => ActivitieCalendar
    }
  },

  setup() {
    return {
      useLocalizedText
    }
  }
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  $background-color: darken($primary-color, 12);

  .next-activitie {
    margin-bottom: 1rem;
    background-color: $background-color;
    border-radius: 0.5rem;
    font-size: 0.8rem;

    &_message {
      width: 100%;
      padding: 0.15rem 0.5rem;
      border-bottom: 1px dashed $primary-color;
      font-style: italic;
    }

    &_content {      
      padding: 0.25rem 0.5rem;
    }

    &_calendar {
      margin: auto 0.5rem auto 0;
      width: 20%;
    }

    &_time {
      padding: 0.25rem 0;
      background-color: $third-color;
      border-radius: 0.25rem;
    }

    &_info {
      margin: 0.3rem 0;
      background-color: $lightest-color;
      border-radius: 0.25rem;
      color: $font-color-default;
    }

    &_separator {
      width: 65%;
      height: 1px;
      margin: 0 auto;
      background-color: $third-color;
    }
  }
</style>