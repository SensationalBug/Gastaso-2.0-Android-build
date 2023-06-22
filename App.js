import Navigation from "./src/subComponentes/Navigation";
import { View, StatusBar, StyleSheet } from "react-native";

import AccountsProvider from "./src/context/AccountsContext";
import LocationProvider from "./src/context/LocationContext";
import CategoriesProvider from "./src/context/CategoriesContext";
import BillsProvider from "./src/context/BillsContext";
import DatabaseProvider from "./src/context/DatabaseContext";

const App = () => {
  return (
    <DatabaseProvider>
      <AccountsProvider>
        <LocationProvider>
          <CategoriesProvider>
            <BillsProvider>
              <View style={styles.container}>
                <StatusBar barStyle="default" />
                <Navigation />
              </View>
            </BillsProvider>
          </CategoriesProvider>
        </LocationProvider>
      </AccountsProvider>
    </DatabaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
