import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import getStyleSheet from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme: 'PURPLE',
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.autoChange = this.autoChange.bind(this);
    this.autoChange();
  }
  autoChange() {
    setInterval(() => {
      let result = '';
      if (this.state.darkTheme === 'RED') {
        result = 'ORANGE';
      } else if (this.state.darkTheme === 'ORANGE') {
        result = 'YELLOW';
      } else if (this.state.darkTheme === 'YELLOW') {
        result = 'GREEN';
      } else if (this.state.darkTheme === 'GREEN') {
        result = 'BLUE';
      } else if (this.state.darkTheme === 'BLUE') {
        result = 'NAVY';
      } else if (this.state.darkTheme === 'NAVY') {
        result = 'PURPLE';
      } else if (this.state.darkTheme === 'PURPLE') {
        result = 'RED';
      }
      this.setState({darkTheme: result});
    }, 1000);
  }
  toggleTheme() {
    let result = '';
    if (this.state.darkTheme === 'RED') {
      result = 'ORANGE';
    } else if (this.state.darkTheme === 'ORANGE') {
      result = 'YELLOW';
    } else if (this.state.darkTheme === 'YELLOW') {
      result = 'GREEN';
    } else if (this.state.darkTheme === 'GREEN') {
      result = 'BLUE';
    } else if (this.state.darkTheme === 'BLUE') {
      result = 'NAVY';
    } else if (this.state.darkTheme === 'NAVY') {
      result = 'PURPLE';
    } else if (this.state.darkTheme === 'PURPLE') {
      result = 'RED';
    }
    this.setState({darkTheme: result});
  }

  render() {
    const styles = getStyleSheet(this.state.darkTheme);
    const backgroundColor = StyleSheet.flatten(styles.container)
      .backgroundColor;
    return (
      <View style={styles.container}>
        <Button title={backgroundColor} onPress={this.toggleTheme} />
      </View>
    );
  }
}

export default App;

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 4,
//     borderWidth: 0.4,
//     borderColor: 'black',
//     padding: 20,
//     width: 100,
//     // justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mainContainer: {
//     backgroundColor: 'ivory',
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20,
//     alignItems: 'center',
//   },
// });
