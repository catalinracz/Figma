import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/bankAccountScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../theme/images";
import { bankText } from "../text/text";
import BankLines from "../components/bankAccountLines";

const _bankArray = [
  {
    imgBank: Images.bankAmerica,
    bank: bankText.bankAmerica,
    names: bankText.bankName,
    more: Images.more,
  },
  {
    imgBank: Images.bankZenith,
    bank: bankText.bankZenith,
    names: bankText.bankName,
    more: Images.more,
  },
];

const BankAccount = () => {
  const navigator = useNavigation();
  const navigateBack = () => {
    navigator.goBack();
  };

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
          <Text style={styles.addAccountButtonText}>{bankText.bankButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankAccount;
