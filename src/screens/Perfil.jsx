import React, { useContext } from "react";
import img from "../../assets/user.png";
import styles from "../subComponentes/Styles";
import Icon from "react-native-vector-icons/Entypo";
import { UserContext } from "../context/userContext";
import StyledText from "../subComponentes/StyledText";
import { FAB, Surface } from "@react-native-material/core";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Perfil = ({navigation}) => {
  const { setUser, closeSession } = useContext(UserContext);

  return (
    <View style={styles.perfil}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
          height: "30%",
        }}
      >
        <Image source={img} style={{ height: "100%", resizeMode: "contain" }} />
      </View>
      <View
        style={{
          height: "70%",
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginHorizontal: 5,
            }}
          >
            Nombre de usuario
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              marginHorizontal: 5,
            }}
          >
            <Icon name="edit" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Total de Ingresos</StyledText>
            <StyledText surfaceContent>RD$000,000.00</StyledText>
          </Surface>
          <Surface style={styles.surface}>
            <StyledText surfaceTitle>Sexo</StyledText>
            <StyledText surfaceContent>Si, por favor</StyledText>
          </Surface>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{ fontSize: 23, textAlign: "justify", marginHorizontal: 10 }}
          >
            Porque la nota ya está haciendo efecto Mi mundo está jodío y me
            siento perfecto Porque estás tú aquí, moviéndote así, no pare' Baby,
            tú eres mi droga, esta noche no le baje'
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <FAB
            onPress={() => {
              setUser(false);
              closeSession(navigation.navigate("Login"));
            }}
            icon={(props) => <Icon name="log-out" {...props} />}
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              backgroundColor: "#20a5d8",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Perfil;