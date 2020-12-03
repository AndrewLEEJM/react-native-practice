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
export default class NewStack extends React.Component {
  static navigationOptions = {
    title: 'NewStack',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  navigate = () => {
    this.props.navigation.navigate('NewStack2');
  };

  render() {
    return (
      <View>
        <View>
          <Text>NewStack</Text>
        </View>
        <TouchableOpacity onPress={this.navigate}>
          <View>
            <Text>NewStack2로 이동</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
