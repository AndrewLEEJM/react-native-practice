import React, {Component} from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  TouchableHighlight,
} from 'react-native';

const userImage = require('./user.png');

const data = [
  {
    image: userImage,
    name: 'JaeMin Lee',
    occupation: 'React Native Developer',
    description:
      'JaeMin is a really great javaScript developer. he loves using JS to bulid React Native applications for IOS and Android',
    showThumbnail: true,
  },
];

const ProfileCard = (props) => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;

    this.setState({
      data: update(this.state.data, {
        [index]: {showThumbnail: {$set: showThumbnail}},
      }),
    });
  };

  render() {
    const list = this.state.data.map(function (item, index) {
      const {image, name, occupation, description, showThumbnail} = item;
      return (
        <ProfileCard
          key={'card-' + index}
          image={image}
          name={name}
          occupation={occupation}
          description={description}
          onPress={this.handleProfileCardPress.bind(this, index)}
          showThumbnail={showThumbnail}
        />
      );
    }, this);

    return <View style={styles.container}>{list}</View>;
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
  cardThumbnail: {
    transform: [{scale: 0.2}],
  },
});
