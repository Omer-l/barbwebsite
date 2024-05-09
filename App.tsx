import React, { useState, createContext, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// You can import supported modules from npm
import { TextInput, Card, BottomNavigation, Button, Divider, Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import GoogleButton from './components/GoogleSign';
import { Icons } from './assets/my-icons';
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
        <GoogleButton icon={Icons.google} />
        <Button icon={Icons.facebook} mode="outlined"> Continue with Facebook </Button>
      </View>
  );
}

// -------------------- AFTER SIGN IN --------------------
const HomeScreen = () => {
  return (
      <View>
      </View>
  )
}

const ProfileScreen = () => {
  const { setUser } = useContext(AuthContext);
  return (
      <View>
        <Button mode="elevated" onPress={() => setUser(false)}> Log Out </Button>
      </View>
  );
}

// const HomeTabs = () => {
//   return (
//       <Tab.Navigator screenOptions={{tabBarVisible:true, headerShown: false}}>
//         <Tab.Screen name="Home" component={HomeScreen}/>
//         <Tab.Screen name="Profile" component={ProfileScreen}/>
//       </Tab.Navigator>
//   );
// }

const MyComponent = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'home', title: 'Home', focusedIcon: Icons.home.uri, unfocusedIcon: Icons.home_outline.uri},
        {key: 'profile', title: 'Profile', focusedIcon: Icons.account, unfocusedIcon: Icons.account_outline.uri},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        profile: ProfileScreen,
    });

    return (
        <BottomNavigation navigationState={{ index, routes}} onIndexChange={setIndex} renderScene={renderScene}/>
    );
}

// ----------------- MAIN NAVIGATOR -------------------
const MainNavigator = () => {
  const { hasUser } = useContext(AuthContext);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          {hasUser ?
              <Stack.Screen name="Home Tabs" component={MyComponent} options={{headerShown: false,}}/>
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
          <PaperProvider theme={DefaultTheme}>
              <MainNavigator/>
          </PaperProvider>
      </AuthContext.Provider>
  );
}

export default App;


