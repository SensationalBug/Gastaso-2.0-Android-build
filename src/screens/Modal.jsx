import React from "react";
import styles from "../subComponentes/Styles";
import StyledText from "../subComponentes/StyledText";
import { RadioButton, RadioGroup } from "react-native-flexi-radio-button";
import { View, TextInput, TouchableOpacity, Animated } from "react-native";

const ModalWindow = (props) => {
  const { fadeAnim } = props;
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        justifyContent: "space-evenly",
      }}
    >
      <View style={styles.modalTitle}>
        <StyledText buttonModalTitle>Agrega un nuevo movimiento</StyledText>
      </View>
      <View style={styles.modalBody}>
        <TextInput placeholder="Concepto" style={styles.modalInput} />
        <TextInput placeholder="Monto" style={styles.modalInput} />
        <View style={styles.radioModalButtonContainer}>
          <RadioGroup color="#122e49">
            <RadioButton value="debito" style={{ alignItems: "center" }}>
              <StyledText style={{ color: "#122e49" }}>Débito</StyledText>
            </RadioButton>
            <RadioButton value="credito" style={{ alignItems: "center" }}>
              <StyledText style={{ color: "#122e49" }}>Crédito</StyledText>
            </RadioButton>
          </RadioGroup>
          <View style={styles.radioModal}>
            <TouchableOpacity style={styles.addModalButton}>
              <StyledText buttonText>Agregar</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default ModalWindow;
