import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MenuButton from '../../components/MenuButton'
import { useDispatch, useSelector } from 'react-redux'
import WalletActions from '../../Redux-Saga/Store/Wallet/Actions'
import CategorieActions from '../../Redux-Saga/Store/Categorie/Actions'
import BudgetActions from '../../Redux-Saga/Store/Budget/Actions'
import EventActions from '../../Redux-Saga/Store/Event/Actions'
import Colors from '../../constants/Colors'
import ProgressCircle from 'react-native-progress-circle'
import UserActions from '../../Redux-Saga/Store/User/Actions'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { useNavigation } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';


const Home = () => {
     const Navigation = useNavigation()
     const widthAndHeight = 250
     const series = [321, 123, 789, 537]
    const sliceColor = ['#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    
    const ListTab = [
        { status: 'Form1', id: 1 },
        { status: 'Form2', id: 2 },
        { status: 'Form3', id: 3 },
     ];

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const budget = useSelector(state => state.budget.budgets)

    const allIncomes = budget[0] ? (budget[0].incomes.reduce((acc, a) => acc + a.amount, 0)) : null
    const allDep = budget[0] ? (budget[0].expenses.reduce((acc, a) => acc + a.amount, 0)) : null
    const initial = budget[0] ? (budget[0].initialBudget) : null
    const final = budget[0] ? (budget[0].finalBudget) : null
    useEffect(() => {

        const payload1 = {
            userId: user._id
        }

       
        console.log((100*allDep)/initial)
     
        dispatch(BudgetActions.getBudgets(payload1))
        dispatch(CategorieActions.fetch())
        dispatch(EventActions.getEvent(payload1))
        //configuration Notification
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              console.log("TOKEN:", token);
              const payload2 = {
                id: user._id,
                token:{os: 'android', token: token.token}
            }
            console.log("dddddddddd", payload2);
            fetch("http://192.168.1.6:5004/v1/user/registerTokenAlert/"+payload2.id, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload2),
              })
                .then((response) => response.json())
                .then((response) => {
                 console.log("user after token updTE", response);
                })
                .catch((err) => {});
            },
          
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
          
              // process the notification
          
              // (required) Called when a remote is received or opened, or local notification is opened
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
          
            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
          
              // process the action
            },
          
            // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
          
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
          
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
          
            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
          });
          PushNotification.createChannel(
            {
              channelId: 'channel-id-allmoney', // (required)
              channelName: 'My channel', // (required)
              channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
              playSound: false, // (optional) default: true
              soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
          );

    }, [])

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
                }}>Acceuil</Text>
            </View>
            <ScrollView style={styles.footer}>
                <View style={  styles.footer}>
             
        <View 
        style={{
            flexDirection:"row", 
            flex: 1,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20, paddingBottom:100}}>
                    <View style={{ flex: 0.5, padding: 5 }}>
                        <ProgressCircle
                            percent={(100*allDep)/initial}
                            radius={80}
                            borderWidth={12}
                            color={Colors.gray}
                            shadowColor="#8BED4F"
                            bgColor="#fff"
                        >
                            <View style={styles.pieFill}>

                                <Text style={styles.pieFillText}> Economie</Text>
                                <Text style={styles.pieFillText}> +{initial}TND </Text>

                            </View>
                        </ProgressCircle>
                        <View style={{ top: 50 }}>
                            <View style={{ borderWidth: 2, borderColor: '#8BED4F', padding: 5, marginVertical: 5 }}>
                                <Text style={{ color: Colors.darkgray }}>
                                    Revenus Depensé
                                </Text>
                                <Text style={{ color: Colors.black,fontWeight: 'bold' }}>
                                    {allIncomes}
                                </Text>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#8BED4F', padding: 5, marginVertical: 5 }}>
                                <Text style={{ color: Colors.gdarkgrayray }}>
                                    Revenus net disponible
                                </Text>
                                <Text style={{ color: Colors.black,fontWeight: 'bold' }}>
                                    {initial}
                                </Text>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#8BED4F', padding: 5, marginVertical: 5 }}>
                                <Text style={{ color: Colors.darkgray  }}>
                                    Depenses totales
                                </Text>
                                <Text style={{ color: Colors.black ,fontWeight: 'bold'}}>
                                    {allIncomes+initial}
                                </Text>
                            </View>
                        </View>



                    
                </View>

                    <View style={{ flex: 0.5, padding: 5 }}>
                        <ProgressCircle
                            percent={(100*allDep)/initial}
                            radius={80}
                            borderWidth={12}
                            color={Colors.red}
                            shadowColor={Colors.gray}
                            bgColor="#fff"
                        >
                            <View style={styles.pieFill}>
                                
                                <Text style={styles.pieFillText}> budget Depensé</Text>
                                <Text style={styles.pieFillText}> {allIncomes} </Text>

                            </View>
                        </ProgressCircle>
                        <View style={{ top: 50 }}>
                            <View style={{ borderWidth: 2, borderColor: Colors.red, padding: 5, marginVertical: 5 }}>
                                <Text  style={{ color: Colors.darkgray }}>Reste a depenser
                                </Text>
                                <Text style={{ color: Colors.black,fontWeight: 'bold' }}>
                                    {final}
                                </Text>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: Colors.red, padding: 5, marginVertical: 5 }}>
                                <Text style={{ color: Colors.darkgray }}>
                                    Solde provisoire
                                </Text>
                                <Text style={{ color: Colors.black,fontWeight: 'bold' }}>
                                    {allDep}
                                </Text>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: Colors.red, padding: 5, marginVertical: 5 }}>
                                <Text style={{ color: Colors.darkgray }}>
                                    Total budgete
                                </Text>
                                <Text style={{ color: Colors.black,fontWeight: 'bold'}}>
                                    {final}
                                </Text>
                            </View>
                        </View>
                 
                    </View>
         </View>
                
                        
                <View style={{
                            flexDirection:"column", 
                            flex: 1,
                            backgroundColor: Colors.white,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20, paddingBottom:100}}>
                        <Text style={{
                                color: Colors.gray2
                                , padding: 15, fontSize: 22, fontWeight: '700'
                            }}>Graphique des depenses</Text>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                                doughnut={true}
                                coverRadius={0.45}
                                coverFill={'#FFF'}
                                style={{ top: 10, alignSelf: 'center' }}
                            />
                            </View>
            </View>
               
            </ScrollView>
            
           
        </View>
    )



}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 0.89,
        backgroundColor: '#8e44ad',
    },
    footer: {
        flex: 0.99,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,           
        flexDirection: 'column', 
        padding: 8, 
    },
    foot: {
        flex: 0.99,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,           
        flexDirection: 'column', 
        padding: 8, 
    },
    pieFill: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    pieFillTextAmount: {
        fontSize: 18,
        lineHeight: 23,
        color: Colors.black,
    },
    pieFillText: {
        fontSize: 12,
        lineHeight: 15,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})