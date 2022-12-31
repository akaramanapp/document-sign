import {View, Text, ScrollView, Button} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen({navigation}) {
  const signOutAction = () => {
    navigation.navigate('LoginScreen');
  };


  const add = () => {
    firestore()
      .collection('Documents')
      .add({
        name: 'Fifa 2022',
        sign: true,
      })
      .then(() => {
        alert('Document added!');
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#9575cd',
          height: 500,
          flex: 1,
          paddingTop: 100,
          padding: 10,
        }}>
        <Text style={{color: '#FFF', fontSize: 22}}>Dashboard</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '75%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 60,
          flexDirection: 'row',
        }}>
        <View
          style={{
            margin: 40,
            width: '30%',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#fff',
            shadowColor: '#9575cd',
            shadowOpacity: 0.7,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1,
            },
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 30}}>30</Text>
          <Button title="Detail"></Button>
        </View>
        <View
          style={{
            margin: 40,
            width: '30%',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#fff',
            shadowColor: '#9575cd',
            shadowOpacity: 0.7,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1,
            },
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 30}}>27</Text>
          <Button title="Detail" onPress={add}></Button>
        </View>
      </View>
    </View>
    // <ScrollView
    //   keyboardShouldPersistTaps="handled"
    //   contentContainerStyle={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //   }}>
    //   <View style={{alignItems: 'center'}}>
    //     <Text>User Info: {auth().currentUser?.email}</Text>
    //     <Button
    //       title="Logout"
    //       onPress={() => {
    //         auth()
    //           .signOut()
    //           .then(signOutAction());
    //       }}></Button>
    //   </View>
    // </ScrollView>
  );
}
