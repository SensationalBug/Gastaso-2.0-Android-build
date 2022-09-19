import { Formik } from "formik";
import styles from "./subComponentes/Styles";
import { UserContext } from "./context/userContext";
import FormikInput from "./subComponentes/FormikInput";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { signUpValidationSchema } from "./validationSchema/formikSchema";
import { Snackbar } from "@react-native-material/core";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});
  const { name, lastName, email, password, repeatPassword } = credentials;

  const { signUp } = useContext(UserContext);

  initialValues = { name: "", lastName: "", email: "", password: "" };

  // const registrar = () => {
  //   signUp(email, password);
  // };

  return (
    <Formik
      onSubmit={(values) => {
        setCredentials(values);
        registrar();
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
