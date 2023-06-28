import React from "react";
import TableData from "../subComponentes/TableData";
import TableContent from "../subComponentes/TableContent";
import { View, FlatList, useWindowDimensions } from "react-native";

const Details = ({ route }) => {
  const layout = useWindowDimensions();
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
    <View style={{ height: layout.height - 108 }}>
      <TableData dataContent={dataView()} />
    </View>
  );
};

export default Details;
