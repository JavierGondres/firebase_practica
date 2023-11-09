import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableHighlight,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { navigate } from '../../navigationref/rootNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App/types';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Login'> {}

export const Login = ({navigation}: Props) => {

  const {signIn} = useAuth();

  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (inputName: string, text:string) => {
    setDataForm({
      ...dataForm,
      [inputName]: text,
    });
  };

  const onSubmit = async () => {
    try {
      
      const error = await  signIn(dataForm.email, dataForm.password)

      if(error)
        console.log(error)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            nativeID="email"
            onChangeText={text => handleInputChange('email', text)}
            value={dataForm.email}

          />
          <TextInput
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            style={styles.input}
            nativeID="password"
            value={dataForm.password}
            onChangeText={text => handleInputChange('password', text)}
          />
        </View>
        <TouchableHighlight style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.btnText}>Go to signup</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
