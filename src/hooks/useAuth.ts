import React from 'react';

import auth from '@react-native-firebase/auth';
import {navigate} from '../navigationref/rootNavigation';

export const useAuth = () => {

  const signIn = async (email: string, password: string) => {
    let errorText = '';
    try {
      const result = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      result;
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
  const signUp = async (email: string, password: string) => {
    let errorText = '';
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      result;
      navigate('Login');
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

  return {signIn, signUp};
};
