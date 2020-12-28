import { Module } from 'vuex';

import { ActivitiesState } from './interfaces';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { RootState } from '@/store/interfaces';

const state: ActivitiesState = {
  activities: [],
  nextActivitie: undefined
}

export const activities: Module<ActivitiesState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}