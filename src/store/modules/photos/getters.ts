import { GetterTree } from 'vuex';

import PhotosState from '@/entities/photos/PhotosState';
import RootState from '@/entities/RootState';

export const getters: GetterTree<PhotosState, RootState> = {
  all: (state) => state.photos
}