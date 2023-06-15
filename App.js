import Navigation from "./src/subComponentes/Navigation";
import { View, StatusBar, StyleSheet } from "react-native";
import AccountsProvider from "./src/context/AccountsContext";
import LocationProvider from "./src/context/LocationContext";
import CategoriesProvider from "./src/context/CategoriesContext";

const App = () => {
  return (
    <AccountsProvider>
      <LocationProvider>
        <CategoriesProvider>
          <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Navigation />
          </View>
        </CategoriesProvider>
      </LocationProvider>
    </AccountsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
