import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Dimensions, TextInput, ImageBackground, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ItemList from '../components/ItemList';

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
        marginTop: 250,
    },
    input: {
        height: 40,
        width: '50%',
        backgroundColor: 'white',
        marginBottom: 5,
    },
};
const addCityScreen = props => {
    function handleSubmit() {
        if (city !== '') {
            props.dispatch({
                type: 'app/addCity',
                payload: {city}
            });
        }
    }
    const [city, setCity] = useState('');
    const { cities } = props;
    console.log(cities);
    return (
        <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}
            style={{width: '100%', height: '100%'}}>
            <View style={styleSheet.container}>

                <Text style={styleSheet.textStyle}>Entrez une ville :</Text>
                <TextInput
                    style={styleSheet.input}
                    onChangeText={(text) => setCity(text)}
                    value={city}
                />
                <Button
                    onPress={handleSubmit}
                    title="OK"
                    color={"#841584"}
                />
                <FlatList
                    data={cities}
                    renderItem={({ item }) => <ItemList  value={item} />}
                    keyExtractor={item => item}
                />
            </View>
        </ImageBackground>
    );
}

addCityScreen.propTypes = {};

function mapStateToProps(state) {
    return state.app;
}

export default connect(mapStateToProps)(addCityScreen);

