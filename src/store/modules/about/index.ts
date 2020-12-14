import { Module } from 'vuex';

import { AboutState } from './interfaces';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { RootState } from '@/store/interfaces';

const state: AboutState = {
  institutional: null
}

export const about: Module<AboutState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}