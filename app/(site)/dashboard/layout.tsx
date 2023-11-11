import { ReactNode } from "react";
import SideNav from "../../ui/dashboard/sidenav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <figure className="w-full flex-none md:w-64">
        <SideNav />
      </figure>
      <div className="flex-grow p-6 md:overflow-y-auto md:px-12 py-4">
        {children}
      </div>
    </section>
  );
}
