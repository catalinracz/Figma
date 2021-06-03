import React from 'react';
import { View } from 'react-native';
import MainStack from './src/navigator/mainNavigator';

function App() {
  return (
    <View style={{flex: 1}}>
      <MainStack></MainStack>
    </View>
  );
};

export default App;

