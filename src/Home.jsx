import { Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "./subComponentes/StyledText";
import {
  Surface,
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";

const Home = () => {
  const [revealed, setRevealed] = useState(true);
  const [icon, setIcon] = useState("triangle-up");
  return (
    <View style={styles.home}>
      <View style={styles.welcomeUser}>
        <StyledText mainTitle>Bienvenido.</StyledText>
        <StyledText userName>Nombre del usuario</StyledText>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Surface elevation={24} style={styles.surface}>
            <StyledText surfaceTitle>Ultimo Gasto</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <Surface elevation={24} style={styles.surface}>
            <StyledText surfaceTitle>Añadir Gasto</StyledText>
            <StyledText surfaceContent>+</StyledText>
          </Surface>
        </View>
        <View style={styles.col}>
          <Surface elevation={24} style={styles.surface}>
            <StyledText surfaceTitle>Total de Ingresos</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <Surface elevation={24} style={styles.surface}>
            <StyledText surfaceTitle>Restante Mensual</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
        </View>
      </View>
      <Backdrop
        revealed={revealed}
        header={
          <Text
            style={{
              backgroundColor: "red",
            }}
          >
            Detalles de gastos agregados
            <Icon
              onPress={() => {
                setRevealed(!revealed);
                icon === "triangle-up"
                  ? setIcon("triangle-down")
                  : setIcon("triangle-up");
              }}
              name={icon}
              size={40}
            />
          </Text>
        }
        style={{ backgroundColor: "#fff" }}
        backLayer={<View style={{ height: "100%" }}></View>}
      >
        <BackdropSubheader
          titleContainerStyle={{
            alignItems: "center",
            padding: 10,
          }}
          title="Detalles de gastos agregados."
        />
      </Backdrop>
    </View>
  );
};

export default Home;
