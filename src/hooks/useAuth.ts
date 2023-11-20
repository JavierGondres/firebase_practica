import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {navigate} from '../navigationref/rootNavigation';

interface UserProps {
  userId: string | null;
  userName: string | null;
  email: string | null;
}

export const useAuth = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const checkUserAuthenticacion = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) 
        setUser(JSON.parse(storedUser));
    };

    checkUserAuthenticacion();
  }, []);

  const signIn = async (email: string, password: string) => {
    let errorText = '';
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      const {uid, displayName, email: userEmail} = result.user;

      const userData: UserProps = {
        userId: uid,
        email: userEmail,
        userName: displayName,
      };

      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      navigate('Dashbord');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          errorText = 'Correo electrónico no válido';
          break;
        case 'auth/user-disabled':
          errorText = 'La cuenta de usuario ha sido deshabilitada';
          break;
        case 'auth/user-not-found':
          errorText = 'No se encontró la cuenta de usuario';
          break;
        case 'auth/wrong-password':
          errorText = 'Contraseña incorrecta';
          break;
        default:
          errorText = 'Error al iniciar sesión';
          console.error('Error al iniciar sesión:', error);
          break;
      }
      return errorText;
    }
  };
  const signUp = async (
    email: string,
    password: string,
    userAge: string,
    userName: string,
  ) => {
    let errorText = '';
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User account created & signed in!');
      const userData = {
        userId: userCredential.user.uid,
        userEmail: userCredential.user.email,
        userName: userName,
        userAge: userAge,
      };

      await saveUserToFirestore(userCredential.user?.uid || '', userData);
      navigate('Login');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorText = 'That email address is already in use!';
          break;
        case 'auth/invalid-email':
          errorText = 'That email address is invalid!';
          break;
        default:
          errorText = `Error:, ${error}`;
      }
      return errorText;
    }
  };

  const saveUserToFirestore = async (userId: string, userData: object) => {
    try {
      const usersRef = firestore().collection('Users');
      await usersRef.doc(userId).set(userData);
      console.log('User data saved to Firestore successfully');
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('user');
      setUser(undefined);
      navigate('Login')
    } catch (error) {
      navigate('Login')
      console.error('Error al cerrar sesión:', error);
    }
  };

  return {signIn, signUp, user, signOut};
};
