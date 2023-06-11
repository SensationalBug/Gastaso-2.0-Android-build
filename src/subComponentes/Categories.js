import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity } from "react-native";

const Categories = (props) => {
  const { elem } = props;
  return (
    <View style={{ width: "25%", flex: 1 }}>
      <TouchableOpacity
        style={{
          margin: 5,
          height: 100,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F9FD0",
        }}
      >
        <Icon size={30} name={elem.icon} />
        <Text style={{ fontSize: 18 }}>{elem.concepto}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
