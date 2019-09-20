import React from 'react';
import { Text, View } from 'react-native';
import {Foundation} from "@expo/vector-icons";
import {connect} from 'react-redux';


const StyleSheet = {
    container:{
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
    }
}

const ItemList = props => {
    function removeCity() {
        dispatch({
            type:'app/deleteCity',
            payload:{index},
        })
    }
    const { value, dispatch, index } = props;
    return (
        <View style={StyleSheet.container}>
            <Text style={{color: 'red'}}>{value}</Text>
            <Foundation onPress={removeCity} name="minus-circle" size={32}/>
        </View>

    );
};

export default connect()(ItemList);
