import React from "react";
import "../globals.css"

import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      {children}
      </div>
  );
}
