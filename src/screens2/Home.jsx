import React, { useContext } from "react";
import { HomeStyles } from "../Styles/GlobalStyles";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomePressable from "../subComponentes2/HomePressable";
// import { AccountsContext } from "../context/AccountsContext";

const Home = () => {
  const navigation = useNavigation();
  // const { accounts, formatter, accountType } = useContext(AccountsContext);

  return (
    <View style={HomeStyles.home}>
      <View style={HomeStyles.welcomeUser}>
        <Text style={HomeStyles.mainTitle}>Bienvenido.</Text>
      </View>
      <HomePressable />
      <HomePressable />
      <HomePressable />
      <HomePressable />
    </View>
  );
};

export default Home;
