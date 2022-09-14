import React from "react";
import { View, Text } from "react-native";
import styles from "./subComponentes/Styles";
import NavigationView from "./subComponentes/NavigationTab";

const Ajustes = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.ajustes}>
        <Text>Ajustes Page</Text>
      </View>
    </View>
  );
};

export default Ajustes;
