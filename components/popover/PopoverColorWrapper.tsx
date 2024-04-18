"use client";

import type {PopoverProps} from "@nextui-org/react/dist";

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
import {Editor} from "@tiptap/react";
import {Tooltip} from "@nextui-org/tooltip";

export type PopoverFilterWrapperProps = Omit<PopoverProps, "children"> & {
    icon: string;
    title?: string;
    children: React.ReactNode;
    editor?: Editor,
};

const PopoverColorWrapper = React.forwardRef<HTMLDivElement, PopoverFilterWrapperProps>(
    ({icon, title, children, editor, ...props}, ref) => {
        const {isOpen, onClose, onOpenChange} = useDisclosure();
        return (
            <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props}>
                <PopoverTrigger>
                    <Link
                        color={"foreground"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": editor?.isActive('textStyle', {color: editor.getAttributes("textStyle").color}),
                            })}
                    >
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <p className={"text-[12px]"}>{title}</p>
                            }>
                            <Icon icon={icon} width={18} height={18}/>
                        </Tooltip>
                    </Link>
                </PopoverTrigger>
                <PopoverContent className="flex w-full flex-col items-start gap-2 px-4 pt-4 ">
                    <div className="w-full px-2">{children}</div>
                </PopoverContent>
            </Popover>
        )
            ;
    },
);

PopoverColorWrapper.displayName = "PopoverColorWrapper";

export default PopoverColorWrapper;
