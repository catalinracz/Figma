import { StyleSheet } from "react-native";
import { colors } from "../components/colors";

export const styles = StyleSheet.create({
  homepage: {
    backgroundColor: colors.WHITEISH,
    padding: 30,
    flex: 1,
  },
  assetPage: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 30,
  },
  topAsset: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  assetTitle: {
    marginBottom: 29,
    fontSize: 22,
    fontFamily: "DMSans",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SFPro",
    color: colors.GRAY,
  },
  moneyRow: {
    flexDirection: "row",
  },
  moneyCount: {
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SFPro",
    marginRight: 41,
  },
  profit: {
    fontSize: 10.6667,
    fontFamily: "SFPro",
    color: colors.LIGHT_GREEN,
    alignSelf: "center",
  },
  currentPlans: {
    flex: 0.5,
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "DMSans",
    marginTop: 40,
    marginBottom: 20,
  },
  planImageSize: {
    width: 354,
    height: 207,
    padding: 28,
    flex: 1,
    marginBottom: 25,
  },
  goldText: {
    fontSize: 18,
    fontFamily: "SFPro",
    fontWeight: "600",
  },
  profitReturn: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "SFPro",
    color: colors.VERY_DARK_GREEN,
  },
  seeAllPlans: {
    fontFamily: "SFPro",
    fontSize: 18,
    fontWeight: "500",
    color: colors.PINK,
    textAlign: "center",
  },
  historyTitle: {
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "DMSans",
    marginBottom: 20,
    marginTop: 30,
  },
  history: {
    borderBottomColor: colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  blackRp: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "DMSans",
  },
  greenRp: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "DMSans",
    color: colors.LIGHT_GREEN,
  },
  buyDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buy: {
    fontFamily: "SFPro",
    fontSize: 14,
    color: colors.GRAY,
  },
  date: {
    fontFamily: "SFPro",
    fontSize: 14,
    color: colors.GRAY,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },
  title: {
    fontSize: 34,
    fontFamily: "DMSans",
    fontWeight: "bold",
  },
  portofolio: {
    flex: 0.5,
  },
  portofolioGradient: {
    borderRadius: 20,
    padding: 25,
    elevation: 21,
  },
  portofolioText: {
    fontSize: 16,
    fontFamily: "SFPro",
    color: colors.WHITE,
  },
  money: {
    fontSize: 32,
    fontFamily: "SFPro",
    fontWeight: "600",
    color: colors.WHITE,
    marginTop: 11,
  },
  investButton: {
    padding: 10,
    alignSelf: "flex-end",
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    flex: 0.8,
  },
  investButtonText: {
    color: colors.TURQUOISE,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SFPro",
    fontWeight: "600",
  },
  plans: {
    marginTop: 40,
    flex: 1,
    marginRight: -30,
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
    color: colors.PINK,
    fontWeight: "500",
  },
  gradeReturnText: {
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: "SFPro",
  },
  returnText: {
    color: colors.WHITE,
    fontSize: 13,
    fontFamily: "SFPro",
  },
  guide: {
    marginTop: 48,
    flex: 0.5,
  },
  guideText: {
    fontSize: 22,
    fontFamily: "DMSans",
    fontWeight: "bold",
  },
  guideTitle: {
    color: colors.LIGHTER_DARK_GRAY,
    fontSize: 18,
    marginTop: 20,
    fontFamily: "DMSans",
    fontWeight: "bold",
  },
  guideSubText: {
    color: colors.DARK_GRAY,
    fontFamily: "SFPro",
    flex: 1,
  },
  image: {
    alignSelf: "center",
  },
  plansSize: {
    width: 134,
    height: 170,
    borderRadius: 20,
    marginRight: 20,
  },
  insidePlansText: {
    padding: 17,
  },
  guideTextContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 23,
  },
});
