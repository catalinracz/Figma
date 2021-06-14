import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../styles/profileScreensStyles";
import { Images } from "../components/images";
import { pfText } from "../text/text";
import roots from "../navigator/roots";
import ProfileButton from "../components/profileButton";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigator = useNavigation();
  const navigateToScreen = (name) => {
    navigator.navigate({ name });
  };
  const navigateBack = () => {
    navigator.goBack();
  };

  const _profileArray = [
    {
      imageName: Images.contact,
      name: pfText.pfContact,
      screen: roots.contactInfoScreen,
    },
    {
      imageName: Images.fund,
      name: pfText.pfFund,
    },
    {
      imageName: Images.bank,
      name: pfText.pfBank,
      screen: roots.bankAccountInfoScreen,
    },
    {
      imageName: Images.doc,
      name: pfText.pfDoc,
    },
    {
      imageName: Images.setting,
      name: pfText.pfSetting,
      screen: roots.notificationScreen,
    },
  ];

  return (
    <View style={styles.profile}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backbutton} onPress={navigateBack}>
          <Image source={Images.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>{pfText.pfTitle}</Text>
        <View style={styles.picture}>
          <Image source={Images.profile} />
          <Text style={styles.profileName}>{pfText.pfName}</Text>
          <Text style={styles.grade}>{pfText.pfGrade}</Text>
        </View>
        <View style={styles.buttons}>
          {_profileArray.map((x, index) => (
            <ProfileButton
              key={index}
              imageName={x.imageName}
              name={x.name}
              screen={x.screen}
              navigateTo={navigateToScreen}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
