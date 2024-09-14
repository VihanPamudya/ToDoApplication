import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoAppPage from "./pages/TodoAppPage";
import AuthProvider from "./context/AuthContext";
import TodoProvider from "./context/TodoContext";
import PrivateRoute from "./components/Common/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
              path="/todos"
              element={
                <PrivateRoute>
                  <TodoAppPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
