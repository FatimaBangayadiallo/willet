import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.motherContainer}>
      <View style={styles.child1}>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 5 }}>
            Login
          </Text>
          <Text style={{ fontSize: 15, color: "#0E185F" }}>
            Please login to continue
          </Text>
        </View>
      </View>
      <View style={styles.child2}>
        <TextInput
          value={email}
          placeholder="name@gmail.com"
          placeholderTextColor={"#0E185F"}
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
          style={styles.input1}
        />
        <TextInput
          value={password}
          placeholder="password"
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          autoComplete={false}
          style={styles.input}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "blue",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
            <AntDesign name="checksquare" size={24} color="#6FB2D2" />
            <Text style={{ color: "#0E185F" }}>Keep me logged in</Text>
          </View>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Text style={{ color: "#0E185F" }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.child3}
        onPress={() => navigation.navigate("Choise")}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.child4}>
        <Text style={{ color: "#D1D1D1", fontWeight: "bold" }}> Or</Text>
        <Text style={{ color: "#D1D1D1", fontWeight: "bold" }}>Login With</Text>
      </View>
      <View style={styles.child5}>
        <Entypo name="facebook-with-circle" size={24} color="#0E185F" />
        <Entypo name="twitter-with-circle" size={24} color="#2FA4FF" />
        <Entypo name="google--with-circle" size={24} color="#D1D1D1" />
      </View>
    </View>
  );
};
export default LoginPage;

const styles = StyleSheet.create({
  motherContainer: {
    flex: 1,
    //  justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  child1: {
    flex: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    //alignItems: "center",
  },
  child2: {
    flex: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  child3: {
    flex: 6,
    backgroundColor: "#2FA4FF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  child4: {
    flex: 10,
    // backgroundColor: "red",
    marginTop: 10,
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  child5: {
    flex: 20,
    //backgroundColor: "blue",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  input1: {
    borderWidth: 1,
    width: 400,
    marginVertical: 20,
    padding: 10,
    borderColor: "#6FB2D2",
    color: "#0E185F",
  },
  input: {
    borderWidth: 1,
    width: 400,
    marginVertical: 20,
    padding: 10,
    borderColor: "#EEEEEE",
  },
});
