import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import CustomButtom from '../components/CustomButton'
import { useDispatch } from 'react-redux'
import DebtActions from '../Redux-Saga/Store/Debt/Actions'
const CustomDetteList = ({ item }) => {
    const dispatch = useDispatch()
    const remove = () => {
        const payload = {
            id: item._id,
            budget: {
                budgetId: item.budget._id
            }

        }


        dispatch(DebtActions.removeDebt(payload))

    }
    const c = item.type === "PRETE" ? Colors.red : Colors.green
    return (
        <View style={{ backgroundColor: Colors.white, padding: 8, margin: 5, borderRadius: 8, elevation: 5 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: c, fontSize: 16, fontWeight: '700' }}>{item.type}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                {item.type === "PRETE" ?
                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '700' }}> ME DOIT{item.name} </Text>
                    : <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '700' }}>JE DOIS {item.name}</Text>
                }


            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '700'}}>A qui Vous preté  :  {item.name}</Text>
                    <Text style={{ color: Colors.black ,fontSize: 16, fontWeight: '700'}}>Description : {item.description}</Text>
                </View>

                <Text style={{ color: Colors.black, fontSize: 16,fontWeight: '700' }}>{item.amount} Dt</Text>
            </View>

            <View>
                <CustomButtom text={'delete'} type='TERTIARY' onPress={() => remove()} />
            </View>


        </View>
    )
}

export default CustomDetteList

const styles = StyleSheet.create({})