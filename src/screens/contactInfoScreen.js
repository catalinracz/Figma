import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "../styles/contactScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../theme/images";
import { ctText } from "../text/text";
import ContactLines from "../components/contactLines";

const _contactArray = [
  {
    sub: ctText.ctName,
    contents: ctText.ctNameText,
    bttnText: ctText.ctChangeButton,
  },
  {
    sub: ctText.ctBirth,
    contents: ctText.ctBirthText,
    bttnText: ctText.ctChangeButton,
  },
  {
    sub: ctText.ctGender,
    contents: ctText.ctGenderText,
    bttnText: ctText.ctChangeButton,
  },
  {
    sub: ctText.ctEmail,
    contents: ctText.ctEmailText,
    bttnText: ctText.ctChangeButton,
  },
  {
    sub: ctText.ctPhone,
    contents: ctText.ctPhoneText,
    bttnText: ctText.ctAddButton,
  },
  {
    sub: ctText.ctAddress,
    contents: ctText.ctAddressText,
    bttnText: ctText.ctAddButton,
  },
];

const Contact = () => {
  const navigator = useNavigation();
  const navigateBack = () => {
    navigator.goBack();
  };

  return (
    <View style={styles.contact}>
      <View style={styles.title}>
        <TouchableOpacity onPress={navigateBack}>
          <Image source={Images.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{ctText.ctTitle}</Text>
        <Text></Text>
      </View>
      <View style={styles.image}>
        <TouchableOpacity>
          <ImageBackground
            source={Images.contactPicture}
            style={styles.imageBackground}
          >
            <Image style={styles.editButton} source={Images.edit} />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        {_contactArray.map((x, index) => (
          <ContactLines
            key={index}
            sub={x.sub}
            contents={x.contents}
            bttnText={x.bttnText}
          />
        ))}
      </View>
    </View>
  );
};

export default Contact;
