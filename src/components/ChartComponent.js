// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { marketStyles } from "../styles/MarketStyles";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const ChartComponent = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkLine,
  high_24h,
  low_24h,
  price_change_24h,
  price_change_percentage_24h,
}) => {
  console.log(currentPrice);
  // -----------------------------------------------------------------------------------
  //  PRICE COLOR CHANGE
  // -----------------------------------------------------------------------------------
  const priceChangeColor =
    priceChangePercentage7d > 0 ? ColorTheme.FernGreen : ColorTheme.red;

  const percentageChangeColor =
  price_change_percentage_24h > 0 ? ColorTheme.FernGreen : ColorTheme.red;

  // Format sparkline data for chart
  const formattedSparkLine = sparkLine.map((point) => point);
  console.log(formattedSparkLine);

  return (
    <View className="flex-1 flex justify-center align-middle">
      {/* ------------------ Title wrapper ---------------------- */}
      <View className="w-screen h-[20%]" style={[marketStyles.chartTitle]}>
        <View className="px-4" style={[marketStyles.listWrapper]}>
          <View style={[marketStyles.listWrapper]}>
            <Image
              style={[marketStyles.modalImage]}
              source={{ uri: logoUrl }}
            />
            <Text className="pl-3 text-gray-500">
              {name} {symbol}
            </Text>
          </View>
          <Text className=" text-gray-600" style={[marketStyles.subTitle]}>
            7d
          </Text>
        </View>
        <View className="px-4" style={[marketStyles.listWrapper]}>
          <Text style={[marketStyles.modalBoldTitle]}>
            $ {currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text
            style={[
              marketStyles.modalRegularTitle,
              { color: priceChangeColor },
            ]}
          >
            {priceChangePercentage7d.toFixed(3)}%
          </Text>
        </View>
      </View>
      {/* ------------------ chart wrapper ---------------------- */}
      <View className="w-screen h-[80%] px-4" style={[marketStyles.flexEven]}>
        <View style={[marketStyles.listWrapper]}>
          <View style={[marketStyles.flexCenter]}>
            <Text style={[marketStyles.modalPriceText]}>
              $ {high_24h.toLocaleString("en-US", { currency: "USD" })}
            </Text>
            <Text style={[marketStyles.modalPriceSubText]}>
              highest price in 24 hours
            </Text>
          </View>
          <View style={[marketStyles.flexCenter]}>
            <Text
              style={[marketStyles.modalPriceText, { color: ColorTheme.red }]}
            >
              $ {low_24h.toLocaleString("en-US", { currency: "USD" })}
            </Text>
            <Text style={[marketStyles.modalPriceSubText]}>
              lowest price in 24 hours
            </Text>
          </View>
        </View>
        <View style={[marketStyles.flexCenter]}>
          <Text style={[marketStyles.modalPriceText]}>
            $ {price_change_24h.toFixed(3)}
          </Text>
          <Text style={[marketStyles.modalPriceSubText]}>
            price change in 24 hours
          </Text>
        </View>
        <View style={[marketStyles.flexCenter]}>
          <Text
            style={[marketStyles.rateText, { color: percentageChangeColor }]}
          >
            {price_change_percentage_24h.toFixed(3)}%
          </Text>
          <Text style={[marketStyles.modalPriceSubText]}>change rate</Text>
        </View>
      </View>
    </View>
  );
};

export default ChartComponent;
