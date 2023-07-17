// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { currencyConverterStyles } from "../styles/CurrencyConverterStyle";
import { marketStyles } from "../styles/MarketStyles";
import ColorTheme from "../config/ColorTheme";
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import ListItem from "../components/ListItem";
import ChartComponent from "../components/ChartComponent";
// --------------------------------------------------------------------
// SAMPLE DATA
// --------------------------------------------------------------------
import { SAMPLE_DATA } from "../assets/Data/SampleData";
import { getMarketData } from "../api/CryptoService";
import { searchCoins } from "../api/CryptoService";

const MarketScreen = () => {
  const [data, setData] = useState([]);
  // Chart details state
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  // Coin searching
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
  }, []);

  const handleSearchQueryChange = async (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      // const results = await searchCoins(query);
      const results = data.filter((coin) => coin.name.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%"], []);

  // backdrop on modal open
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 5);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      {/* <BottomSheetModalProvider> */}
      <SafeAreaView
        className="flex-1 flex justify-center align-middle"
        style={{ backgroundColor: isOpen ? "grey" : "white" }}
      >
        <View className="w-full h-[10%] p-5" style={[marketStyles.flexStart]}>
          <Text className="pt-0.5" style={[marketStyles.largeTitle]}>
            Market
          </Text>
        </View>
        <View className="w-full h-[10%] px-5" style={[marketStyles.flexCenter]}>
          <TextInput
            style={[currencyConverterStyles.input]}
            className="px-12"
            placeholder="Search coin"
            placeholderTextColor={ColorTheme.grey}
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
            require
          />
        </View>
        <View className="w-full h-[67%]">
          <FlatList
            keyExtractor={(item) => item.id}
            data={searchQuery !== "" ? searchResults : data}
            renderItem={(
              { item } // SAMPLE_DATA DESTRUCTURIZATION
            ) => (
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                logoUrl={item.image}
                priceChangePercentage7d={
                  item.price_change_percentage_7d_in_currency
                }
                onPress={() => {
                  openModal(item);
                }}
              />
            )}
          />
        </View>
        <View className="w-full h-[13%]"></View>
        {/* ------------------------- BOTTOM MODAL ---------------------------- */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: responsiveScreenWidth(5) }}
          onDismiss={() => setIsOpen(false)}
        >
          {selectedCoinData ? (
            <ChartComponent
              currentPrice={selectedCoinData.current_price}
              logoUrl={selectedCoinData.image}
              name={selectedCoinData.name}
              symbol={selectedCoinData.symbol}
              high_24h={selectedCoinData.high_24h}
              low_24h={selectedCoinData.low_24h}
              price_change_24h={selectedCoinData.price_change_24h}
              price_change_percentage_24h={
                selectedCoinData.price_change_percentage_24h
              }
              priceChangePercentage7d={
                selectedCoinData.price_change_percentage_7d_in_currency
              }
              sparkLine={selectedCoinData.sparkline_in_7d.price}
            />
          ) : null}
        </BottomSheetModal>
      </SafeAreaView>
      {/* </BottomSheetModalProvider> */}
      {/* </GestureHandlerRootView> */}
    </TouchableWithoutFeedback>
  );
};

export default MarketScreen;
