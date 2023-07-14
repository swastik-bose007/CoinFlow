import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const splashStyles = StyleSheet.create({
  bodyColor: {
    backgroundColor: ColorTheme.eerieBlack,
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
  normalText: {
    fontFamily: "Archivo-Regular",
    color: ColorTheme.white,
    fontSize: responsiveScreenFontSize(1.6),
},
  faintedText: {
    fontFamily: "FREEFATFONT-Regular",
    fontSize: responsiveScreenFontSize(10),
    color: 'rgba(255, 255, 255, 0.11)',
},
});