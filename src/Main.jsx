import React from "react";
import Home from "./Home";
import { View, Text } from "react-native";
import styles from "./subComponentes/Styles";
import Navigationview from "./subComponentes/NavigationView";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.home}>
        <Home />
      </View>
      <Navigationview />
    </View>
  );
};

export default Main;
