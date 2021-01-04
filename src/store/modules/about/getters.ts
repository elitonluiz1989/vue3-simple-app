import { GetterTree } from 'vuex';

import AboutState from '@/entities/about/AboutState';
import Institutional from '@/entities/about/Institutional';
import RootState from '@/entities/RootState';

export const getters: GetterTree<AboutState, RootState> = {
  institutional: (state): Institutional|null => state.institutional,
}