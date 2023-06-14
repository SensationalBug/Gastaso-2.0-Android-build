import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Entypo";

export const FABCuentasButton = ({
  iconF1,
  colorF1,
  toggleF1,
  iconF2,
  colorF2,
  toggleF2,
}) => {
  return (
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
        color={colorF1}
        style={{ borderRadius: 10 }}
        onPress={() => toggleF1()}
        icon={(props) => <Icon name={iconF1} {...props} color="#ffffff" />}
      />
      <FAB
        color={colorF2}
        style={{ borderRadius: 10 }}
        onPress={() => toggleF2()}
        icon={(props) => <Icon name={iconF2} {...props} color="#ffffff" />}
      />
    </View>
  );
};
