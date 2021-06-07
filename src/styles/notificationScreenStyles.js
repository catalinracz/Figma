import { StyleSheet } from "react-native";
import { DMSans, SFPro } from "../components/fonts";
import theme from '../components/theme';

export const styles = StyleSheet.create({
  notification: {
    flex: 1,
    backgroundColor: theme.mainColor,
    padding: 20
  },
  backButton: {
    marginTop: 30
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: DMSans,
    marginBottom: 44
  },
  notifications: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
    marginBottom: 30
  },
  image: {
    alignSelf: 'center'
  },
  text: {
    flex: 0.9,
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: SFPro,
    color: '#000000',
  },
  time: {
    alignSelf: 'flex-start',
    fontFamily: SFPro,
    fontSize: 13,
    color: '#000000'
  }
});
