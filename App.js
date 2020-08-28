import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatBot from './Chatbot';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Chatbot" component={ChatBot} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
