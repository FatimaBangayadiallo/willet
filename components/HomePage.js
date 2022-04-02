import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  backgroundColor,
  borderBottomColor,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerMere}>
      <View style={styles.imgContainer}>
        <Text style={{ fontSize: 24, fontWeight: "200", color: "#1C658C" }}>
          WILLET-LOGISTIC
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate("ReagisterPage")}
        >
          <Text style={{ color: "#1C658C", fontSize: 17 }}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={{ color: "#1C658C", fontSize: 17 }}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastCont}>
        <Text style={{ color: "#1C658C" }}>
          By clicking Sign up you agree to the WILLET'S LOGISTIC
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }}
          >
            <Text style={{ margin: 5, color: "#fff" }}> User Agreement</Text>
          </TouchableOpacity>
          <Text style={{ color: "#1C658C" }}>and</Text>
          <TouchableOpacity
            style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }}
          >
            <Text style={{ margin: 5, color: "#fff" }}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  containerMere: {
    flex: 1,
    backgroundColor: "#9ADCFF",
  },
  imgContainer: {
    flex: 50,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 30,
    //backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  touch: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 100,
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  lastCont: {
    flex: 20,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
