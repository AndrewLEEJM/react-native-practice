import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

import {colors} from '../theme';

export default class AddCity extends Component {
  state = {
    city: '',
    country: '',
  };

  onChangeText = (key, value) => {
    this.setState({[key]: value});
  };

  submit = () => {
    if (this.state.city === '' || this.state.country === '') {
      alert('Please complete form.');
      return;
    }

    const city = {
      city: this.state.city,
      country: this.state.country,
      id: uuidV4(),
      locations: [],
    };
    this.props.screenProps.addCity(city);
    this.setState(
      {
        city: '',
        country: '',
      },
      () => {
        this.props.navigation.navigate('Cities');
      },
    );
  };
  clearAsyncStorage = () => {
    this.props.screenProps.clearAsyncStorage();
    this.setState(() => {
      this.props.navigation.navigate('Cities');
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          placeholder="City Name"
          onChangeText={(val) => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
        />
        <TextInput
          placeholder="Country Name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clearAsyncStorage}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Clear City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});
