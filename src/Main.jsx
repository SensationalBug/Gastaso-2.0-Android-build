import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from "react-native";
import { DatabaseContext } from "./context/DatabaseContext";
import Navigationview from "./subComponentes/NavigationView";
const Main = () => {
  const { createdDB } = useContext(DatabaseContext);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    requestPermission();
  });

  return (
    <View style={{ flex: 1 }}>
      {hasPermission ? (
        <Navigationview />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#122e49",
          }}
        >
          <ActivityIndicator size={50}/>
        </View>
      )}
    </View>
  );
};

export default Main;
