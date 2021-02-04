import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
const ViewProduct = ({navigation}) => {
    return (
        <View style = {styles.mainContainer}>
            <Image source = {require('../assets/coats/coats5.jpg')} resizeMode = "cover"/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        alignSelf: 'stretch',
    },
});
export default ViewProduct;
