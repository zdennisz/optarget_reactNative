import React from 'react'
import { Text, View, StyleSheet, Modal } from 'react-native'
import PopupScreenButton from './PopupScreenButton'
import { GeneralImages, FieldOfViewImages } from '../../Constants/Images'
import Colors from '../../Constants/Colors'
const PopupScreen = (props) => {
    console.log
    const { visibility } = props

    const pressingHandler = (value) => {
        props.handler(value)
    }

    return (

        <Modal animationType='slide' transparent={true}
            visible={visibility} onRequestClose={pressingHandler.bind(this, 'close')} >
            <View style={styles.buttonContainer} >
                <PopupScreenButton actionHandler={pressingHandler} action='target' text="Target Size Input" image={GeneralImages.taretSizeSrc} />
                <PopupScreenButton actionHandler={pressingHandler} action='angle' text="Angle Input" image={FieldOfViewImages.ifovSrc} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: '55%',
        marginHorizontal: '30%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        maxWidth: "50%",
        minWidth: '20%',
        maxHeight: '40%',
        borderRadius: 20,

    }

})



export default PopupScreen