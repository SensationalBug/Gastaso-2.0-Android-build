import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const AddCuenta = () => {
  const [activeButton, setActiveButton] = useState({
    active: false,
    color: "#20a5d8",
    value: "Efectivo",
  });
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={10}>
      <View
        style={{
          justifyContent: "center",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>Nueva cuenta</Text>
        <TextInput
          style={{
            fontSize: 30,
            width: "100%",
            borderBottomColor: "red",
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View
        style={{ backgroundColor: "green", padding: 15, flexDirection: "row" }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 15 }}>Monto inicial</Text>
          <TextInput
            style={{
              fontSize: 30,
              borderBottomWidth: 1,
              borderBottomColor: "red",
              width: "90%",
            }}
          />
        </View>
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            disabled={!activeButton.active}
            style={{
              backgroundColor: activeButton.active ? activeButton.color : "red",
              height: 50,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Text>Efectivo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={activeButton.active}
            style={{
              backgroundColor: activeButton.color,
              height: 50,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}
          >
            <Text>Tarjeta</Text>
          </TouchableOpacity>
          {/* <RadioGroup color="#122e49" selectedIndex={0}>
            <RadioButton value="debito" style={{ alignItems: "center" }}>
              <StyledText style={{ color: "#122e49" }}>Efectivo</StyledText>
            </RadioButton>
            <RadioButton value="credito" style={{ alignItems: "center" }}>
              <StyledText style={{ color: "#122e49" }}>Tarjeta</StyledText>
            </RadioButton>
          </RadioGroup> */}
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "blue" }}></ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddCuenta;
