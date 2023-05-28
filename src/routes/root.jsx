//routes to screens in the ecommerce app
//screens are imported from the screens folder
//this is aa react native project
//we use react navigation to navigate between screens

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='Cart' component={CartScreen} />
        </Stack.Navigator>
    );
    }

export default Root;


