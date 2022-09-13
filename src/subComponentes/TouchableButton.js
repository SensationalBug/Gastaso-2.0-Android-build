import styles from "./Styles";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const TouchableButton = (props) => {
  const navigation = useNavigation();
  console.log(props.id);
  return (
    <TouchableOpacity
      style={styles.linkButton}
      onPress={() => {
        navigation.navigate(props.to);
      }}
    >
      <View style={styles.linkButtonContainer}>
        <Icon style={styles.buttonDrawerTextIcon} name={props.icon} />
        <Text style={styles.buttonDrawerText}>{props.tab}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableButton;
