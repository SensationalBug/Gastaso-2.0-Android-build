import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { BillsContext } from "../context/BillsContext";
import { Pressable } from "@react-native-material/core";
import { View, Text, TouchableOpacity } from "react-native";
import { HomePressableStyles } from "../Styles/GlobalStyles";

const HomePressable = (props) => {
  const [getBills, setGetBills] = useState({ debitos: 0, creditos: 0 });
  const { elem, formatter, navigation, accountType } = props;
  const { producto, monto_inicial, id_tipo_cuenta, id } = elem;
  const {
    bills,
    selectGastos,
    specificBills,
    selectBillType,
    isBillSelected,
    selectSpecificGastos,
  } = useContext(BillsContext);

  useEffect(() => {
    if (isBillSelected) {
      navigation.navigate("Detalles", { newBills: [...specificBills] });
      selectGastos();
    } else {
      navigation.navigate("Main");
    }
  }, [isBillSelected]);

  const getAllBills = () => {
    const totalDebitos = bills.reduce((accumulator, elem) => {
      return accumulator + elem.monto;
    }, 0);
    console.log(bills);
    // bills.map((elem) => {
    //   // if (elem.id_tipo_cuenta === 1) {
    //   //   setGetBills((prevState) => ({
    //   //     // ...prevState,
    //   //     debitos: elem.monto,
    //   //   }));
    //   // }
    //   setGetBills((prevState) => ({
    //     ...prevState,
    //     debitos: (elem.monto += elem.monto),
    //   }));
    // });
  };

  return (
    <Pressable
      onPress={() => getAllBills()}
      onLongPress={() => {
        selectSpecificGastos(id);
      }}
      delayLongPress={200}
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
            <Text style={HomePressableStyles.productInfo}>
              {formatter.format(monto_inicial)}
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
