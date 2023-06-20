import React from "react";
import { Alert, Text } from "react-native";
import { Pressable } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";

export const AddCategoriasPressable = (props) => {
  const {
    item,
    deteleCategory,
    selectedButtonId,
    dropDownAlertRef,
    setSelectedButtonId,
  } = props;

  const makeDisabled = (id) =>
    selectedButtonId === id
      ? setSelectedButtonId(null)
      : setSelectedButtonId(id);

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar la categoría ${item.item.nombre} ?`,
      [
        {
          text: "Si",
          onPress: () => {
            if (item.item.id < 10) {
              dropDownAlertRef.current.alertWithType(
                "info",
                "System Info",
                "No se pueden borrar las categorias por defecto."
              );
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
      // onPress={() => {
      //   makeDisabled(item.item.id);
      //   updData(item.item.nombre, "icon");
      // }}
      style={{
        height: 100,
        width: "30%",
        margin: "1.65%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#20a5d8",
        // opacity: selectedButtonId === item.item.id ? 0.3 : 1,
      }}
    >
      <Icon size={25} name={item.item.iconName} color="#ffffff"/>
      <Text style={{ fontSize: 20, marginVertical: 5, color:"#ffffff" }}>
        {item.item.nombre}
      </Text>
    </Pressable>
  );
};
