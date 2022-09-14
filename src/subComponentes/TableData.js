import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "@react-native-material/core";

const TableData = (props) => {
  const { data } = props;
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tableHead}>Fecha</Text>
        <Text style={styles.tableHead}>Concepto</Text>
        <Text style={styles.tableHead}>Monto</Text>
        <Text style={styles.delHeadButton}></Text>
      </View>
      <ScrollView>
        {data.map((item) => {
          const { id, fecha, concepto, monto } = item;
          return (
            <View key={id} style={{ flexDirection: "row" }}>
              <Text style={styles.tableBody}>{fecha}</Text>
              <Text style={styles.tableBody}>{concepto}</Text>
              <Text style={styles.tableBody}>{monto}</Text>
              <TouchableOpacity
                style={styles.delBodyButton}
                onPress={() => console.log(id)}
              >
                <Text style={{ textAlign: "center" }}>Si</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tableHead: {
    fontSize: 20,
    width: "30%",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#122e49",
  },
  delHeadButton: {
    width: "10%",
    backgroundColor: "#122e49",
  },
  tableBody: {
    fontSize: 18,
    width: "30%",
    color: "#fff",
    borderWidth: 1,
    paddingVertical: 8,
    textAlign: "center",
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
  delBodyButton: {
    width: "10%",
    borderWidth: 1,
    paddingVertical: 8,
    textAlign: "center",
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
});

export default TableData;
