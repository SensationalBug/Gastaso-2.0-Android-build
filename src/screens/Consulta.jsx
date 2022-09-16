import React from "react";
import { View, Text } from "react-native";
import styles from "../subComponentes/Styles";

const Consulta = () => {
  return (
    <View style={styles.consulta}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Esta página se encuentra en mantenimiento para la versión 1.1.0 de la
        app
      </Text>
      </Text>
    </View>
  );
};

export default Consulta;
