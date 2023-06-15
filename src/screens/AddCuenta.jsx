import { FAB } from "@react-native-material/core";
import React, { useState, useContext } from "react";
import RadioForm from "react-native-simple-radio-button";
import Icon from "react-native-vector-icons/FontAwesome";
import { AccountsContext } from "../context/AccountsContext";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

const AddCuenta = () => {
  const { addCuenta } = useContext(AccountsContext);
  const [accountData, setAccountData] = useState({
    producto: "",
    monto: "",
    tipo: "Efectivo",
    tipoTarjeta: "",
    fecha: "",
  });
  const [completeFieldOpacity, setCompleteFieldOpacity] = useState(0);
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
    }-${fecha.getDay()}T${fecha.getHours()}:${fecha.getMinutes()}`;
    setAccountData((prevState) => ({ ...prevState, fecha: fullDate }));
    setAccountData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const radio_props = [
    { label: "Crédito", value: "Crédito" },
    { label: "Dédito", value: "Dédito" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 15,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "80%" }}>
            <Text style={{ fontSize: 20 }}>Producto</Text>
            <TextInput
              maxLength={15}
              value={accountData.producto}
              onChangeText={(value) => updData(value, "producto")}
              style={{
                fontSize: 30,
                width: "100%",
                paddingTop: 2,
                paddingLeft: 10,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            />
          </View>
          <View
            style={{
              width: "20%",
              alignItems: "flex-end",
            }}
          >
            <FAB
              color="#20a5d8"
              style={{ padding: 5, borderRadius: 50 }}
              icon={(props) => <Icon name="plus" {...props} />}
              onPress={() => {
                if (accountData.producto && accountData.monto) {
                  clearFields();
                  addCuenta(accountData);
                  setCompleteFieldOpacity(0);
                  setActiveButton({ active: false, index: 0 });
                } else {
                  setCompleteFieldOpacity(1);
                  setTimeout(() => setCompleteFieldOpacity(0), 1500);
                }
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 15, flexDirection: "row" }}>
        <View style={{ width: "50%", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 20 }}>Monto inicial</Text>
          <TextInput
            style={{
              width: "90%",
              fontSize: 30,
              paddingLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
            maxLength={9}
            keyboardType="numeric"
            value={accountData.monto}
            onChangeText={(value) => updData(value, "monto")}
          />
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              onPress={() => {
                if (activeButton.active) {
                  updData("Efectivo", "tipo");
                  setActiveButton({ active: false, index: 0 });
                }
              }}
              disabled={!activeButton.active}
              style={{
                height: 60,
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 10,
                backgroundColor: "#1F9FD0",
                borderBottomLeftRadius: 10,
                opacity: activeButton.active ? 1 : 0.3,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Efectivo</Text>
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
              style={{
                height: 60,
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 10,
                backgroundColor: "#1F9FD0",
                borderBottomRightRadius: 10,
                opacity: !activeButton.active ? 1 : 0.3,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tarjeta</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              marginTop: 40,
              left: activeButton.index ? "0%" : "110%",
            }}
          >
            <RadioForm
              buttonColor="#1F9FD0"
              formHorizontal
              radio_props={radio_props}
              onPress={(value) => {
                updData(value, "tipoTarjeta");
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "red",
            textAlign: "center",
            opacity: completeFieldOpacity,
          }}
        >
          Rellena todos los campos.
        </Text>
      </View>
    </View>
  );
};

export default AddCuenta;
