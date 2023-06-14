import React, { useState } from "react";
import Home from "../screens/Home";
import Cuentas from "../screens/Cuentas";
import Consulta from "../screens/Consulta";
import { useWindowDimensions } from "react-native";
import Recordatorios from "../screens/Recordatorios";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const renderScene = SceneMap({
  first: Home,
  second: Cuentas,
  third: Recordatorios,
  fourth: Consulta,
});

const NavigationView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    // { key: "first", title: "Inicio" },
    { key: "second", title: "Cuentas" },
    // { key: "third", title: "Categorias" },
    // { key: "fourth", title: "Histórico" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      inactiveColor="#666666"
      labelStyle={{ fontSize: 12 }}
      indicatorStyle={{ backgroundColor: "#ffffff" }}
      style={{ backgroundColor: "#122e49", paddingVertical: 10 }}
    />
  );

  return (
    <TabView
      tabBarPosition="bottom"
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      renderScene={renderScene}
      navigationState={{ index, routes }}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default NavigationView;
