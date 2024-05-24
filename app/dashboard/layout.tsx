"use client"
import React from "react";
import {cn, ScrollShadow} from "@nextui-org/react";
import {useMediaQuery} from "usehooks-ts";
import Sidebar from "@/components/dashboard/sidebar";
import {items} from "@/components/dashboard/sidebar-items";

export default function DocsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isCompact = isCollapsed || isMobile;

    const onToggle = React.useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);
    return (
        <>
            <div className="flex h-dvh w-full gap-6 mt-8">
                <div
                    className={cn(
                        "relative flex flex-col p-2 transition-width bg-content1 rounded-medium max-h-[600px]",
                        {
                            "w-16 items-center px-2 ": isCompact,
                        },
                    )}
                >
                    <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6 scrollbar-hide">
                        <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={items} onToggle={onToggle}/>
                    </ScrollShadow>
                </div>
                <div className="w-full flex-1 flex-col">
                    <main className="h-full w-full overflow-visible">
                        <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
