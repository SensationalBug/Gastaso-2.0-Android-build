import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import { AccountsContext } from "../context/AccountsContext";
import { Pressable } from "@react-native-material/core";

export const CuentaSurface = ({
  item,
  edit,
  setEdit,
  editedAccountData,
  setEditedAccountData,
}) => {
  const { deleteCuenta, selectCuenta, selectCuentaId } =
    useContext(AccountsContext);
  const { id, monto, producto, tipo, tipoTarjeta } = item.item;

  edtData = (value, fieldName) => {
    setEditedAccountData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const toggleEdit = () => {
    if (!edit) {
      setEdit(true);
      selectCuentaId(id);
    } else {
      selectCuenta();
      setEdit(false);
    }
  };

  const showAlert = () => {
    // Alert.alert(
    //   "ADVERTENCIA",
    //   `Seguro que quieres eliminar el producto ${producto} ?`,
    //   [
    //     {
    //       text: "Si",
    //       onPress: () => deleteCuenta(id),
    //     },
    //     { text: "No", style: "destructive" },
    //   ]
    // );
    console.log(editedAccountData, monto, producto);
    // getItem(producto, monto, id);
  };

  const formatter = new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
  });

  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        onLongPress={() => toggleEdit()}
        style={{
          width: "98%",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#20a5d8",
        }}
      >
        <View style={{ width: "60%", padding: 20 }}>
          <View>
            {!edit ? (
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
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  backgroundColor: "#1b92bf",
                  borderBottomColor: "#ffffff",
                }}
                maxLength={15}
                placeholder={producto}
                value={editedAccountData.producto}
                onChangeText={(value) => edtData(value, "producto")}
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
            {!edit ? (
              <Text style={{ fontSize: 35, paddingTop: 10, color: "#ffffff" }}>
                {formatter.format(monto)}
              </Text>
            ) : (
              <TextInput
                style={{
                  fontSize: 35,
                  paddingTop: 10,
                  color: "#ffffff",
                  borderBottomWidth: 1,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  backgroundColor: "#1b92bf",
                  borderBottomColor: "#ffffff",
                }}
                maxLength={15}
                keyboardType="numeric"
                value={editedAccountData.monto}
                placeholder={formatter.format(monto)}
                onChangeText={(value) => edtData(value, "monto")}
              />
            )}
          </View>
        </View>
        <View
          style={{
            width: 150,
            width: "40%",
            alignItems: "flex-end",
          }}
        >
          {edit ? (
            <TouchableOpacity
              style={{ padding: 15 }}
              onPress={() => showAlert()}
            >
              <Icon size={20} name="trash" />
            </TouchableOpacity>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};
