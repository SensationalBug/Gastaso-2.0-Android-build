import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { CuentasStyles } from "../Styles/GlobalStyles";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AccountsContext } from "../context/AccountsContext";
import { LocationContext } from "../context/LocationContext";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { AddCuentaSurface } from "../subComponentes/AddCuentaSurface";

const Cuentas = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [edit, setEdit] = useState(false);
  const { location } = useContext(LocationContext);
  const { accounts, accountType, selectCuenta, updateCuenta } =
    useContext(AccountsContext);
  const [editedAccountData, setEditedAccountData] = useState({
    producto: "",
    monto_inicial: "",
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
      monto_inicial: "",
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

  const getItemData = (producto, monto_inicial) => {
    if (!producto && !monto_inicial) {
    } else if (producto && monto_inicial) {
      updateCuenta(producto, monto_inicial, accounts[0].id);
    } else if (!producto) {
      updateCuenta(accounts[0].producto, monto_inicial, accounts[0].id);
    } else if (!monto_inicial) {
      updateCuenta(producto, accounts[0].monto_inicial, accounts[0].id);
    }
    toggleEdit();
  };

  return (
    <View style={CuentasStyles.cuentas}>
      {!edit ? (
        <View style={CuentasStyles.cuentaPage}>
          <Text style={CuentasStyles.addCuenta}>Agregar producto</Text>
          <FAB
            color="#122e49"
            onPress={() => navigation.navigate("Añadir cuenta")}
            icon={(props) => <Icon name="plus" {...props} color="#ffffff" />}
          />
        </View>
      ) : (
        <View style={CuentasStyles.cuentaPage}>
          <Text style={CuentasStyles.addCuenta}>Editar producto</Text>
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
              color="#1F8A70"
              onPress={() =>
                getItemData(
                  editedAccountData.producto,
                  editedAccountData.monto_inicial,
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
          style={{ height: layout.height - 175 }}
          renderItem={(item) => (
            <AddCuentaSurface
              item={item}
              edit={edit}
              edtData={edtData}
              setEdit={setEdit}
              accountType={accountType}
              clearFields={clearFields}
              editedAccountData={editedAccountData}
              setEditedAccountData={setEditedAccountData}
            />
          )}
        />
      </View>
      {/* <DropdownAlert
        infoColor="#122e49"
        closeInterval={1000}
        ref={dropDownAlertRef}
        titleStyle={{ fontSize: 30, color: "#ffffff" }}
        messageStyle={{ fontSize: 20, color: "#ffffff" }}
      /> */}
    </View>
  );
};

export default Cuentas;
