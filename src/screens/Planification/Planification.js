import * as React from 'react';


import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuButton from '../../components/MenuButton';
import { images } from '../../constants';
const { invoice } = images;


const onPressEvent = () => {
    console.warn('Evenements pressed')
}

const onPressObjectif = () => {
    console.warn('Objectifs pressed')
}

const onPressBill = () => {
    console.warn('Bills pressed')
}


const Planification = (props) => {
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
                }}>Planification</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.item}>



                    <View style={styles.itemLeft}>
                        <View>

                            <FontAwesome
                                name="calendar"
                                size={25}
                                color='#8e44ad'
                            />
                        </View>
                        <View >
                            <Text style={styles.title}>Evénements</Text>
                        </View>
                        <View style={styles.containerText}>
                            <TouchableOpacity onPress={onPressEvent}>
                                <Text
                                    style={styles.titleitem}
                                >
                                    Créer un évenements pour
                                    suivre vos dépenses au cours d'un evenments réel, tel qu'un voyage le weekend.</Text>
                            </TouchableOpacity>
                        </View>

                        {/*  <FontAwesome5
                                name="chevron-right"
                                size={30}
                    color='gray'/>*/}
                    </View>
                    <View style={styles.itemLeft}>
                        <View>
                            <FontAwesome
                                name="bullseye"
                                size={25}
                                color='#8e44ad'
                            />
                        </View>
                        <View >
                            <Text
                                style={styles.title}>Objectifs</Text>
                        </View>
                        <View style={styles.containerText}>
                            <TouchableOpacity onPress={onPressObjectif}>
                                <Text style={styles.titleitem}> Créer un Objectif pour
                                    suivre vos dépenses au cours de l'année.</Text>
                            </TouchableOpacity>
                        </View>

                        {/*  <FontAwesome5
                                name="chevron-right"
                                size={30}
                    color='gray'/>*/}
                    </View>
                    <View style={styles.itemLeft}>
                        <View>
                            <Image
                                style={styles.invoice}
                                source={invoice}
                            />
                        </View>
                        <View >
                            <Text style={styles.title}>Factures</Text>
                        </View>
                        <View style={styles.containerText}>
                            <TouchableOpacity onPress={onPressBill}>
                                <Text style={styles.titleitem}>
                                    Controlez vos factures récurrentes comme l'électricité,le loyer,l'abonements internet,etc..
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/*  <FontAwesome5
                                name="chevron-right"
                                size={30}
                    color='gray'/>*/}
                    </View>
                </View>
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

export default Planification;