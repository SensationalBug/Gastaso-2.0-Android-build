import Icon from "react-native-vector-icons/Entypo";
import { Pressable } from "@react-native-material/core";
import { View, Text, TouchableOpacity } from "react-native";
import { HomePressableStyles } from "../Styles/GlobalStyles";
import React, { useContext, useEffect, useState } from "react";

const HomePressable = () => {
  return (
    <Pressable style={HomePressableStyles.pressable}>
      <View style={HomePressableStyles.pressableView}>
        <View style={{ width: "80%" }}>
          <View>
            <Text style={HomePressableStyles.productInfo}>Producto</Text>
          </View>
          <View style={HomePressableStyles.productContianer}>
            <Text style={HomePressableStyles.productType}>
              Tipo de cuenta
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: "#ffffff",
                paddingVertical: 4.5,
                textTransform: "uppercase",
              }}
            >
              Monto
            </Text>
          </View>
        </View>
        <View style={HomePressableStyles.modalButtons}>
          <TouchableOpacity style={HomePressableStyles.addButton}>
            <Icon size={25} name="plus" color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={HomePressableStyles.delButton}>
            <Icon size={25} name="minus" color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default HomePressable;
