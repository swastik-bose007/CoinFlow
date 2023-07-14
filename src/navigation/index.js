// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import SplashScreen from "../screens/SplashScreen";
import CurrencyConverter from "../screens/CurrencyConverter";
import MarketScreen from "../screens/MarketScreen";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">  
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MarketScreen" component={Tabs} />
        <Stack.Screen name="CurrencyConverter" component={CurrencyConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
