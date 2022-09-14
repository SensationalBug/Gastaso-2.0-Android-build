import React from "react";
import { View } from "react-native";
import TableData from "./subComponentes/TableData";
import data from "./subComponentes/data";

const Details = () => {
  return (
    <View>
      <TableData data={data} />
    </View>
  );
};

export default Details;
