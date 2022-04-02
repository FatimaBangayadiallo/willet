import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import Choise from "./components/Choise";
import SendPackage from "./components/SendPackage";
import Profile from "./components/Profile";
import CheckStatus from "./components/Status";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      {/*<LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <HomePage /> */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <stack.Screen name="LoginPage" component={LoginPage} />
          <stack.Screen name="ReagisterPage" component={RegisterPage} />
          <stack.Screen name="Choise" component={Choise} />
          <stack.Screen name="SendPackage" component={SendPackage} />
          <stack.Screen name="Profile" component={Profile} />
          <stack.Screen name="Status" component={CheckStatus} />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
