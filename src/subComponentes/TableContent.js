import React from "react";
import StyledText from "./StyledText";
import styles from "../subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity, View } from "react-native";

const TableContent = (props) => {
  const { id, concepto, monto } = props;
  return (
    <View key={id} style={{ flexDirection: "row" }}>
      <StyledText style={styles.tableBody}>{id}</StyledText>
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
};

export default TableContent;
