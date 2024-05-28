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
import {CustomTheme} from './CustomThemeAndComponents';

import {LinearGradient} from 'react-native-linear-gradient';




// const CategoryView = () => {
//     const [categories, setCategories] = useState(['C1', 'C2', 'C3']);
//     const addNewCategory = (category) => {
//         setCategories([...categories, category])
//     };
//     return (
//
//         <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
//             {categories.map((newBarber: string, index: number) => { return (
//                     <TouchableRipple borderless={true} style={styles.avatar} onPress={()=> console.log(newBarber)} rippleColor="rgba(0, 0, 0, .32)">
//                         <Avatar.Text style={{backgroundColor: DefaultTheme.colors.tertiary}} size={64} label={newBarber} />
//                     </TouchableRipple>
//                 )})}
//         </ScrollView>
//     );
// }

const NewBarbersView = () => {
    const [newBarbers, setNewBarbers] = useState([
        { key: 1, title: 'Barber1', descr: 'Barber 1 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 2, title: 'Barber2', descr: 'Barber 2 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 3, title: 'Barber3', descr: 'Barber 3 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 4, title: 'Barber4', descr: 'Barber 4 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 5, title: 'Barber5', descr: 'Barber 5 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
    ]);
    const addNewBarbers = (newBarber) => {
        setNewBarbers([...newBarbers, newBarber]);
    };
    return (
        <ScrollView styles={styles.cardScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {newBarbers.map( (newBarber) => {
            return(
                <View key={newBarber.key} style={styles.cardContainer}>
                    <Card style={styles.card} mode={"elevated"}>
                        <Card.Cover style={styles.cardCover} source={{uri: newBarber.imgUri}}/>
                        <Card.Content>
                            <Text style={styles.cardTitle}>{newBarber.title}</Text>
                            <Text>{newBarber.descr}</Text>
                        </Card.Content>
                    </Card>
                </View>
            )})}
        </ScrollView>
    );
}

const RecommendedBarbersView = () => {
    const [recommendedBarbers, setRecommendedBarbers] = useState([
        { key: 1, title: 'Barber1', descr: 'Recommended Barber 1 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 2, title: 'Barber2', descr: 'Recommended Barber 2 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 3, title: 'Barber3', descr: 'Recommended Barber 3 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 4, title: 'Barber4', descr: 'Recommended Barber 4 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
        { key: 5, title: 'Barber5', descr: 'Recommended Barber 5 Descr', imgUri: 'https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg'},
    ]);
    const addRecommendedBarber = (newRecommendedBarber) => {
        setRecommendedBarbers([...newRecommendedBarber, newRecommendedBarber]);
    };
    return (
        <ScrollView mode={"elevated"} styles={styles.cardScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {recommendedBarbers.map( (recommendedBarber) => {
            return(
                <View key={recommendedBarber.key} style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Card.Cover style={styles.cardCover} source={{uri: recommendedBarber.imgUri}}/>
                        <Card.Content>
                            <Text style={styles.cardTitle}>{recommendedBarber.title}</Text>
                            <Text>{recommendedBarber.descr}</Text>
                        </Card.Content>
                    </Card>
                </View>
            )})}
    </ScrollView>
    );
}

export const HomeScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <View colors={['#DFEFEF', '#B6E6E6', '#7FE2E2']} style={styles.topPart}>
            {/* <LinearGradient colors={['#DFEFEF', '#B6E6E6', '#7FE2E2']} style={styles.linearGradient}></LinearGradient> */}
                <Text style={styles.topTitle}>BarbWebsite</Text>
                <TextInput dense={false} mode='flat' label={"Search"} style={styles.inputBorder}/>
                {/*<CategoryView/>*/}
                <View style={{width: "100%"}}>
                    <Divider />
                </View>
                <Text style={{color: "white"}}>No Appointments...</Text>
                <Button style={{marginBottom: 20}} mode={"elevated"} onPress={() => console.log("Go to Appointments clicked")}>Go to Appointments</Button>
            </View>
            <View style={styles.bottomPart}>
                <Text style={styles.title}>New Barbers</Text>
                <NewBarbersView/>
                <Text style={styles.title}>Recommended</Text>
                <RecommendedBarbersView/>
            </View>
        </ScrollView>
    )
}



const styles: StyleSheet = {
    container: { //main container holding page
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    topPart: {
        backgroundColor:  CustomTheme.colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    bottomPart: {
        gap: 10,
        backgroundColor: CustomTheme.colors.primary,
    },
    topTitle: {
        fontSize: 48,
        color: 'lightgray',
    },
    title: {
        color: CustomTheme.colors.secondary,
        fontSize: 30,
        marginLeft: 10,
    },
    inputBorder: {
        borderRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    avatar: {
        borderRadius: '50%',
    },
    cardScrollView: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContainer: {
        marginHorizontal: 10,
    },
    card: {
        width: 200,
    },
    cardCover: {
        height: 130,
    },
    cardTitle: {
        fontWeight: "bold",
    },
}