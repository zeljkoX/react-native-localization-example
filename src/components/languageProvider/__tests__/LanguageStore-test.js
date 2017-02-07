import { View } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import LanguageStore from '../LanguageStore.js';

it('works correctly', () => {
  const strings = {
    setLanguage: jest.fn()
  };

  const languageStore = new LanguageStore('en', strings);

  expect(languageStore.subscriptions.length).toEqual(0);
  expect(languageStore.strings).toEqual(strings);
  expect(languageStore.language).toEqual('en');

  const subscriber1 = jest.fn();
  const subscriber2 = jest.fn();

  languageStore.subscribe(subscriber1);
  languageStore.subscribe(subscriber2);

  expect(languageStore.subscriptions.length).toEqual(2);

  languageStore.setLanguage('de');
  
  expect(languageStore.language).toEqual('de');
  expect(strings.setLanguage).toHaveBeenCalled();
  expect(subscriber1).toHaveBeenCalled();
  expect(subscriber2).toHaveBeenCalled();

  languageStore.unsubscribe(subscriber1);
  expect(languageStore.subscriptions.length).toEqual(1);



});
