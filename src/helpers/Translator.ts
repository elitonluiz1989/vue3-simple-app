import { Indexable } from '@/types';

import en from '@/locales/en.json';
import ptBR from '@/locales/pt-BR.json';

export interface Locale {
  locale: string;
  content: object;
}

export default class Translator {
  static default = 'en';

  static locales: Locale[] = [
    {locale: 'en', content: en},
    {locale: 'pt-BR', content: ptBR},
  ];

  private static currentLocale: Locale;

  static set(locale: string) {
    const search = this.locales.filter(l => l.locale == locale);

    this.currentLocale = (search.length > 0) ? 
      search[0] : 
      this.locales.filter(l => l.locale == this.default)[0];
  }

  static get(): Locale {
    if (!this.currentLocale) {
      this.set(this.default);
    }

    return this.currentLocale;
  }

  static message(key: string): string {
    const locale = this.get();
    const messases = locale.content as Indexable;
    const keys = key.split('.');

    return this.contentIterator(messases, keys)
  }

  private static contentIterator(content: Indexable, keys: string[]): string {
    if (typeof content[keys[0]] == 'object' || content[keys[0]] instanceof Object) {
      const indexContent = content[keys[0]] as Indexable;
      const newKeys = keys.filter(k => k != keys[0]);
  
      return this.contentIterator(indexContent, newKeys);
    }
    
    return content[keys[0]];
  }
}