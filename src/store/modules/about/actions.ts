import { ActionTree } from 'vuex';

import { AboutService as service }  from '@/services/about';
import { RootState } from '@/store/interfaces';
import { AboutState } from './interfaces';

import Institutional from '@/entities/about/Institutional';
import InstitutionalWritten from '@/entities/about/InstitutionalWritten';
import { useLocalizedDate } from '@/hooks/useTranslator';

export const actions: ActionTree<AboutState, RootState> = {
  intitutionalContent({ commit }) {
    let content = service.getInstitutionalContent();

    const [date, time] = content.createdAt.split(' ');

    const writtenData: InstitutionalWritten = {
      date: useLocalizedDate(date),
      time: time
    }

    content = Object.assign({ written: writtenData }, content);
    
    const institutionalContent: Institutional = content;

    commit('setInstitutionalContent', institutionalContent);
  }
}