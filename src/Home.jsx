import React from "react";
import { Text, View } from "react-native";
import styles from "./subComponentes/Styles";
import { Surface } from "@react-native-material/core";

const Home = () => {
  return (
    <View style={styles.home}>
      <Surface
        elevation={16}
        style={styles.surface}
      >
        <Text>Hola</Text>
      </Surface>
      <Surface
        elevation={16}
        style={styles.surface}
      >
        <Text>Hola</Text>
      </Surface>
      <Surface
        elevation={16}
        style={styles.surface}
      >
        <Text>Hola</Text>
      </Surface>
      <Surface
        elevation={16}
        style={styles.surface}
      >
        <Text>Hola</Text>
      </Surface>
    </View>
  );
};

export default Home;
