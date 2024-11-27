import { AppSidebar } from "@/components/app-sidebar";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
type Prop = {
  children: React.ReactNode;
};
export default function layout({ children }: Prop) {
  return (
    // <div className="md:w-[60%]">
    //   <AppSidebar />
    //   {children}
    // </div>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
