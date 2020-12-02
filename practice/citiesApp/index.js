import React from 'react';

import Cities from './cities/Cities';
import City from './cities/City';
import AddCity from './addcity/AddCity';

import {colors} from './theme';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//createStackNavigator 두개의 파라미터 (라우트 설정 관련, 스타일 설정 관련)
const CitiesNav = createStackNavigator(
  {
    Cities: {screen: Cities},
    City: {screen: City},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    },
  },
);

const AppTabs = createBottomTabNavigator({
  Cities: {screen: CitiesNav},
  AddCity: {screen: AddCity},
});

const Tabs = createAppContainer(AppTabs);

export default Tabs;
