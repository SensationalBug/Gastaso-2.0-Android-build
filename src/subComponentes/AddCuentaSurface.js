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
  accountType,
  editedAccountData,
}) => {
  const { deleteCuenta, selectCuenta, selectCuentaId, formatter } =
    useContext(AccountsContext);
  const { id, monto_inicial, id_tipo_cuenta, producto } = item.item;

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
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        delayLongPress={400}
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
                  value || editedAccountData.monto_inicial
                    ? edtData(false, "disabled")
                    : edtData(true, "disabled");
                }}
              />
            )}
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 10 }}>
            <Text style={{ color: "#ffffff", fontSize: 20 }}>
              {accountType[id_tipo_cuenta - 1].value}
            </Text>
          </View>
          <View>
            {!edit ? (
              <Text style={{ fontSize: 35, paddingTop: 10, color: "#ffffff" }}>
                {formatter.format(monto_inicial)}
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
                value={editedAccountData.monto_inicial}
                placeholder={formatter.format(monto_inicial)}
                onChangeText={(value) => {
                  edtData(value, "monto_inicial");
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
            paddingTop: 10,
            paddingRight: 10,
            alignItems: "flex-end",
          }}
        >
          {edit ? (
            <TouchableOpacity onPress={() => showAlert()}>
              <Icon size={25} name="trash" color="#ffffff" />
            </TouchableOpacity>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};
