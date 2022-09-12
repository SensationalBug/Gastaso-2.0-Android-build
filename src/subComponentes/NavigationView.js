import styles from "./Styles";
import { View } from "react-native";
import TouchableButton from "./TouchableButton";

const NavigationView = () => {
  return (
    <View style={styles.linksContainer}>
      <TouchableButton id={1} icon="home" to="Main" tab="Inicio" />
      <TouchableButton id={2} icon="bar-graph" to="Consulta" tab="Consulta" />
      <TouchableButton id={3} icon="user" to="Perfil" tab="Perfil" />
      <TouchableButton id={4} icon="tools" to="Ajustes" tab="Ajustes" />
    </View>
  );
};

export default NavigationView;
