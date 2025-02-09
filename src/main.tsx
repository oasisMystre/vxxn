import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { HomePage } from "./pages/index.ts";
import RootLayout from "./components/layout/index.tsx";
import SearchPage from "./pages/search/index.tsx";
import UploadPage from "./pages/upload/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={<RootLayout />}
          path="/"
        >
          <Route
            element={<HomePage />}
            path="/"
          />
          <Route
            element={<SearchPage />}
            path="/search"
          />
        </Route>
        <Route
          element={<UploadPage />}
          path="/upload"
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
