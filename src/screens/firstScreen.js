import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/signUpScreensStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../theme/images";
import { signText } from "../text/text";

const FirstScreen = () => {
  const navigator = useNavigation();
  const navigateToSignUp = () => {
    navigator.navigate("SignUp");
  };
  const navigateToLogin = () => {
    navigator.navigate("Login");
  };

  return (
    <View style={styles.mainPage}>
      <View style={styles.artwork}>
        <Image source={Images.signUp} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{signText.signTitle}</Text>
        <Text style={styles.underText}>{signText.signSubTitle}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={navigateToSignUp}
        >
          <Text style={styles.createButtonText}>{signText.signCreate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
          <Text style={styles.loginButtonText}>{signText.signLogin}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;
