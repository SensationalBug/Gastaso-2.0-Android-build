import React, { useContext } from "react";
import styles from "../subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "../subComponentes/StyledText";
import { FAB, Surface } from "@react-native-material/core";
import { View, Text, StyleSheet } from "react-native";

const Cuentas = ({ navigation }) => {
  return (
    <View style={styles.cuentas}>
      <View style={{ height: "80%" }}>
        <View style={cuentasStyles.cuentaPage}>
          <Text style={cuentasStyles.addCuenta}>Agregar cuenta</Text>
          <FAB
            onPress={() => navigation.navigate("Añadir cuenta")}
            icon={(props) => <Icon name="plus" {...props} />}
            color="#20a5d8"
          />
        </View>
        <View style={cuentasStyles.cuentasRow}>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Total de Ingresos</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
        </View>
      </View>
    </View>
  );
};

export default Cuentas;

const cuentasStyles = StyleSheet.create({
  cuentaPage: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addCuenta: {
    fontSize: 30,
    textAlign: "center",
    marginHorizontal: 5,
  },
  cuentasRow: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
