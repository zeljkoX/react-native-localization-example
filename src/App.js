/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { initLanguages, LanguageProvider } from '@language';
import { languages } from '@config';
import Home from './components/home';

//initialize languages
const strings = initLanguages(languages);

export default class App extends Component {
  render() {
    return (
    <LanguageProvider 
      strings={strings}
      language="en">
      <Home/>
    </LanguageProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
