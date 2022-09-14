import React from "react";
import { View, Text } from "react-native";
import styles from "./subComponentes/Styles";
import NavigationView from "./subComponentes/NavigationTab";

const Consulta = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.consulta}>
        <Text>Consulta Page</Text>
      </View>
    </View>
  );
};

export default Consulta;
