import React, { useContext } from "react";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AccountsContext } from "../context/AccountsContext";
import { CuentaSurface } from "../subComponentes/CuentaSurface";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const Cuentas = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const { accounts } = useContext(AccountsContext);
  return (
    <View style={cuentasStyles.cuentas}>
      <View style={cuentasStyles.cuentaPage}>
        <Text style={cuentasStyles.addCuenta}>Agregar cuenta</Text>
        <FAB
          color="#122e49"
          onPress={() => navigation.navigate("Añadir cuenta")}
          icon={(props) => <Icon name="plus" {...props} color="#ffffff" />}
        />
      </View>
      <View style={{ paddingVertical: 10 }}>
        <FlatList
          data={accounts}
          keyExtractor={(item) => item.id}
          style={{ height: layout.height - 145 }}
          renderItem={(item) => <CuentaSurface item={item} />}
        />
      </View>
    </View>
  );
};

export default Cuentas;

const cuentasStyles = StyleSheet.create({
  cuentas: {
    flex: 1,
    marginHorizontal: 5,
  },
  cuentaPage: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addCuenta: {
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 10,
  },
  cuentasRow: {
    paddingVertical: 10,
    backgroundColor: "red",
  },
  surface: {
    height: 100,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20a5d8",
  },
});
