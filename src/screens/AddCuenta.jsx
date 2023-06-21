import { FAB } from "@react-native-material/core";
import React, { useState, useContext } from "react";
import DropdownAlert from "react-native-dropdownalert";
import { useNavigation } from "@react-navigation/native";
import RadioForm from "react-native-simple-radio-button";
import Icon from "react-native-vector-icons/FontAwesome";
import { AddCuentaStyles } from "../Styles/GlobalStyles";
import { AccountsContext } from "../context/AccountsContext";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const AddCuenta = () => {
  const navigation = useNavigation();
  const { addCuenta, dropDownAlertRefAdd } = useContext(AccountsContext);
  const [accountData, setAccountData] = useState({
    producto: "",
    monto: "",
    tipo: "Efectivo",
    tipoTarjeta: "",
    fecha: "",
  });
  const [activeButton, setActiveButton] = useState({
    index: 0,
    active: false,
    radioButton: "0%",
  });

  const clearFields = () => {
    setAccountData({
      producto: "",
      monto: "",
      tipo: "Efectivo",
      tipoTarjeta: "",
      fecha: "",
    });
  };

  const updData = (value, fieldName) => {
    const fecha = new Date();
    const fullDate = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()}T${fecha.getHours()}:${fecha.getMinutes()}`;
    setAccountData((prevState) => ({ ...prevState, fecha: fullDate }));
    setAccountData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const radio_props = [
    { label: "Crédito", value: "Crédito" },
    { label: "Dédito", value: "Dédito" },
  ];

  const validateInfo = () => {
    if (accountData.producto && accountData.monto) {
      clearFields();
      addCuenta(accountData);
      setActiveButton({ active: false, index: 0 });
    } else {
      dropDownAlertRefAdd.current.alertWithType(
        "error",
        "System Info",
        "Rellena todos los campos"
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={AddCuentaStyles.addCuentaContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={AddCuentaStyles.addCategoriaText}>Añadir categoría</Text>
      </View>
      <View style={AddCuentaStyles.productContainer}>
        <View style={AddCuentaStyles.productView}>
          <Text style={AddCuentaStyles.productFontSize}>Producto</Text>
          <TextInput
            maxLength={15}
            value={accountData.producto}
            style={AddCuentaStyles.productTextInput}
            onChangeText={(value) => updData(value, "producto")}
          />
        </View>
        <FAB
          color="#122e49"
          style={AddCuentaStyles.addFAB}
          onPress={() => validateInfo()}
          icon={(props) => <Icon name="plus" {...props} />}
        />
      </View>
      <View style={AddCuentaStyles.montoContainer}>
        <View style={AddCuentaStyles.montoViewContainer}>
          <Text style={AddCuentaStyles.productFontSize}>Monto inicial</Text>
          <TextInput
            maxLength={9}
            keyboardType="numeric"
            value={accountData.monto}
            style={AddCuentaStyles.productTextInput}
            onChangeText={(value) => updData(value, "monto")}
          />
        </View>
        <View style={AddCuentaStyles.touchableContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              onPress={() => {
                if (activeButton.active) {
                  updData("Efectivo", "tipo");
                  setActiveButton({ active: false, index: 0 });
                }
              }}
              disabled={!activeButton.active}
              style={
                activeButton.active
                  ? AddCuentaStyles.touchableStylesOn
                  : AddCuentaStyles.touchableStylesOff
              }
            >
              <Text style={AddCuentaStyles.tarjetaText}>Efectivo</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                if (!activeButton.active) {
                  updData("Tarjeta", "tipo");
                  updData("Crédito", "tipoTarjeta");
                  setActiveButton({ active: true, index: 1 });
                }
              }}
              disabled={activeButton.active}
              style={
                activeButton.active
                  ? AddCuentaStyles.touchableStylesOff
                  : AddCuentaStyles.touchableStylesOn
              }
            >
              <Text style={AddCuentaStyles.tarjetaText}>Tarjeta</Text>
            </TouchableHighlight>
          </View>

          <View
            style={
              activeButton.index
                ? AddCuentaStyles.radioContainerOn
                : AddCuentaStyles.radioContainerOff
            }
          >
            <RadioForm
              formHorizontal
              buttonColor="#1F9FD0"
              radio_props={radio_props}
              onPress={(value) => {
                updData(value, "tipoTarjeta");
              }}
            />
          </View>
        </View>
      </View>
      <DropdownAlert
        infoColor="#122e49"
        closeInterval={800}
        ref={dropDownAlertRefAdd}
        titleStyle={{ fontSize: 30, color: "#ffffff" }}
        messageStyle={{ fontSize: 20, color: "#ffffff" }}
      />
    </View>
  );
};

export default AddCuenta;
