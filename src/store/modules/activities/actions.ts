import { ActionTree } from 'vuex';

import { ActivitiesService as service }  from '@/services/activities';

import Activitie from '@/entities/activities/Activite';
import ActivitiesState from '@/entities/activities/ActivitiesState';
import RootState from '@/entities/RootState';

export const actions: ActionTree<ActivitiesState, RootState> = {
  all({ commit }) {
    const activities: Activitie[] = service.all();

    commit('setActivities', activities);
  },

  nextActivitie({ commit }) {
    const nextActivitie: Activitie|null = service.getNext();

    commit('setNextActivitie', nextActivitie);
  }
}