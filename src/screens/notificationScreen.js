import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/notificationScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../theme/images";
import { ntText } from "../text/text";
import NotificationLines from "../components/notificationLines";

const _notificationArray = [
  {
    imgName: Images.notification1,
    texts: ntText.ntAppleStocks,
    times: ntText.nt15min,
  },
  {
    imgName: Images.notification2,
    texts: ntText.ntBestInvestor,
    times: ntText.nt3min,
  },
  {
    imgName: Images.notification3,
    texts: ntText.ntWhere,
    times: ntText.nt30secs,
  },
];

const Notification = () => {
  const navigator = useNavigation();
  const navigateBack = () => {
    navigator.goBack();
  };

  return (
    <View style={styles.notification}>
      <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
        <Image source={Images.leftArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Notification</Text>
      {_notificationArray.map((x, index) => (
        <NotificationLines
          key={index}
          imgName={x.imgName}
          texts={x.texts}
          times={x.times}
        />
      ))}
    </View>
  );
};

export default Notification;
