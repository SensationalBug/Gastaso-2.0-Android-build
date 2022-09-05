import Navigation from "./src/subComponentes/Navigation";
import { StyleSheet, StatusBar, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
