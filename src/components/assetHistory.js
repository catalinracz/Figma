import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/homepageStyles";

const AssetHistory = ({ price, color, stock, time }) => {
  return (
    <View style={styles.history}>
      <Text style={color}>{price}</Text>
      <View style={styles.buyDate}>
        <Text style={styles.buy}>{stock}</Text>
        <Text style={styles.date}>{time}</Text>
      </View>
    </View>
  );
};

export default AssetHistory;
