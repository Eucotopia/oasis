"use client"
import {Button, cn, ScrollShadow} from "@nextui-org/react";
import React from "react";
import {useMediaQuery} from "usehooks-ts";
import {Icon} from "@iconify/react";
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
        <div className="flex h-screen w-full mt-14 gap-8">
            <div
                className={cn(
                    "relative flex h-full flex-col rounded-md bg-content1 p-2 transition-width",
                    {
                        "w-16 items-center px-2 py-6": isCompact,
                    },
                )}
            >
                <div className="flex items-center justify-between px-3 ">
                    <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
                        <Icon
                            className="text-default-500"
                            height={24}
                            icon={isCompact ? "solar:sidebar-minimalistic-outline" : "fa6-solid:left-long"}
                            width={24}
                        />
                    </Button>
                    <div className={cn("flex max-w-full flex-col", {hidden: isCompact})}>
                        <p className="truncate text-small font-medium text-default-600">Close</p>
                    </div>
                </div>
                <ScrollShadow className="-mr-6 h-full max-h-full  pr-6 scrollbar-hide">
                    <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={items}/>
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
    );
}
