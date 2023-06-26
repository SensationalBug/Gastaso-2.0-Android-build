import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { AccountsContext } from "../context/AccountsContext";
import { CateogiesContext } from "../context/CategoriesContext";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { BillsContext } from "../context/BillsContext";
import { Pressable } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { DetailTableStyles } from "../Styles/GlobalStyles";

const TableContent = (props) => {
  const { id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha } =
    props.item;
  const navigation = useNavigation();
  const { formatter } = useContext(AccountsContext);
  const { categories } = useContext(CateogiesContext);
  const { deleteBill, specificBills, isPromise, setIsPromise } =
    useContext(BillsContext);
  const [showInfo, setShowInfo] = useState({
    show: false,
    height: 0,
  });

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar el gasto ${concepto} ?`,
      [
        {
          text: "Si",
          onPress: () => {
            deleteBill(props);
          },
        },
        { text: "No", style: "cancel" },
      ]
    );
  };

  useEffect(() => {
    if (isPromise) {
      navigation.replace("Detalles", { newBills: [...specificBills] });
      setIsPromise(false);
    }
  }, [isPromise]);

  return (
    <View style={{ borderLeftWidth: 1, borderBottomWidth: 1 }}>
      <Pressable
        onPress={() => {
          showInfo.show
            ? setShowInfo({ opacity: 0, height: 0, show: false })
            : setShowInfo({ opacity: 1, flex: 1, show: true });
        }}
        key={id_cuenta}
        style={{
          flexDirection: "row",
          backgroundColor: id_tipo_gasto === 1 ? "#F24C3D" : "#1F8A70",
        }}
      >
        <Text style={DetailTableStyles.table}>{concepto}</Text>
        <Text style={DetailTableStyles.tableProducto}>
          {formatter.format(monto)}
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          height: showInfo.height,
          backgroundColor: id_tipo_gasto === 1 ? "#F24C3D" : "#1F8A70",
        }}
      >
        <Text style={DetailTableStyles.table}>{fecha.split("T")[0]}</Text>
        <Text style={DetailTableStyles.table}>
          {categories[id_categoria - 1].nombre}
        </Text>
        <TouchableOpacity
          style={DetailTableStyles.delButton}
          onPress={() => {
            showAlert();
          }}
        >
          <Icon size={20} color="#fff" name="trash" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableContent;
