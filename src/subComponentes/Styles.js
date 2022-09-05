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

  //HOME STYLES = DRAWER CONTAINER
  drawerContainer: {
    flex: 1,
  },
  imgContainer: {
    height: "25%",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  img: {
    color: "#fff",
    fontSize: 120,
    textAlign: "center",
    paddingVertical: 10,
    // height: "75%",
    // width: "100%",
    // resizeMode: "contain",
  },
  textImg: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
  linksContainer: {
    height: "60%",
  },
  linkButton: {
    borderTopWidth: 1,
    marginVertical: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderTopColor: "#999",
    borderBottomColor: "#999",
  },
  linkButtonContainer: {
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonDrawerTextIcon: {
    padding: 10,
    fontSize: 20,
    color: "#fff",
    alignSelf: "flex-end",
  },
  buttonDrawerText: {
    color: "#fff",
    fontSize: 20,
  },
  footerDrawer: {
    height: "15%",
    justifyContent: "flex-end",
  },
  footerDrawerButton: {
    padding: 10,
    fontSize: 25,
    color: "#fff",
    alignSelf: "flex-end",
  },
});

export default styles;
