import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import MenuButton from '../../components/MenuButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import GoalActions from '../../Redux-Saga/Store/Goal/Actions'
import CustomIconList from '../../components/CustomIconList'
import Colors from '../../constants/Colors'
import { v4 as uuidv4 } from 'uuid'
import * as Progress from 'react-native-progress';
const Objectif = () => {
    const Navigation = useNavigation()
    const dispatch = useDispatch()
    const goals = useSelector(state => state.goal.goals)
    const user = useSelector(state => state.user.user)
    const newObjectif = () => {
        Navigation.navigate('ObjectifList')
    }
    useEffect(() => {
        const payload ={
            userId:user._id
        }
       
        dispatch(GoalActions.getGoal(payload))

    }, [goals])

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
                }}>Objectifs</Text>
                <AntDesign name="plus" size={28}
                    style={{
                        padding: 12,
                        position: 'absolute',
                        top: 6,
                        right: 0,
                        zIndex: 2,
                    }}
                    color="#FFF"
                    onPress={newObjectif} />
            </View>
            <View style={styles.footer}>
                <View>
                    <FlatList
                        data={goals}
                        renderItem={({ item }) => (
                            <Pressable
                                key={item._id}
                                style={{ backgroundColor: Colors.white, margin: 8, padding: 8, borderRadius: 8, elevation: 5 }}
                                onPress={() => { Navigation.navigate('ObjectifDetail', { item }) }}>

                                <CustomIconList color={item.color} iconName={item.icon} name={item.name} />


                                <Progress.Bar borderColor={Colors.gray} progress={(1 * item.Enregistre) / item.MontantCible} width={300} height={25} color={"#8BED4F"} unfilledColor={Colors.gray} />

                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>

                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ color: Colors.green }}>Enregistre :</Text>
                                        <Text style={{ color: Colors.green }}>{item.Enregistre} Dt</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ color: Colors.black }}>Objectif :</Text>
                                        <Text style={{ color: Colors.black }}>{item.MontantCible} Dt</Text>

                                    </View>

                                </View>

                            </Pressable>

                        )}
                        keyExtractor={(item) => item._id}

                    />
                </View>

            </View>
        </View>
    )
}

export default Objectif

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
})