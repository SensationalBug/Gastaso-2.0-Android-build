import React, { useContext } from "react";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { BillsContext } from "../context/BillsContext";
import { Pressable } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { AccountsContext } from "../context/AccountsContext";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const { bills, selecCuentas } = useContext(BillsContext);
  const { accounts } = useContext(AccountsContext);

  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <Text style={styles.mainTitle}>Bienvenido.</Text>
      </View>
      <FlatList
        data={accounts}
        renderItem={() => (
          <View
            style={{
              padding: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              delayLongPress={400}
              style={{
                width: "98%",
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#20a5d8",
              }}
            >
              <View style={{ padding: 20, flexDirection: "row" }}>
                <View style={{ width: "80%" }}>
                  <View>
                    <Text style={styles.productName}>producto</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                    <Text style={{ color: "#ffffff", fontSize: 15 }}>tipo</Text>
                    <Text style={{ color: "#ffffff", fontSize: 15 }}>
                      tipoTarjeta
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{ fontSize: 35, paddingTop: 10, color: "#ffffff" }}
                    >
                      monto
                    </Text>
                  </View>
                </View>
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.addButton}>
                    <Icon size={25} name="plus" color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.delButton}>
                    <Icon size={25} name="minus" color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
  },
  welcomeUser: {
    padding: 10,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 40,
  },
  col: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  productName: {
    fontSize: 35,
    color: "#ffffff",
    textTransform: "uppercase",
  },
  modalButtons: {
    padding: 10,
    width: "20%",
    justifyContent: "space-between",
  },
  addButton: {
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F8A70",
  },
  delButton: {
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F24C3D",
  },
});
