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
    TouchableRipple,
} from 'react-native-paper';


const styles: StyleSheet = {
    container: { //main container holding page
    },
    topPart: {
        backgroundColor:  DefaultTheme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    bottomPart: {
        backgroundColor: DefaultTheme.colors.secondary,
        alignItems: 'center',
    },
    topTitle: {
        fontSize: 48,
        color: 'white',
    },
    titleContainer: {
        alignItems: 'left',
        width: '100%',
        marginLeft: 60,
    },
    title: {
        fontSize: 48,
    },
    avatar: {
        // width: 80,
        borderRadius: '50%',
    },
    card: {
    },
}

export const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.topTitle}>BarbWebsite</Text>
                <TextInput mode='outlined' label={"Search"}/>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                    <TouchableRipple borderless={true} style={styles.avatar} onPress={()=> console.log("1 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text style={{backgroundColor: DefaultTheme.colors.tertiary}} size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple style={styles.avatar} onPress={()=> console.log("2 Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text style={{backgroundColor: DefaultTheme.colors.tertiary}} size={64} label="HAIR" />
                    </TouchableRipple>
                    <TouchableRipple style={styles.avatar} onPress={()=> console.log("Clicked")} rippleColor="rgba(0, 0, 0, .32)">
                        <Avatar.Text style={{backgroundColor: DefaultTheme.colors.tertiary}} size={64} label="HAIR" />
                    </TouchableRipple>
                </ScrollView>
                <Divider/>
                <Text style={{color: "white"}}>No Appointments...</Text>
                <Button mode={"elevated"} onPress={() => console.log("Go to Appointments clicked")}>Go to Appointments</Button>
            </View>
            <View style={styles.bottomPart}>
                <View style={styles.titleContainer}> <Text style={styles.title}>New Barbers</Text> </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={styles.card}>
                        <Card.Title title={"BarberHire 1"}/>
                        <Card.Content>
                            <Text>Lorem Ipsum content.</Text>
                        </Card.Content>
                        <Card.Cover source={{uri: "https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg"}}/>
                    </Card>
                </ScrollView>
                <View style={styles.titleContainer}><Text style={styles.title}>Recommended</Text></View>
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