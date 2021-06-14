import { StyleSheet } from "react-native";
import { colors } from "../components/colors";

export const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: colors.WHITEISH,
    padding: 30,
  },
  profileTitle: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "DMSans-Regular",
  },
  picture: {
    flex: 0.5,
    alignItems: "center",
  },
  profileName: {
    marginTop: 21,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "SFPro",
  },
  grade: {
    fontSize: 17,
    fontFamily: "SFPro",
  },
  buttons: {
    flex: 0.5,
    shadowColor: colors.BLACK,
  },
  button: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: colors.WHITE,
    padding: 21,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },
  buttonText: {
    fontSize: 17,
    color: colors.DARK_GRAY2,
    fontFamily: "SFPro",
    fontWeight: "600",
    alignSelf: "center",
  },
  arrow: {},
  backbutton: {
    marginTop: 20,
    marginBottom: 20,
  },
});
