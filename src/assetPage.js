import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import setModalVisible from './homepage';
import modalVisible from './homepage';

const AssetPage = () => {
  return (
    <View style={styles.assetPage}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <AntDesign name="closecircle" size={24} color="#B3B3B3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  assetPage: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
});

export default AssetPage;