//this is the product screen component of the app
//this is aa react native project
//this screen will the product details
//we use react navigation to navigate between screens

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Button
                title='Go to Home Screen'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='Go to Cart Screen'
                onPress={() => navigation.navigate('Cart')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 16,
    },
});

export default ProductScreen;