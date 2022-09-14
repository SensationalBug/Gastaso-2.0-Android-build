import React, { useState } from "react";
import styles from "./subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "./subComponentes/StyledText";
import { useNavigation } from "@react-navigation/native";
import { FAB, Surface } from "@react-native-material/core";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const Home = () => {
  const [icon, setIcon] = useState("triangle-up");
  const navigation = useNavigation();
  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <StyledText mainTitle>Bienvenido.</StyledText>
        <StyledText userName>Nombre del usuario</StyledText>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Ultimo Gasto</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <View style={styles.surfaceFake}>
            <FAB
              color="primary"
              variant="extended"
              label="Añadir Gasto"
              onPress={() => console.log("me excita")}
              style={{
                width: "90%",
                borderRadius: 10,
                alignItems: "center",
                backgroundColor: "#122e49",
              }}
              icon={(props) => <Icon name="plus" {...props} />}
            />
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
        <TouchableOpacity
          style={styles.openModalButton}
          onPress={() => navigation.navigate("Detalles")}
        >
          <Icon name={icon} />
          <Text>Detalles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
