import * as React from 'react';


import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuButton from '../../components/MenuButton';
import { images } from '../../constants';
const { invoice } = images;



const Notification = (props) => {
    return (
        <View style={styles.container} >
            <View style={{ flex: 0.08 }}>
                <MenuButton />
                <Text style={{
                    color: 'white', padding: 12,
                    fontFamily: 'Cochin',
                    fontWeight:'bold',
                    fontSize: 20,
                    position: 'absolute',
                    top: 12,
                    left: 45,
                    zIndex: 1,
                }}>Notification</Text>
            </View>
            <View style={styles.footer}>
               
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 0.99,
        backgroundColor: '#8e44ad',
    },
    footer: {
        flex: 0.99,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,           
   
        padding: 8, 
    },
    invoice: {
        width: 30,
        height: 30

    },
    title: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#8e44ad',
        fontWeight: 'bold',
        marginLeft: 14

    }
    ,
    titleitem: {
        fontFamily: 'Cochin',
        fontSize: 15,
        color: '#898C95',
        fontWeight: 'bold'
    }
    ,
    containerText: {
        marginLeft: 5,
        margin: 10
    }
    ,
    item: {
        backgroundColor: '#FFF',
        padding: 40,
        marginTop: 2,
        margin: 10,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    itemText: {
        maxWidth: '80%',
    },

});

export default Notification;