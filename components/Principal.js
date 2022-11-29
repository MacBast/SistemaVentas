import React from "react";
import VendedorScreen from "./VendedorScreen.js";
import VentaScreen from "./VentaScreen.js"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Vendedor"
        component={VendedorScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
            name="people-outline"
              color={"#1E3BE3"}
              size={20}
            ></Ionicons>
            ),
        }}
        />
      <Tab.Screen
        name="Ventas"
        component={VentaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="move-outline"
              color={"#1E3BE3"}
              size={20}
            ></Ionicons>
            ),
          }}
        />
    </Tab.Navigator>
  );
}
