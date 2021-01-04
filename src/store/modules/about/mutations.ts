import { MutationTree } from 'vuex';

import AboutState from '@/entities/about/AboutState';
import Contacts from '@/entities/about/Contacts';
import Institutional from '@/entities/about/Institutional';

export const mutations: MutationTree<AboutState> = {
  setInstitutionalContent(state, payload: Institutional) {
    state.institutional = payload;
  },

  setContacts(state, payload: Contacts) {
    state.contacts = payload;
  }
}