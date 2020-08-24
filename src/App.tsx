import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from "./components/home";
import Golds from "./components/golds";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import GuncelDoviz from "./components/guncelDoviz";
import AboutMe from "./components/aboutMe";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class App extends Component {
  
    // android banner  ca-app-pub-7845548592670563/8766580682
    render() {
      return (
        <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Doviz') {
              iconName = focused
                ? 'logo-usd'
                : 'logo-usd';
            } else if (route.name === 'Altın') {
              iconName = focused ? 'ios-pulse' : 'ios-pulse';
            }
            else if (route.name === 'Hesaplama') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator';
            }
            else if (route.name === 'Hakkımızda') {
              iconName = focused ? 'ios-thumbs-up' : 'ios-thumbs-up';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
           <Tab.Screen name="Doviz" component={GuncelDoviz} />
           <Tab.Screen name="Altın" component={Golds} />
           <Tab.Screen name="Hesaplama" component={Home} />
           <Tab.Screen name="Hakkımızda" component={AboutMe} />
         </Tab.Navigator>
       </NavigationContainer>
      );
    }
}


export default App;