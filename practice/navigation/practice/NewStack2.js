import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class NewStack2 extends React.Component {
  static navigationOptions = {
    title: 'NewStack',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  render() {
    return (
      <View>
        <TouchableOpacity>
          <View>
            <Text>NewStack2</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
