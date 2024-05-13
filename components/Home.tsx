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
        gap: 10,
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
        fontSize: 30,
    },
    avatar: {
        // width: 80,
        borderRadius: '50%',
    },
    card: {
    },
}

export const HomeScreen = () => {
    const [categories, setCategories] = useState(['C1', 'C2', 'C3']);
    const addNewCategory = (category) => {
        setCategories([...categories, category])
    }

    const [newBarbers, setNewBarbers] = useState([{title: 'Barber1', descr: 'Barber 1 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber2', descr: 'Barber 2 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber3', descr: 'Barber 3 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber4', descr: 'Barber 4 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber5', descr: 'Barber 5 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber6', descr: 'Barber 6 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { title: 'Barber7', descr: 'Barber 7 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'}
    ]);
    const addNewBarbers = (newBarber) => {
        setNewBarbers([...newBarbers, newBarber]);
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.topTitle}>BarbWebsite</Text>
                <TextInput mode='outlined' label={"Search"}/>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                    {categories.map((newBarber: string, index: number) => { return (
                        <TouchableRipple borderless={true} style={styles.avatar} onPress={()=> console.log(newBarber)} rippleColor="rgba(0, 0, 0, .32)">
                            <Avatar.Text style={{backgroundColor: DefaultTheme.colors.tertiary}} size={64} label={newBarber} />
                        </TouchableRipple>
                    )})}
                </ScrollView>
                <Divider/>
                <Text style={{color: "white"}}>No Appointments...</Text>
                <Button mode={"elevated"} onPress={() => console.log("Go to Appointments clicked")}>Go to Appointments</Button>
            </View>
            <View style={styles.bottomPart}>
                <View style={styles.titleContainer}> <Text style={styles.title}>New Barbers</Text> </View>
                <ScrollView style={{gap: 50}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {newBarbers.map( (newBarber, index: number) => {
                        return(
                            <card style={styles.card}>
                                <Card.Title title={newBarber.title}/>
                                <Card.Content>
                                    <Text>{newBarber.descr}</Text>
                                </Card.Content>
                                <Card.Cover source={{uri: newBarber.imgUri}}/>
                            </card>
                        )})}
                    <Card style={styles.card}>
                        <Card.Title title={"BarberHire 1"}/>
                        <Card.Content>
                            <Text>Lorem Ipsum content.</Text>
                        </Card.Content>
                        <Card.Cover source={{uri: ""}}/>
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