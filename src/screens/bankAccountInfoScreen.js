import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/bankAccountScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../components/images";
import { bankText } from "../text/text";
import BankLines from "../components/bankAccountLines";

const BankAccount = () => {
  const navigator = useNavigation();
  const navigateBack = () => {
    navigator.goBack();
  };

  const _bankArray = [
    {
      imgBank: Images.bankImage1,
      bank: bankText.bank1,
      names: bankText.bankName,
      more: Images.more,
    },
    {
      imgBank: Images.bankImage2,
      bank: bankText.bank2,
      names: bankText.bankName,
      more: Images.more,
    },
  ];

  return (
    <View style={styles.bankAccount}>
      <View style={styles.title}>
        <TouchableOpacity onPress={navigateBack}>
          <Image source={Images.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{bankText.bankTitle}</Text>
        <Text></Text>
      </View>
      {_bankArray.map((x, index) => (
        <BankLines
          key={index}
          imgBank={x.imgBank}
          bank={x.bank}
          names={x.names}
          more={x.more}
        />
      ))}
      <View style={styles.addAccountButton}>
        <TouchableOpacity>
          <Text style={styles.addAccountButtonText}>Add account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankAccount;
