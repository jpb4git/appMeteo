import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AntDesign} from '@expo/vector-icons';

import homeScreen from '../screens/homeScreen';
import authLoadingScreen from '../screens/authLoadingScreen';
import introScreen from '../screens/introScreen';
import introFormScreen from '../screens/introFormScreen';
import editScreen from '../screens/editScreen';
import addCityScreen from '../screens/addCityScreen';

const AppStack = createStackNavigator({Home: homeScreen});
const AuthStack = createStackNavigator({SignIn: introFormScreen, Welcome: introScreen});

const HomeStack = createStackNavigator({ Home: homeScreen});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: homeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="home" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
    Add: {
        screen: addCityScreen,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="pluscircleo" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
    Edit: {
        screen: editScreen,
        navigationOptions: {
            tabBarLabel:"profile",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="user" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
});


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: authLoadingScreen,
        App: TabNavigator,
        Auth: AuthStack,
    },

    {
        initialRouteName: 'AuthLoading',
    }
));


