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
import hamsters from 'hamsters.js';

export default class runParallel extends Component {
    initHamsters(){
        let startOptions = {
            maxThreads: 1,
        };
        hamsters.init(startOptions);
        let params = {
            array: [1,2,3,4,5,6,7,8,9,10],
            animal: 'Hamster',
        };
        hamsters.run(params, function() {
            if(params.animal === 'Hamster') {
                rtn.data.push('Hamsters are awesome');
            }
        }, function(result) {
            console.log(result);
        });
    }
  counter1 () {
    let b=0;
    for (let a = 0; a < 1000000000; a++) {
          b = b+1;
    }
      console.log(b);
      return b;
  };
  counter2 () {
      let b=0;
      for (let a = 0; a < 1000000000; a++) {
          b = b+1;
      }
      console.log(b);
      return b;
  };
  runBoth(){
	  this.counter1();
	  this.counter2();
	  this.initHamsters();
  };
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.runButton} onPress={() => this.runBoth() }>
              <Text style={styles.buttonText}>Run</Text>
          </TouchableOpacity>
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
