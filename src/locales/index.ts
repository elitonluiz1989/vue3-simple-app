import Translator, { TranslatorLocale } from "@/helpers/Translator";

import en from '@/locales/en.json';
import ptBR from '@/locales/pt-BR.json';

const locales: TranslatorLocale[] = [
  {locale: 'en', content: en},
  {locale: 'pt-BR', content: ptBR},
]

Translator.setLocales(locales);

Translator.setLocale(window.navigator.language);
