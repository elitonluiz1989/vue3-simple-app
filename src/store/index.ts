import { createStore } from 'vuex';

import RootState from '@/entities/RootState';

import { activities } from '@/store/modules/activities';
import { about } from '@/store/modules/about';
import { photos } from '@/store/modules/photos';

export default createStore<RootState>({
  modules: {
    activities,
    about,
    photos
  }
});