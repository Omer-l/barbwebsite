import React, {useEffect, useState} from "react";
import { Alert } from 'react-native';
import {Button} from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } from "../env";

const config = {
    // androidClientId: process.env.ANDROID_CLIENT_ID,
    // iosClientId: process.env.IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
}

const GoogleButton = () => {
    WebBrowser.maybeCompleteAuthSession();
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest(config);
    //request - An instance of AuthRequest that can be used to prompt the user for authorization. This will be null until the auth request has finished loading.
    //response - This is null until promptAsync has been invoked. Once fulfilled it will return information about the authorization.
    //promptAsync - When invoked, a web browser will open up and prompt the user for authentication. Accepts an AuthRequestPromptOptions object with options about how the prompt will execute.

    const getUserInfo = async (token) => {
        //absent token
        if (!token) return;
        //present token
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            const user = await response.json();
            //store user information  in Asyncstorage
            await AsyncStorage.setItem("user", JSON.stringify(user));
            setUserInfo(user);
        } catch (error) {
            console.error( "Failed to fetch user data:", error, response);
        }
    };

    const signInWithGoogle = async () => {
        try {
            // Attempt to retrieve user information from AsyncStorage
            const userJSON = await AsyncStorage.getItem("user");

            if (userJSON) {
                // If user information is found in AsyncStorage, parse it and set it in the state
                setUserInfo(JSON.parse(userJSON));
            } else if (response?.type === "success") {
                // If no user information is found and the response type is "success" (assuming response is defined),
                // call getUserInfo with the access token from the response
                getUserInfo(response.authentication?.accessToken);
            }
        } catch (error) {
            // Handle any errors that occur during AsyncStorage retrieval or other operations
            console.error("Error retrieving user data from AsyncStorage:", error);
        }
    };

    //add it to a useEffect with response as a dependency
    useEffect(() => {
        signInWithGoogle();
    }, [response]);


        console.log("helloooooooooooooooooo")
        return (
            <Button mode="outlined" onPress={() => { promptAsync() }}> Continue with Google </Button>
        );
}

export default GoogleButton;