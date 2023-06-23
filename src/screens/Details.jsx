import React from "react";
import { View, FlatList, Text } from "react-native";
import TableData from "../subComponentes/TableData";
import TableContent from "../subComponentes/TableContent";

const Details = ({ route }) => {
  const { specificBills } = route.params;
  const dataView = () => {
    return (
      <FlatList
        data={specificBills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TableContent {...item} />}
      />
    );
  };

  return (
    <View>
      <TableData dataContent={dataView()} />
    </View>
  );
};

export default Details;
