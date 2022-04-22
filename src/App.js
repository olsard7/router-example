import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import Layout from "./Layout";
import AuthProvider from "./AuthProvider";
import {
  PublicPage,
  ProtectedPage,
  LoginPage,
  Description,
  NoMatch,
  ProtectedPageDetailed,
} from "./pages";
import "./style.css";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Description />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
            <Route
              path="/detailed"
              element={
                <RequireAuth>
                  <ProtectedPageDetailed />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
