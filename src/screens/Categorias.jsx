import DropdownAlert from "react-native-dropdownalert";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useContext, useRef, useState } from "react";
import { FAB, Pressable } from "@react-native-material/core";
import { CateogiesContext } from "../context/CategoriesContext";
import { View, Text, TextInput, useWindowDimensions } from "react-native";
import { AddCategoriasPressable } from "../subComponentes/AddCategoriasPressable";

const Recordatorios = () => {
  const layout = useWindowDimensions();
  const {
    selectCategory,
    categories,
    insertCategory,
    dropDownAlertRef,
    deteleCategory,
    delAllCategory,
  } = useContext(CateogiesContext);

  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const [newCategoria, setNewCategoria] = useState("");

  const updData = (value) =>
    setNewCategoria((prevState) => ({ ...prevState, value }));

  const clearFields = () => {
    setNewCategoria("");
  };

  const insertNewCategory = () => {
    if (newCategoria) {
      insertCategory(newCategoria);
      setNewCategoria("");
    } else {
      dropDownAlertRef.current.alertWithType(
        "error",
        "System Info",
        "Ingresa el nombre de la categoría"
      );
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
          {/* <FAB icon={<Icon name="minus" onPress={() => delAllCategory()} />} /> */}
          <View style={{ width: "80%" }}>
            <Text style={{ fontSize: 20 }}>Nombre de la categoría</Text>
            <TextInput
              maxLength={15}
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
              color="#20a5d8"
              style={{ padding: 5, borderRadius: 50 }}
              onPress={() => insertNewCategory()}
              icon={(props) => <Icon name="plus" {...props} />}
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
              updData={updData}
              newCategoria={newCategoria}
              deteleCategory={deteleCategory}
              selectedButtonId={selectedButtonId}
              dropDownAlertRef={dropDownAlertRef}
              setSelectedButtonId={setSelectedButtonId}
            />
          )}
        />
      </View>
      <DropdownAlert
        infoColor="#20a5d8"
        titleStyle={{ fontSize: 30, color: "#ffffff" }}
        messageStyle={{ fontSize: 20, color: "#ffffff" }}
        ref={dropDownAlertRef}
      />
    </View>
  );
};

export default Recordatorios;
