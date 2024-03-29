import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AccountsContext } from "../context/AccountsContext";
import { LocationContext } from "../context/LocationContext";
import React, { useContext, useEffect, useState } from "react";
import { AddCuentaSurface } from "../subComponentes/AddCuentaSurface";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const Cuentas = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [edit, setEdit] = useState(false);
  const { location } = useContext(LocationContext);
  const { accounts, selectCuenta, updateCuenta } = useContext(AccountsContext);
  const [editedAccountData, setEditedAccountData] = useState({
    producto: "",
    monto: "",
    disabled: true,
  });

  useEffect(() => {
    if (location === "Cuentas") {
      setEdit(false);
      selectCuenta();
    }
  }, [location]);

  edtData = (value, fieldName) => {
    setEditedAccountData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const clearFields = () => {
    setEditedAccountData({
      producto: "",
      monto: "",
      disabled: true,
    });
  };

  const toggleEdit = () => {
    if (edit) {
      setEdit(false);
      selectCuenta();
    } else {
      setEdit(true);
      selectCuenta();
    }
  };

  const getItemData = (producto, monto) => {
    if (!producto && !monto) {
    } else if (producto && monto) {
      updateCuenta(producto, monto, accounts[0].id);
    } else if (!producto) {
      updateCuenta(accounts[0].producto, monto, accounts[0].id);
    } else if (!monto) {
      updateCuenta(producto, accounts[0].monto, accounts[0].id);
    }
    toggleEdit();
  };

  return (
    <View style={cuentasStyles.cuentas}>
      {!edit ? (
        <View style={cuentasStyles.cuentaPage}>
          <Text style={cuentasStyles.addCuenta}>Agregar producto</Text>
          <FAB
            color="#122e49"
            onPress={() => navigation.navigate("Añadir cuenta")}
            icon={(props) => <Icon name="plus" {...props} color="#ffffff" />}
          />
        </View>
      ) : (
        <View style={cuentasStyles.cuentaPage}>
          <Text style={cuentasStyles.addCuenta}>Editar producto</Text>
          <View
            style={{
              width: 150,
              width: "40%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <FAB
              style={{ opacity: editedAccountData.disabled ? 0.3 : 1 }}
              disabled={editedAccountData.disabled}
              color="#22A699"
              onPress={() =>
                getItemData(
                  editedAccountData.producto,
                  editedAccountData.monto,
                  accounts[0].id
                )
              }
              icon={(props) => <Icon name="check" {...props} color="#ffffff" />}
            />
            <FAB
              color="#F24C3D"
              onPress={() => toggleEdit()}
              icon={(props) => <Icon name="cross" {...props} color="#ffffff" />}
            />
          </View>
        </View>
      )}
      <View style={{ paddingVertical: 10 }}>
        <FlatList
          data={accounts}
          keyExtractor={(item) => item.id}
          style={{ height: layout.height - 145 }}
          renderItem={(item) => (
            <AddCuentaSurface
              item={item}
              edit={edit}
              edtData={edtData}
              setEdit={setEdit}
              clearFields={clearFields}
              editedAccountData={editedAccountData}
              setEditedAccountData={setEditedAccountData}
            />
          )}
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
