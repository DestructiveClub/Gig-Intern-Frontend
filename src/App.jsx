import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import SignUp from "pages/sign-up/First-page";
import InterestPage from "pages/sign-up/Second-page";
import Courses from "pages/sign-up/Third-page";
import TermsCondition from "pages/sign-up/Fourth-page";
import SignIn from "pages/sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="signup/*" element={<SignUp />} />
      <Route path="signin/*" element={<SignIn />} />
      <Route path="/interest/*" element={<InterestPage />} />
      <Route path="/courses/*" element={<Courses />} />
      <Route path="/termsandconditions/*" element={<TermsCondition />} />
    </Routes>
  );
};

export default App;
