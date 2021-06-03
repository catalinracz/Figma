import { StyleSheet } from "react-native";
import { DMSans, SFPro } from '../components/fonts';

export const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    padding: 30
  },
  profileTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: DMSans
  },
  picture: {
    flex: 0.5,
    alignItems: 'center'
  },
  profileName: {
    marginTop: 21,
    fontSize: 22,
    fontWeight: '600',
    fontFamily: SFPro
  },
  grade: {
    fontSize: 17,
    fontFamily: SFPro
  },
  buttons: {
    flex: 0.5,
  },
  button: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'white'
  }
});