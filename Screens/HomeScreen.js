import { View, Button, StyleSheet } from "react-native";
import React from "react";


const HomeScreen = (props) => {

    const { navigation } = props

    const detectorSizeHandler = () => {
        navigation.navigate('DetectSize')
    }
    const driCalcHandler = () => {
        navigation.navigate('DriCalc')
    }

    const fovCalcHandler=()=>{
        navigation.navigate('FieldOfView')
    }
    return (
    <View style={styles.container}>
        
        <Button title='Required Lens Calculator' ></Button>
        <Button title='Detector Size Calculator' onPress={detectorSizeHandler}></Button>
        <Button title='Field Of View Calculator' onPress={fovCalcHandler}></Button>
        <Button title='DRI Calculator' onPress={driCalcHandler}></Button>
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