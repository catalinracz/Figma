import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/contactScreenStyles";

const ContactLines = ({ sub, contents, bttnText }) => {
  return (
    <View style={styles.lines}>
      <View>
        <Text style={styles.subTitle}>{sub}</Text>
        <Text style={styles.content}>{contents}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.buttonText}>{bttnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactLines;
