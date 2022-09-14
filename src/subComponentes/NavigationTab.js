import React from "react";
import Home from "../Home";
import Perfil from "../Perfil";
import Ajustes from "../Ajustes";
import Consulta from "../Consulta";
import Icon from "react-native-vector-icons/Entypo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const NavigationView = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#20a5d8",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          margin: 10,
          borderRadius: 100,
          backgroundColor: "#122e49",
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Consulta"
        component={Consulta}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="bar-graph" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={Ajustes}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="tools" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationView;
