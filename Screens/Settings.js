import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Settings = (props) => {




    return (<ScrollView>  
        <Text style={styles.container}>Settings screen</Text>
        </ScrollView>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




export default Settings