import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppInitializer from "./AppInitializer.tsx";
import { ThemeProvider } from "styled-components";
import { createTheme as getAppTheme } from "../src/styles/GlobalTheme.ts";
import { createTheme, ThemeOptions } from "@mui/material";
import { Theme } from "./styles/GlobalThemeInterface.ts";
import BufferSpinner from "../../../packages/ui/src/sharedcomponents/buffer/BufferSpinner.tsx";
import { useAppSelector } from "./store/Store.ts";
import ToasterHandler from "./modules/layout/section/toasterhandler/ToasterHandler.tsx";
interface CustomThemeOptions extends ThemeOptions {
  app?: Theme;
}

function App(): ReactElement {
  const appTheme = getAppTheme();

  const theme = createTheme({
    app: appTheme,
  } as CustomThemeOptions);
  const toasters = useAppSelector((state) => state.toasters.toasters);
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<BufferSpinner />}>
        <Router
        // basename={"/quantlab/"}
        >
          {toasters.length > 0 && <ToasterHandler />}
          <AppInitializer />
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
