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
import Dashboard from './pages/Dashboard';
import Session from './pages/Session';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Help from './pages/Help';
import Setting from './pages/Setting';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from './utils/GlobalStyle';


function App(): JSX.Element {

  const Stack = createStackNavigator();
  const { Purple } = GlobalStyle

  const LoginStackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={
          { header: () => null }
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

  const Tab = createBottomTabNavigator();

  const LayoutTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Dashboard'}
        // backBehavior='none'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Session') {
              return (
                <Entypo name='chat' size={focused ? 25 : 20} color={focused? '#ffffff' : '#701a75'} />
              )
            } else if(route.name === 'Dashboard') {
              return (
                <MaterialIcons name='space-dashboard' size={focused ? 25 : 20} color={focused? '#ffffff' : '#701a75'} />
              )

            }else if(route.name === 'Help') {
              return (
                <FontAwesome5 name='hands-helping' size={focused ? 25 : 20} color={focused? '#ffffff' : '#701a75'} />
              )

            }else if(route.name === 'Settings') {
              return (
                <Ionicons name='settings-sharp' size={focused ? 25 : 20} color={focused? '#ffffff' : '#701a75'} />
              )

            }
            // return iconName
          },
          header: () => null,
          tabBarActiveTintColor: `#ffffff`,
          tabBarActiveBackgroundColor: `#701a75`,

          // tabBarLabelPosition: 'beside-icon'
        })}
      >
        <Tab.Screen name='Session' component={Session} />
        <Tab.Screen name='Dashboard' component={Dashboard} />
        <Tab.Screen name='Help' component={Help} />
        <Tab.Screen name='Settings' component={Setting} />
      </Tab.Navigator>
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
          name='LoginStackScreen'
          component={LoginStackScreen}
        />
        <Stack.Screen
          name='LayoutTabScreen'
          component={LayoutTabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
