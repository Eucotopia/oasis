"use client";
import React from "react";
import {cn, Popover, PopoverContent, PopoverProps, PopoverTrigger, useDisclosure,} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {useTheme} from "next-themes";
import {Icon} from "@iconify/react";

export type PopoverThemeSwitchWrapperProps = Omit<PopoverProps, "children"> & {
    icon: string;
    title?: string;
    children: React.ReactNode;
};

const PopoverThemeSwitchWrapper = React.forwardRef<HTMLDivElement, PopoverThemeSwitchWrapperProps>(
    ({icon, title, children, ...props}, ref) => {
        const {isOpen, onClose, onOpenChange} = useDisclosure();
        return (
            <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props} placement={"bottom"}>
                <PopoverTrigger>
                    <Link
                        color={"foreground"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1 text-default-500")}
                    >
                        <Icon icon={icon} height={26} width={26}/>
                    </Link>
                </PopoverTrigger>
                <PopoverContent className="flex w-full flex-col items-start gap-2 px-4 pt-4 ">
                    <div className="w-full px-2">{children}</div>
                </PopoverContent>
            </Popover>
        )
    },
);
PopoverThemeSwitchWrapper.displayName = "PopoverThemeSwitchWrapper"

export default PopoverThemeSwitchWrapper
