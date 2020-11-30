import { createStore } from 'vuex';

import {photos} from '@/store/modules/photos';
import { RootState } from './interfaces';

export default createStore<RootState>({
  modules: {
    photos
  }
});