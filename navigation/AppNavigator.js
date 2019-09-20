import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AntDesign} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import EditScreen from '../screens/EditScreen';
import AddCityScreen from '../screens/AddCityScreen';

const AppStack = createStackNavigator({Home: HomeScreen});
const AuthStack = createStackNavigator({SignIn: IntroFormScreen, Welcome: IntroScreen});
const HomeStack = createStackNavigator({Home: HomeScreen});
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="home" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
    Add: {
        screen: AddCityScreen,
        navigationOptions: {
            tabBarLabel: "Ajoutez une ville",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="pluscircleo" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
    Edit: {
        screen: EditScreen,
        navigationOptions: {
            tabBarLabel: "Profil",
            tabBarIcon: ({focused, tintColor}) => (
                <AntDesign name="user" size={32} color={focused ? 'red' : 'black'}/>
            )
        }
    },
});


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: TabNavigator,
        Auth: AuthStack,
    },

    {
        initialRouteName: 'AuthLoading',
    }
));


