import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  color,
  textShadowColor,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SendPackage = () => {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [des, setDes] = useState("");
  const [sendName, setSendName] = useState("");
  const [sendAdress, setSendAdress] = useState("");
  const [sendPhone, setSendPhone] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.child2}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#21325E",
            textShadowColor: "blue",
            textDecorationLine: "underline",
            textDecorationColor: "#92A9BD",
          }}
        >
          Fill In This Form
        </Text>
        <TextInput
          value={name}
          placeholder="Sender Name"
          onChange={(name) => setName({ name })}
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={adresse}
          placeholder="Sender Adressse"
          onChange={(adresse) => setAdresse({ adresse })}
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={phone}
          placeholder="Sender Phone Number"
          onChange={(phone) => setPhone({ phone })}
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={des}
          onChange={(des) => setDes({ des })}
          placeholder="description / content /item"
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={sendName}
          placeholder="Recever Name"
          onChange={(sendName) => setSendName({ sendName })}
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={sendAdress}
          placeholder="Recever Adresse"
          onChange={(sendAdress) => setSendAdress({ sendAdress })}
          autoCapitalize="none"
          style={styles.input1}
        />
        <TextInput
          value={sendPhone}
          placeholder="Recever Phone Number"
          onChange={(sendPhone) => setSendPhone({ sendPhone })}
          autoCapitalize="none"
          style={styles.input1}
        />
      </View>
      <View style={styles.child3}></View>

      <TouchableOpacity style={styles.child4}>
        <Text style={{ color: "#fff", fontSize: 24 }}>send</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SendPackage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9ADCFF",
    flex: 1,
  },
  child1: {
    flex: 10,
    //  backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  child2: {
    flex: 80,
    backgroundColor: "#9ADCFF",
  },
  child3: {
    //flex: 45,
    //a  backgroundColor: "#F0F0F0",
    // marginTop: 20,
  },
  child4: {
    flex: 10,
    //marginHorizontal: 20,
    width: 200,
    backgroundColor: "#041562",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 20,
    borderRadius: 15,
    marginBottom: 5,
  },
  input1: {
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 30,
    borderColor: "#fff",
    marginHorizontal: 10,
  },
});
