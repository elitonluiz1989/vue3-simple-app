import { MutationTree } from 'vuex';

import Activitie from '@/entities/activities/Activite';
import ActivitiesState from '@/entities/activities/ActivitiesState';

export const mutations: MutationTree<ActivitiesState> = {
  setActivities(state, payload: Activitie[]) {
    state.activities = payload;
  },

  setNextActivitie(state, payload: Activitie) {
    state.nextActivitie = payload;
  }
}