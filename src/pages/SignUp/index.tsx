import React, {useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {RootStackParamList} from '../App/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuth} from '../../hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Signup'> {}

export const Signup = ({navigation}: Props) => {
  const {signUp} = useAuth();

  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
  });

  const handleInputChange = (inputName: string, text: string) => {
    setDataForm({
      ...dataForm,
      [inputName]: text,
    });
  };

  const onSubmit = async () => {
    const {age, email, name, password} = dataForm;

    try {
      const error = await signUp(email, password, age, name);

      if (error) console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            inputMode="email"
            style={styles.input}
            onChangeText={text => handleInputChange('email', text)}
            value={dataForm.email}
          />
          <TextInput
            placeholder="Name"
            inputMode="text"
            style={styles.input}
            onChangeText={text => handleInputChange('name', text)}
            value={dataForm.name}
          />
          <TextInput
            placeholder="Age"
            inputMode="numeric"
            style={styles.input}
            onChangeText={text => handleInputChange('age', text)}
            value={dataForm.age}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={text => handleInputChange('password', text)}
            value={dataForm.password}
          />
        </View>
        <TouchableHighlight style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Go to Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
