/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Platform,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 18, color: 'lightgreen'}}>안녕하십니까?</Text>
      </View>
    );
  }
}

export default App;
