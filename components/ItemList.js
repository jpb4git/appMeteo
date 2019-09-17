import React from 'react';
import { Text } from 'react-native';

const ItemList = props => {
    const { value } = props;
    return (
        <Text style={{color: 'red'}}>{value}</Text>
    );
};

export default ItemList;
