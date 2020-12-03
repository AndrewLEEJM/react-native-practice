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

export default class Practice extends React.Component {
  static navigationOptions = {
    title: 'Practice',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  navigate = () => {
    this.props.navigation.navigate('NewStack');
  };
  navigate2 = () => {
    this.props.navigation.navigate('NewStack2');
  };

  render() {
    return (
      <View>
        <View>
          <Text>하암 무엇을 해봐야 할까?</Text>
        </View>
        <TouchableOpacity onPress={this.navigate}>
          <View>
            <Text>NewStack으로 이동?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigate2}>
          <View>
            <Text>NewStack2으로 이동?</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
