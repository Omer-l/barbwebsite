import React, { useState, createContext, useContext } from 'react';
import { ScrollView, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    TextInput,
    Card,
    Avatar,
    BottomNavigation,
    Button,
    Divider,
    Provider as PaperProvider,
    MD3LightTheme as DefaultTheme,
    TouchableRipple
} from 'react-native-paper';

import GoogleButton from './components/GoogleSign';
import { Icons } from './assets/my-icons';
import { HomeScreen } from './components/Home';
import {log} from "expo/build/devtools/logger";
const Stack = createStackNavigator(); //register/login
const Tab = createBottomTabNavigator();

const AuthContext = createContext({
  hasUser: false,
  setUser: (b: boolean) => {},
});


// -------------------- BEFORE SIGN IN --------------------

const styles = StyleSheet.create({
  mainContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    marginTop: 50

  },
  input: {
    borderColor:'black',
    backgroundColor:'white',
    marginTop: 45,
    width:300,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize:15,
    borderRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: 'hidden',
  },
  icons: {
    marginTop: 200
  }
})

const InputComponent = (props) => {
  return (
      <TextInput 
        style={styles.input}
        label={props.label} 
        placeholder={props.placeholder}
        secureTextEntry={props.password}
      />
  )
}


const SignInScreen = () => {
  const { setUser } = useContext(AuthContext);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  return (
      <View style={styles.container} >
        <InputComponent label='Email' />
        <InputComponent label='Password' password={true}/>
        <Button  mode="elevated" onPress={() => setUser(true)}> Continue </Button>
        <View style={styles.icons}>
          <GoogleButton  icon={Icons.google} />
          <Button style={{marginTop: 20}} icon={Icons.facebook} mode="outlined" onPress={() => console.log("facebook button pressed")}> Continue with Facebook </Button>
        </View>
      </View>
  );
}

// -------------------- AFTER SIGN IN --------------------

const SearchScreen = () => {
    return (
        <View>
            <Text>Search</Text>
        </View>
    );
}

const ScheduleScreen = () => {
    return (
        <View>
            <Text>Schedules</Text>
        </View>
    );
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
        {key: 'search', title: 'Search', focusedIcon: Icons.search.uri, unfocusedIcon: Icons.search_outline.uri},
        {key: 'schedule', title: 'Schedule', focusedIcon: Icons.schedule.uri, unfocusedIcon: Icons.schedule_outline.uri},
        {key: 'profile', title: 'Profile', focusedIcon: Icons.account, unfocusedIcon: Icons.account_outline.uri},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        search: SearchScreen,
        schedule: ScheduleScreen,
        profile: ProfileScreen,
    });

    return (
        <BottomNavigation shifting={true} navigationState={{ index, routes}} onIndexChange={setIndex} renderScene={renderScene}/>
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


