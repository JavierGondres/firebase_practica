import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';

export const Dashboard = () => {
  const {signOut} = useAuth();

  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>
        <TouchableHighlight
          style={{
            backgroundColor: 'green',
            alignItems: 'center',
            width: 100,
          }}
          onPress={signOut}>
          <Text
            style={{
              color: 'white',
            }}>
            Sign Out
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
