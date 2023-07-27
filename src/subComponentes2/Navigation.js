import React from "react";
import Main from "../Main";
import Details from "../screens/Details";
import AddBills from "../screens/AddBills";
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
          name="Añadir gasto"
          component={AddBills}
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="Añadir cuenta"
          component={AddCuenta}
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="Detalles"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;