import Navigation from "./src/subComponentes/Navigation";
import { StyleSheet, StatusBar, View } from "react-native";
import UserProvider from "./src/context/userContext";

const App = () => {
  return (
    <UserProvider>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Navigation />
      </View>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
