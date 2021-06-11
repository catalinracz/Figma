import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/profileScreensStyles";
import { Images } from "../components/images";

const ProfileButton = ({ imageName, name, navigateTo1, screen }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigateTo1(screen)}>
      <Image source={imageName} />
      <Text style={styles.buttonText}>{name}</Text>
      <Image source={Images.rightArrow} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
