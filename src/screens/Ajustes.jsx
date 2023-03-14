import React from "react";
import { View, Text } from "react-native";
import styles from "../subComponentes/Styles";
import FormikInput from "../subComponentes/FormikInput";

const Ajustes = () => {
  return (
    <View style={styles.ajustes}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Esta página se encuentra en mantenimiento para la versión 1.1.0 de la
        app
      </Text>
    </View>
  );
};

export default Ajustes;
