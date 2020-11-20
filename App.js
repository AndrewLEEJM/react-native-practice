/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Platform,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const yous = (one, two, three) => {
  return one + ', ' + two + ', ' + three;
};
const PizzaWrite = () => {
  const [textMy, setText] = useState('');
  return (
    <>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(txt) => setText(txt)}
        defaultValue={textMy}
      />
      <Text>
        {textMy
          .split(' ')
          .map((word) => word && '🍕')
          .join(' ')}
      </Text>
    </>
  );
};
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Scroll = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);
const Help = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [isNum, setIsNum] = useState(10);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Text>it's {isNum} O'clock!</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
          setIsNum(12);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};
const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const name = 'Noguri';
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
      <Text>
        Hello, I am {name} but also {yous('lion', 'snake', 'panda')}
      </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        defaultValue="Text me!!"
      />
      <Help name="승환" />
      <Help name="동율" />
      <PizzaWrite />
      <Scroll />
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </>
  );
};

export default App;
