import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.mereContainer}>
      <View style={styles.child1}>
        <View style={styles.Inner1}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "flex-start",
              marginLeft: 35,
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{ fontWeight: "bold", color: "#7882A4", marginRight: 25 }}
          >
            Please fill in this form to create an account!
          </Text>
        </View>
        <View style={styles.Inner2}>
          <TextInput
            value={name}
            placeholder="Name"
            autoCapitalize="none"
            onChangeText={(name) => setName(name)}
            style={styles.Input1}
          />
          <TextInput
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            onChange={(email) => setEmail(email)}
            style={styles.Input1}
          />
          <TextInput
            value={phone}
            placeholder="Phone Number"
            onChange={(phone) => setPhone(phone)}
            style={styles.Input1}
          />
          <TextInput
            value={password}
            placeholder="Password"
            onChange={(password) => setPassword(password)}
            style={styles.Input1}
            autoCapitalize="none"
            secureTextEntry={true}
            autoComplete={false}
          />
          <View style={styles.Inner3}>
            <AntDesign
              name="checksquareo"
              size={24}
              color="#7882A4"
              style={{ marginRight: 3 }}
            />
            <Text style={{ fontWeight: "bold", color: "#7882A4" }}>
              I accept the{" "}
              <Text style={{ color: "#2FA4FF" }}>Term of Use </Text> &
              <Text style={{ color: "#2FA4FF" }}>Privacy Polycy</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.Inner4}
            onPress={() => navigation.navigate("Choise")}
          >
            <Text style={{ color: "#fff", fontSize: 19 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.Inner3}>
          <AntDesign
            name="checksquareo"
            size={24}
            color="#7882A4"
            style={{ marginRight: 3 }}
          />
          <Text style={{ fontWeight: "bold", color: "#7882A4" }}>
            I accept the <Text style={{ color: "#2FA4FF" }}>Term of Use </Text>{" "}
            & <Text style={{ color: "#2FA4FF" }}>Privacy Polycy</Text>
          </Text>
        </View> */}
        {/* <TouchableOpacity style={styles.Inner4}>
          <Text>Sign Up</Text>
    </TouchableOpacity> */}
      </View>
      <View style={styles.child2}>
        <Text style={{ color: "#fff" }}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
            Login here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegisterPage;

const styles = StyleSheet.create({
  mereContainer: {
    flex: 1,
    backgroundColor: "#2FA4FF",
    alignItems: "center",
    justifyContent: "center",
  },
  child1: {
    flex: 95,
    backgroundColor: "#fff",
    width: 375,
    marginVertical: 30,
    borderRadius: 3,
    //height: 300,
  },
  Inner1: {
    flex: 10,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  Inner2: {
    //flex: 60,
    //flex: 65,
    flex: 70,
    //backgroundColor: "blue",
    alignItems: "center",
    //justifyContent: "center",
  },
  Input1: {
    borderWidth: 1,
    width: 300,
    marginVertical: 20,
    padding: 10,
    borderColor: "#D1D1D1",
    color: "#0E185F",
    backgroundColor: "#D1D1D1",
  },
  Inner3: {
    // flex: 5,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
  },
  Inner4: {
    //flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2FA4FF",
    width: 200,
    height: 50,
    marginRight: 100,
    marginVertical: 20,
  },
  child2: {
    flex: 10,
    flexDirection: "row",
  },
});
