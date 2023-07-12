import Navigation from "./src/subComponentes/Navigation";
import { View, StatusBar, StyleSheet } from "react-native";
import BillsProvider from "./src/context/BillsContext";
import AccountsProvider from "./src/context/AccountsContext";
import LocationProvider from "./src/context/LocationContext";
import DatabaseProvider from "./src/context/DatabaseContext";
import CategoriesProvider from "./src/context/CategoriesContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
