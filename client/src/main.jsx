import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
    // <RouterProvider router={router} />,
);
