import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {useCollections} from '../../hooks/useCollections';

export const Dashboard = () => {
  const {user, signOut} = useAuth();
  const {getUserDataById} = useCollections();
  const [userData, setUserData] = useState<any>();
  const fetchUserData = async () => {
    try {
      const document = await getUserDataById(user?.userId || '');
      setUserData(document?.data());
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchUserData()
  }, [user]);


  return (
    <SafeAreaView>
      <View>
        <Text>Nombre: {userData?.userName}</Text>
        <Text>Email: {userData?.userEmail}</Text>
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
