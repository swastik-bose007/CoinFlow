// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {
  useEffect,
  useState,
} from "react";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { currencyConverterStyles } from "../styles/CurrencyConverterStyle";
import ColorTheme from "../config/ColorTheme";
import Money from "@expo/vector-icons/Fontisto";

const CurrencyConverter = () => {
  const [cryptocurrencyPrice, setCryptocurrencyPrice] = useState(0);
  const [conversionResultINR, setConversionResultINR] = useState(0);
  const [conversionResultEUR, setConversionResultEUR] = useState(0);
  const [inputError, setInputError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      const exchangeRateINR = data.rates.INR;
      const exchangeRateEUR = data.rates.EUR;
      setConversionResultINR(
        parseFloat(cryptocurrencyPrice) * exchangeRateINR
      );
      setConversionResultEUR(
        parseFloat(cryptocurrencyPrice) * exchangeRateEUR
      );
      setInputError(false);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const handleConvert = () => {
    if (cryptocurrencyPrice !== "" && !isNaN(cryptocurrencyPrice)) {
      fetchExchangeRate();
      setInputError(false);
    }else{
      setInputError(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 flex justify-center align-middle">
        <View
          className="w-full h-[10%] p-5"
          style={[currencyConverterStyles.flexStart]}
        >
          <Text className="pt-0.5" style={[currencyConverterStyles.largeTitle]}>
            Coinverter
          </Text>
        </View>
        <View
          className="w-full h-[25%] p-5 -mt-5"
          style={[currencyConverterStyles.flexCenter]}
        >
          <View style={[currencyConverterStyles.flexCenter]} className="">
            <Image
              source={require("../../assets/images/crypto.png")}
              resizeMode="contain"
              className="w-screen h-[100%]"
              style={[currencyConverterStyles.cryptoImage]}
            />
          </View>
        </View>
        <View className="w-full h-[65%] p-5">
          <Text style={[currencyConverterStyles.title]} className="px-5">
            Cnvert coin value
          </Text>
          <View>
            <TextInput
              onChangeText={(value) => setCryptocurrencyPrice(parseFloat(value))}
              style={[currencyConverterStyles.input]}
              className="px-12 mt-4"
              keyboardType="numeric"
              placeholder="enter USD value of currency"
              placeholderTextColor={ColorTheme.grey}
              require
            />
            <Money
              name="money-symbol"
              style={[currencyConverterStyles.favIcon]}
            />
          </View>
          {inputError && (
            <Text style={currencyConverterStyles.errorText}>
              Please enter a valid numeric value.
            </Text>
          )}
          <View>
            <TouchableOpacity onPress={handleConvert} style={[currencyConverterStyles.submitButton, currencyConverterStyles.flexCenter]} activeOpacity={0.4} className="px-12 mt-4">
              <Text style={[ currencyConverterStyles.submitText ]}>CONVERT</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-8 px-5" style={[currencyConverterStyles.card]}>
            <View className="">
              <Text style={[ currencyConverterStyles.priceTitle ]}>€ {conversionResultEUR.toFixed(2)}</Text>
              <Text style={[ currencyConverterStyles.subTitle ]}>valuation in EUR</Text>
            </View>
            <View className="" style={[ currencyConverterStyles.flexEnd ]}>
              <Text style={[ currencyConverterStyles.priceTitle ]}>₹ {conversionResultINR.toFixed(2)}</Text>
              <Text style={[ currencyConverterStyles.subTitle ]}>valuation in INR</Text>
            </View>
          </View>
        </View>
        {/* <View className="bg-blue-500 w-full h-[15%] p-5"></View> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CurrencyConverter;
