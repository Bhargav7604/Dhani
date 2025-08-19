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
    primary: "#FAFAFC",
    secondary: "",
    tertiary: "",
    bright: "#ffffff", // White
    dark: "#000000", // Black --> mainDark
    divider: "#CCCCCC",
    backgroundimgcolor: "#D9D9D9",
    mainbackgroundcolor: "#F8F9FA",
    headerbackground: "#ECF5FF",
    popupbackground: "#FAFAFA",
    mainheaderbackground: "#F1F3F7",

    text: {
      primary: "#000000",
      secondary: "#1667D9",
      tertiary: "#94A3B8",
      disabled: "#ABABAB",
      contrast: "#ffffff",
      secondheader: "#6D6D6D",
      tertiaryheader: "#64748b",
      description: "#7d7d7d",
      exit: "#F15B4D",
      secondaryexit: "#C03744",
    },
    status: {
      alert: "#ff6600",
      error: "#f44336",
      success: "#009900",
      inactive: "#979797",
      disabled: "#cacaca",
      strategycategory: "#F7DA9C",
    },
    border: {
      main: "#1667D9",
      secondary: "#E1ECFA",
      unhovered: "#d8d8d8",
      exit: " #F15B4D",
      dark: "#d35331",
      light: "#e6e6e6",
      dhanitoggleborder: "#7d7d7d",
    },
    buttons: {
      primary: "#1667D9",
      maingradient: "linear-gradient(180deg, #227AF5 0%, #1667D9 100%)",
      defaultcolor: "#F8FAFC",
      activetoggle: "#E6EFF9",
      exit: "#ED5826",
      delete: "#f15d4d",
      secondaryexit: " #A30D11",
      select: "#F4F6FA",
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
    lukeBold: 500,
    semiBold: 600,
    bold: 800,
  };

  static measures: ThemeMeasures = {
    someWidth: 100,
    borderRadius: "9px",
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
  };
};
