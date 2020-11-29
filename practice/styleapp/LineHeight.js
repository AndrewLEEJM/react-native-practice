import React, {Component} from 'react';
import {Platform, View, StyleSheet, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextContainer>
          <LeftText>Text A</LeftText>
        </TextContainer>
        <TextContainer>
          <LeftText style={{lineHeight: 100}}>Text B</LeftText>
        </TextContainer>
        <TextContainer>
          <LeftText>Text C</LeftText>
        </TextContainer>
        <TextContainer>
          <LeftText>{Platform.OS}</LeftText>
        </TextContainer>
      </View>
    );
  }
}

const TextContainer = (props) => (
  <View style={[styles.textContainer, props.style]}>{props.children}</View>
);

const LeftText = (props) => (
  <Text style={[styles.leftText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
  },
  textContainer: {
    borderWidth: 1,
  },
  leftText: {
    fontSize: 20,
  },
});
