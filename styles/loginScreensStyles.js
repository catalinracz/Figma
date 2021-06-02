import { StyleSheet } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

const loginStyles = () => {
const fonts = useFonts({
  "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
  "SF-Pro": require("../assets/fonts/SFPro.ttf"),
});
};

export const styles = StyleSheet.create({
    mainPage: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 30,
    },
    backButton: {
      flex: 0.2,
      marginTop: 20,
    },
    text: {
      flex: 0.7,
    },
    title: {
      fontSize: 34,
      textAlign: "center",
      fontFamily: "DM-Sans",
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 17,
      textAlign: "center",
      fontFamily: "SF-Pro",
      color: "#4F4F4F",
    },
    inputs: {
      flex: 1,
    },
    nameInput: {
      borderWidth: 0.5,
      borderRadius: 20,
      fontFamily: "SF-Pro",
      height: 60,
      padding: 20,
      marginBottom: 18,
      borderColor: "#828282",
    },
    emailInput: {
      borderWidth: 0.5,
      borderRadius: 20,
      fontFamily: "SF-Pro",
      height: 60,
      padding: 20,
      borderColor: "#828282",
    },
    passwordInput: {
      fontFamily: "SF-Pro",
      padding: 20,
    },
    buttons: {
      flex: 0.7,
    },
    createButton: {
      height: 60,
      alignItems: "center",
      backgroundColor: "#31A062",
      borderRadius: 20,
      marginBottom: 44,
      justifyContent: "center",
    },
    createButtonText: {
      color: "white",
      fontSize: 17,
      fontFamily: "SF-Pro",
    },
    alreadyButton: {
      alignItems: "center",
      justifyContent: "center",
    },
    alreadyButtonText: {
      color: "#31A062",
      fontSize: 17,
      fontFamily: "SF-Pro",
    },
  });