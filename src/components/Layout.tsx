import { Outlet, ScrollRestoration } from "react-router-dom";
import SiteHeader from "./SiteHeader";

export default function Layout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
