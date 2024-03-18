import { ThemeProvider, WordsProvider } from "@/providers";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "@/routes/main";
import { WordList } from "@/routes/word-list";
import { NotFound } from "@/routes/not-found";

export const App = () => {
  return (
    <>
      <HashRouter>
        <WordsProvider retryGap={5}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/word-list" element={<WordList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </WordsProvider>
      </HashRouter>
    </>
  );
};