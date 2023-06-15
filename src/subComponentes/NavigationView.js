import Home from "../screens/Home";
import Cuentas from "../screens/Cuentas";
import Consulta from "../screens/Consulta";
import Categorias from "../screens/Categorias";
import { useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const NavigationView = () => {
  const layout = useWindowDimensions();
  const { handleLocation } = useContext(LocationContext);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    // { key: "first", title: "Inicio" },
    // { key: "second", title: "Cuentas" },
    { key: "third", title: "Categorias" },
    // { key: "fourth", title: "Histórico" },
  ]);

  const renderScene = SceneMap({
    first: Home,
    second: Cuentas,
    third: Categorias,
    fourth: Consulta,
  });

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
      onSwipeStart={() => handleLocation(routes[index].title)}
      tabBarPosition="bottom"
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default NavigationView;
