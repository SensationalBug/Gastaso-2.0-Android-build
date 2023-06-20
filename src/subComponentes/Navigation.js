import React from "react";
import Main from "../Main";
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
          name="Añadir cuenta"
          component={AddCuenta}
          options={{
            // headerTintColor: "#fff",
            headerShown: false,
            animation: "fade_from_bottom",
            // headerStyle: { backgroundColor: "#122e49" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
