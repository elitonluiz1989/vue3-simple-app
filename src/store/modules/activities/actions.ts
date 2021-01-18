import { ActionTree } from 'vuex';

import Activitie from '@/entities/activities/Activitie';
import ActivitiesState from '@/entities/activities/ActivitiesState';
import RootState from '@/entities/RootState';

import ActivitiesService from '@/services/activities';

const service = new ActivitiesService();

export const actions: ActionTree<ActivitiesState, RootState> = {
  all({ commit }) {
    const activities: Activitie[] = service.all();

    commit('setActivities', activities);
  },

  nextPage({ commit, state }) {
    commit('setPage', state.page + 1);

    const newActivities: Activitie[] = service.all(state.page);
    const activities = state.activities.concat(newActivities);
    
    commit('setActivities', activities);
  },

  nextActivitie({ commit }) {
    const nextActivitie: Activitie|null = service.nextActivitie();

    commit('setNextActivitie', nextActivitie);
  }
}