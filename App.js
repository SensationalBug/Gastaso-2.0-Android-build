import Navigation from "./src/subComponentes/Navigation";
import {
  StyleSheet,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from "react-native";
import UserProvider from "./src/context/userContext";

const App = () => {
  return (
    <UserProvider>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Navigation />
        </View>
      </KeyboardAvoidingView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
