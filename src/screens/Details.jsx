import React from "react";
import { View, FlatList } from "react-native";
import TableData from "../subComponentes/TableData";
import TableContent from "../subComponentes/TableContent";

const Details = ({ route }) => {
  const { newBills } = route.params;
  const dataView = () => {
    return (
      <FlatList
        data={newBills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TableContent item={item} />}
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
