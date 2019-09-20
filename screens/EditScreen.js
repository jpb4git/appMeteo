import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Dimensions, TextInput, ImageBackground, Button} from 'react-native';
import {connect} from "react-redux";

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
    input: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginTop: 5,
        textAlign: 'center',

    },
    button: {
        marginBottom: 5,
        borderRadius: 10,
    },
};
const EditScreen = props => {
    function submit() {
        props.dispatch({
            type: 'app/setName',
            payload: {name}
        });
        props.navigation.navigate('Welcome')
    }

    const [name, setName] = useState('');
    return (
        <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}
            style={{width: '100%', height: '100%'}}>
            <View style={styleSheet.container}>

                <Text style={styleSheet.textStyle}>Modifiez votre nom :</Text>
                <TextInput
                    style={styleSheet.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Button
                    onPress={submit}
                    title="OK"
                    color={"#841584"}
                />
            </View>
        </ImageBackground>
    );
}
EditScreen.propTypes = {};
export default connect(state => state)(EditScreen);
