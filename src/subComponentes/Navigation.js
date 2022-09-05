import React from "react";
import Main from "../Main";
import Login from "../Login";
import SignUp from "../SignUp";
import Perfil from "../Perfil";
import Ajustes from "../Ajustes";
import Consulta from "../Consulta";
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
        <Stack.Screen
          name="Ajustes"
          component={Ajustes}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
        <Stack.Screen
          name="Consulta"
          component={Consulta}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#122e49" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
