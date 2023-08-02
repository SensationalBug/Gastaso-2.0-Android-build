import React, { useContext, useEffect } from "react";
import { DatabaseContext } from "./context/DatabaseContext";
import Navigationview from "./subComponentes/NavigationView";
import { View, ActivityIndicator, PermissionsAndroid } from "react-native";
const Main = () => {
  const { selectFlags, getInfo } = useContext(DatabaseContext);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          selectFlags();
        }
      } catch (err) {
        console.log(err);
      }
    };
    requestPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {getInfo ? (
        <Navigationview />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#122e49",
          }}
        >
          <ActivityIndicator size={50} />
        </View>
      )}
    </View>
  );
};

export default Main;
