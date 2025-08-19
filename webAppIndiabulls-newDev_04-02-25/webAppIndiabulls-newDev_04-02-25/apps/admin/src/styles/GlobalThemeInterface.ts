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
  readonly regular: number;
  readonly medium: number;
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
  readonly layout: string;
  readonly divider: string;
  readonly tableheader: string;
  readonly alternateRowBackground: string;
  readonly sidebarBackground: string;
  readonly algomenubackground: string;
  readonly dhanigray: string;
  readonly dhanigrayprimary: string;
  readonly dhanigraysecondary: string;
  readonly dhanigraylight: string;
  readonly dhaniorange: string;
  readonly dhanitablehead: string;
  readonly dhanitableevenrows: string;
  readonly dhanigreenlight: string;
  readonly deltamenuitem: string;
  readonly dhanitextgray: string;
  readonly dhaniyellow: string;
  readonly backgroundActive: string;
  readonly mainbackgroundcolor: string;
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly disabled: string;
    readonly contrast: string;
    readonly active: string;
  };
  readonly buttons: {
    readonly primary: string;
    readonly secondaryexit: string;
    readonly exit: string;
    readonly select: string;
  };

  readonly status: {
    readonly alert: string;
    readonly error: string;
    readonly success: string;
    readonly inactive: string;
    readonly disabled: string;
  };
  readonly border: {
    readonly main: string;
    readonly secondary:string;
    readonly light: string;
    readonly dark: string;
    readonly primary: string;
    readonly cancelborder: string;
  };
  readonly gradients: {
    readonly gradient1: string;
  };
}

export interface ThemeTypography {
  readonly fontFamily: {
    readonly primary: string;
    readonly secondary: string;
  };
}

export interface Theme {
  readonly id: string;
  readonly name: string;
  readonly colors: ThemeColors;
  readonly resolutions: ThemeResolutions;
  readonly weights: ThemeWeights;
  readonly measures: ThemeMeasures;
  readonly typography: ThemeTypography;
}

export interface AppTheme {
  app: Theme;
}

// export enum THEME_MODES {
//   LIGHT = 'LIGHT'
// }

// export interface ThemeResolutions {
//   readonly mobileMin: string;
//   readonly mobileMax: string;
//   readonly tabMin: string;
//   readonly tabMax: string;
//   readonly desktopMin: string;
//   readonly desktopMidPointMax: string;
//   readonly desktopMidPointMin: string;
//   readonly desktopMax: string;
//   readonly tabMinValue: number;
//   readonly mobileMaxValue: number;
//   readonly tabLandscapeMaxValue: number;
// }

// export interface ThemeWeights {
//   readonly light: number;
//   readonly regular: number;
//   readonly semiBold: number;
//   readonly bold: number;
// }

// export interface ThemeMeasures {
//   readonly someWidth: number;
// }

// export interface ThemeColors {
//   readonly primary: string;
//   readonly secondary: string;
//   readonly tertiary: string;
//   readonly dark: string;
//   readonly bright: string;
//   readonly divider: string;
//   readonly backgroundimgcolor: string;
//   readonly menubackground: string;
//   readonly text: {
//     readonly primary: string;
//     readonly secondary: string;
//     readonly tertiary: string;
//     readonly disabled: string;
//     readonly contrast: string;
//     readonly Header: string;
//     readonly exit: string;
//     readonly secondaryexit: string;
//   };
//   readonly status: {
//     readonly alert: string;
//     readonly error: string;
//     readonly success: string;
//     readonly inactive: string;
//     readonly disabled: string;
//   };
//   readonly border: {
//     readonly main: string;
//     readonly light: string;
//     readonly dark: string;
//     readonly exit: string;
//   };
//   readonly buttons: {
//     readonly primary: string;
//     readonly exit: string;
//     readonly select: string;
//     readonly secondaryexit: string;
//   };
//   readonly gradients: {
//     readonly gradient1: string;
//   };
// }

// export interface Theme {
//   readonly id: string;
//   readonly name: string;
//   readonly colors: ThemeColors;
//   readonly resolutions: ThemeResolutions;
//   readonly weights: ThemeWeights;
//   readonly measures: ThemeMeasures;
// }

// export interface AppTheme {
//   app: Theme;
// }
