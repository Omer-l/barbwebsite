import React, { useState, createContext, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// You can import supported modules from npm
import { TextInput, Card, BottomNavigation, Button, Divider } from 'react-native-paper';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator(); //register/login
const Tab = createBottomTabNavigator();
const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});

// -------------------- BEFORE SIGN IN --------------------

export default function SignInScreen() {
  const { setUser } = useContext(AuthContext);
  // const [email, setEmail] = useState('');1
  // const [password, setPassword] = useState('');
  return (
      <View style={{gap: 20}}>
        <TextInput label="Email" />
        <TextInput label="Password" />
        <Button  mode="elevated" onPress={() => setUser(true)}> Continue </Button>
        <Divider style={{marginTop: "60%"}} />
        <Button mode="outlined">      <Ionicons name="google" size={32} color="black" />
          Continue with Google </Button>
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
      <Tab.Navigator screenOptions={{tabBarVisible:true, headerShown: false}} tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                  navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 24 });
                }

                return null;
              }}
              getLabelText={({ route }) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.title;

                return label;
              }}
          />
      )}
      >
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

export default function App() {
  const [hasUser, setUser] = useState(false);
  return (
      <AuthContext.Provider value={{hasUser, setUser}}>
        <MainNavigator/>
      </AuthContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
