import React, { useState, createContext, useContext } from 'react';
import { ScrollView, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
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


const styles: StyleSheet = {
    container: {
        flex: 1,
    },
    topPart: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomPart: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
    }
}

export const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.title}>BarbWebsite</Text>
                <TextInput label={"Search"}/>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                    <TouchableRipple onPress={()=> console.log("1 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple onPress={()=> console.log("2 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple onPress={()=> console.log("Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 1 Pressed")}>Badge 1</Button>*/}
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 2 Pressed")}>Badge 2</Button>*/}
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 3 Pressed")}>Badge 3</Button>*/}
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 1 Pressed")}>Badge 4</Button>*/}
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 2 Pressed")}>Badge 5</Button>*/}
                    {/*<Button mode={"outlined"} onPress={() => console.log("Badge 3 Pressed")}>Badge 6</Button>*/}
                </ScrollView>
                <Button mode={"elevated"} onPress={() => console.log("Go to Appointments clicked")}>Go to Schedules</Button>
            </View>
            <View style={styles.bottomPart}>
                <Text style={styles.title}>New Barbers</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/*    Cards here */}
                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/*    Cards here */}
                </ScrollView>
                <Text style={styles.title}>Recommended</Text>
            </View>
        </ScrollView>
    )
}