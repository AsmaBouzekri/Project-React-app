import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export const COLORS = {

  // base colors
  primary: "#194868", // Dark Blue
  secondary: "#FF615F",   // peach
  gray: "#06A6A6A",
  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#F5F7F9",
  lightGray2: '#FAFBFD',
  gray: "#BEC1D2",
  blue: '#42B0FF',
  darkgray: '#898C95',
  yellow: '#FFD573',
  lightBlue: '#95A9B8',
  darkgreen: '#008159',
  peach: '#FF615F',
  purple: '#8e44ad',
  red: '#FF0000',
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height
};


const appTheme = { COLORS, SIZES };

export default appTheme;