import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/bankAccountScreenStyles";

const BankLines = ({ imgBank, bank, names, more }) => {
  return (
    <View style={styles.banks}>
      <Image source={imgBank} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.bankName}>{bank}</Text>
        <Text style={styles.name}>{names}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Image source={more} />
      </TouchableOpacity>
    </View>
  );
};

export default BankLines;
