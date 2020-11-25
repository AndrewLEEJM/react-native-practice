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
  constructor() {
    super();
    this.state = {
      book: '리액트 배우기',
    };
  }
  updateBook() {
    this.setState({
      book: '리액트 입문자',
    });
  }
  render() {
    return (
      <BookDisplay
        updateBook={() => this.updateBook()}
        book={this.state.book}
      />
    );
  }
}

class BookDisplay extends Component {
  render() {
    return (
      <View>
        <Text onPress={this.props.updateBook}>{this.props.book}</Text>
      </View>
    );
  }
}

export default App;
