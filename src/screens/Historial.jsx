import React, { useContext, useEffect, useState } from "react";
import { BillsContext } from "../context/BillsContext";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DetailTableStyles, HomeStyles } from "../Styles/GlobalStyles";
import Icon from "react-native-vector-icons/Entypo";
import HistoryDataHeader from "../subComponentes/HistoryDataHeader";
import HistoryDataContent from "../subComponentes/HistoryDataContent";

const Historial = () => {
  const { bills, selectGastos } = useContext(BillsContext);
  const [getBills, setGetBills] = useState([]);

  useEffect(() => {
    setGetBills(bills);
  }, [bills]);

  const historyDataContent = () => {
    return (
      <FlatList
        data={getBills}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <HistoryDataContent item={item}/>}
      />
    );
  };
  return (
    <View>
      <HistoryDataHeader
        selectGastos={selectGastos}
        historyDataContent={historyDataContent()}
      />
    </View>
  );
};

export default Historial;

const styles = StyleSheet.create({
  historial: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  texto: { fontSize: 30, textAlign: "justify" },
});
