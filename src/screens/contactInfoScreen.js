import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { styles } from "../styles/contactScreenStyles";
import { MaterialIcons } from "@expo/vector-icons";

const Contact = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.contact}>
      <View style={styles.title}>
        <TouchableOpacity onPress={navigateToProfile}>
          <MaterialIcons name="arrow-back-ios" size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Contact info</Text>
        <Text></Text>
      </View>
      <View style={styles.image}>
        <TouchableOpacity>
          <ImageBackground
            source={require("../../assets/contact/contactInfo.png")}
            style={styles.imageBackground}
          >
            <MaterialIcons
              name="edit"
              size={24}
              color="#FFFFFF"
              style={styles.editButton}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.lines}>
          <View>
            <Text style={styles.subTitle}>Name</Text>
            <Text style={styles.content}>Warren Buffet</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lines}>
          <View>
            <Text style={styles.subTitle}>Birthdate</Text>
            <Text style={styles.content}>05 November 1993</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lines}>
          <View>
            <Text style={styles.subTitle}>Gender</Text>
            <Text style={styles.content}>Male</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lines}>
          <View>
            <Text style={styles.subTitle}>Email</Text>
            <Text style={styles.content}>warren.buff@invest.ai</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lines}>
          <View>
            <Text style={styles.subTitle}>Phone Number</Text>
            <Text style={styles.content}>-</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noBottomBorder}>
          <View>
            <Text style={styles.subTitle}>Address</Text>
            <Text style={styles.content}>-</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Contact;
