import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/loginScreensStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../components/images";
import { logInText } from "../text/text";

const LoginScreen = () => {
  const navigator = useNavigation();
  const navigateToSignUpScreen = () => {
    navigator.navigate("SignUp");
  };
  const navigateToHomepage = () => {
    navigator.navigate("Home");
  };

  return (
    <>
      <View style={styles.mainPage}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={navigateToSignUpScreen}>
            <Image source={Images.leftArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{logInText.logTitle}</Text>
          <Text style={styles.subTitle}>{logInText.logSubTitle}</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.nameInput}
            placeholder={logInText.logHolder1}
          ></TextInput>
          <TextInput
            style={styles.emailInput}
            placeholder={logInText.logHolder2}
          ></TextInput>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder={logInText.logHolder3}
          ></TextInput>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={navigateToHomepage}
          >
            <Text style={styles.createButtonText}>{logInText.logCreate}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alreadyButton}>
            <Text style={styles.alreadyButtonText}>{logInText.logAlready}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
