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
import DropdownAlert from "react-native-dropdownalert";
import { BillsContext } from "../context/BillsContext";
import { Pressable } from "@react-native-material/core";
import { CateogiesContext } from "../context/CategoriesContext";

const AddBills = ({ navigation, route }) => {
  const layout = useWindowDimensions();
  const { elem, gasto } = route.params;
  const [billData, setBillData] = useState({
    concepto: "",
    monto: "",
    fecha: "",
    id_categoria: "",
    id_cuenta: elem.id,
    id_tipo_gasto: gasto,
  });
  const { categories } = useContext(CateogiesContext);
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const { insertBill, dropDownAlertRef } = useContext(BillsContext);

  const updData = (value, fieldName) => {
    const fecha = new Date();
    const fullDate = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()}T${fecha.getHours()}:${fecha.getMinutes()}`;
    setBillData((prevState) => ({ ...prevState, fecha: fullDate }));
    setBillData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const clearFields = () => {
    setBillData({
      concepto: "",
      monto: "",
      fecha: "",
      id_categoria: "",
      id_cuenta: elem.id,
      id_tipo_gasto: gasto,
    });
    setSelectedButtonId(null);
  };

  const makeDisabled = (id) =>
    selectedButtonId === id
      ? setSelectedButtonId(null)
      : setSelectedButtonId(id);

  const validateInfo = () => {
    if (billData.concepto && billData.monto && billData.id_categoria) {
      clearFields();
      insertBill(billData);
    } else if (billData.concepto && billData.monto && !billData.id_categoria) {
      dropDownAlertRef.current.alertWithType(
        "error",
        "System Info",
        "Selecciona una categoría."
      );
    } else {
      dropDownAlertRef.current.alertWithType(
        "error",
        "System Info",
        "Rellena los todos los campos."
      );
    }
  };

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
          maxLength={25}
          value={billData.concepto}
          style={AddCuentaStyles.productTextInput}
          onChangeText={(value) => updData(value, "concepto")}
        />
      </View>
      <View style={AddCuentaStyles.montoContainer}>
        <View style={{ width: "60%" }}>
          <Text style={AddCuentaStyles.productFontSize}>Monto inicial</Text>
          <TextInput
            maxLength={9}
            keyboardType="numeric"
            value={billData.monto}
            style={AddCuentaStyles.productTextInput}
            onChangeText={(value) => updData(value, "monto")}
          />
        </View>
        <TouchableOpacity
          style={AddCuentaStyles.addFAB}
          onPress={() => validateInfo()}
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
                updData(item.item.id, "id_categoria");
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
              <Icon size={25} name={item.item.icon} color="#ffffff" />
              <Text
                style={{ fontSize: 20, marginVertical: 5, color: "#ffffff" }}
              >
                {item.item.nombre}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <DropdownAlert
        infoColor="#122e49"
        closeInterval={800}
        ref={dropDownAlertRef}
        titleStyle={{ fontSize: 30, color: "#ffffff" }}
        messageStyle={{ fontSize: 20, color: "#ffffff" }}
      />
    </View>
  );
};

export default AddBills;
