import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //LOGIN STYLES
  // {color: #122e49;} Header Color
  // {color: #156794;} Login and Signup Button Color
  // {color: #20a5d8;} BackGround Color Login and SignUp
  // {color: #20dbd8;}
  container: {
    height: "100%",
    backgroundColor: "#20a5d8",
  },
  headerContainer: {
    height: "20%",
    justifyContent: "space-evenly",
  },
  formContainer: {
    width: "80%",
    height: "60%",
    paddingTop: 20,
    alignSelf: "center",
  },
  footerContainer: {
    height: "20%",
    justifyContent: "flex-end",
  },
  logo: {
    fontSize: 40,
    paddingTop: 20,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    paddingTop: 40,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  loginButton: {
    marginTop: 10,
    width: "75%",
    marginRight: "5%",
    borderRadius: 3,
    paddingVertical: 15,
    backgroundColor: "#156794",
    // backgroundColor: "#eeefff",
  },
  googleButton: {
    width: "20%",
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: "#eeefff",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#eeefff",
    textAlign: "center",
  },
  buttonIcon: {
    fontSize: 20,
    textAlign: "center",
  },
  registro: {
    marginVertical: 20,
    flexDirection: "row",
  },
  registroLink: {
    marginLeft: 10,
  },
  registroLinkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  textFooterContainer: {
    marginVertical: 10,
    textAlign: "center",
  },

  //SIGNUP STYLES
  signupButton: {
    width: "100%",
    marginTop: 10,
    borderRadius: 3,
    paddingVertical: 15,
    backgroundColor: "#156794",
  },

  //HOME STYLES
  home: {
    flex: 1,
  },

  //CONSULTA STYLES
  consulta: {
    flex: 1,
  },

  //PERFIL STYLES
  perfil: {
    flex: 1,
  },

  //AJUSTES STYLES
  ajustes: {
    flex: 1,
  },

  //NAVIGATIONBAR STYLES
  linksContainer: {
    flexDirection: "row",
    backgroundColor: "#122e49",
  },
  linkButton: {
    width: "25%",
    paddingVertical: 10,
  },
  linkButtonContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  buttonDrawerTextIcon: {
    fontSize: 20,
    color: "#ffffff",
  },
  buttonDrawerText: {
    fontSize: 15,
    color: "#ffffff",
  },
});

export default styles;
