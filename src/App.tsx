import type { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import OutingsPage from "./pages/OutingsPage";
import { NAV_ITEMS } from "./site";

// Páginas ya construidas; el resto de las solapas muestra "Próximamente".
const PAGES: Record<string, ReactNode> = {
  "/quien-soy": <AboutPage />,
  "/salidas": <OutingsPage />,
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      ...NAV_ITEMS.map((item) => ({
        path: item.path,
        element: PAGES[item.path] ?? <ComingSoonPage title={item.label} />,
      })),
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
