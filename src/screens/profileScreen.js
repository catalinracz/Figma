import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/profileScreensStyles';
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <TouchableOpacity>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.profileTitle}>Profile</Text>
      <View style={styles.picture}>
        <Image source={require("../../assets/profile/profilePicture.png")}/>
        <Text style={styles.profileName}>Jonas Macroni</Text>
        <Text style={styles.grade}>Expert</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text>Contact Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Source of Funding Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Bank Account Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Document Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile;