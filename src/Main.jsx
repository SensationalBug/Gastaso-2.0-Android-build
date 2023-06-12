import React from "react";
import { View } from "react-native";
import Navigationview from "./subComponentes/NavigationView";
import Home from "./screens/Home";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigationview />
    </View>
  );
};

export default Main;
