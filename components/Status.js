import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const CheckStatus = () => {
  return (
    <View style={styles.container}>
      <Text>hello je suis check status</Text>
    </View>
  );
};
export default CheckStatus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
