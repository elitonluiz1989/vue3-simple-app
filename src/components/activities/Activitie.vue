<template>
  <div class="activitie">
    <div class="activitie_calendar w-100">      
      <div class="activitie_time text-center text-white">
        <span class="capitalize-first-letter">{{ handleWeekDay(calendar.time.converted) }}</span>
      </div>
    </div>
    <div class="w-100 d-flex">
      <div class="activitie_calendar w-25">      
        <div class="activitie_time text-center text-white">{{ calendar.time.raw }}</div>
      </div>

      <div class="activitie_info w-75">      
        <div class="activitie_location text-center w-100">{{ location }}</div>

        <div class="activitie_separator w-75"></div>

        <div class="activitie_description text-center w-100">{{ description }}</div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ActivitieCalendar from '@/entities/activities/ActivitieCalendar';

import Translator from '@/helpers/Translator';

import { useLocalizedText } from '@/hooks/useTranslator';

export default defineComponent({
  name: 'Activitie',

  props: {
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
    const handleWeekDay = (date: Date): string => {
      let weekDay = '';
      if (date) {
        const locale = Translator.getLocale();

        weekDay = date.toLocaleString(locale.locale, { weekday: 'long' });
      }

      return weekDay;
    }

    return {
      useLocalizedText,
      handleWeekDay
    }
  }
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  .activitie {
    border: 1px solid $third-color;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;

    &_calendar {
      margin: auto 0.5rem auto 0;
    }

    &_time {
      padding: 0.25rem 0;
      background-color: $third-color;
      border-radius: 0.25rem;
    }

    &_separator {
      height: 1px;
      margin: 0 auto;
      background-color: $third-color;
    }
  }
</style>