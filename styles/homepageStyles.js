import { StyleSheet } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";

const homeStyles = () => {
  const fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });
};

export const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#F6F6F9",
    padding: 30,
    flex: 1
  },
  assetPage: {
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  topAsset: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exitButton: {},
  assetTitle: {
    fontSize: 22,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },
  title: {
    fontSize: 34,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  portofolio: {
    flex: 0.5
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.9,
  },
  portofolioText: {
    fontSize: 16,
    fontFamily: "SF-Pro",
    color: "white",
  },
  money: {
    fontSize: 32,
    fontFamily: "SF-Pro",
    fontWeight: "600",
    color: "white",
    marginTop: 11,
  },
  investButton: {
    padding: 10,
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderRadius: 15,
    flex: 0.8
  },
  investButtonText: {
    color: "#31A078",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SF-Pro",
    fontWeight: "600",
  },
  plans: {
    marginTop: 40,
    flex: 1
  },
  plansText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  plansList: {
  },
  bestPlansText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 18,
    color: "#FE555D",
    fontWeight: "500",
  },
  gradeReturnText: {
    color: "white",
    fontSize: 17,
    fontFamily: "SF-Pro",
  },
  returnText: {
    color: "white",
    fontSize: 13,
    fontFamily: "SF-Pro",
  },
  guide: {
    marginTop: 48,
    flex: 0.5
  },
  guideText: {
    fontSize: 22,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  guideTitle: {
    color: "#4F4F4F",
    fontSize: 18,
    marginTop: 20,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  guideSubText: {
    color: "#474747",
    fontFamily: "SF-Pro",
    flex: 1
  },
  image: {
  },
  plansSize: {
    width: 134,
    height: 170,
    borderRadius: 20,
    marginRight: 20
  },
  insidePlansText: {
    padding: 17
  }
});
