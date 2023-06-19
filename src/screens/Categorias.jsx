import React, { useContext, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { FAB, Pressable } from "@react-native-material/core";
import { SelectList } from "react-native-dropdown-select-list";
import { CateogiesContext } from "../context/CategoriesContext";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const Recordatorios = () => {
  const layout = useWindowDimensions();
  const { selectCategory, categories, insertCategory } =
    useContext(CateogiesContext);

  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
    { key: "8", value: "Furniture" },
    { key: "9", value: "Books" },
    { key: "10", value: "Clothing" },
  ];

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
            <Text style={{ fontSize: 20 }}>Nombre</Text>
            <TextInput
              maxLength={15}
              onChangeText={(value) => updData(value, "producto")}
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
              icon={(props) => <Icon name="plus" {...props} />}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <View>
          <Text style={{ fontSize: 20, marginVertical: 5 }}>Icono</Text>
          <SelectList
            data={data}
            save="value"
            search={false}
            maxHeight={200}
            setSelected={(value) => setSelected(value)}
          />
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        ></View>
      </View>

      <View style={{ alignItems: "center", height: layout.height - 300 }}>
        <FlatList
          numColumns={3}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <Pressable
              onPress={() => console.log(selected)}
              style={{
                height: 80,
                width: 100,
                margin: 10,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#20a5d8",
              }}
            >
              <Icon size={25} name={item.item.iconName} />
              <Text style={{ fontSize: 20, marginVertical: 5 }}>
                {item.item.nombre}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Recordatorios;
