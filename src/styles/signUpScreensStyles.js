import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: colors.WHITE2,
    padding: 20,
  },
  artwork: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  text: {
    flex: 0.7,
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    fontFamily: "SFPro",
    fontWeight: "bold",
  },
  underText: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "DMSans-Regular",
    fontWeight: "bold",
    padding: 5,
    color: colors.LIGHTER_DARK_GRAY,
  },
  buttons: {
    flex: 0.5,
  },
  createButton: {
    height: 60,
    alignItems: "center",
    backgroundColor: colors.TURQUOISE2,
    borderRadius: 20,
    justifyContent: "center",
  },
  createButtonText: {
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: "SFPro",
  },
  loginButton: {
    margin: 15,
  },
  loginButtonText: {
    color: colors.TURQUOISE2,
    fontSize: 17,
    textAlign: "center",
    fontFamily: "SFPro",
  },
});
