import { ActionTree } from 'vuex';

import { ActivitiesService as service }  from '@/services/activities';
import { RootState } from '@/store/interfaces';
import { ActivitiesState } from './interfaces';

import Activitie from '@/entities/activities/Activite';

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