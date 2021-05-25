import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.text}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subTitle}>Invest and double your income now</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput 
        style={styles.nameInput}
        placeholder='Full name'
        >
        </TextInput>
        <TextInput 
        style={styles.emailInput}
        placeholder='Email address'
        >
        </TextInput>
        <TextInput 
        style={styles.passwordInput}
        placeholder='Password'
        >
        </TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  text: {
    flex: 1
  },
  title: {
    fontSize: 34,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
  },
  inputs: {
    flex: 1,
  },
  nameInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#828282'
  },
  emailInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#828282'
  },
  passwordInput: {},
});

export default LoginScreen;
