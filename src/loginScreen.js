import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from '../styles/loginScreensStyles';

const LoginScreen = ({ navigation }) => {

  return (
    <>
          <View style={styles.mainPage}>
            <View style={styles.backButton}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>Create an account</Text>
              <Text style={styles.subTitle}>
                Invest and double your income now
              </Text>
            </View>
            <View style={styles.inputs}>
              <TextInput
                style={styles.nameInput}
                placeholder="Full name"
              ></TextInput>
              <TextInput
                style={styles.emailInput}
                placeholder="Email address"
              ></TextInput>
              <TextInput
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholder="Password"
              ></TextInput>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => navigation.navigate("Homepage")}
              >
                <Text style={styles.createButtonText}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alreadyButton}>
                <Text style={styles.alreadyButtonText}>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    </>
  );
};



export default LoginScreen;
