import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UploadPage, UserProfile, Search } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UploadPage />} path="/upload" />
        <Route element={<UserProfile />} path="/user-profile" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
