import Toast from "react-native-toast-message";
import { FAB } from "@react-native-material/core";
import React, { useContext, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { DatabaseContext } from "../context/DatabaseContext";
import { CateogiesContext } from "../context/CategoriesContext";
import { View, Text, TextInput, useWindowDimensions } from "react-native";
import { AddCategoriasPressable } from "../subComponentes/AddCategoriasPressable";

const Recordatorios = () => {
  const layout = useWindowDimensions();
  const { categories, insertCategory, deteleCategory } =
    useContext(CateogiesContext);
  const { toastConfig } = useContext(DatabaseContext);

  const [newCategoria, setNewCategoria] = useState("");

  const insertNewCategory = () => {
    if (newCategoria) {
      insertCategory(newCategoria);
      setNewCategoria("");
    } else {
      Toast.show({
        type: "error",
        text1: "Ingresa el nombre de la categoría",
      });
    }
  };

  return (
    <View>
      <View
        style={{
          padding: 15,
          justifyContent: "center",
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
            <Text style={{ fontSize: 20 }}>Nombre de la categoría</Text>
            <TextInput
              value={newCategoria}
              onChangeText={(value) => setNewCategoria(value)}
              style={{
                fontSize: 30,
                width: "100%",
                paddingTop: 2,
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
            <FAB
              color="#122e49"
              onPress={() => insertNewCategory()}
              style={{ padding: 5, borderRadius: 50 }}
              icon={(props) => <Icon name="plus" {...props} color="#ffffff" />}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          height: layout.height - 170,
        }}
      >
        <Text
          style={{
            width: "90%",
            fontSize: 30,
            marginVertical: 10,
            textAlign: "justify",
          }}
        >
          Categorias disponibles
        </Text>
        <FlatList
          numColumns={3}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <AddCategoriasPressable
              item={item}
              deteleCategory={deteleCategory}
            />
          )}
        />
      </View>
      <Toast config={toastConfig} />
    </View>
  );
};

export default Recordatorios;
