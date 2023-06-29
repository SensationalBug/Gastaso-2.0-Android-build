import Icon from "react-native-vector-icons/Entypo";
import { BillsContext } from "../context/BillsContext";
import { useNavigation } from "@react-navigation/native";
import { DetailTableStyles } from "../Styles/GlobalStyles";
import { AccountsContext } from "../context/AccountsContext";
import { DatabaseContext } from "../context/DatabaseContext";
import React, { useContext, useEffect, useState } from "react";
import { CateogiesContext } from "../context/CategoriesContext";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const TableContent = (props) => {
  const navigation = useNavigation();

  const { id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha, id } =
    props.item;

  const { formatter } = useContext(AccountsContext);
  const { categories } = useContext(CateogiesContext);
  const { selectGastosDB } = useContext(DatabaseContext);
  const { deleteBill, specificBills, isPromise, setIsPromise } =
    useContext(BillsContext);

  const [selectedCategory, setSelectedCategory] = useState("");

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
            selectGastosDB();
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

  const toggleShowMore = () => {
    showInfo.show
      ? setShowInfo({ opacity: 0, height: 0, show: false })
      : setShowInfo({ opacity: 1, flex: 1, show: true });
  };

  const selectedCategoryName = () => {
    categories.map((elem) => {
      if (elem.id === id_categoria) {
        setSelectedCategory(elem.nombre);
      }
    });
  };

  return (
    <View style={{ borderLeftWidth: 1, borderBottomWidth: 1 }}>
      <View
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
        <TouchableOpacity
          style={DetailTableStyles.delButton}
          onPress={() => {
            toggleShowMore();
            selectedCategoryName();
          }}
        >
          <Icon
            size={20}
            color="#fff"
            name={showInfo.show ? "triangle-up" : "triangle-down"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: showInfo.height,
          backgroundColor: id_tipo_gasto === 1 ? "#F24C3D" : "#1F8A70",
        }}
      >
        <Text style={DetailTableStyles.table}>{fecha.split("T")[0]}</Text>
        <Text style={DetailTableStyles.table}>{selectedCategory}</Text>
        <TouchableOpacity
          style={DetailTableStyles.delButton}
          onPress={() => showAlert()}
        >
          <Icon size={20} color="#fff" name="trash" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableContent;
