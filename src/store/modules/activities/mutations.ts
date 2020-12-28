import Activitie from '@/entities/activities/Activite';
import { MutationTree } from 'vuex';

import { ActivitiesState } from './interfaces';

export const mutations: MutationTree<ActivitiesState> = {
  setActivities(state, payload: Activitie[]) {
    state.activities = payload;
  },

  setNextActivitie(state, payload: Activitie) {
    state.nextActivitie = payload;
  }
}