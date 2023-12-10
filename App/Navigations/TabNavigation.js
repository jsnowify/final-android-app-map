import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarLabel: ({ color, size = 24 }) => (
            <Ionicons name="ios-home" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarLabel: ({ color, size = 24 }) => (
            <Ionicons name="search" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarLabel: "Fav",
          tabBarLabel: ({ color, size = 24 }) => (
            <Ionicons name="heart" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabel: ({ color, size = 24 }) => (
            <AntDesign name="user" size={size} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
