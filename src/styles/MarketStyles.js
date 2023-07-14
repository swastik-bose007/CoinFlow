import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const marketStyles = StyleSheet.create({
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
  flexEven: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  largeTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(4)
  },
  listWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftWrapper: {
    flexDirection: "row"
  },
  image: {
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(12),
    resizeMode: "contain"
  },
  title: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(1.8),
  },
  subTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.4),
  },
  rightWrapper: {
    alignItems: "flex-end"
  },
  modalImage: {
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(8),
    resizeMode: "contain"
  },
  modalBoldTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2.2),
  },
  modalRegularTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(2.2),
  },
  modalPriceText:{
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(3.5),
    color: ColorTheme.FernGreen
  },
  modalPriceSubText:{
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.5),
    color: ColorTheme.raisanBlack1
  },
  rateText:{
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(3.5),
  },
});