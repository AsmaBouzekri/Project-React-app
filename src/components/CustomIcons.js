import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../constants/Colors'

const CustomIcons = ({ item, onPress }) => {

    return (
        <View style={styles.container}>

            <MaterialIcon name={item.IconName} color={item.color ? item.color : 'black'} size={28} onPress={onPress} />
            <Text style={{ color: 'black', marginHorizontal: 10, fontSize: 16, fontWeight: '500' }}>{item.name ? item.name : null}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: Colors.gray,
        backgroundColor: Colors.white

    }
})

export default CustomIcons