import React, { useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

import { } from 'react-native';

import Recommended from './Recommended';


const Products = ({navigation}) => {
    const images = [
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coat1.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coat2.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats3.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats4.jpg',
            price: 2000,
        },
        {
            name: 'A Very Nice Coat',
            path: '../assets/coats/coats5.jpg',
            price: 2000,
        },
    ];

    const [coatStyle, setCoatStyle] = useState({
        ...styles.categoryButton,
        backgroundColor: 'F8D9E0',
    });

    const [pantsStyle, setPantsStyle] = useState({
        ...styles.categoryButton,
    });

    const [jerseyStyle, setJerseyStyle] = useState({
        ...styles.categoryButton,
    });

    const [dressStyle, setDressStyle] = useState({
        ...styles.categoryButton,
    });

    const coatActive = () => {
        setCoatStyle({
            ...coatStyle,
            backgroundColor: '#F8D9E0',
        });
        setDressStyle({
            ...dressStyle,
            backgroundColor: '#fff',
        });

        setJerseyStyle({
            ...jerseyStyle,
            backgroundColor: '#fff',
        });

        setPantsStyle({
            ...pantsStyle,
            backgroundColor: '#fff',
        });
    };

    const dressActive = () => {
        setCoatStyle({
            ...coatStyle,
            backgroundColor: '#fff',
        });
        setDressStyle({
            ...dressStyle,
            backgroundColor: '#F8D9E0',
        });

        setJerseyStyle({
            ...jerseyStyle,
            backgroundColor: '#fff',
        });

        setPantsStyle({
            ...pantsStyle,
            backgroundColor: '#fff',
        });
    };

    const jerseyActive = () => {
        setCoatStyle({
            ...coatStyle,
            backgroundColor: '#fff',
        });
        setDressStyle({
            ...dressStyle,
            backgroundColor: '#fff',
        });

        setJerseyStyle({
            ...jerseyStyle,
            backgroundColor: '#F8D9E0',
        });

        setPantsStyle({
            ...pantsStyle,
            backgroundColor: '#fff',
        });
    };

    const pantsActive = () => {
        setCoatStyle({
            ...coatStyle,
            backgroundColor: '#fff',
        });
        setDressStyle({
            ...dressStyle,
            backgroundColor: '#fff',
        });

        setJerseyStyle({
            ...jerseyStyle,
            backgroundColor: '#fff',
        });

        setPantsStyle({
            ...pantsStyle,
            backgroundColor: '#F8D9E0',
        });
    };
    return (
        // <SafeAreaView>
            <View style = {styles.mainContainer}>
                <StatusBar barStyle = "dark-content" backgroundColor = "#fff" />
                <ScrollView>
                    <ScrollView
                    horizontal = {true}
                    alwaysBounceHorizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    >
                        <TouchableOpacity style = {coatStyle} onPress = {() => coatActive()}>
                            <Text style = {styles.buttonText}>Coats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {dressStyle} onPress = {() => dressActive()}>
                            <Text style = {styles.buttonText}>Dresses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {jerseyStyle} onPress = {() => jerseyActive()}>
                            <Text style = {styles.buttonText}>Jerseys</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {pantsStyle} onPress = {() => pantsActive()}>
                            <Text style = {styles.buttonText}>Pants</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    {/* <Text style = {styles.categoryName}>
                        Coats
                    </Text> */}
                    <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    alwaysBounceHorizontal = {true}>
                        {
                            images.map((image, k) => {
                                return (
                                    <View key ={ k}>
                                        <TouchableOpacity style = {styles.imageContainer}
                                        onPress = { () => navigation.navigate('ViewProductScreen')}
                                        >
                                            <Image style = { styles.images} source = {require('../assets/coats/coats4.jpg')} />
                                            <View style = {styles.description}>
                                                <Text style = {styles.textNameContainer}>{ image.name}</Text>
                                                <Text style = {styles.textContainer}>{ image.price}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                    <Recommended />
                </ScrollView>
                <TouchableOpacity style = {styles.bottomButton }>
                    <Text style = { styles.bottomText}>Search</Text>
                </TouchableOpacity>
            </View>
        // </ SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative',
    },
    categoryName : {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 40,
        marginLeft: 20,
        marginBottom: 40,
    },
    categoryButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 40,
        width: 90,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 30,
    },

    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: 250,
        height: 400,
        flex: 1,
    },
    textContainer: {
        marginLeft: 20,
        fontSize: 18,
    },
    textNameContainer: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    images: {
        borderRadius: 30,
        marginLeft: 20,
        marginBottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
    bottomButton: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        bottom: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#333333',
        width: 120,
        padding: 20,
        borderRadius: 50,
        left: (Dimensions.get('window').width / 2) - 60,
    },
    bottomText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Products;
