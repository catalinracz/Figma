import { StyleSheet } from "react-native";
import { colors } from "../components/colors";

export const styles = StyleSheet.create({
  contact: {
    backgroundColor: colors.VERY_LIGHT_GRAY,
    flex: 1,
    padding: 30,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SFPro",
  },
  image: {
    alignSelf: "center",
    flex: 0.5,
  },
  imageBackground: {
    height: 150,
    width: 150,
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  lines: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.BLACK,
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  noBottomBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.BLACK,
    borderBottomWidth: 0.5,
    marginBottom: 20,
    borderBottomWidth: 0,
  },
  subTitle: {
    fontSize: 12,
    color: colors.DARK_GRAY2,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: "SFPro",
    color: colors.TURQUOISE3,
  },
  content: {
    fontSize: 17,
    color: colors.DARK_GRAY2,
    fontFamily: "SFPro",
  },
  editButton: {
    alignSelf: "center",
  },
});
