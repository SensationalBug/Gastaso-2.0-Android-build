import Navigation from "./src/subComponentes/Navigation";
import { View, StatusBar, StyleSheet } from "react-native";
import AccountsProvider from "./src/context/AccountsContext";

const App = () => {
  return (
    <AccountsProvider>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Navigation />
      </View>
    </AccountsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
