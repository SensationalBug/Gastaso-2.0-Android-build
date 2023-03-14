import React from "react";
import styles from "./Styles";
import { View } from "react-native";
import StyledText from "./StyledText";
import Icon from "react-native-vector-icons/Entypo";

const TableData = (props) => {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ flexDirection: "row" }}>
        <StyledText style={styles.tableHead}>Fecha</StyledText>
        <StyledText style={styles.tableHead}>Concepto</StyledText>
        <StyledText style={styles.tableHead}>Monto</StyledText>
        <StyledText style={styles.delHeadButton}>
          <Icon style={styles.delBodyButtonIcon} name="trash" />
        </StyledText>
      </View>
      {props.dataContent}
    </View>
  );
};

export default TableData;
