import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import FloatingMenuButton from '../../components/FloatingMenuButton';
import MenuButton from '../../components/MenuButton'
import CustomDetteList from '../../components/CustomDetteList'
import DebtActions from '../../Redux-Saga/Store/Debt/Actions'
const Dettes = () => {
    const dispatch = useDispatch()

    const budget = useSelector(state => state.budget.budgets)
    const debt = useSelector(state => state.debt.debts)

    useEffect(() => {


        dispatch(DebtActions.getAll(budget[0]._id))
    }, [budget, debt])

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1 }}>
                <MenuButton />
                <Text style={{
                    color: 'white', padding: 12,
                    fontFamily: 'Cochin',
                    fontWeight:'bold',
                    fontSize: 20,
                    position: 'absolute',
                    top: 8,
                    left: 45,
                    zIndex: 1,
                }}>Dettes</Text>
            </View>
            <View style={styles.footer}>

                <View style={{ flex: 0.8, justifyContent: 'center' }}>

                    <FlatList
                        data={debt}
                        renderItem={({ item }) => (
                            <CustomDetteList item={item} />

                        )}
                        keyExtractor={(item) => item._id}

                    />
                </View>

                <FloatingMenuButton style={{ alignSelf: 'flex-end', bottom: 50, right: 10 }} open={false} />
            </View>
        </View>
    )
}

export default Dettes;

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
 
    text: {
        color: Colors.black,
        padding: 5,
        fontSize: 16,
        fontWeight: '700'
    },
    ListTab: {
        flex: 0.1,

        flexDirection: 'row',
        elevation: 5,


    },
    btnTab: {
        flex: 1,
        borderRadius: 25,
    
        border: 5,
        backgroundColor: '#8e44ad',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTab: {
        alignSelf: 'center',
         color: Colors.white,
          fontSize: 18, fontWeight: '700',

    },
    btnTabActive: {
        backgroundColor: 'purple',
        elevation: 3,


    },
})