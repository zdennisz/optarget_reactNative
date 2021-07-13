import { View,Text,Button, StyleSheet } from "react-native";
import React from "react";


const HomeScreen = (props) => {



    return (<View style={styles.container}>  
        <Text >Home Screen</Text>
        <Button title='Required Lens Calculator'></Button>
        <Button title='Detector Size Calculator'></Button>
        <Button title='Field Of View Calculator'></Button>
        <Button title='DRI Calculator'></Button>
        </View>)
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen