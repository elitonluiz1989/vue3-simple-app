import { Module } from 'vuex';

import ActivitiesState from '@/entities/activities/ActivitiesState';
import RootState from '@/entities/RootState';

import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

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