import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import TitleText from './TitleText'
import Colors from '../Constants/Colors'
import { DriTableImages } from './Images'
const DRITable = (props) => {

    const { inputData } = props
    console.log(inputData)
    return (<View style={styles.container}>
        <View style={styles.firstRow}>
            <View style={styles.spacer}></View>
            <Image style={styles.image} source={DriTableImages.humanSrc} />
            <Image style={styles.image} source={DriTableImages.tankSrc} />
            <Image style={styles.image} source={DriTableImages.laptopSrc} />
        </View>
        <View style={styles.secondRow}>
            <View style={styles.firstItem}>
                <Text>Detec. (m)</Text>
            </View>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
        </View>
        <View style={styles.thirdRow}>
            <View style={styles.firstItem}>
                <Text>Recog. (m)</Text>

            </View>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
        </View>
        <View style={styles.fourthRow}>
            <View style={styles.firstItem}>
                <Text >Identif. (m)</Text>
            </View>
            <Text>7</Text>
            <Text>8</Text>
            <Text>9</Text>
        </View>
    </View>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    firstRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: Colors.SecondaryOrangeDarker,
        width: "100%",
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: Colors.SecondaryOrangeWhite,
        width: "100%",
        minHeight: 40
    },
    thirdRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: 'white',
        minHeight: 40
    },
    fourthRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: Colors.SecondaryOrangeWhite,
        minHeight: 40
    },
    image: {
        maxWidth: 50,
        marginVertical: 10,
    },
    spacer: {
        marginVertical: 15,
        flexBasis: "30%",
    },
    firstItem: {
        textAlign: 'center'
    }
})

export default DRITable