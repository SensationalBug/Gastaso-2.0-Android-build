import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import styles from "./subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import StyledText from "./subComponentes/StyledText";
import {
  FAB,
  Surface,
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";
import TableData from "./subComponentes/Table";

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
      </View>
      <Backdrop
        revealed={revealed}
        header={
          <FAB
            style={styles.FAB}
            onPress={() => {
              setRevealed(!revealed);
              icon === "triangle-up"
                ? setIcon("triangle-down")
                : setIcon("triangle-up");
            }}
            icon={(props) => <Icon name={icon} {...props} />}
          />
        }
        style={{ backgroundColor: "#fff" }}
        backLayer={
          <View style={{ height: "100%" }}>
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
        }
      >
        
        <ScrollView>
          <TableData />
        </ScrollView>
      </Backdrop>
    </View>
  );
};

export default Home;
