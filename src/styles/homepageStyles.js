import { StyleSheet } from "react-native";
import { DMSans, SFPro } from '../components/fonts';


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
    fontFamily: DMSans,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },
  title: {
    fontSize: 34,
    fontFamily: DMSans,
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
    fontFamily: SFPro,
    color: "white",
  },
  money: {
    fontSize: 32,
    fontFamily: SFPro,
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
    fontFamily: SFPro,
    fontWeight: "600",
  },
  plans: {
    marginTop: 40,
    flex: 1,
    marginRight: -30
  },
  plansText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bestPlansText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  seeAllText: {
    marginRight: 30,
    fontSize: 18,
    color: "#FE555D",
    fontWeight: "500",
  },
  gradeReturnText: {
    color: "white",
    fontSize: 17,
    fontFamily: SFPro,
  },
  returnText: {
    color: "white",
    fontSize: 13,
    fontFamily: SFPro,
  },
  guide: {
    marginTop: 48,
    flex: 0.5
  },
  guideText: {
    fontSize: 22,
    fontFamily: DMSans,
    fontWeight: "bold",
  },
  guideTitle: {
    color: "#4F4F4F",
    fontSize: 18,
    marginTop: 20,
    fontFamily: DMSans,
    fontWeight: "bold",
  },
  guideSubText: {
    color: "#474747",
    fontFamily: SFPro,
    flex: 1
  },
  image: {
    alignSelf: 'center'
  },
  plansSize: {
    width: 134,
    height: 170,
    borderRadius: 20,
    marginRight: 20
  },
  insidePlansText: {
    padding: 17
  },
  guideTextContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 23
  }
});
