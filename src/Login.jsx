import { Formik } from "formik";
import React, { useContext } from "react";
import styles from "./subComponentes/Styles";
import { UserContext } from "./context/userContext";
import Icon from "react-native-vector-icons/AntDesign";
import FormikInput from "./subComponentes/FormikInput";
import { View, Text, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  const { user, signIn } = useContext(UserContext);

  const validate = () => {
    // if (user) navigation.navigate("Main");
    navigation.navigate("Main");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        const { email, password } = values;
        // signIn(email, password);
        validate();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.logo}>APP LOGO</Text>
              <Text style={styles.welcome}>Bienvenide.</Text>
            </View>
            <View style={styles.formContainer}>
              <FormikInput name="email" placeholder="Email" />
              <FormikInput
                name="password"
                secureTextEntry
                placeholder="Contraseña"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.googleButton}
                  onPress={() => console.log("Boton sirve")}
                >
                  <Icon style={styles.buttonIcon} name="google" />
                </TouchableOpacity>
              </View>
              <View style={styles.registro}>
                <Text>Aun no tienes una cuenta?</Text>
                <TouchableOpacity
                  style={styles.registroLink}
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text style={styles.registroLinkText}>Registrate</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerContainer}>
              <Text style={styles.textFooterContainer}>
                © 2022 Gastaso por Pedro Luis De Leon Alejo. Todos los derechos
                reservados. v1.0.0
              </Text>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
