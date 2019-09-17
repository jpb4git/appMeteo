import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {View, Text, Dimensions,ImageBackground} from 'react-native';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
};


const homeScreen = props => {
    useEffect(() => {
        dispatch({type: 'app/getMeteoInformations'});
    }, []);

    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
    });

    const {dispatch, app: {informations}} = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');

    return (
        <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1548268770-66184a21657e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'}}
            style={{width: '100%', height: '100%'}}>
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>{`Ville: ${nameCity}`}</Text>
            <Text style={styleSheet.textStyle}>{`Temperature: ${Math.round(temp)}°C`}</Text>
        </View>
        </ImageBackground>
    );
}


homeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
};

export default  connect (({app}) => ({app}))(homeScreen);

const styles = {
    container: {
        flex: 1,
    },
};

const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
};

const titleConfig = {
    title: 'Hello, world',
};

function ComponentWithNavigationBar() {
    return (
        <View style={styles.container}>
            <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
            />
        </View>
    );
}
