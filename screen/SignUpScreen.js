import { View, Text } from 'react-native'
import React from 'react'

export default function SignUpScreen() {
  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  )
}

// TODO:

// auth()
//   .createUserWithEmailAndPassword(userEmail, userPassword)
//   .then(() => {
//     alert('User account created & signed in!');
//   })
//   .catch(error => {
//     alert();
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }
//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }
//     console.error(error);
//   });