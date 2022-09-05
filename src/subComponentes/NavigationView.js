import React from "react";
import styles from "./Styles";
import TouchableButton from "./TouchableButton";
import Icon from "react-native-vector-icons/Entypo";
import { Text, View, Image, TouchableOpacity } from "react-native";

const NavigationView = () => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.imgContainer}>
        {/* <Image source={image} style={styles.img} /> */}
        <Icon style={styles.img} name="user" />
        <Text style={styles.textImg}>Pedro Luis De Leon</Text>
      </View>
      <View style={styles.linksContainer}>
        <TouchableButton to="Perfil" icon="user" />
        <TouchableButton to="Consulta" icon="bar-graph" />
        <TouchableButton to="Ajustes" icon="tools" />
      </View>
      <View style={styles.footerDrawer}>
        <TouchableOpacity onPress={() => console.log("Boton sirve")}>
          <Icon style={styles.footerDrawerButton} name="log-out" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationView;
