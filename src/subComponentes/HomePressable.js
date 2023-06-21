import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Pressable } from "@react-native-material/core";
import { View, Text, TouchableOpacity } from "react-native";
import { HomePressableStyles } from "../Styles/GlobalStyles";

const HomePressable = ({ elem, formatter, navigation }) => {
  const { producto, monto, tipo, tipoTarjeta } = elem;
  return (
    <Pressable delayLongPress={400} style={HomePressableStyles.pressable}>
      <View style={HomePressableStyles.pressableView}>
        <View style={{ width: "80%" }}>
          <View>
            <Text style={HomePressableStyles.productInfo}>{producto}</Text>
          </View>
          <View style={HomePressableStyles.productContianer}>
            <Text style={HomePressableStyles.productType}>{tipo}</Text>
            <Text style={HomePressableStyles.productType}>
              {tipo === "Tarjeta" ? ` -> ${tipoTarjeta}` : null}
            </Text>
          </View>
          <View>
            <Text style={HomePressableStyles.productInfo}>
              {formatter.format(monto)}
            </Text>
          </View>
        </View>
        <View style={HomePressableStyles.modalButtons}>
          <TouchableOpacity
            style={HomePressableStyles.addButton}
            onPress={() =>
              navigation.navigate("Añadir gasto", {
                elem,
                gasto: "+",
              })
            }
          >
            <Icon size={25} name="plus" color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={HomePressableStyles.delButton}
            onPress={() =>
              navigation.navigate("Añadir gasto", {
                elem,
                gasto: "-",
              })
            }
          >
            <Icon size={25} name="minus" color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default HomePressable;
