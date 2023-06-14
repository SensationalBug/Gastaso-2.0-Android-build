import React, { useContext } from "react";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { AccountsContext } from "../context/AccountsContext";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const { accounts } = useContext(AccountsContext);

  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <Text style={styles.mainTitle}>Bienvenido.</Text>
      </View>
      <View style={styles.openModalButtonStyle}>
        <View style={styles.modalButtons}>
          <FAB
            style={styles.addButton}
            onPress={() => console.log(accounts)}
            icon={(props) => <Icon name="plus" {...props} color="#ffffff" />}
          />
          <TouchableOpacity
            style={styles.openModalButton}
            onPress={() => navigation.navigate("Detalles")}
          >
            <Text style={styles.openModalButtonText}>Detalles</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  openModalButton: {
    width: "80%",
    alignItems: "center",
    borderTopLeftRadius: 10,
    justifyContent: "center",
    borderTopRightRadius: 10,
    backgroundColor: "#122e49",
  },
  openModalButtonText: { color: "#ffffff", fontSize: 20 },
  addButton: { backgroundColor: "#20a5d8" },
});
