import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import StyledText from "../subComponentes/StyledText";
import Categories from "../subComponentes/Categories";
import data from "../subComponentes/data";

const AddCuenta = () => {
  const [numColumns] = useState(4);
  const [activeButton, setActiveButton] = useState({
    active: false,
    opacity: 1,
    value: "Efectivo",
  });
  return (
    <View style={{ flex: 1 }}>
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
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={{ padding: 15, flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 20 }}>Monto inicial</Text>
          <TextInput
            keyboardType="numeric"
            maxLength={7}
            style={{
              fontSize: 30,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "90%",
              paddingLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              if (activeButton.active) {
                setActiveButton({ active: false });
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
              opacity: activeButton.active ? activeButton.opacity : 0.5,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Efectivo</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (!activeButton.active) {
                setActiveButton({ active: true });
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
              opacity: !activeButton.active ? activeButton.opacity : 0.5,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tarjeta</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <StyledText mainTitle style={{ padding: 10 }}>
          Categorias
        </StyledText>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            key={`${numColumns}`}
            numColumns={numColumns}
            keyExtractor={(elem) => elem.id}
            renderItem={(elem) => <Categories elem={elem.item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default AddCuenta;
