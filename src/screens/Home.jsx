import React, { useContext, useEffect } from "react";
import { HomeStyles } from "../Styles/GlobalStyles";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomePressable from "../subComponentes/HomePressable";
import { AccountsContext } from "../context/AccountsContext";
import { BillsContext } from "../context/BillsContext";

const Home = () => {
  const navigation = useNavigation();
  const { accounts, formatter } = useContext(AccountsContext);
  const { drop, select } = useContext(BillsContext);

  return (
    <View style={HomeStyles.home}>
      <View style={HomeStyles.welcomeUser}>
        <Text style={HomeStyles.mainTitle}>Bienvenido.</Text>
      </View>
      <FlatList
        data={accounts}
        renderItem={(elem) => (
          <View style={HomeStyles.pressableContainer}>
            <HomePressable
              elem={elem.item}
              formatter={formatter}
              navigation={navigation}
            />
          </View>
        )}
      />
      {/* <TouchableOpacity
        onPress={() => select()}
        style={{ backgroundColor: "lightblue", padding: 50 }}
      >
        <Text>SELECT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => drop()}
        style={{ backgroundColor: "red", padding: 50 }}
      >
        <Text>DROP</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
