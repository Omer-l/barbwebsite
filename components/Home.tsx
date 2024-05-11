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
        // flex: 1,
        display: 'flex',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomPart: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    topTitle: {
        fontSize: 48,
        color: 'white',
    },
    title: {
        fontSize: 48,
    },
    avatar: {
        // width: 80,
        height: 80,
    },
    card: {
    },
}

export const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.topTitle}>BarbWebsite</Text>
                <TextInput label={"Search"}/>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                    <TouchableRipple style={styles.avatar} onPress={()=> console.log("1 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple style={styles.avatar} onPress={()=> console.log("2 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple style={styles.avatar} onPress={()=> console.log("Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text size={64} label="HAIR" />
                    </TouchableRipple>
                </ScrollView>
                <Divider/>
                <Text style={{color: "white"}}>No Appointments...</Text>
                <Button mode={"elevated"} onPress={() => console.log("Go to Appointments clicked")}>Go to Appointments</Button>
            </View>
            <View style={styles.bottomPart}>
                <Text style={styles.title}>New Barbers</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={styles.card}>
                        <Card.Title title={"BarberHire 1"}/>
                        <Card.Content>
                            <Text>Lorem Ipsum content.</Text>
                        </Card.Content>
                        <Card.Cover source={{uri: "https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg"}}/>
                    </Card>
                </ScrollView>
                <Text style={styles.title}>Recommended</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={styles.card}>
                        <Card.Title title={"Recommended 1"}/>
                        <Card.Content>
                            <Text>Lorem Ipsum content.</Text>
                        </Card.Content>
                        <Card.Cover source={{uri: "https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg"}}/>
                    </Card>
                </ScrollView>
            </View>
        </ScrollView>
    )
}