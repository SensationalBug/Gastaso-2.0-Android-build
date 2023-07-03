import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { DetailTableStyles, HistoryStyles } from "../Styles/GlobalStyles";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const HistoryDataHeader = ({ selectGastos, historyDataContent }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [historyDataContent]);

  const reloadInfo = () => {
    selectGastos();
    setLoading(true);
  };
  
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#122e49",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 40 }}>Historial Global</Text>
        <TouchableOpacity
          style={DetailTableStyles.delButton}
          onPress={() => reloadInfo()}
        >
          <Icon size={30} color="#fff" name="ccw" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ flexDirection: "row", backgroundColor: "#122e49" }}>
          <Text style={HistoryStyles.headerStyles}>Concepto</Text>
          <Text style={HistoryStyles.headerStyles}>Monto</Text>
          <Text style={HistoryStyles.headerCategory}>Cat.</Text>
          <Text style={HistoryStyles.headerStyles}>Fecha/Hora</Text>
        </View>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#122e49"
            style={{ height: "50%" }}
          />
        ) : (
          historyDataContent
        )}
      </View>
    </View>
  );
};

export default HistoryDataHeader;
