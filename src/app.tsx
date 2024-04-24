import { ThemeProvider, WordsProvider } from "@/providers";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "@/routes/main";
import { WordListPage } from "@/routes/word-list";
import { NotFoundPage } from "@/routes/not-found";

export const App = () => {
  return (
    <>
      <HashRouter>
        <WordsProvider retryGap={5}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/wordlist" element={<WordListPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ThemeProvider>
        </WordsProvider>
      </HashRouter>
    </>
  );
};