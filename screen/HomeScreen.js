import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen({navigation}) {
  const signOutAction = () => {
    navigation.navigate('LoginScreen');
  };

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Documents')
      .where('approvers', '==', [
        {mail: auth().currentUser?.email, status: 'pending'},
      ])
      .get()
      .then(querySnapshot => {
        setDocuments(querySnapshot.docs.map(doc => doc.data()));
      });
  }, []);

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
    <View style={styles.mainBody}>
      <View style={styles.header}>
        <Text style={{color: '#FFF', fontSize: 22}}>Dashboard</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.card}>
          <Text style={{fontSize: 30}}>{documents.length}</Text>
          <Button title="Pending"></Button>
        </View>
        <View style={styles.card}>
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

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#9575cd',
    height: 500,
    flex: 1,
    paddingTop: 100,
    padding: 10,
  },
  cardBody: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    flexDirection: 'row',
  },
  card: {
    margin: 40,
    width: '30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#9575cd',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#c7a4ff',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
});
