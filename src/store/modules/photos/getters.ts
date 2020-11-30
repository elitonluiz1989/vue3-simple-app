import { GetterTree } from 'vuex';

import { RootState } from '@/store/interfaces';
import { PhotosState } from "./interfaces";

export const getters: GetterTree<PhotosState, RootState> = {
  all: (state) => state.photos
}