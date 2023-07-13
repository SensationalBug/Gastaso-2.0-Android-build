import React from "react";
import { Alert, Text } from "react-native";
import Toast from "react-native-toast-message";
import { Pressable } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";

export const AddCategoriasPressable = (props) => {
  const { item, deteleCategory } = props;
  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar la categoría ${item.item.nombre} ?`,
      [
        {
          text: "Si",
          onPress: () => {
            if (item.item.id < 10) {
              Toast.show({
                type: "info",
                text1: "Esta es una categoria por defecto.",
              });
            } else {
              deteleCategory(item.item.id);
            }
          },
        },
        { text: "No", style: "cancel" },
      ]
    );
  };

  return (
    <Pressable
      onLongPress={() => showAlert()}
      style={{
        height: 100,
        width: "30%",
        margin: "1.65%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#20a5d8",
      }}
    >
      <Icon size={25} name={item.item.icon} color="#ffffff" />
      <Text style={{ fontSize: 20, marginVertical: 5, color: "#ffffff" }}>
        {item.item.nombre}
      </Text>
    </Pressable>
  );
};
