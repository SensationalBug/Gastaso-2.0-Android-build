import { Formik } from "formik";
import React, { useState } from "react";
import styles from "./subComponentes/Styles";
import FormikInput from "./subComponentes/FormikInput";
import { View, Text, TouchableOpacity } from "react-native";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});

  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", password: "" }}
      onSubmit={(values) => {
        // setCredentials(values);
        console.log(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
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
                name="pwd"
                secureTextEntry
                placeholder="Contraseña"
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
          </View>
        );
      }}
    </Formik>
  );
};

export default SignUp;
