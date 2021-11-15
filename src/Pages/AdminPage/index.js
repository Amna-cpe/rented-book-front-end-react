import React from "react";
import "./index.css";
import Side from "./components/Side";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import RemoveBook from "./components/RemoveBook";
import AuthRoute from "../../Utills/AuthRoutes";
import AdminRoute from "../../Utills/AdminRoute";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuthState } from "../../Context/AuthContext";

import ProtectedRoute from "../../Utills/ProtectedRoute";
export default function Index() {
  const { authenticated } = useAuthState();

  return (
    <AuthProvider>
      <div className="admin-page">
        {/* if the path is '/admin' it is MAIN 
        if /admin/add-book add component
        if /admin/remove-book add component
        */}
        <Side />

        {/* add and remove only if logged in */}
        {/* log in only if not */}

        <Routes>
          {/* only if user is  auth will enter /add-book /remove-book */}
          <Route
            path="/add-book"
            element={
              <AuthRoute>
                <AddBook />
              </AuthRoute>
            }
          />
{/* 
          <Route
            path="/add-book"
            element={
              <ProtectedRoute auth={authenticated} redirect="/admin">
                <AddBook />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/remove-book"
            element={
              <AuthRoute>
                <RemoveBook />
              </AuthRoute>
            }
          />

          {/* <Route
            path="/remove-book"
            element={
              <ProtectedRoute auth={authenticated} redirect="/admin">
                <RemoveBook />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/"
            element={
              <AdminRoute >
                <Main />
              </AdminRoute>
            }
          />

          {/* <Route
            path="/"
            element={
              <ProtectedRoute
                auth={authenticated ? false : true}
                redirect="/admin/add-book"
              >
                <Main />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}
