import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage, ImageBackground} from 'react-native'

const {width} = Dimensions.get('window');
const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'black',
        fontSize: 18,
    },
    input: {
        width: 250,
        backgroundColor:'white',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        borderRadius:10,
        marginBottom:10,
        marginTop:5,
        textAlign: 'center',
    },
    button: {
        marginBottom: 5,
        borderRadius:10,
    },
};
const IntroFormScreen = props => {

    function handleSubmit() {
        if (name !== '') {
           dispatch({
               type: 'app/setName',
               payload: {name}
           });
            navigation.navigate('Welcome');
        }
    }

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

    return (
        <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1448842215777-02928daa9d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80'}}
            style={{width: '100%', height: '100%'}}>
            <View style={styleSheet.container}>
                <Text style={styleSheet.label}>Votre nom</Text>
                <TextInput
                    style={styleSheet.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Button
                    onPress={handleSubmit}
                    title="OK"
                    color={"#841584"}
                />
            </View>
        </ImageBackground>
    );
}

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(IntroFormScreen);

