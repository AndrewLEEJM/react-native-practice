import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bool: true,
    };
    this.setingMethod = this.setingMethod.bind(this);
  }

  setingMethod() {
    let {bool} = this.state;
    bool = !bool;
    console.log(!bool);

    this.setState({bool});
  }

  render() {
    if (this.state.bool) {
      return (
        <TouchableHighlight
          onPress={this.setingMethod}
          style={{backgroundColor: 'red'}}>
          <View style={[styles.container, {transform: [{scale: 0.2}]}]}>
            <Comm />
          </View>
        </TouchableHighlight>
      );
    }
    return (
      <TouchableHighlight
        onPress={this.setingMethod}
        style={{backgroundColor: 'red'}}>
        <View style={styles.container}>
          <Comm />
        </View>
      </TouchableHighlight>
    );
  }
}

const Comm = () => (
  <FlexContainer>
    <Example align="auto">auto</Example>
    <Example align="stretch">stretch</Example>
    <Example align="center">center</Example>
    <Example align="flex-start">flex-start</Example>
    <Example align="flex-end">flex-end</Example>
    <Example>default</Example>
  </FlexContainer>
);

const FlexContainer = (props) => (
  <View style={[styles.flexContainer, props.style]}>{props.children}</View>
);

const Example = (props) => (
  <View
    style={[
      styles.example,
      props.style,
      styles.lightgrey,
      {alignSelf: props.align || 'auto'},
    ]}>
    <Text>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1,
  },
  example: {
    height: 25,
    marginBottom: 5,
    backgroundColor: '#666666',
  },
  flexContainer: {
    backgroundColor: '#ededed',
    width: 120,
    height: 180,
    borderWidth: 1,
    margin: 10,
  },
  darkgrey: {
    backgroundColor: 'darkgrey',
    flex: 1,
  },
});

export default App;
