import { GetterTree } from 'vuex';

import ActivitiesState from '@/entities/activities/ActivitiesState';
import RootState from '@/entities/RootState';

export const getters: GetterTree<ActivitiesState, RootState> = {
  all: (state) => state.activities,

  nextActivitie: (state) => state.nextActivitie
}