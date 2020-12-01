import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <View style={[styles.flexContainer]}>
            <Example style={[styles.darkgrey]}>A 50%</Example>
            <Example style={{flex: 1}}>B 50%</Example>
          </View>
          <View style={[styles.flexContainer]}>
            <Example style={[styles.darkgrey]}>C 33%</Example>
            <Example style={{flex: 2}}>D 66%</Example>
          </View>
          <View style={[styles.flexContainer]}>
            <Example style={[styles.darkgrey]}>E 25%</Example>
            <Example style={{flex: 3}}>F 75%</Example>
          </View>
        </View>
        <View style={styles.container}>
          <View style={([styles.flexContainer], {flexDirection: 'row'})}>
            <Example style={[styles.darkgrey]}>A 50%</Example>
            <Example style={{flex: 1}}>B 50%</Example>
          </View>
          <View style={([styles.flexContainer], {flexDirection: 'row'})}>
            <Example style={[styles.darkgrey]}>C 33%</Example>
            <Example style={{flex: 2}}>D 66%</Example>
          </View>
          <View style={([styles.flexContainer], {flexDirection: 'row'})}>
            <Example style={[styles.darkgrey]}>E 25%</Example>
            <Example style={{flex: 3}}>F 75%</Example>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    <Text>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    alignItems: 'center',
  },
  example: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    width: 150,
    height: 150,
    marginTop: 20,
    flexDirection: 'row',
  },
  darkgrey: {
    backgroundColor: 'darkgrey',
    flex: 1,
  },
});

export default App;
