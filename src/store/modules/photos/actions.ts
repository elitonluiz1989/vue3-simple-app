import { ActionTree } from 'vuex';

import PhotosState from '@/entities/photos/PhotosState';
import RootState from '@/entities/RootState';

import { PhotosSevice as service }  from '@/services/photos';

export const actions: ActionTree<PhotosState, RootState> = {
  all({ commit }) {
    const photos = service.all();

    commit('setPhotos', photos);
  }
}