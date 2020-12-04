import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TextInput,
} from 'react-native';

export default class FocusAnimations extends Component {
  animatedWidth = new Animated.Value(200);

  animate = (value) => {
    Animated.timing(this.animatedWidth, {
      toValue: value,
      duration: 750,
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{width: this.animatedWidth}}>
          <TextInput
            style={[styles.input]}
            onBlur={() => this.animate(200)}
            onFocus={() => this.animate(325)}
            ref={(input) => input}
          />
        </Animated.View>
        <Button title="Submit" onPress={() => this.input.blur()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
  },
});
