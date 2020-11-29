import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')} />
          </View>
          <View>
            <Text style={styles.cardName}>JaeMin Lee</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              JaeMin is a really great javaScript developer. he loves using JS
              to bulid React Native applications for IOS and Android
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 2,
  },
  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  cardName: {
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, heightSSSt: 2},
    textShadowRadius: 8,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
    // textDecorationColor: 'red', IOS만 적용
    // textDecorationStyle: 'double', IOS만 적용
    letterSpacing: 5, //글자 사이 간격
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});
