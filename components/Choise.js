import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Choise = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <Text style={{ fontSize: 20, color: "#fff" }}>Welcom to</Text>
        <Text style={{ color: "#1C658C", fontSize: 24 }}>WILLET-LOGISTIC</Text>
      </View>
      <View style={styles.child2}>
        <TouchableOpacity
          style={styles.clickButon}
          onPress={() => navigation.navigate("SendPackage")}
        >
          <Text style={{ color: "#1C658C", fontSize: 19 }}>Send Package</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickButon}
          onPress={() => navigation.navigate("Status")}
        >
          <Text style={{ color: "#1C658C", fontSize: 19 }}>Check Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickButon}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={{ color: "#1C658C", fontSize: 19 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};
export default Choise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ADCFF",
  },
  child1: {
    flex: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  child2: {
    flex: 50,
    backgroundColor: "#1C658C",
    width: 300,
    height: 300,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  clickButon: {
    padding: 15,
    borderWidth: 1,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
