import Icon from "react-native-vector-icons/Entypo";
import { BillsContext } from "../context/BillsContext";
import { Pressable } from "@react-native-material/core";
import { View, Text, TouchableOpacity } from "react-native";
import { HomePressableStyles } from "../Styles/GlobalStyles";
import { DatabaseContext } from "../context/DatabaseContext";
import React, { useContext, useEffect, useState } from "react";
import { AccountsContext } from "../context/AccountsContext";

const HomePressable = (props) => {
  const { elem, formatter, navigation, accountType } = props;
  const { producto, monto_inicial, id_tipo_cuenta, id } = elem;
  const {
    specificBills,
    selectBillType,
    isBillSelected,
    selectSpecificGastos,
  } = useContext(BillsContext);
  const { accounts } = useContext(AccountsContext);
  const [montoFinal, setMontoFinal] = useState(monto_inicial);
  const { getBills, selectGastosDB } = useContext(DatabaseContext);

  useEffect(() => {
    if (isBillSelected) {
      selectGastosDB();
      navigation.navigate("Detalles", { newBills: [...specificBills] });
    } else {
      navigation.navigate("Main");
    }
  }, [isBillSelected]);

  useEffect(() => {
    setMontoFinal(monto_inicial);
    getBillAmount();
  }, [id, getBills, accounts]);

  const getBillAmount = () => {
    let total = monto_inicial;
    getBills.map((item) => {
      if (id === item.id_cuenta) {
        if (item.id_tipo_gasto === 1) {
          total -= item.monto;
        } else {
          total += item.monto;
        }
      }
    });
    setMontoFinal(total);
  };

  return (
    <Pressable
      onPress={() => {
        selectSpecificGastos(id);
      }}
      style={HomePressableStyles.pressable}
    >
      <View style={HomePressableStyles.pressableView}>
        <View style={{ width: "80%" }}>
          <View>
            <Text style={HomePressableStyles.productInfo}>{producto}</Text>
          </View>
          <View style={HomePressableStyles.productContianer}>
            <Text style={HomePressableStyles.productType}>
              {accountType[id_tipo_cuenta - 1].label}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: montoFinal < 0 ? "red" : "#ffffff",
                paddingVertical: 4.5,
                textTransform: "uppercase",
              }}
            >
              {formatter.format(montoFinal)}
            </Text>
          </View>
        </View>
        <View style={HomePressableStyles.modalButtons}>
          <TouchableOpacity
            style={HomePressableStyles.addButton}
            onPress={() => {
              selectBillType();
              navigation.navigate("Añadir gasto", {
                elem,
                gasto: 2,
              });
            }}
          >
            <Icon size={25} name="plus" color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={HomePressableStyles.delButton}
            onPress={() => {
              selectBillType();
              navigation.navigate("Añadir gasto", {
                elem,
                gasto: 1,
              });
            }}
          >
            <Icon size={25} name="minus" color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default HomePressable;
