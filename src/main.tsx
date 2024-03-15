import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App.tsx";
import "@/global.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, WordsProvider } from "@/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WordsProvider retryGap={5}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </WordsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
