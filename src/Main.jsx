import Home from "./Home";
import React, { useRef } from "react";
import NavigationView from "./subComponentes/NavigationView";
import { View, DrawerLayoutAndroid } from "react-native";
import { AppBar } from "@react-native-material/core";

const Main = () => {
  const drawerWindow = useRef();
  const navigationView = () => <NavigationView />;

  return (
    <DrawerLayoutAndroid
      ref={drawerWindow}
      drawerWidth={300}
      drawerBackgroundColor="#122e49"
      renderNavigationView={navigationView}
    >
      <View>
        <AppBar
          titleStyle={{
            fontSize: 30,
            textAlign: "center",
            textTransform: "uppercase",
          }}
          subtitleStyle={{
            left: -10,
            position: "absolute",
          }}
          title="Gastaso"
          subtitle="Swipe >>>"
          color="#122e49"
        />
        <Home />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Main;
