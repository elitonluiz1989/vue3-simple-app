import { createStore } from 'vuex';

import { activities } from '@/store/modules/activities';
import { about } from '@/store/modules/about';
import { photos } from '@/store/modules/photos';
import { RootState } from './interfaces';

export default createStore<RootState>({
  modules: {
    activities,
    about,
    photos
  }
});