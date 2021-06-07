import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../styles/profileScreensStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const navigateToHomepage = () => {
    navigation.navigate("Home");
  };
  const navigateToContact = () => {
    navigation.navigate("Contact");
  };
  const navigateToNotification = () => {
    navigation.navigate("Notification");
  };
  const navigateToBankAccount = () => {
    navigation.navigate("BankAccount");
  };

  return (
    <View style={styles.profile}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={navigateToHomepage}
        >
          <MaterialIcons name="arrow-back-ios" size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Profile</Text>
        <View style={styles.picture}>
          <Image source={require("../../assets/profile/profilePicture.png")} />
          <Text style={styles.profileName}>Jonas Macroni</Text>
          <Text style={styles.grade}>Expert</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={navigateToContact}>
            <FontAwesome name="info-circle" size={18} color="#333333" />
            <Text style={styles.buttonText}>Contact Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={17}
              color="#333333"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="money" size={17} color="#333333" />
            <Text style={styles.buttonText}>Source of Funding Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={17}
              color="#333333"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToBankAccount}>
            <FontAwesome name="bank" size={17} color="#333333" />
            <Text style={styles.buttonText}>Bank Account Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={17}
              color="#333333"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="file-o" size={17} color="#333333" />
            <Text style={styles.buttonText}>Document Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={17}
              color="#333333"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToNotification}>
            <FontAwesome name="gear" size={18} color="#333333" />
            <Text style={styles.buttonText}>Settings</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={17}
              color="#333333"
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
