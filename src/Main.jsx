import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { DatabaseContext } from "./context/DatabaseContext";
import Navigationview from "./subComponentes/NavigationView";

const Main = () => {
  const { createdDB } = useContext(DatabaseContext);
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
