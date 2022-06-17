import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/login';
import Register from '../screens/Register/register';
import { NavigationContainer } from '@react-navigation/native';
import NewWallet from '../screens/NewWallet/newWallet';
import Drawer from './drawer';
import NewBudget from '../screens/NewBudget/NewBudget';
import BudgetDetail from '../screens/BudgetDetail/BudgetDetail';
import RevenuEtDepense from '../screens/RevenuEtDepense/RevenuEtDepense';
import OnBoarding from '../screens/Onboarding/Onboarding';
import MyScreen from '../screens/MyScreen';
const AuthStack = createNativeStackNavigator()

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const NewBudgetStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            
                <Stack.Screen name="NewBudget" component={NewBudget} />
                <Stack.Screen name="BudgetDetail" component={BudgetDetail} />
                <Stack.Screen name="RevAndDep" component={RevenuEtDepense} />
    
            </Stack.Navigator>
        )
    }
    return (

        <AuthStack.Navigator screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name='Onboarding' component={OnBoarding} />
             <AuthStack.Screen name="Screen" component={MyScreen} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="comptes" component={NewBudgetStack} />
            <AuthStack.Screen name="Drawer" component={Drawer} />
        </AuthStack.Navigator>

    )
}
export default Navigation;