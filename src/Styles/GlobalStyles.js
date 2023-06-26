import { StyleSheet } from "react-native";

const commonButtonStyles = {
  width: 50,
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

const commonTableStyles = {
  fontSize: 20,
  width: "45%",
  color: "#fff",
  textAlign: "center",
  paddingVertical: 10,
  borderColor: "#122e49",
  verticalAlign: "middle",
  textTransform:"capitalize"
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

export const CuentasStyles = StyleSheet.create({
  cuentas: {
    flex: 1,
    marginHorizontal: 5,
  },
  cuentaPage: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addCuenta: {
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 10,
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
  productView: { width: "100%" },
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
    width: "40%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#122e49",
  },
  montoContainer: { padding: 15, flexDirection: "row" },
  montoViewContainer: { width: "60%", justifyContent: "flex-start" },
  touchableContainer: { paddingVertical: 30 },
  touchableStylesOn: {
    opacity: 1,
    ...commonTouchablesStyles,
  },
  touchableStylesOff: {
    opacity: 0.3,
    ...commonTouchablesStyles,
  },
  tarjetaText: { fontWeight: "bold", fontSize: 20 },
});

export const DetailTableStyles = StyleSheet.create({
  addCuentaContainer: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#122e49",
  },
  addCategoriaText: { color: "#ffffff", fontSize: 20, marginHorizontal: 20 },
  tableHead: {
    ...commonTableStyles,
    backgroundColor: "#122e49",
  },
  table: {
    ...commonTableStyles,
  },
  tableProducto: {
    ...commonTableStyles,
    textTransform:"uppercase",
  },
  delButton: {
    width: "10%",
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#122e49",
    justifyContent: "center",
  },
});
