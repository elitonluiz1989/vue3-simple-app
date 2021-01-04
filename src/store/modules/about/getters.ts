import { GetterTree } from 'vuex';

import AboutState from '@/entities/about/AboutState';
import Contacts from '@/entities/about/Contacts';
import Institutional from '@/entities/about/Institutional';
import RootState from '@/entities/RootState';

export const getters: GetterTree<AboutState, RootState> = {
  institutional: (state): Institutional|null => state.institutional,
  contacts: (state): Contacts|null => state.contacts
}