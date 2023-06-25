import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { AccountsContext } from "../context/AccountsContext";
import { CateogiesContext } from "../context/CategoriesContext";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BillsContext } from "../context/BillsContext";

const TableContent = (props) => {
  const { id_cuenta, id_tipo_gasto, id_categoria, concepto, monto, fecha, id } =
    props;
  const { formatter } = useContext(AccountsContext);
  const { categories } = useContext(CateogiesContext);
  const { deleteBill } = useContext(BillsContext);
  const [showInfo, setShowInfo] = useState({
    show: false,
    opacity: 0,
    height: 0,
  });

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar el gasto ${concepto} ?`,
      [
        {
          text: "Si",
          onPress: () => deleteBill(id),
        },
        { text: "No", style: "cancel" },
      ]
    );
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
        <Text style={styles.tableBody}>{concepto}</Text>
        <Text style={styles.tableBody}>{formatter.format(monto)}</Text>
        <TouchableOpacity
          style={styles.delBodyButton}
          onPress={() => {
            showInfo.show
              ? setShowInfo({ opacity: 0, height: 0, show: false })
              : setShowInfo({ opacity: 1, flex: 1, show: true });
          }}
        >
          <Icon
            size={20}
            color="#fff"
            name={showInfo.show ? "chevron-thin-up" : "chevron-thin-down"}
            style={styles.delBodyButtonIcon}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: showInfo.height,
          opacity: showInfo.opacity,
          backgroundColor: id_tipo_gasto === 1 ? "#F24C3D" : "#1F8A70",
        }}
      >
        <Text style={styles.tableBody}>Fecha: {fecha.split("T")[0]}</Text>
        <Text style={styles.tableBody}>
          {/* C: {categories[id_categoria - 1].nombre} */}
        </Text>
        <TouchableOpacity
          style={styles.delBodyButton}
          onPress={() => {
            showAlert();
            console.log(categories, id_categoria)
          }}
        >
          <Icon
            size={20}
            color="#fff"
            name="trash"
            style={styles.delBodyButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableContent;

const styles = StyleSheet.create({
  tableBody: {
    fontSize: 20,
    width: "45%",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    borderColor: "#122e49",
    verticalAlign: "middle",
  },
  delBodyButton: {
    width: "10%",
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#122e49",
    justifyContent: "center",
  },
});
