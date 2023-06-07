import styles from "../subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "../subComponentes/StyledText";
import { useNavigation } from "@react-navigation/native";
import { FAB, Surface } from "@react-native-material/core";
import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = useState(false);
  const toggleOpacity = () => setOpacity((prevState) => !prevState);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: opacity ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <StyledText mainTitle>Bienvenido.</StyledText>
        <StyledText userName>Nombre del usuario</StyledText>
      </View>
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
      <View style={styles.openModalButtonStyle}>
        <View style={styles.modalButtons}>
          <FAB
            style={styles.addButton}
            onPress={() => toggleOpacity()}
            icon={(props) => <Icon name="plus" {...props} />}
          />
          <TouchableOpacity
            style={styles.openModalButton}
            onPress={() => navigation.navigate("Detalles")}
          >
            <StyledText buttonText>Detalles</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
