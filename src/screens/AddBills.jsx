import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { AddCuentaStyles } from "../Styles/GlobalStyles";
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Pressable } from "@react-native-material/core";
import { BillsContext } from "../context/BillsContext";
import { CateogiesContext } from "../context/CategoriesContext";

const AddBills = ({ navigation, route }) => {
  const layout = useWindowDimensions();
  const { params, gasto } = route;
  const { elem } = params;
  const [billData, setBillData] = useState({
    descripcion: "",
    monto: "",
    fecha: "",
    cuenta_id: elem.id,
    categoria_id: "",
  });
  const { insertBill } = useContext(BillsContext);
  const { categories } = useContext(CateogiesContext);
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const updData = (value, fieldName) => {
    const fecha = new Date();
    const fullDate = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()}T${fecha.getHours()}:${fecha.getMinutes()}`;
    setBillData((prevState) => ({ ...prevState, fecha: fullDate }));
    setBillData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const makeDisabled = (id) =>
    selectedButtonId === id
      ? setSelectedButtonId(null)
      : setSelectedButtonId(id);

  return (
    <View>
      <View style={AddCuentaStyles.addCuentaContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={AddCuentaStyles.addCategoriaText}>Añadir gasto</Text>
      </View>
      <View
        style={{
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Text style={AddCuentaStyles.productFontSize}>Producto</Text>
        <TextInput
          maxLength={15}
          value={billData.descripcion}
          style={AddCuentaStyles.productTextInput}
          onChangeText={(value) => updData(value, "descripcion")}
        />
      </View>
      <View style={AddCuentaStyles.montoContainer}>
        <View style={{ width: "60%" }}>
          <Text style={AddCuentaStyles.productFontSize}>Monto inicial</Text>
          <TextInput
            maxLength={9}
            keyboardType="numeric"
            value={billData.monto}
            style={{
              fontSize: 30,
              width: "100%",
              paddingTop: 2,
              paddingLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
            onChangeText={(value) => updData(value, "monto")}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 5,
            width: "40%",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#122e49",
          }}
          onPress={() => insertBill(billData)}
        >
          <Text style={{ color: "#ffffff", fontSize: 25 }}>Añadir</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: layout.height - 260 }}>
        <Text style={{ padding: 10, paddingVertical: 20, fontSize: 25 }}>
          Seleccione una categoria
        </Text>
        <FlatList
          numColumns={3}
          data={categories}
          renderItem={(item) => (
            <Pressable
              onPress={() => {
                makeDisabled(item.item.id);
                updData(item.item.id, "categoria_id");
              }}
              style={{
                height: 100,
                width: "30%",
                margin: "1.65%",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  selectedButtonId === item.item.id ? "#122e49" : "#20a5d8",
              }}
              disabled={selectedButtonId === item.item.id ? true : false}
            >
              <Icon size={25} name={item.item.iconName} color="#ffffff" />
              <Text
                style={{ fontSize: 20, marginVertical: 5, color: "#ffffff" }}
              >
                {item.item.nombre}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default AddBills;
