import React, { useState, createContext, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// You can import supported modules from npm
import { TextInput, Card, BottomNavigation, Button, Divider } from 'react-native-paper';
import GoogleButton from './components/GoogleSign'
// or any files within the Snack
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator(); //register/login
const Tab = createBottomTabNavigator();
const AuthContext = createContext({
  hasUser: false,
  setUser: (b: boolean) => {},
});

// -------------------- BEFORE SIGN IN --------------------

const SignInScreen = () => {
  const { setUser } = useContext(AuthContext);
  // const [email, setEmail] = useState('');1
  // const [password, setPassword] = useState('');
  return (
      <View style={{gap: 20}}>
        <TextInput label="Email" />
        <TextInput label="Password" />
        <Button  mode="elevated" onPress={() => setUser(true)}> Continue </Button>
        <Divider style={{marginTop: "60%"}} />
        <GoogleButton/>
        <Button mode="outlined"> Continue with Facebook </Button>
      </View>
  );
}

// -------------------- AFTER SIGN IN --------------------
const Home = () => {
  return (
      <View>
      </View>
  )
}

const Profile = () => {
  const { setUser } = useContext(AuthContext);
  return (
      <View>
        <Button mode="elevated" onPress={() => setUser(false)}> Log Out </Button>
      </View>
  );
}

const HomeTabs = () => {
  return (
      <Tab.Navigator screenOptions={{tabBarVisible:true, headerShown: false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
  );
}

// ----------------- MAIN NAVIGATOR -------------------
const MainNavigator = () => {
  const { hasUser } = useContext(AuthContext);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          {hasUser ?
              <Stack.Screen name="Home Tabs" component={HomeTabs} options={{headerShown: false,}}/>
              :
              <Stack.Screen name="Sign In" component={SignInScreen}/>
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const App = () => {
  const [hasUser, setUser] = useState(false);
  return (
      <AuthContext.Provider value={{hasUser, setUser}}>
        <MainNavigator/>
      </AuthContext.Provider>
  );
}

export default App;


