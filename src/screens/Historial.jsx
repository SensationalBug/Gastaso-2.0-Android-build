import { View } from "react-native";
import { BillsContext } from "../context/BillsContext";
import { FlatList } from "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
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
        renderItem={(item) => <HistoryDataContent item={item} />}
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
