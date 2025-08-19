import {
  Theme,
  ThemeColors,
  ThemeMeasures,
  ThemeResolutions,
  ThemeWeights,
  THEME_MODES,
} from "./GlobalThemeInterface";

export const DEFAULT_THEME = THEME_MODES.LIGHT;

const AppThemeInfo = {
  [THEME_MODES.LIGHT]: {
    name: THEME_MODES.LIGHT,
    id: "UQ_TH1",
  },
};

class AppColors {
  static [THEME_MODES.LIGHT]: ThemeColors = {
    primary: "#037171",
    secondary: "",
    tertiary: "",
    bright: "#ffffff",
    layout: "#f3f4f6",
    dark: "#000000",
    divider: "#CCCCCC",
    tableheader: "#9e9e9e",
    mainbackgroundcolor: "#F5F5F5",

    alternateRowBackground: "#ECF5FF",
    sidebarBackground: "#10356A",
    algomenubackground: "#1667D9",
    dhanigray: "#B0BEC5",
    dhanitextgray: "#afbbcc",
    dhanigraylight: "#e2e8f0",
    dhanigrayprimary: "#0F1A2A",
    dhanigraysecondary: "#0E2A3B",
    dhaniyellow: "#ff8300",
    dhaniorange: "#ea5826",
    dhanitablehead: "#CBD6F9",
    dhanitableevenrows: "#F1F5FE",
    dhanigreenlight: "#ccffcc",
    deltamenuitem: "#e0e0e0",
    backgroundActive: "#F5F5F7",
    text: {
      primary: "#000000",
      secondary: "#222",
      tertiary: "#94A3B8",
      disabled: "#CCCCCC",
      contrast: "#ffffff",
      active: "#10356a",
    },
    buttons: {
      primary: "#1667d9",
      exit: "#C6372D",
      secondaryexit: "#ff3b30",
      select: "#F4F6FA",
    },
    status: {
      alert: "#ff6600",
      error: "#f44336",
      success: "#009900",
      inactive: "#979797",
      disabled: "#cacaca",
    },
    border: {
      main: "#ccc",
      secondary: "#E1ECFA",
      dark: "#7E7E7E",
      light: "#e6e6e6",
      primary: "#1976d2",
      cancelborder: "#c32c2c",
    },
    gradients: {
      gradient1: "",
    },
  };
}

class ThemeConstants {
  static weights: ThemeWeights = {
    light: 200,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 800,
  };

  static typography = {
    fontFamily: {
      primary: "Inter, sans-serif",
      secondary: "Source Sans Pro, Montserrat, sans-serif",
    },
  };

  static measures: ThemeMeasures = {
    someWidth: 100,
    borderRadius: "8px",
  };

  static resolutions: ThemeResolutions = {
    mobileMin: "320px",
    mobileMax: "769px",
    tabMin: "770px",
    tabMax: "992px",
    desktopMin: "993px",
    desktopMidPointMax: "1279px",
    desktopMidPointMin: "1280px",
    desktopMax: "1920px",
    tabMinValue: 770,
    mobileMaxValue: 769,
    tabLandscapeMaxValue: 1110,
  };
}

export const createTheme = (mode?: THEME_MODES): Theme => {
  if (!mode) {
    mode = DEFAULT_THEME;
  }

  return {
    id: AppThemeInfo[mode].id,
    name: mode,
    colors: AppColors[mode],
    resolutions: ThemeConstants.resolutions,
    measures: ThemeConstants.measures,
    weights: ThemeConstants.weights,
    typography: ThemeConstants.typography,
  };
};



