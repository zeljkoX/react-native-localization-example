/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Intro from './intro';
import LanguageSwitch from './languageSwitch';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Intro/>
        <LanguageSwitch/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
