import React from "react";
import Main from "../Main";
import Login from "../Login";
import SignUp from "../SignUp";
import Details from "../Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
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
            // headerBackVisible: false,
            animation: "slide_from_bottom",
            headerStyle: { backgroundColor: "#122e49" },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
