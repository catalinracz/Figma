import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SnapshotViewIOS,
} from "react-native";

const SingUpScreen = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.artwork}></View>
      <Text style={styles.title}>Stay on top of your finance with us.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    flexDirection: 'column'
  },
  artwork: {
    flex: 0.5,
    backgroundColor: 'lightgrey',
    margin: 30
  },
  title: {
    flex: 1,
    fontSize: 34,
    textAlign: 'center'
  }
});

export default SingUpScreen;
