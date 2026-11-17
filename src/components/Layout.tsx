import { Outlet, ScrollRestoration } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <ScrollRestoration />
    </>
  );
}
