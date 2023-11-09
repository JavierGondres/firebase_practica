import React from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Login = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
