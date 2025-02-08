import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { HomePage } from "./pages/index.ts";
import RootLayout from "./components/layout/index.tsx";

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
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
