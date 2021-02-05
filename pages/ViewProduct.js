import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';
const ViewProduct = ({navigation}) => {

    const renderContent = () => (
        <View
        style={ styles.bottomSheet}
      >
        <Text> Hello World</Text>
      </View>
    );

    const bottomSheetRef = React.createRef(null);
    useEffect(()=> {
        setTimeout(() => {
            bottomSheetRef.current.snapTo(1);
        }, 500);
    },[bottomSheetRef]);
    return (
        <View style = {styles.mainContainer}>
            <StatusBar translucent = {true} backgroundColor = "transparent"/>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                <Image style = { styles.image} source = {require('../assets/coats/coats4.jpg')} />
                </View>
                <View style={styles.slide2}>
                <Image style = { styles.image} source = {require('../assets/coats/coats5.jpg')} />
                </View>
                {/* <View style={styles.slide3}>
                <Image style = { styles.image} source = {require('../assets/coats/coats4.jpg')} />
                </View> */}
            </Swiper>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[550, 300]}
                borderRadius={30}
                initialSnap = {1}
                renderContent={renderContent}
            />
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
    wrapper: {
        position: 'relative',
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        alignSelf: 'stretch',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
  },
  slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
  },
  slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
  text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
  floating: {
        // position: 'absolute',
        width: '100%',
        backgroundColor: '#fff',
        // height: (Dimensions.get('window').height / 6),
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
    },
});
export default ViewProduct;
