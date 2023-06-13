import react, { useContext } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { FAB, Surface } from "@react-native-material/core";
import { AccountsContext } from "../context/AccountsContext";

export const CuentaSurface = (props) => {
  const { item } = props.item;
  const { fecha, id, monto, nombre, tipo, tipoTarjeta } = item;
  const { deleteCuenta, accounts } = useContext(AccountsContext);
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
            <Text style={{ fontSize: 30, color: "#ffffff" }}>{id}</Text>
          </View>
          <View>
            <Text style={{ color: "#ffffff" }}>Tipo</Text>
          </View>
          <View>
            <Text style={{ fontSize: 30, paddingTop: 20, color: "#ffffff" }}>
              Monto
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 150,
            alignItems: "center",
            width: "40%",
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
            onPress={() => {
              deleteCuenta(id);
              //   console.log(id);
            }}
            icon={(props) => <Icon name="trash" {...props} color="#ffffff" />}
          />
        </View>
      </Surface>
        {/* <FAB
          color="#F29727"
          style={{ borderRadius: 10 }}
          onPress={() => console.log(accounts)}
          icon={(props) => <Icon name="edit" {...props} color="#ffffff" />}
        /> */}
    </View>
  );
};
