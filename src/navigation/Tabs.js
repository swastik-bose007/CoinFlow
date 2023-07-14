// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { Text, View } from "react-native";
import { useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  bottomSheetModalRef,
} from "react-native-gesture-handler";
// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import MarketScreen from "../screens/MarketScreen";
import CurrencyConverter from "../screens/CurrencyConverter";
// --------------------------------------------------------------------
// ICONS
// --------------------------------------------------------------------
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import ColorTheme from "../config/ColorTheme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 5);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: {
                height: responsiveScreenHeight(10),
                width: responsiveScreenWidth(95),
                position: "absolute",
                bottom: 10,
                marginHorizontal: responsiveScreenWidth(2),
                height: responsiveScreenHeight(10),
                backgroundColor: ColorTheme.eerieBlack,
                borderRadius: responsiveScreenWidth(8),
              },
            }}
          >
            <Tab.Screen
              name="MarketScreen"
              component={MarketScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="p-5 rounded-full"
                  >
                    <SimpleLineIcons
                      name="grid"
                      size={20}
                      style={{ color: ColorTheme.fadedYellow }}
                    />
                    <Text
                      className="mt-1"
                      style={{ color: ColorTheme.fadedYellow }}
                    >
                      Market
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="CurrencyConverter"
              component={CurrencyConverter}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="p-5 rounded-full"
                  >
                    <SimpleLineIcons
                      name="calculator"
                      size={20}
                      style={{ color: ColorTheme.fadedYellow }}
                    />
                    <Text
                      className="mt-1"
                      style={{ color: ColorTheme.fadedYellow }}
                    >
                      Coinverter
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Tabs;
