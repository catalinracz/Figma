import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  notification: {
    flex: 1,
    backgroundColor: colors.VERY_LIGHT_GRAY,
    padding: 20,
  },
  backButton: {
    marginTop: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    fontFamily: "DMSans-Regular",
    marginBottom: 44,
  },
  notifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.BLACK,
    marginBottom: 30,
  },
  image: {
    alignSelf: "center",
  },
  text: {
    flex: 0.9,
    alignSelf: "center",
    fontSize: 17,
    fontFamily: "SFPro",
    color: colors.BLACK,
  },
  time: {
    alignSelf: "flex-start",
    fontFamily: "SFPro",
    fontSize: 13,
    color: colors.BLACK,
  },
});
