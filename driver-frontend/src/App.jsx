import React from "react";
import { Routes, Route } from "react-router-dom";

import DriverLayout from "./driver/layouts/DriverLayout";
import DriversHomePage from "./driver/pages/DriverHome";
import AuthLayout from "./driver/layouts/AuthLayout";
import DriverProfile from "./driver/pages/DriverProfile";
import SupportPage from "./driver/pages/SupportPage";
import SettingsPage from "../../frontend/src/pages/SettingsPage";
import AllBusesPage from "./driver/pages/AllBusesPage";

function App() {
  return (
    <Routes>
      {/* Routes that include navbars */}
      <Route element={<DriverLayout />}>
        <Route path="/" element={<DriversHomePage />} />
        <Route path="/driver-profile" element={<DriverProfile />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/all-buses" element={<AllBusesPage />} />
      </Route>

      {/* Routes without navbars */}
      <Route element={<AuthLayout />}></Route>
    </Routes>
  );
}

export default App;
