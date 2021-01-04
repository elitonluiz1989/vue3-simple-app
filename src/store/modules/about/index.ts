import { Module } from 'vuex';

import AboutState from '@/entities/about/AboutState';
import RootState from '@/entities/RootState';

import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const state: AboutState = {
  institutional: null,
  contacts: null
};

export const about: Module<AboutState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}