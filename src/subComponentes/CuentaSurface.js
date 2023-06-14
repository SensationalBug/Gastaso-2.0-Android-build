import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { FAB, Surface } from "@react-native-material/core";
import { View, Text, Alert, TextInput } from "react-native";
import { AccountsContext } from "../context/AccountsContext";
import { FABCuentasButton } from "./FABCuentasButton";

export const CuentaSurface = ({ item, edit, setEdit }) => {
  const { deleteCuenta, selectCuenta, selectCuentaId } =
    useContext(AccountsContext);
  const { id, monto, producto, tipo, tipoTarjeta } = item.item;

  const toggleEdit = () => {
    if (edit) {
      setEdit(false);
      selectCuentaId(id);
    } else {
      setEdit(true);
      selectCuenta();
    }
  };

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar el producto ${producto} ?`,
      [
        {
          text: "Si",
          onPress: () => deleteCuenta(id),
        },
        { text: "No", style: "destructive" },
      ]
    );
  };

  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Surface
        style={{
          width: "99%",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#20a5d8",
        }}
      >
        <View style={{ width: "60%", padding: 20 }}>
          <View>
            {edit ? (
              <Text
                style={{
                  fontSize: 35,
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                {producto}
              </Text>
            ) : (
              <TextInput
                style={{
                  fontSize: 35,
                  color: "#ffffff",
                  borderBottomWidth: 1,
                  backgroundColor: "#1b92bf",
                  borderBottomColor: "#ffffff",
                }}
                maxLength={15}
                placeholder={producto}
              />
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#ffffff", fontSize: 15 }}>{tipo}</Text>
            <Text style={{ color: "#ffffff", fontSize: 15 }}>
              {tipo === "Efectivo" ? "" : ` --> ${tipoTarjeta}`}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 35, paddingTop: 10, color: "#ffffff" }}>
              {monto}.00
            </Text>
          </View>
        </View>
        {edit ? (
          <FABCuentasButton
            iconF1="edit"
            colorF1="#F29727"
            toggleF1={toggleEdit}
            iconF2="trash"
            colorF2="#F24C3D"
            toggleF2={showAlert}
          />
        ) : (
          <FABCuentasButton
            iconF1="check"
            colorF1="#22A699"
            toggleF1={toggleEdit}
            iconF2="cross"
            colorF2="#F24C3D"
            toggleF2={toggleEdit}
          />
        )}
      </Surface>
    </View>
  );
};
