import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity } from "react-native";

const Categories = (props) => {
  const { elem, updData } = props;
  const [disabled, setDisabled] = useState(elem.disabled);
  const makeDisabled = (id) => (elem.id == id ? setDisabled(!disabled) : null);

  return (
    <View style={{ width: "25%", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          makeDisabled(elem.id, elem.disabled);
          !disabled
            ? updData(elem.concepto, "categoria")
            : updData("", "categoria");
        }}
        style={{
          margin: 5,
          height: 100,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: disabled ? "#122e49" : "#1F9FD0",
        }}
      >
        <Icon size={30} name={elem.icon} />
        <Text style={{ fontSize: 18 }}>{elem.concepto}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
