import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    useWindowDimensions,
    StyleSheet,
    TouchableRipple,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import Home from '../screens/Home/home'
import CustomDrawer from '../components/CustomDrawer'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabBarAdvancedButton from './TabBarAdvancedButton';
import Comptes from '../screens/Comptes/comptes';
import NewCategorie from '../screens/NewCategorie/NewCategorie';
import NewBudget from '../screens/NewBudget/NewBudget';
import Dettes from '../screens/Dettes/Dettes';
import NewPrete from '../screens/NewPrete/NewPrete';
import NewEmprunte from '../screens/NewEmprunte/NewEmprunte';
import Objectif from '../screens/Objectif/Objectif';
import NewObjectif from '../screens/NewObjectif/NewObjectif';
import ObjectifList from '../screens/ObjectifList/ObjectifList';
import Categories from '../screens/Categories/Categories';
import RevenuEtDepense from '../screens/RevenuEtDepense/RevenuEtDepense';
import Paiments from '../screens/Paiments/Paiments';
import NewRevdep from '../screens/NewRevDep/NewRevdep';
import BudgetDetail from '../screens/BudgetDetail/BudgetDetail';
import Profile from '../screens/Profile/Profile';
import ObjectifDetail from '../screens/ObjectifDetail/ObjectifDetail';
import Evenement from '../screens/Evenement/Evenement'
import Planification from '../screens/Planification/Planification';
import Notification from '../screens/Notification/Notification';


const DrawerStack = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function MyTabs({ barColor }) {
    return (
        <Tab.Navigator

            tabBar={(props) => (
                <View style={styles.navigatorContainer}>
                    <BottomTabBar
                        {...props}
                    />

                </View>
            )}
            screenOptions={{
                "tabBarShowLabel": false,
                headerShown:false,
                // Floating Tab Bar...
                "tabBarStyle": [{
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 20,
                  marginHorizontal: 10,
                  // Max Height...
                  height: 65,
                  borderRadius: 20,
                  // Shadow...
                  shadowColor: '#000',
                  shadowOpacity: 0.50,
                  shadowOffset: {
                    width: 30,
                    height: 30
                  },
                  paddingHorizontal: 15,
                }
                ]
              }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Home}

                options={{
                    tabBarIcon: ({ focused }) => (
                      <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 15
                      }}>
                        <FontAwesome
                          name="home"
                          size={25}
                          color={focused ? '#8e44ad' : 'gray'}
                        />
                      </View>
                    ), headerShown: false
                  }}
            />


<Tab.Screen name={"Planification"} component={Planification} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>

            <FontAwesome
              name="clone"
              size={25}
              color={focused ? '#8e44ad' : 'gray'}
            ></FontAwesome>
          </View>
        ), headerShown: false
      }} ></Tab.Screen>
            <Tab.Screen
                name="budget"
                component={NewBudgetStack}

                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5
                            name="wallet"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />


            <Tab.Screen
                name="Add"
                component={NewRevStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            name="plus"
                            size={24}
                            color={color}
                            on
                        />
                    )
                }}
            />

<Tab.Screen name={"Notification"} component={Notification} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome
              name="bell"
              size={25} color={focused ? '#8e44ad' : 'gray'}
            ></FontAwesome>
          </View>
        ), headerShown: false
      }} />
             <Tab.Screen name={"Profile"} component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome
              name="user"
              size={25}
              color={focused ? '#8e44ad' : 'gray'}
            ></FontAwesome>
          </View>
        ), headerShown: false
      }}></Tab.Screen>



        </Tab.Navigator>
    );
}

const NewRevStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NewRev" component={NewRevdep} />
        </Stack.Navigator>
    )
}


const NewBudgetStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="comptes" component={Comptes} />
            <Stack.Screen name="NewBudget" component={NewBudget} />
            <Stack.Screen name="BudgetDetail" component={BudgetDetail} />
            <Stack.Screen name="RevAndDep" component={RevenuEtDepense} />

        </Stack.Navigator>
    )
}

const NewDettesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="dettes" component={Dettes} />
            <Stack.Screen name="NewPrete" component={NewPrete} />
            <Stack.Screen name="NewEmprunte" component={NewEmprunte} />
        </Stack.Navigator>
    )
}
const ObjectifStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="objectif" component={Objectif} />
            <Stack.Screen name="ObjectifList" component={ObjectifList} />
            <Stack.Screen name="ObjectifDetail" component={ObjectifDetail} />
            <Stack.Screen name="NewObjectif" component={NewObjectif} />

        </Stack.Navigator>
    )
}
const CategorieStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="categorie" component={Categories} />
            <Stack.Screen name="NewCategorie" component={NewCategorie} />

        </Stack.Navigator>
    )
}

const Drawer = () => {
    const dimension = useWindowDimensions();
    const drawerType = dimension.width >= 800 ? 'permanent' : 'front';
    return (
        <DrawerStack.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}
            drawerStyle={{
                width: 230,
                backgroundColor: Colors.white,
            }}
            drawerType={drawerType}
            edgeWidth={100}
        >
            <DrawerStack.Screen name="Acceuil" component={MyTabs} 
             options={{
                drawerLabel: 'Acceuil',
                headerShown: false,
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="home"
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }}
            />
            <DrawerStack.Screen name="Dettes" component={NewDettesStack} 
            options={{
                drawerLabel: 'Dettes',
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="money"
      
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }}
            />
            <DrawerStack.Screen name="Objectif" component={ObjectifStack}
             options={{
                drawerLabel: 'Objectifs',
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="bullseye"
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }}
            />
            <DrawerStack.Screen name="Categorie" component={CategorieStack} 
            options={{
                drawerLabel: 'Categories',
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="folder"
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }}
            />
            <DrawerStack.Screen name="Paiments prévus" component={Paiments} 
               options={{
                drawerLabel: 'Paiments prévus',
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="money"
      
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }}
            />
            <DrawerStack.Screen name="Évenement" component={Evenement} 
            options={{
                drawerLabel: 'Evenements',
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="calendar"
                    size={25}
                    color={focused ? '#8e44ad' : 'gray'}
                  ></FontAwesome>
                ),
              }} 
            />
            <DrawerStack.Screen name="Profile" component={Profile}
            options={{
              drawerLabel: 'Profile',
              drawerIcon: ({ focused, size }) => (
                <FontAwesome
                  name="user"
                  size={25}
                  color={focused ? '#8e44ad' : 'gray'}
                ></FontAwesome>
              ),
            }} />


        </DrawerStack.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    navigatorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30
    },
    xFillLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 34
    }
});
export default Drawer;