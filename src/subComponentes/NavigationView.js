import React from "react";
import Home from "../screens/Home";
import Cuentas from "../screens/Cuentas";
import Ajustes from "../screens/Ajustes";
import Consulta from "../screens/Consulta";
import Recordatorios from "../screens/Recordatorios";
import Icon from "react-native-vector-icons/Entypo";
import * as bottomTabs from "@react-navigation/bottom-tabs";

const NavigationView = () => {
  const Tab = bottomTabs.createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#20a5d8",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
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
      {/* <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,
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
      /> */}
      <Tab.Screen
        name="Cuentas"
        component={Cuentas}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Recordatorios"
        component={Recordatorios}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="bar-graph" color={color} size={30} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Ajustes"
        component={Ajustes}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#122e49" },
          tabBarIcon: ({ color }) => (
            <Icon name="tools" color={color} size={30} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default NavigationView;
