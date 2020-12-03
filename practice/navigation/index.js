import React from 'react';

import Cities from './cities/Cities';
import City from './cities/City';
import Practice from './practice/Practice';
import AddCity from './addcity/AddCity';
import NewStack from './practice/NewStack';
import NewStack2 from './practice/NewStack2';

import {colors} from './theme';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

//createStackNavigator 두개의 파라미터 (라우트 설정 관련, 스타일 설정 관련)
const CitiesNav = createStackNavigator(
  {
    Cities: {screen: Cities},
    City: {screen: City},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        height: 30,
      },
      headerTintColor: 'white',
    },
  },
);
const PracticeNav = createStackNavigator(
  {
    Practice: {screen: Practice},
    NewStack: {screen: NewStack},
    NewStack2: {screen: NewStack2},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        height: 30,
      },
      headerTintColor: 'white',
    },
  },
);

const AppTabs = createBottomTabNavigator(
  {
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity},
    Practice: {screen: PracticeNav},
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
        color: 'coral',
      },
    },
  },
);

const Tabs = createAppContainer(AppTabs);

export default Tabs;
