import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/loginScreensStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../theme/images";
import { logInText } from "../text/text";
import { connect } from 'react-redux';
import { SIGNUP2 } from '../redux/actionTypes';

const SignupScreen = () => {
  const navigator = useNavigation();
  const navigateToHomepage = () => {
    navigator.navigate("Home");
  };
  const navigateToLogin = () => {
    navigator.navigate("Login");
  };
  const navigateBack = () => {
    navigator.goBack();
  };

  return (
    <>
      <View style={styles.mainPage}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={navigateBack}>
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
            placeholder={logInText.logFullName}
          ></TextInput>
          <TextInput
            style={styles.emailInput}
            placeholder={logInText.logEmailAddress}
          ></TextInput>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder={logInText.logPassword}
          ></TextInput>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={navigateToHomepage}
          >
            <Text style={styles.createButtonText}>{logInText.logCreate}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alreadyButton} onPress={navigateToLogin}>
            <Text style={styles.alreadyButtonText}>{logInText.logAlready}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapStateToProps =(state) =>{
  const {token}=state.signup;
  return {token};
}

const mapDispatchToProps = (dispatch) => ({
signup: (userEmail, userPassword) => dispatch({type: SIGNUP2, payload: {userEmail, userPassword}})
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);