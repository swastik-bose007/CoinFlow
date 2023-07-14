// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { splashStyles } from '../styles/SplashStyles';
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import Logo from '../assets/SVGComponents/Logo';
// --------------------------------------------------------------------
// SCREEN
// --------------------------------------------------------------------
import MarketScreen from './MarketScreen';

const SplashScreen = ({ navigation }) => {
  console.log(('nnnn', navigation));
  useEffect(() => {
    splashNav();
  }, []);

  const splashNav = () => {
    const intervalNav = setInterval(() => {
      navigation.replace("MarketScreen");
      clearInterval(intervalNav);
    }, 3000);
  };

  return (
    <View className="flex-1 flex justify-center align-middle">
      <View className="w-full h-[30%]" style={[ splashStyles.flexEnd, splashStyles.bodyColor ]}>
        <Text style={[ splashStyles.faintedText ]} className="text-start">COIN</Text>
      </View>
      <View className="w-full h-[40%]" style={[ splashStyles.flexCenter, splashStyles.bodyColor ]}>
        <Logo />
        <Text className="mt-1.5" style={[ splashStyles.normalText ]}>Coinflow</Text>
      </View>
      <View className="w-full h-[30%]" style={[ splashStyles.flexStart, splashStyles.bodyColor ]}>
        <Text style={[ splashStyles.faintedText ]} className="text-start">FLOW</Text>
      </View>
    </View>
  ) 
}

export default SplashScreen