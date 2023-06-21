import React, { useContext } from "react";
import { HomeStyles } from "../Styles/GlobalStyles";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomePressable from "../subComponentes/HomePressable";
import { AccountsContext } from "../context/AccountsContext";

const Home = () => {
  const navigation = useNavigation();
  const { accounts, formatter } = useContext(AccountsContext);

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
    </View>
  );
};

export default Home;
