import React from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import { RootStackParamList } from '../App/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Signup'> {}

export const Signup = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            inputMode="email"
            style={styles.input}
          />
          <TextInput placeholder="Name" inputMode="text" style={styles.input} />
          <TextInput
            placeholder="Age"
            inputMode="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Go to Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
