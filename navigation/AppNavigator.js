import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const AppStack = createStackNavigator({Home: HomeScreen});
const AuthStack = createStackNavigator({SignIn: IntroFormScreen, Welcome: IntroScreen});
const TabNavigator = createBottomTabNavigator({Home: HomeScreen, Auth: AuthLoadingScreen, Intro: IntroFormScreen});

export default createAppContainer(TabNavigator);
