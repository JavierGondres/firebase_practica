import React from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Signup = () => {
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
      </View>
    </SafeAreaView>
  );
};
