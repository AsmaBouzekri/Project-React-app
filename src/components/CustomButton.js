
import React from 'react'
import { Pressable, Text, StyleSheet,View } from 'react-native'


const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} 
        style={[styles.container, styles[`container_${type}`]]}>
             <View style={styles.container2}>
                 <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 70
    },
    container2: {
       
        width: '200%',
        alignItems: 'center',

    },
    container_PRIMARY: {
        backgroundColor: '#8e44ad'
        },
    container_TERTIARY: {

    },
    text: {
        fontWeight: "bold",
        color: 'white'
    },
    text_TERTIARY: {
        color: 'gray'
    },
})

export default CustomButton