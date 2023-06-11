import { Formik } from "formik";
import React, { useContext } from "react";
import styles from "./subComponentes/Styles";
import { UserContext } from "./context/userContext";
import FormikInput from "./subComponentes/FormikInput";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  initialValues = { name: "", lastName: "", email: "", password: "" };
  
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={(values) => {
        const { name, lastName, email, password, repeatPassword } = values;
        if (name && lastName && email && password && repeatPassword) {
          if (password === repeatPassword) {
            signUp(email, password);
          } else {
            Alert.alert("Error", "Las contraseñas no coinciden", [
              { text: "OK" },
            ]);
          }
        } else {
          Alert.alert("Error", "Completa todos los campos", [{ text: "OK" }]);
        }
      }}
    >
      {({ handleSubmit }) => {
        return (
          <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.logo}>APP LOGO</Text>
              <Text style={styles.welcome}>
                Ingrese sus datos para el registro.
              </Text>
            </View>
            <View style={styles.formContainer}>
              <FormikInput name="name" placeholder="Nombre" />
              <FormikInput name="lastName" placeholder="Apellido" />
              <FormikInput name="email" placeholder="Email" />
              <FormikInput
                name="password"
                secureTextEntry
                placeholder="Contraseña"
              />
              <FormikInput
                secureTextEntry
                name="repeatPassword"
                placeholder="Repita su Contraseña"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default SignUp;
