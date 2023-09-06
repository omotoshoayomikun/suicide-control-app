import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Landing from './components/landingPhase/Landing';
import Login from './components/Auth/Login';
import PersonalQues from './components/Auth/Register/PersonalQues';
import ForgetPass from './components/Auth/ForgetPass';
import NextOfKinQues from './components/Auth/Register/NextOfKinQues';
import PasswordSet from './components/Auth/Register/PasswordSet';


function App(): JSX.Element {

  const Stack = createStackNavigator();

  const LoginStackScreen = () => {
    return (
      <Stack.Navigator
      screenOptions={
        {header: () => null}
      }
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='PersonalQues' component={PersonalQues} />
        <Stack.Screen name='NextOfKinQues' component={NextOfKinQues} />
        <Stack.Screen name='PasswordSet' component={PasswordSet} />
        <Stack.Screen name='ForgetPass' component={ForgetPass} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          { header: () => null }
        }
      >
        <Stack.Screen
          name='Home'
          component={LoginStackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
