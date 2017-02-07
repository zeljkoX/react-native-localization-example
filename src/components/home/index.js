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

export class Home extends Component {
  render() {
    let { strings, language } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.welcome}
        </Text>
        <Text style={styles.instructions}>
          {strings.change}
        </Text>
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

export default connect(Home);

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
  changeLanguage: {
    marginTop: 40,
    alignItems: 'center'
  },
  button: {
    color: 'blue'
  }
});
