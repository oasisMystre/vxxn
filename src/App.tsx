import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UploadPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UploadPage />} path="/upload" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
