import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {HomeScreen, LoginScreen} from './screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  //if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#9575cd',
            },
            headerTintColor: 'white',
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
