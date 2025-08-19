import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppInitializer from "./AppInitializer.tsx";
import { ThemeProvider } from "styled-components";
import { createTheme as getAppTheme } from "../src/styles/GlobalTheme.ts";
import { createTheme, ThemeOptions } from "@mui/material";
import { Theme } from "./styles/GlobalThemeInterface.ts";
import BufferSpinner from "../../../packages/ui/src/sharedcomponents/buffer/BufferSpinner.tsx";

import Store, { useAppSelector } from "./store/Store.ts";
import ToasterHandler from "./modules/layout/sections/toasterhandler/ToasterHandler.tsx";
import { Provider } from "react-redux";
interface CustomThemeOptions extends ThemeOptions {
  app?: Theme;
}

function App(): ReactElement {
  const appTheme = getAppTheme();

  const theme = createTheme({
    app: appTheme,
  } as CustomThemeOptions);

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<BufferSpinner />}>
          <Router>
            <AppContent />
            <AppInitializer />
          </Router>
        </React.Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

function AppContent(): ReactElement {
  const toasters = useAppSelector((state) => state.toasters.toasters);

  return <>{toasters.length > 0 && <ToasterHandler />}</>;
}
