import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../Constants/Colors'
import { DriTableImages } from './Images'
const DRITable = (props) => {

    const { inputData } = props
    console.log(inputData)
    return (<View style={styles.container}>
        <View style={styles.firstRow}>
            <View style={styles.spacer} />
            <View style={styles.headerContent}>
                <Image style={styles.image} source={DriTableImages.tankSrc} />
                <Text>Nato</Text>
                <Text>(2.3x2.3)</Text>
            </View>
            <View style={styles.headerContent}>
                <Image style={styles.image} source={DriTableImages.humanSrc} />
                <Text>Human</Text>
                <Text>(0.5x1.7)</Text>
            </View>
            <View style={styles.headerContent}>
                <Image style={styles.image} source={DriTableImages.laptopSrc} />
                <Text>Object</Text>
                <Text>(0.5x0.5)</Text>
            </View>
        </View>
        <View style={styles.secondRow}>
            <View style={styles.firstItem}>
                <Text>Detec. (m)</Text>
            </View>
            <Text>{inputData.nato.det}</Text>
            <Text>{inputData.human.det}</Text>
            <Text>{inputData.obj.det}</Text>
        </View>
        <View style={styles.thirdRow}>
            <View style={styles.firstItem}>
                <Text>Recog. (m)</Text>
            </View>
            <Text> {inputData.nato.rec} </Text>
            <Text>{inputData.human.rec}</Text>
            <Text>{inputData.obj.rec}</Text>
        </View>
        <View style={styles.fourthRow}>
            <View style={styles.firstItem}>
                <Text >Identif. (m)</Text>
            </View>
            <Text>{inputData.nato.ident}</Text>
            <Text>{inputData.human.rec}</Text>
            <Text> </Text>
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
        flex: 1,
        resizeMode: 'contain',
        marginTop: 10
    },
    spacer: {
        marginVertical: 15,
        flexBasis: "36%",
    },
    firstItem: {
        textAlign: 'center'
    },
    headerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10

    }
})

export default DRITable