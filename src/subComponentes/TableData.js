import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { DetailTableStyles } from "../Styles/GlobalStyles";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const TableData = ({ dataContent }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [dataContent]);
  return (
    <View>
      <View style={DetailTableStyles.addCuentaContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={DetailTableStyles.addCategoriaText}>Detalles</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#122e49" }}>
        <Text style={DetailTableStyles.tableHead}>Concepto</Text>
        <Text style={DetailTableStyles.tableHead}>Monto</Text>
      </View>
      {loading ? (
        <ActivityIndicator
          style={{  height: "50%" }}
          size="large"
          color="#122e49"
        />
      ) : (
        dataContent
      )}
    </View>
  );
};

export default TableData;
