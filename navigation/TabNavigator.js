import * as React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreateStory from "../screens/CreateStory";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

      <Tab.Navigator
      labeled = {false}
      barStyle = {styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <Tab.Screen name="CreatePost" component={CreateStory} options={{headerShown:false}}/>
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;