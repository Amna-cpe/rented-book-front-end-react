import React from "react";
import "./index.css";
import Side from "./components/Side";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import RemoveBook from "./components/RemoveBook";
import AuthRoute from "../../Utills/AuthRoutes";
import AdminRoute from "../../Utills/AdminRoute";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

export default function Index() {
 

  return (
    <AuthProvider>
      <div className="admin-page">
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

          <Route
            path="/remove-book"
            element={
              <AuthRoute>
                <RemoveBook />
              </AuthRoute>
            }
          />

          <Route
            path="/"
            element={
              <AdminRoute>
                <Main />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}
