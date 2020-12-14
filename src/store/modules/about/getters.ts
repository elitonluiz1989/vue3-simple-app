import { GetterTree } from 'vuex';

import { RootState } from '@/store/interfaces';
import { AboutState } from "./interfaces";

export const getters: GetterTree<AboutState, RootState> = {
  institutional: (state) => state.institutional
}