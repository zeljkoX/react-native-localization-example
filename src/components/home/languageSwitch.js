/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from '@language';

export class LanguageSwitch extends Component {
  render() {
    let { strings, language } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.changeLanguage}>
          <Text>{strings.changeLanguage}</Text>
          <TouchableOpacity
            onPress={() => language.setLanguage('en')}>
            <Text style={styles.button}>{strings.english}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => language.setLanguage('de')}>
            <Text style={styles.button}>{strings.deutsch}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(LanguageSwitch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  changeLanguage: {
    marginTop: 40,
    alignItems: 'center'
  },
  button: {
    color: 'blue'
  }
});
