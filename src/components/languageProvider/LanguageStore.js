/**
 * LanguageStore, store current language, language strings, and subscriptions to change
 *
 * ```javascript
 * const langStore = new LanguageStore('en', strings);
 * langStore.setLanguage('de');
 * langStore.subscribe(()=>{});
 * ```
 * @flow
 */
export default class LanguageStore {
  language: string;
  subscriptions: Array<Function>;
  strings: Object;
  constructor(language:string = 'en', strings:Object) {
    this.language = language;
    this.subscriptions = [];
    this.strings = strings;
  }
  /**
   * language setter
   */
  setLanguage = (language:string):void => {
    this.language = language;
    this.strings.setLanguage(language);
    this.subscriptions.forEach(f => f());
  }
  /**
   * add subscription
   */
  subscribe = (f:Function):void => {
    this.subscriptions.push(f);
  }
  /**
   *  unsubscribe
   */
  unsubscribe = (f:Function):void => {
    let index = this.subscriptions.indexOf(f);
    if (index > -1) {
      this.subscriptions.splice(index, 1);
    }
  }
}
