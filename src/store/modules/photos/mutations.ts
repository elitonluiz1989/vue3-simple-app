import { MutationTree } from 'vuex';

import Photos from '@/entities/Photos';
import PhotosState from '@/entities/photos/PhotosState';

export const mutations: MutationTree<PhotosState> = {
  setPhotos(state, payload: Photos[]) {
    state.photos = payload;
  }
}