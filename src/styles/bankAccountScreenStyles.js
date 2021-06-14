import { StyleSheet } from "react-native";
import { colors } from "../components/colors";

export const styles = StyleSheet.create({
  bankAccount: {
    flex: 1,
    backgroundColor: colors.WHITEISH,
    padding: 20,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 27,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SFPro",
  },
  banks: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    height: 111,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    marginBottom: 29,
  },
  text: {
    alignSelf: "center",
  },
  bankName: {
    fontSize: 17,
    color: colors.LIGHT_DARK_GRAY,
    fontWeight: "600",
    fontFamily: "SFPro",
  },
  name: {
    fontSize: 14,
    color: colors.DARK_GRAY2,
  },
  moreButton: {
    alignSelf: "flex-start",
  },
  image: {
    alignSelf: "center",
  },
  addAccountButton: {
    backgroundColor: colors.TURQUOISE2,
    borderRadius: 20,
    height: 60,
    justifyContent: "center",
  },
  addAccountButtonText: {
    textAlign: "center",
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: "SFPro",
    fontWeight: "600",
  },
});
