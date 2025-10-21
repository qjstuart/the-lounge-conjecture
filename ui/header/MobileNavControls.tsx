"use client";

import { useEffect, useState } from "react";

import HamburgerButton from "./HamburgerButton";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";

export default function MobileNavControls() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Allow closing of sidebar by pressing Escape key.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  return (
    <>
      <HamburgerButton onClick={() => setSidebarOpen(true)} />
      {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}
      {sidebarOpen && <Sidebar />}
    </>
  );
}
