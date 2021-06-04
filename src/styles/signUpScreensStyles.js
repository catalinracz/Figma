import { StyleSheet } from 'react-native';
import { DMSans, SFPro } from '../components/fonts';


export const styles = StyleSheet.create({
    mainPage: {
      flex: 1,
      backgroundColor: "#FAFAFA",
      padding: 20
    },
    artwork: {
      flex: 1,
      alignItems: "center",
      padding: 30
    },
    text: {
      flex: 0.7,
    },
    title: {
      fontSize: 34,
      textAlign: "center",
      fontFamily: DMSans,
      fontWeight: 'bold'
    },
    underText: {
      fontSize: 17,
      textAlign: "center",
      fontFamily: DMSans,
      fontWeight: 'bold',
      padding: 5,
      color: '#4F4F4F'
    },
    buttons: {
      flex: 0.5
    },
    createButton: {
      height: 60,
      alignItems: "center",
      backgroundColor: "#31A062",
      borderRadius: 20,
      justifyContent: "center"
    },
    createButtonText: {
      color: "white",
      fontSize: 17,
      fontFamily: SFPro
    },
    loginButton: {
      margin: 15
    },
    loginButtonText: {
      color: "#31A062",
      fontSize: 17,
      textAlign: "center",
      fontFamily: SFPro
    },
  });