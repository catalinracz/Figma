import { StyleSheet } from "react-native";
import { DMSans, SFPro } from "../components/fonts";

export const styles = StyleSheet.create({
  bankAccount: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    padding: 20
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 27
  },
  titleText: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: SFPro
  },
  banks: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 111,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    marginBottom: 29
  },
  text: {
    alignSelf: 'center',
  },
  bankName: {
    fontSize: 17,
    color: '#555555',
    fontWeight: '600',
    fontFamily: SFPro
  },
  name: {
    fontSize: 14,
    color: '#333333'
  },
  moreButton: {
    alignSelf: 'flex-start'
  },
  image: {
    alignSelf: 'center'
  },
  addAccountButton: {
    backgroundColor: '#31A062',
    borderRadius: 20,
    height: 60,
    justifyContent: 'center'
  },
  addAccountButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: SFPro,
    fontWeight: '600'
  }
});