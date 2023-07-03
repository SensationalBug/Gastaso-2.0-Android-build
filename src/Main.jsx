import React, { useContext } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import Navigationview from "./subComponentes/NavigationView";
import { DatabaseContext } from "./context/DatabaseContext";

const Main = () => {
  const { createdDB, get } = useContext(DatabaseContext);
  return (
    <View style={{ flex: 1 }}>
      {createdDB ? (
        <Navigationview />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#122e49",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default Main;
