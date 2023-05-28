//react native ecommerce project main app file that contains all the screens and navigation from the ./src/screens folder and the navigation from the ./src/routes folder
//importing all the screens from the ./src/screens folder
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//importing the navigation from the /src/routes folder
import Routes from './src/routes/root';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

