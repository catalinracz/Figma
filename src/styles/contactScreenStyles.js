import { StyleSheet } from "react-native";
import { DMSans, SFPro } from "../components/fonts";

export const styles = StyleSheet.create({
  contact: {
    backgroundColor: "#F8F8F9",
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
    fontFamily: SFPro,
    marginLeft: -20,
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
    borderColor: "#000000",
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  noBottomBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#000000",
    borderBottomWidth: 0.5,
    marginBottom: 20,
    borderBottomWidth: 0
  },
  subTitle: {
    fontSize: 12,
    color: "#333333",
  },
  buttonText: {
    fontSize: 10,
    fontFamily: SFPro,
    color: "#31A05F",
  },
  content: {
    fontSize: 17,
    color: "#333333",
    fontFamily: SFPro,
  },
  editButton: {
    alignSelf: "center",
  },
});
