import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Import de Telas
import { OnBoarding, Home, HouseDetail } from '../Screens'


const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='OnBoarding' component={OnBoarding} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='HouseDetail' component={HouseDetail} />
    </Stack.Navigator>
)