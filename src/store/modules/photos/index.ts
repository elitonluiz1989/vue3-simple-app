import { createStore, Module } from 'vuex';

import { PhotosState } from './interfaces';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { RootState } from '@/store/interfaces';

const state: PhotosState = {
  photos: []
}

export const photos: Module<PhotosState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}