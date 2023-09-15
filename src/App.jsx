import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "views/sign-up/Sign-up";
import AdminLayout from "layouts/admin";

const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
