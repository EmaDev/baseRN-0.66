import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
      <View style={{flex: 1, backgroundColor: '#2E2E2E'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Home Screen</Text>
          <Icon
          name="code-outline"
          size={25}
          color="white"
          />
      </View>
      </View>
  )
}
