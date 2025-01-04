import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen(props){
    
    const navigation = useNavigation();
    function goToScoring(){
        navigation.navigate("scoring");
    }
    return (
        <>
        
            <View style={styles.container}>
                
                <Image source={require('./bule1.png')} style={styles.imageBule}></Image>
                <View>
                    <Image source={require('./logoDeep.png')} style={styles.image}></Image>
                </View>
                <View style={styles.buttons}>
                    <Pressable style={styles.scoringButton} onPress={goToScoring}>
                        <Text style = {styles.buttonText}>TRADITIONAL</Text>
                    </Pressable>
                    <Pressable style={styles.scoringButton}  onPress={goToScoring}>
                        <Text style = {styles.buttonText}>REMOTE</Text>
                    </Pressable>
                    
                </View>
                
                <Image source={require('./bule2.png')} style={styles.imageBule2}></Image>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    imageBule2:{
        marginTop: 0,
        width: 220,
        
       resizeMode: 'contain',
        height: 170,
        marginLeft: 240,
        marginTop: 20,
    },
    imageBule:{
        marginTop: 0,
        width: 200,
        
       resizeMode: 'contain',
        height: 150,
        marginRight: 260
    },
    image:{
        marginTop: 0,
        width: 300,
        
       resizeMode: 'contain',
        height: 300
    },
    header:{
        color: "white",
        fontSize: 30,
        marginTop: 100
    },
    container:{
        backgroundColor: "#141414",
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
    },
    scoringButton:{
        borderRadius: 20,
        textAlign: "center",
        width: 300,
        height: 70,
        marginBottom: 20,
        backgroundColor: "#7DDB3B"
    },
 
    buttons:{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        marginTop:70
    },
    buttonText:{
        marginTop:13,
        textAlign:"center",
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    }
})