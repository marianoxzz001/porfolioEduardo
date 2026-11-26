import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

// Fonte Inter (as mesmas do design do Figma)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import App from "./App";
import tema from "./tema";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      {/* CssBaseline aplica o fundo escuro e zera as margens do navegador */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
