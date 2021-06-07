import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from '../styles/notificationScreenStyles';

const Notification = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate('Account');
  };

  return (
    <View style={styles.notification}>
      <TouchableOpacity onPress={navigateToProfile} style={styles.backButton}>
        <MaterialIcons name="arrow-back-ios" size={22} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Notification</Text>
      <View style={styles.notifications}>
        <Image source={require('../../assets/notification/image10.png')} style={styles.image}/>
        <Text style={styles.text}>Apple stocks just increased. Check it out now.</Text>
        <Text style={styles.time}>15min ago</Text>
      </View>
      <View style={styles.notifications}>
        <Image source={require('../../assets/notification/image11.png')} style={styles.image}/>
        <Text style={styles.text}>Check out today's best investor. You'll learn from him.</Text>
        <Text style={styles.time}>3min ago</Text>
      </View>
      <View style={styles.notifications}>
        <Image source={require('../../assets/notification/image12.png')} style={styles.image}/>
        <Text style={styles.text}>Where do you see yourself in the next ages.</Text>
        <Text style={styles.time}>30secs ago</Text>
      </View>
    </View>
  );
};

export default Notification;