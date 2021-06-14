import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/notificationScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../components/images";
import { ntText } from "../text/text";
import NotificationLines from "../components/notificationLines";

const Notification = () => {
  const navigator = useNavigation();
  const navigateBack = () => {
    navigator.goBack();
  };

  const _notificationArray = [
    {
      imgName: Images.notification1,
      texts: ntText.ntText1,
      times: ntText.ntTime1,
    },
    {
      imgName: Images.notification2,
      texts: ntText.ntText2,
      times: ntText.ntTime2,
    },
    {
      imgName: Images.notification3,
      texts: ntText.ntText3,
      times: ntText.ntTime3,
    },
  ];

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
