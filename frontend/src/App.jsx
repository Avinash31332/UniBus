import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";

import TestPage from "./pages/TestPage";
import AllBusesPage from "./pages/AllBusesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import PreLoginPage from "./pages/PreLoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import MapView from "./MapView";
import Map1 from "./components/Map1";
import Map2 from "./components/Map2";
function App() {
  return (
    <Routes>
      {/* Routes that include navbars */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-buses" element={<AllBusesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Routes without navbars */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Map1 />} />
        <Route path="/pre-login" element={<PreLoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
