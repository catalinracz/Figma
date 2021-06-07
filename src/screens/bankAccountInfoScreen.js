import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from '../styles/bankAccountScreenStyles';

const BankAccount = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate('Account')
  }
  return (
    <View style={styles.bankAccount}>
      <View style={styles.title}>
        <TouchableOpacity onPress={navigateToProfile}>
          <MaterialIcons name="arrow-back-ios" size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Bank of account info</Text>
        <Text></Text>
      </View>
      <View style={styles.banks}>
        <Image source={require('../../assets/bank/image1.png')} style={styles.image}/>
          <View style={styles.text}>
            <Text style={styles.bankName}>Bank of Amrica - 0182128xxx</Text>
            <Text style={styles.name}>Jonas Macroni</Text>
          </View>
        <TouchableOpacity style={styles.moreButton}>
          <MaterialIcons name="more-vert" size={24} color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.banks}>
        <Image source={require('../../assets/bank/image2.png')} style={styles.image}/>
          <View style={styles.text}>
            <Text style={styles.bankName}>Zenith Bank - 0182128xxx</Text>
            <Text style={styles.name}>Jonas Macroni</Text>
          </View>
        <TouchableOpacity style={styles.moreButton}>
          <MaterialIcons name="more-vert" size={24} color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.addAccountButton}>
        <TouchableOpacity>
          <Text style={styles.addAccountButtonText}>Add account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankAccount;