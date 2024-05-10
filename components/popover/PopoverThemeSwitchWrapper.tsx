// "use client";
// import React from "react";
// import {cn, Popover, PopoverContent, PopoverProps, PopoverTrigger, useDisclosure,} from "@nextui-org/react";
// import {Link} from "@nextui-org/link";
// import {Icon} from "@iconify/react";
// import {PopoverFilterWrapperProps} from "@/components/popover/PopoverColorWrapper";
//
//
// const PopoverThemeSwitchWrapper = React.forwardRef<HTMLDivElement, PopoverFilterWrapperProps>(
//     ({icon, title, children, ...props}, ref) => {
//         const {isOpen, onClose, onOpenChange} = useDisclosure();
//         return (
//             <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props} placement={"bottom"}>
//                 <PopoverTrigger>
//                     <Link
//                         color={"foreground"}
//                         className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1 text-content4-foreground")}
//                     >
//                         <Icon icon={icon} height={26} width={26}/>
//                     </Link>
//                 </PopoverTrigger>
//                 <PopoverContent className="flex w-full flex-col items-start gap-2 px-4 py-4">
//                     <div className="w-full">{children}</div>
//                 </PopoverContent>
//             </Popover>
//         )
//     },
// );
// PopoverThemeSwitchWrapper.displayName = "PopoverThemeSwitchWrapper"
//
// export default PopoverThemeSwitchWrapper
