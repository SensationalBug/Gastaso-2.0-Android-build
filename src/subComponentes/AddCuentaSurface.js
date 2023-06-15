import { useContext } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Pressable } from "@react-native-material/core";
import { AccountsContext } from "../context/AccountsContext";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";

export const AddCuentaSurface = ({
  item,
  edit,
  setEdit,
  edtData,
  clearFields,
  editedAccountData,
}) => {
  const { deleteCuenta, selectCuenta, selectCuentaId } =
    useContext(AccountsContext);
  const { id, monto, producto, tipo, tipoTarjeta } = item.item;

  const toggleEdit = () => {
    if (!edit) {
      setEdit(true);
      selectCuentaId(id);
    } else {
      selectCuenta();
      setEdit(false);
    }
    clearFields();
  };

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar el producto ${producto} ?`,
      [
        {
          text: "Si",
          onPress: () => {
            toggleEdit();
            deleteCuenta(id);
          },
        },
        { text: "No", style: "cancel" },
      ]
    );
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
        delayLongPress={200}
        onLongPress={() => toggleEdit()}
        style={{
          width: "98%",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#20a5d8",
        }}
      >
        <View style={{ width: "90%", padding: 20 }}>
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
                onChangeText={(value) => {
                  edtData(value, "producto");
                  value || editedAccountData.monto
                    ? edtData(false, "disabled")
                    : edtData(true, "disabled");
                }}
              />
            )}
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 10 }}>
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
                onChangeText={(value) => {
                  edtData(value, "monto");
                  value || editedAccountData.producto
                    ? edtData(false, "disabled")
                    : edtData(true, "disabled");
                }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            width: "10%",
            paddingTop: 5,
            paddingRight: 5,
            alignItems: "flex-end",
          }}
        >
          {edit ? (
            <TouchableOpacity onPress={() => showAlert()}>
              <Icon size={20} name="trash" color="#ffffff"/>
            </TouchableOpacity>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};
