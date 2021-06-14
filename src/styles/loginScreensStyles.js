import { StyleSheet } from "react-native";
import { colors } from "../components/colors";

export const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: colors.WHITE,
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
    fontFamily: "DMSans-Regular",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "SFPro",
    color: colors.LIGHTER_DARK_GRAY,
  },
  inputs: {
    flex: 1,
  },
  nameInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    fontFamily: "SFPro",
    height: 60,
    padding: 20,
    marginBottom: 18,
    borderColor: colors.GRAY2,
  },
  emailInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    fontFamily: "SFPro",
    height: 60,
    padding: 20,
    borderColor: colors.GRAY2,
  },
  passwordInput: {
    fontFamily: "SFPro",
    padding: 20,
  },
  buttons: {
    flex: 0.7,
  },
  createButton: {
    height: 60,
    alignItems: "center",
    backgroundColor: colors.TURQUOISE2,
    borderRadius: 20,
    marginBottom: 44,
    justifyContent: "center",
  },
  createButtonText: {
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: "SFPro",
  },
  alreadyButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  alreadyButtonText: {
    color: colors.TURQUOISE2,
    fontSize: 17,
    fontFamily: "SFPro",
  },
});
