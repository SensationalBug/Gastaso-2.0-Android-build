import Home from "../screens/Home";
import Cuentas from "../screens/Cuentas";
import Historial from "../screens/Historial";
import Categorias from "../screens/Categorias";
import { useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { LocationContext } from "../context/LocationContext";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const NavigationView = () => {
  const layout = useWindowDimensions();
  const { handleLocation } = useContext(LocationContext);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Inicio", title: "Inicio" },
    { key: "Cuentas", title: "Cuentas" },
    { key: "Categorias", title: "Categorias" },
    { key: "Historial", title: "Historial" },
  ]);

  const renderScene = SceneMap({
    Inicio: Home,
    Cuentas: Cuentas,
    Categorias: Categorias,
    Historial: Historial,
  });

  const getTabBarIcon = (props) => {
    const { route } = props;
    if (route.key === "Inicio") {
      return <Icon name="home" size={30} color={"#ffffff"} />;
    } else if (route.key === "Cuentas") {
      return <Icon name="wallet" size={30} color={"#ffffff"} />;
    } else if (route.key === "Categorias") {
      return <Icon name="list" size={30} color={"#ffffff"} />;
    } else if (route.key === "Historial") {
      return <Icon name="archive" size={30} color={"#ffffff"} />;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      inactiveColor="#454545"
      renderIcon={(props) => getTabBarIcon(props)}
      indicatorStyle={{ backgroundColor: "#ffffff" }}
      labelStyle={{ fontSize: 12, textTransform: "capitalize" }}
      style={{ backgroundColor: "#122e49", paddingVertical: 10 }}
    />
  );

  return (
    <TabView
      tabBarPosition="bottom"
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      initialLayout={{ width: layout.width }}
      onSwipeStart={() => handleLocation(routes[index].title)}
    />
  );
};

export default NavigationView;
