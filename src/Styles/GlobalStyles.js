import { StyleSheet } from "react-native";

const commonButtonStyles = {
  height: 50,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
};

const commonTouchablesStyles = {
  height: 60,
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1F9FD0",
};

const commonRadioStyles = {
  marginTop: 40,
};

export const HomeStyles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
  },
  welcomeUser: {
    padding: 10,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 40,
  },
  col: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  pressableContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomePressableStyles = StyleSheet.create({
  pressable: {
    width: "98%",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#20a5d8",
  },
  pressableView: { padding: 20, flexDirection: "row" },
  productContianer: { flexDirection: "row", paddingBottom: 10 },
  productInfo: {
    fontSize: 35,
    color: "#ffffff",
    paddingVertical: 4.5,
    textTransform: "uppercase",
  },
  productType: { color: "#ffffff", fontSize: 15 },
  modalButtons: {
    padding: 10,
    width: "20%",
    justifyContent: "space-between",
  },
  addButton: {
    ...commonButtonStyles,
    backgroundColor: "#1F8A70",
  },
  delButton: {
    ...commonButtonStyles,
    backgroundColor: "#F24C3D",
  },
});

export const AddCuentaStyles = StyleSheet.create({
  addCuentaContainer: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#122e49",
  },
  addCategoriaText: { color: "#ffffff", fontSize: 20, marginHorizontal: 20 },
  productContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productView: { width: "80%" },
  productFontSize: { fontSize: 20 },
  productTextInput: {
    fontSize: 30,
    width: "100%",
    paddingTop: 2,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  addFAB: {
    padding: 5,
    borderRadius: 50,
  },
  montoContainer: { padding: 15, flexDirection: "row" },
  montoViewContainer: { width: "50%", justifyContent: "flex-start" },
  touchableContainer: {
    width: "50%",
    alignItems: "center",
    flexDirection: "row",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  touchableStylesOn: {
    opacity: 1,
    ...commonTouchablesStyles,
  },
  touchableStylesOff: {
    opacity: 0.3,
    ...commonTouchablesStyles,
  },
  tarjetaText: { fontWeight: "bold", fontSize: 20 },
  radioContainerOn: {
    ...commonRadioStyles,
    left: "0%",
  },
  radioContainerOff: {
    ...commonRadioStyles,
    left: "110%",
  },
});
