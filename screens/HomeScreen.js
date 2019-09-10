import React from 'react';
import PropTypes from 'prop-types'
import {View, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
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

const HomeScreen = props => (
    <View style={styleSheet.container}>
        <Text style={styleSheet.textStyle}>Hello Benjamin!</Text>
    </View>
);

HomeScreen.propTypes = {};

export default HomeScreen;

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
