"use client";


import React from "react";
import {
    cn,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useDisclosure,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {Link} from "@nextui-org/link";
import {Tooltip} from "@nextui-org/tooltip";
import {PopoverFilterWrapperProps} from "@/components/popover/PopoverColorWrapper";

const PopoverMoreOptionWrapper = React.forwardRef<HTMLDivElement, PopoverFilterWrapperProps>(
    ({icon, title, children, editor, ...props}, ref) => {
        const {isOpen, onClose, onOpenChange} = useDisclosure();
        return (
            <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props}>
                <PopoverTrigger>
                    <Link
                        color={"foreground"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                            "hover:bg-content4")}
                    >
                        <Icon icon={icon} width={20} height={20}/>
                    </Link>
                </PopoverTrigger>
                <PopoverContent className="flex w-full flex-row items-start rounded-md">
                    <div className="flex flex-row w-full gap-2">{children}</div>
                </PopoverContent>
            </Popover>
        );
    },
);

PopoverMoreOptionWrapper.displayName = "PopoverMoreOptionWrapper";

export default PopoverMoreOptionWrapper;
