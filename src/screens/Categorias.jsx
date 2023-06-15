import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { CateogiesContext } from "../context/CategoriesContext";
import { Pressable } from "@react-native-material/core";

const Recordatorios = () => {
  const { selectCategory, categories } = useContext(CateogiesContext);
  console.log(selectCategory());
  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log(categories)}
        style={{ backgroundColor: "blue", padding: 30 }}
      >
        <Text>SELECT</Text>
      </TouchableOpacity>
      <Pressable
        style={{
          padding: 10,
          flexDirection: "row",
          backgroundColor: "#20a5d8",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{categories[0].nombre}</Text>
      </Pressable>
    </View>
  );
};

export default Recordatorios;
