import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AccountsContext } from "../context/AccountsContext";
import { HistoryStyles } from "../Styles/GlobalStyles";
import { CateogiesContext } from "../context/CategoriesContext";
import Icon from "react-native-vector-icons/FontAwesome";

const HistoryDataContent = ({ item }) => {
  const { concepto, fecha, monto, id_tipo_gasto, id_categoria, id_cuenta } =
    item.item;
  const { formatter } = useContext(AccountsContext);
  const { categories } = useContext(CateogiesContext);
  const [selectedIconName, setSelectedIconName] = useState("");

  const getIconName = () => {
    categories.map((elem) => {
      if (elem.id === id_categoria) {
        setSelectedIconName(elem.icon);
      }
    });
  };

  useEffect(() => {
    getIconName();
  }, []);

  return (
    <View>
      <View
        key={id_cuenta}
        style={{
          flexDirection: "row",
          backgroundColor: id_tipo_gasto === 1 ? "#F24C3D" : "#1F8A70",
        }}
      >
        <Text style={HistoryStyles.contentStyle}>{concepto}</Text>
        <Text style={HistoryStyles.contentStyle}>
          {formatter.format(monto)}
        </Text>
        <Icon size={15}
          name={selectedIconName}
          style={HistoryStyles.contentStyleCategory}
        />
        <Text style={HistoryStyles.contentStyle}>{`${fecha.split("T")[0]}/${
          fecha.split("T")[1]
        }`}</Text>
      </View>
    </View>
  );
};

export default HistoryDataContent;
