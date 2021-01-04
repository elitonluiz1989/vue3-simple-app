import { Module } from 'vuex';

import PhotosState from '@/entities/photos/PhotosState';
import RootState from '@/entities/RootState';

import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

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