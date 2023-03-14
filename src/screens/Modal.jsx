import React, { useState } from "react";
import styles from "../subComponentes/Styles";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";
import { Text, View, Modal, TextInput, TouchableOpacity } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

const ModalWindow = (props) => {
  const { showModal, toggleModal } = props;
  const [radioButtons, setRadioButtons] = useState([
    { id: 1, label: "Débito (-)", value: "debito" },
    { id: 2, label: "Crédito (+)", value: "credito" },
  ]);

  const onPressRadioButtons = (options) => {
    setRadioButtons(options);
  };

  return (
    <View>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalWindow}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Agregua un nuevo movimiento</Text>
              <FAB
                style={styles.addButton}
                onPress={() => toggleModal()}
                icon={(props) => <Icon name="chevron-down" {...props} />}
              />
            </View>
            <View style={styles.modalBody}>
              <TextInput
                placeholder="Concepto"
                style={{ backgroundColor: "white", color: "black" }}
              />
              <TextInput
                placeholder="Monto"
                style={{ backgroundColor: "white", color: "black" }}
              />
              <View>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButtons}
                  layout="row"
                />
              </View>
              <TouchableOpacity>
                <Text>Agregar button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalWindow;
