"use client"
import React from "react";
import Slider from "@/components/sidebar-compact/App";
import {cn} from "@/components/sidebar-compact/cn";
import {AcmeLogo} from "@/components/sidebar-compact/acme";
import {Avatar, Button, Listbox, ListboxItem, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
import Sidebar from "@/components/sidebar-compact/sidebar";
import {sectionItemsWithTeams} from "@/components/sidebar-compact/sidebar-items";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";

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
            <div className="flex h-dvh w-full">
                <div
                    className={cn(
                        "relative flex h-full w-72 flex-col p-6 transition-width bg-content1 scrollbar-hide",
                        {
                            "w-16 items-center px-2 py-6": isCompact,
                        },
                    )}
                >
                    <Spacer y={8}/>
                    <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                        <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams} onToggle={onToggle}/>
                    </ScrollShadow>
                    <Spacer y={2}/>
                    <div
                        className={cn("mt-auto flex flex-col", {
                            "items-center": isCompact,
                        })}
                    >
                        <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
                            <Button
                                fullWidth
                                className={cn(
                                    "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                                    {
                                        "justify-center": isCompact,
                                    },
                                )}
                                isIconOnly={isCompact}
                                startContent={
                                    isCompact ? null : (
                                        <Icon
                                            className="flex-none text-default-500"
                                            icon="solar:info-circle-line-duotone"
                                            width={24}
                                        />
                                    )
                                }
                                variant="light"
                            >
                                {isCompact ? (
                                    <Icon
                                        className="text-default-500"
                                        icon="solar:info-circle-line-duotone"
                                        width={24}
                                    />
                                ) : (
                                    "Help & Information"
                                )}
                            </Button>
                        </Tooltip>
                        <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
                            <Button
                                className={cn("justify-start text-default-500 data-[hover=true]:text-foreground", {
                                    "justify-center": isCompact,
                                })}
                                isIconOnly={isCompact}
                                startContent={
                                    isCompact ? null : (
                                        <Icon
                                            className="flex-none rotate-180 text-default-500"
                                            icon="solar:minus-circle-line-duotone"
                                            width={24}
                                        />
                                    )
                                }
                                variant="light"
                            >
                                {isCompact ? (
                                    <Icon
                                        className="rotate-180 text-default-500"
                                        icon="solar:minus-circle-line-duotone"
                                        width={24}
                                    />
                                ) : (
                                    "Log Out"
                                )}
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="w-full flex-1 flex-col p-4">
                    <main className="mt-4 h-full w-full overflow-visible">
                        <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
        // <div className="flex h-dvh w-full mt-5 gap-10">
        //     <div
        //         className={cn(
        //             "relative rounded-large shadow-small flex h-full w-72  max-w-[250px] max-h-[600px]  flex-1 flex-col bg-content1 border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out",
        //             {
        //                 "-ml-72 -translate-x-72": isHidden,
        //             },
        //         )}
        //     >
        //         <Button isIconOnly size="sm" variant="light" onPress={() => setIsHidden(!isHidden)}
        //                 className={cn("absolute top-1/3", {
        //                     "-left-7": !isHidden,
        //                     "-right-52": isHidden,
        //                 })}>
        //             <Icon
        //                 className="text-default-500"
        //                 height={24}
        //                 icon="solar:sidebar-minimalistic-outline"
        //                 width={24}
        //             />
        //         </Button>
        //         <ScrollShadow className=" h-full max-h-full scrollbar-hide">
        //             <Sidebar defaultSelectedKey="home" items={items}/>
        //         </ScrollShadow>
        //     </div>
        //     <div className="w-full flex-1 flex-col max-h-[600px]">
        //         <main className={cn("h-full w-full overflow-scroll scrollbar-hide", {
        //             "max-w-[942px]": !isHidden
        //         })}>
        //             <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium">
        //                 {children}
        //             </div>
        //         </main>
        //     </div>
        // </div>
    );
}
