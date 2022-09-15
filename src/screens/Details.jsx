import React from "react";
import data from "../subComponentes/data";
import styles from "../subComponentes/Styles";
import TableData from "../subComponentes/TableData";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "../subComponentes/StyledText";
import { ScrollView, TouchableOpacity, View } from "react-native";

const Details = () => {
  const dataView = () => {
    return (
      <ScrollView>
        {data.map((item) => {
          const { id, fecha, concepto, monto } = item;
          return (
            <View key={id} style={{ flexDirection: "row" }}>
              <StyledText style={styles.tableBody}>{fecha}</StyledText>
              <StyledText style={styles.tableBody}>{concepto}</StyledText>
              <StyledText style={styles.tableBody}>{monto}</StyledText>
              <TouchableOpacity
                style={styles.delBodyButton}
                onPress={() => console.log(id)}
              >
                <Icon style={styles.delBodyButtonIcon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View>
      <TableData dataContent={dataView()} />
    </View>
  );
};

export default Details;
