import React from "react";
import Main from "../Main";
import Details from "../screens/Details";
import AddCuenta from "../screens/AddCuenta";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detalles"
          component={Details}
          options={{
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            animation: "fade_from_bottom",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
        <Stack.Screen
          name="Añadir cuenta"
          component={AddCuenta}
          options={{
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;