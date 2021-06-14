import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/profileScreensStyles";
import { Images } from "../components/images";

const ProfileButton = ({ imageName, name, screen, navigateTo }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigateTo(screen)}>
      <Image source={imageName} />
      <Text style={styles.buttonText}>{name}</Text>
      <Image source={Images.rightArrow} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
