import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Drawer Header</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', top: 20, left: 20 }}>
        <Icon name="bars" size={24} color="black" />
      </TouchableOpacity>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ position: 'absolute', top: 20, right: 20 }}>
        <Icon name="user" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'red', borderRadius: 10, padding: 5 }}>
        <Text style={{ color: 'white' }}>Total Cart: 5</Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Icon name="user" size={24} color="white" />
    </TouchableOpacity>
  ),
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default App;