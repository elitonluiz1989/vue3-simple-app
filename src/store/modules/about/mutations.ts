import { MutationTree } from 'vuex';

import { AboutState } from './interfaces';

export const mutations: MutationTree<AboutState> = {
  setInstitutionalContent(state, payload: any) {
    state.institutional = payload;
  }
}