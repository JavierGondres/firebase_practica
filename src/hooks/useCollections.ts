import firestore from '@react-native-firebase/firestore';

import React from 'react';

export const useCollections = () => {
  const getUserDataById = async (userId: string) => {
    try {
      const userData = await firestore().collection('Users').doc(userId).get();
      return userData
    } catch (error) {
        console.error(error);
    }
  };

  return {getUserDataById}

};
