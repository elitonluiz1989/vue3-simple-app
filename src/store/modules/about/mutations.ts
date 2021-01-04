import { MutationTree } from 'vuex';

import AboutState from '@/entities/about/AboutState';
import Institutional from '@/entities/about/Institutional';

export const mutations: MutationTree<AboutState> = {
  setInstitutionalContent(state, payload: Institutional) {
    state.institutional = payload;
  }
}