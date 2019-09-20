import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage, ImageBackground} from 'react-native';

const {width} = Dimensions.get('window');
const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',

    },
    textStyle: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',

    },
};

const IntroScreen = props => {
    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem('name');
            setName(temp);
        }

        getName();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 1000);
    }, []);

    const [name, setName] = useState('');

    return (
        <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1561989848-525a8b97dd98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=588&q=80'}}
            style={{width: '100%', height: '100%'}}>
            <View style={styleSheet.container}>

                <Text style={styleSheet.textStyle}> {`Bonjour ${props.app.name}!`}</Text>
            </View>
        </ImageBackground>
    );
}

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(state => state)(IntroScreen);






