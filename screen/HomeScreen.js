import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

export default function HomeScreen({navigation}) {
  const signOutAction = () => {
    navigation.navigate('LoginScreen');
  };
  
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text>User Info: {auth().currentUser?.email}</Text>
        <Button
          title="Logout"
          onPress={() => {
            auth()
              .signOut()
              .then(signOutAction());
          }}></Button>
      </View>
    </ScrollView>
  );
}
