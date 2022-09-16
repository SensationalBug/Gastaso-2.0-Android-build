import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //LOGIN STYLES
  // {color: #122e49;} Header Color
  // {color: #156794;} Login and Signup Button Color
  // {color: #20a5d8;} BackGround Color Login and SignUp
  container: {
    height: "100%",
    backgroundColor: "#20a5d8",
  },
  headerContainer: {
    height: "20%",
    justifyContent: "space-evenly",
  },
  formContainer: {
    width: "85%",
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
    backgroundColor: "#fff",
  },
  welcomeUser: {
    padding: 10,
    alignItems: "center",
  },
  row: {},
  col: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  surface: {
    height: 100,
    width: "48%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20a5d8",
  },
  modalView: {
    position: "absolute",
    top: 40,
    width: "100%",
  },
  openModalButtonStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  openModalButton: {
    width: "80%",
    alignItems: "center",
    borderTopLeftRadius: 10,
    justifyContent: "center",
    borderTopRightRadius: 10,
    backgroundColor: "#122e49",
  },
  addButton: {
    backgroundColor: "#20a5d8",
  },
  //CONSULTA STYLES
  consulta: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  texto: { fontSize: 30, textAlign: "justify" },

  //PERFIL STYLES
  perfil: {
    flex: 1,
    marginHorizontal: 10,
  },

  //AJUSTES STYLES
  ajustes: {
    flex: 1,
    justifyContent: "center",
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

  // TABLEDATA STYLES
  tableHead: {
    fontSize: 20,
    width: "30%",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#122e49",
  },
  delHeadButton: {
    width: "10%",
    backgroundColor: "#122e49",
  },
  tableBody: {
    fontSize: 18,
    width: "30%",
    color: "#fff",
    borderWidth: 1,
    paddingVertical: 8,
    textAlign: "center",
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
  delBodyButton: {
    width: "10%",
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: "#122e49",
    backgroundColor: "#20a5d8",
  },
  delBodyButtonIcon: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
