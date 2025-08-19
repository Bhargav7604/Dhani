export enum THEME_MODES {
  LIGHT = "LIGHT",
}

export interface ThemeResolutions {
  readonly mobileMin: string;
  readonly mobileMax: string;
  readonly tabMin: string;
  readonly tabMax: string;
  readonly desktopMin: string;
  readonly desktopMidPointMax: string;
  readonly desktopMidPointMin: string;
  readonly desktopMax: string;
  readonly tabMinValue: number;
  readonly mobileMaxValue: number;
  readonly tabLandscapeMaxValue: number;
}

export interface ThemeWeights {
  readonly light: number;
  readonly lukeBold: number;
  readonly regular: number;
  readonly semiBold: number;
  readonly bold: number;
}

export interface ThemeMeasures {
  readonly someWidth: number;
  readonly borderRadius: string;
}

export interface ThemeColors {
  readonly primary: string;
  readonly secondary: string;
  readonly tertiary: string;
  readonly dark: string;
  readonly bright: string;
  readonly divider: string;
  readonly backgroundimgcolor: string;
  readonly mainbackgroundcolor: string;
  readonly headerbackground: string;
  readonly popupbackground: string;
  readonly mainheaderbackground: string;

  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly disabled: string;
    readonly contrast: string;
    readonly secondheader: string;
    readonly tertiaryheader: string;
    readonly description: string;
    readonly exit: string;
    readonly secondaryexit: string;
  };
  readonly status: {
    readonly alert: string;
    readonly error: string;
    readonly success: string;
    readonly inactive: string;
    readonly disabled: string;
    readonly strategycategory: string;
  };
  readonly border: {
    readonly main: string;
    readonly secondary: string;
    readonly unhovered: string;
    readonly light: string;
    readonly dark: string;
    readonly exit: string;
    readonly dhanitoggleborder: string;
  };
  readonly buttons: {
    readonly primary: string;
    readonly maingradient: string;
    readonly defaultcolor: string;

    readonly activetoggle: string;

    readonly exit: string;
    readonly select: string;
    readonly secondaryexit: string;
    readonly delete: string;
  };
  readonly gradients: {
    readonly gradient1: string;
  };
}

export interface Theme {
  readonly id: string;
  readonly name: string;
  readonly colors: ThemeColors;
  readonly resolutions: ThemeResolutions;
  readonly weights: ThemeWeights;
  readonly measures: ThemeMeasures;
}

export interface AppTheme {
  app: Theme;
}
