import { StyleSheet } from "react-native";
import { DMSans, SFPro } from '../components/fonts';

export const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    padding: 30,
    marginBottom: -30
  },
  profileTitle: {
    fontSize: 34,
    marginBottom: 20,
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
    shadowColor: 'black'
  },
  button: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 21,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    fontSize: 17,
    color: '#333333',
    fontFamily: SFPro,
    fontWeight: '600',
    alignSelf: 'center'
  },
  arrow: {
  },
  backbutton: {
    marginTop: 20,
    marginBottom: 20
  }
});