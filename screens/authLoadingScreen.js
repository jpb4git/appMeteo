import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, StatusBar, View, AsyncStorage} from 'react-native';
import {useReduxContext} from "react-redux/lib/hooks/useReduxContext";

const authLoadingScreen = props => {

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    useEffect(() => {
        _bootstrapAsync();
    }, []);

    return (
        <View>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
        </View>
    );
};

authLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default authLoadingScreen;

