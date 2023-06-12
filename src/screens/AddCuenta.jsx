import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import RadioForm from "react-native-simple-radio-button";
import { AccountsContext } from "../../src/context/AccountsContext";

const AddCuenta = () => {
  const { addCuenta, selectCuenta, deleteTable } = useContext(AccountsContext);
  const [accountData, setAccountData] = useState({
    nombre: "",
    monto: "",
    tipo: "Efectivo",
    tipoTarjeta: "",
  });
  const [numColumns] = useState(4);
  const [activeButton, setActiveButton] = useState({
    index: 0,
    active: false,
    radioButton: "0%",
  });

  const updData = (value, fieldName) => {
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
          justifyContent: "center",
          padding: 15,
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
            <Text style={{ fontSize: 20 }}>Nombre</Text>
            <TextInput
              value={accountData.nombre}
              onChangeText={(value) => updData(value, "nombre")}
              style={{
                fontSize: 30,
                width: "100%",
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
            <TouchableOpacity
              onPress={() => addCuenta(accountData)}
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1F9FD0",
                borderRadius: 10,
              }}
            >
              <Icon name="plus" size={30} />
            </TouchableOpacity>
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
            maxLength={7}
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
              marginVertical: 40,
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
      <TouchableOpacity
        onPress={() => selectCuenta()}
        style={{ backgroundColor: "green", paddingVertical: 10 }}
      >
        <Text>SELECT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteTable()}
        style={{ backgroundColor: "red", paddingVertical: 10 }}
      >
        <Text>DELETE</Text>
      </TouchableOpacity>
      {/* <View style={{ flex: 1, padding: 10 }}>
        <StyledText mainTitle style={{ padding: 10 }}>
          Categorias
        </StyledText>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            key={`${numColumns}`}
            numColumns={numColumns}
            keyExtractor={(elem) => elem.id}
            renderItem={(elem) => (
              <Categories elem={elem.item} updData={updData} />
            )}
          />
        </View>
      </View> */}
    </View>
  );
};

export default AddCuenta;
