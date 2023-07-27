import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { AddCuentaStyles } from "../Styles/GlobalStyles";
import { AccountsContext } from "../context/AccountsContext";
import { DatabaseContext } from "../context/DatabaseContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const AddCuenta = () => {
  const navigation = useNavigation();
  const { addCuenta, accountType } =
    useContext(AccountsContext);
  const { toastConfig } = useContext(DatabaseContext);
  const [accountData, setAccountData] = useState({
    producto: "",
    monto_inicial: "",
    id_tipo_cuenta: 1,
    fecha: "",
  });
  const [radioIndex, setRadioIndex] = useState(0);

  const clearFields = () => {
    setAccountData({
      producto: "",
      monto_inicial: "",
      id_tipo_cuenta: 1,
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

  const validateInfo = () => {
    if (accountData.producto && accountData.monto_inicial) {
      clearFields();
      addCuenta(accountData);
    } else {
      Toast.show({
        type: "error",
        text1: "Rellena todos los campos",
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={AddCuentaStyles.addCuentaContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={AddCuentaStyles.addCategoriaText}>Añadir Producto</Text>
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
      </View>
      <View style={AddCuentaStyles.montoContainer}>
        <View style={AddCuentaStyles.montoViewContainer}>
          <Text style={AddCuentaStyles.productFontSize}>Monto inicial</Text>
          <TextInput
            maxLength={9}
            keyboardType="numeric"
            value={accountData.monto_inicial}
            style={AddCuentaStyles.productTextInput}
            onChangeText={(value) => updData(value, "monto_inicial")}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 5,
            width: "40%",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#122e49",
          }}
          onPress={() => validateInfo()}
        >
          <Text style={{ color: "#ffffff", fontSize: 25 }}>Añadir</Text>
        </TouchableOpacity>
      </View>
      <View style={AddCuentaStyles.touchableContainer}>
        <RadioForm>
          {accountType.map((elem, index) => (
            <RadioButton
              key={index}
              style={{ margin: 20, justifyContent: "flex-end" }}
            >
              <RadioButtonLabel
                obj={elem}
                index={index}
                labelHorizontal={true}
                labelStyle={{ fontSize: 20, marginHorizontal: 15 }}
                onPress={() => {
                  updData(elem.id, "id_tipo_cuenta");
                  setRadioIndex(index);
                }}
              />
              <RadioButtonInput
                obj={elem}
                index={index}
                isSelected={() => setRadioIndex(index)}
                onPress={() => {
                  updData(elem.id, "id_tipo_cuenta");
                  setRadioIndex(index);
                }}
                borderWidth={1}
                buttonInnerColor={
                  radioIndex === index ? "#20a5d8" : "transparent"
                }
                buttonOuterColor="#000"
                buttonSize={20}
                buttonOuterSize={40}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
      <Toast config={toastConfig} />
    </View>
  );
};

export default AddCuenta;