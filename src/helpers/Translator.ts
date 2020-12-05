import { Indexable } from '@/types';

export interface TranslatorLocale {
  locale: string;
  content: object;
}

export default class Translator {
  static default = 'en';

  private static locales: TranslatorLocale[];

  private static currentLocale: TranslatorLocale;

  static setLocales(locales: TranslatorLocale[]) {
    this.locales = locales;
  }

  static setLocale(locale: string) {
    if (this.locales) {
      const search = this.locales.filter(l => l.locale == locale);

      this.currentLocale = (search.length > 0) ? 
        search[0] : 
        this.locales.filter(l => l.locale == this.default)[0];
    }
  }

  static getLocale(): TranslatorLocale {
    if (!this.currentLocale) {
      this.setLocale(this.default);
    }

    return this.currentLocale;
  }

  static text(key: string, replacements: object = {}): string {
    const locale = this.getLocale();
    let returnedText = `{${key}}`;

    if (locale) {
      const messases = locale.content as Indexable;
      const keys = key.split('.');
      const message: string =  this.contentIterator(messases, keys);

      if (message) {
        returnedText = message;

        if (Object.keys(replacements).length > 0) {
          let replacement = null;

          for (const [key, value] of Object.entries(replacements)) {
            replacement = new RegExp(`:${key}`, 'g');
            returnedText = returnedText.replaceAll(replacement, value);
          }
        }
      }
    }

    return returnedText;
  }

  static date(date: string) {
    return new Date(date + ' 00:00:00').toLocaleDateString();
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