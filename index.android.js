/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class runParallel extends Component {
  counter1 () {
    let b=0;
    for (let a = 0; a < 1000000000; a++) {
          b = b+1;
    }
    return b;
  }
  counter2 () {
      let b=0;
      for (let a = 0; a < 1000000000; a++) {
          b = b+1;
      }
      return b;
  }/*
  tryParallel(){
      const p = Parallel([1,2,3,4,5]);
      console.log('p.data');
      console.log(p.data);
  }m*/
  runBoth(){
	  this.counter1();
	  this.counter2();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View>
          <TouchableOpacity style={styles.runButton} onPress={() => this.runBoth() }>
            <Text style={styles.buttonText}>Run</Text>
          </TouchableOpacity>
        </View>
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
    runButton: {
        borderRadius: 10,
        backgroundColor: '#0ac3cc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        margin: 30
    },
});

AppRegistry.registerComponent('runParallel', () => runParallel);
