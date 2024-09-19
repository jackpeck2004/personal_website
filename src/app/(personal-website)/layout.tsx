import { ReactNode } from "react";
import { Header } from "@/components/navigation/header";

export default function PersonalWebsiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        </>
    );
}
