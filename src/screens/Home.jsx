import ModalWindow from "./Modal";
import React, { useState } from "react";
import styles from "../subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "../subComponentes/StyledText";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB, Surface } from "@react-native-material/core";

const Home = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <StyledText mainTitle>Bienvenido.</StyledText>
        <StyledText userName>Nombre del usuario</StyledText>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Último Gasto</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <View style={styles.surface}>
            <StyledText surfaceTitle>Promedio de Gastos</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </View>
        </View>
        <View style={styles.col}>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Total de Ingresos</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Restante Mensual</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
        </View>
      </View>
      <View style={styles.openModalButtonStyle}>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={styles.openModalButton}
            onPress={() => navigation.navigate("Detalles")}
          >
            <StyledText buttonText>Detalles</StyledText>
          </TouchableOpacity>
          <FAB
            style={styles.addButton}
            onPress={() => toggleModal()}
            icon={(props) => <Icon name="plus" {...props} />}
          />
          <ModalWindow showModal={showModal} toggleModal={toggleModal} />
        </View>
      </View>
    </View>
  );
};

export default Home;
