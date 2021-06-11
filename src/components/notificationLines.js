import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/notificationScreenStyles";

const NotificationLines = ({ imgName, texts, times }) => {
  return (
    <View style={styles.notifications}>
      <Image source={imgName} style={styles.image} />
      <Text style={styles.text}>{texts}</Text>
      <Text style={styles.time}>{times}</Text>
    </View>
  );
};

export default NotificationLines;
