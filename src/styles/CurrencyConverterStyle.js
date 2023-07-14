import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const currencyConverterStyles = StyleSheet.create({
  bodyColor: {
    backgroundColor: "#fff",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  flexEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  largeTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(4)
  },
  cryptoImage: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenWidth(60),
  },
  title: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(1.8),
  },
  subTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.5),
  },
  input: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(15),
    backgroundColor: ColorTheme.fadedYellow,
    color: ColorTheme.eerieBlack
  },
  favIcon: {
    position: "absolute",
    marginTop: responsiveScreenHeight(4.5),
    marginLeft: responsiveScreenWidth(6),
    color: ColorTheme.eerieBlack
  },
  priceTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2)
  },
  submitButton: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(15),
    backgroundColor: ColorTheme.raisanBlack2,
    color: ColorTheme.eerieBlack
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  submitText: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2.5),
    color: ColorTheme.fadedYellow
  },
});
