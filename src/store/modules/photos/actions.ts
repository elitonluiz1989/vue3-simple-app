import { ActionTree } from 'vuex';

import { PhotosSevice as service }  from '@/services/photos';
import { RootState } from '@/store/interfaces';
import { PhotosState } from './interfaces';

export const actions: ActionTree<PhotosState, RootState> = {
  all({ commit }) {
    const photos = service.all();

    commit('setPhotos', photos);
  }
}