import { GetterTree } from 'vuex';

import { RootState } from '@/store/interfaces';
import { ActivitiesState } from "./interfaces";

export const getters: GetterTree<ActivitiesState, RootState> = {
  activites: (state) => state.activities,

  nextActivitie: (state) => state.nextActivitie
}