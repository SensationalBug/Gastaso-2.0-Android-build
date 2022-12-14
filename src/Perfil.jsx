import React from "react";
import { View, Text } from "react-native";
import styles from "./subComponentes/Styles";
import NavigationView from "./subComponentes/NavigationView";

const Perfil = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.perfil}>
        <Text>Perfil Page</Text>
      </View>
      <NavigationView />
    </View>
  );
};

export default Perfil;
