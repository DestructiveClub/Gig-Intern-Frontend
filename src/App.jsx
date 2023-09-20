import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import SignUp from "pages/First-page.js"; 
import InterestPage from "pages/Second-page.js";
import Courses from "pages/Third-page";
import TermsCondition from "pages/Fourth-page";

const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="signup/*" element={<SignUp />} />
      <Route path="/interest/*" element={<InterestPage />} />
      <Route path="/courses/*" element={<Courses />} />
      <Route path="/termsandconditions/*" element={<TermsCondition />} />
    </Routes>
  );
};

export default App;
