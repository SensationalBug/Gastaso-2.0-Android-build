import { View, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import react, { useContext } from "react";
import { FAB, Surface } from "@react-native-material/core";
import { AccountsContext } from "../context/AccountsContext";

export const CuentaSurface = (props) => {
  const { item } = props.item;
  const { fecha, id, monto, producto, tipo, tipoTarjeta } = item;
  const { deleteCuenta, accounts, setAccounts } = useContext(AccountsContext);

  const showAlert = () => {
    Alert.alert(
      "ADVERTENCIA",
      `Seguro que quieres eliminar el producto ${producto} ?`,
      [
        {
          text: "Si",
          onPress: () => deleteCuenta(id),
        },
        { text: "No", style: "destructive" },
      ]
    );
  };

  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Surface
        style={{
          width: "99%",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#20a5d8",
        }}
      >
        <View style={{ width: "60%", padding: 20 }}>
          <View>
            <Text
              style={{
                fontSize: 40,
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {producto}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#ffffff", fontSize:15 }}>{tipo}</Text>
            <Text style={{ color: "#ffffff", fontSize:15 }}>
              {tipo === "Efectivo" ? "" : ` --> ${tipoTarjeta}`}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 40, paddingTop: 10, color: "#ffffff" }}>
              {monto}.00
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 150,
            width: "40%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <FAB
            color="#F29727"
            style={{ borderRadius: 10 }}
            onPress={() => console.log("")}
            icon={(props) => <Icon name="edit" {...props} color="#ffffff" />}
          />
          <FAB
            color="#F24C3D"
            style={{ borderRadius: 10 }}
            onPress={() => showAlert()}
            icon={(props) => <Icon name="trash" {...props} color="#ffffff" />}
          />
        </View>
      </Surface>
    </View>
  );
};
