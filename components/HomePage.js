import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const HomePage = () => {
  return (
    <View style={styles.containerMere}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/logo1.png")}
          style={{ width: 300, height: 100 }}
        />
      </View>
      <View styles={styles.button}>
        <Text>hello</Text>
        <Text>dddddd</Text>
      </View>
      <View style={styles.lastCont}>
        <Text>ohhhhh okkk</Text>
      </View>
    </View>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  containerMere: {
    flex: 1,
    backgroundColor: "#eeee",
  },
  imgContainer: {
    flex: 60,
    backgroundColor: "green",
  },
  button: {
    flex: 20,
    backgroundColor: "red",
  },
  lastCont: {
    flex: 20,
    backgroundColor: "blue",
  },
});
