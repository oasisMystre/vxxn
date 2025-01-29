import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UploadPage, UserProfile } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UploadPage />} path="/upload" />
        <Route element={<UserProfile />} path="/user-profile" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
