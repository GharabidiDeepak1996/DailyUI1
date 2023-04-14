import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen(){
    return(
        <View style={styles.mainContainer}>
        <LinearGradient
        colors={['#EA988C', '#D277CD',]}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0.2 }}
        >
        <View style={styles.innerContainer}>
            <Text>WELCOME</Text>
            <Text>ON BOARD</Text>
            <Text>All the fun start here!{"\n"}Wanna feel these happy vibes? {"\n"}</Text>
        </View>
        </LinearGradient>
        </View>
    )
}

const styles= StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient:{
        alignItems: 'center',
        borderRadius: 5,
         height: "100%",
         width: "100%",
    },
    innerContainer:{
        justifyContent:'center',
        flex:1
    }
})