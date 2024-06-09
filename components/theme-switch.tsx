'use client'
import React, {useEffect} from "react";
import {
    cn,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    RadioGroup,
    RadioProps,
    useRadio,
    VisuallyHidden
} from "@nextui-org/react";
import {useTheme} from "next-themes";
import {Icon} from "@iconify/react";

type ThemeRadioProps = RadioProps & {
    background: string
}
/**
 * design:  dropdown
 *       ------------
 *       | theme-1  |
 *       | theme-2  |
 *       | theme-3  |
 *       ------------
 *       hover:display demo
 * @param props
 * @constructor
 */
/**
 * TODO: need to be better
 * @param props
 * @constructor
 */
export const ThemeRadio = (props: ThemeRadioProps) => {
    const {
        Component,
        children,
        isSelected,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
    } = useRadio(props);
    return (
        <Component
            {...getBaseProps()}
            className={cn(
                "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse w-28 h-28 ",
                "cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
                "data-[selected=true]:border-primary",
                `${props.background}`
            )}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div {...getLabelWrapperProps()}>
                {children && <span {...getLabelProps()}>{children}</span>}
            </div>
        </Component>
    );
};

export default function App() {
    const {theme, setTheme} = useTheme();
    const [selected, setSelected] = React.useState(theme);
    useEffect(() => {
        if (selected != null) {
            setTheme(selected)
        }
    }, [selected, setTheme])
    const changeThemeIcon = () => {
        if (theme === "light") {
            return "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
        } else if (theme === "dark") {
            return "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        } else {
            return "mdi:theme"
        }
    }
    return (
        <>
            <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <Link className={"cursor-pointer"} aria-label="theme-switch">
                        <Icon icon={"line-md:moon-filled-alt-to-sunny-filled-loop-transition"} className={"text-default-500"} width={24} height={24}/>
                    </Link>
                </PopoverTrigger>
                <PopoverContent>
                    <RadioGroup
                        value={selected}
                        aria-label="ThemeSwitch"
                        classNames={{
                            wrapper: "gap-2",
                        }}
                        orientation={"horizontal"}
                        onValueChange={setSelected}
                    >
                        <ThemeRadio description="Up to 20 items" value="light" background={"bg-[#FFFFFF]"}/>
                        <ThemeRadio description="Unlimited items. $10 per month." value="dark"
                                    background={"bg-[#121212]"}/>
                        <ThemeRadio
                            description="24/7 support. Contact us for pricing."
                            value="posthog"
                            background={"bg-[#1C1E26]"}
                        />
                        <ThemeRadio
                            description="24/7 support. Contact us for pricing."
                            value="political"
                            background={"bg-[#F0ECD8]"}
                        />
                    </RadioGroup>
                </PopoverContent>
            </Popover>
        </>
    );
}
