import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
const ViewProduct = () => {
    return (
        <View style = {styles.mainContainer}>
            <Text>View Product</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default ViewProduct;
