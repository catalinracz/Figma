import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/signUpScreensStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../components/images";
import { signText } from "../text/text";

const SingUpScreen = () => {
  const navigator = useNavigation();
  const navigateToLoginScreen = () => {
    navigator.navigate("LogIn");
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
          onPress={navigateToLoginScreen}
        >
          <Text style={styles.createButtonText}>{signText.signCreate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{signText.signLogin}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingUpScreen;
