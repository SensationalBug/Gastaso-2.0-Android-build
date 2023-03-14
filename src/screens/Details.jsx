import React from "react";
import datos from "../subComponentes/data";
import { View, FlatList } from "react-native";
import TableData from "../subComponentes/TableData";
import TableContent from "../subComponentes/TableContent";

const Details = () => {
  const dataView = () => {
    return (
      <FlatList
        data={datos}
        renderItem={({ item }) => <TableContent {...item}/>}
        keyExtractor={(item) => item.id}
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
