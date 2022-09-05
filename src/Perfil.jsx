import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AppBar, IconButton } from "@react-native-material/core";

const Perfil = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text>Perfil Page</Text>
    </View>
  );
};

export default Perfil;
