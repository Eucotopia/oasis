"use client"
import {Button, cn, ScrollShadow} from "@nextui-org/react";
import React from "react";
import {Icon} from "@iconify/react";
import Sidebar from "@/components/dashboard/sidebar";
import {items} from "@/components/dashboard/sidebar-items";

export default function DocsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isHidden, setIsHidden] = React.useState(false);

    return (
        <div className="flex h-dvh w-full mt-5 gap-10">
            <div
                className={cn(
                    "relative rounded-large shadow-small flex h-full w-72  max-w-[250px] max-h-[600px]  flex-1 flex-col bg-content1 border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out",
                    {
                        "-ml-72 -translate-x-72": isHidden,
                    },
                )}
            >
                <Button isIconOnly size="sm" variant="light" onPress={() => setIsHidden(!isHidden)}
                        className={cn("absolute top-1/3", {
                            "-left-7": !isHidden,
                            "-right-52": isHidden,
                        })}>
                    <Icon
                        className="text-default-500"
                        height={24}
                        icon="solar:sidebar-minimalistic-outline"
                        width={24}
                    />
                </Button>
                <ScrollShadow className=" h-full max-h-full scrollbar-hide">
                    <Sidebar defaultSelectedKey="home" items={items}/>
                </ScrollShadow>
            </div>
            <div className="w-full flex-1 flex-col max-h-[600px]">
                <main className={cn("h-full w-full overflow-scroll scrollbar-hide", {
                    "max-w-[942px]": !isHidden
                })}>
                    <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
