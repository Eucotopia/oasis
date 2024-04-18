'use client'
import React, {useEffect} from "react";
import {RadioGroup, useRadio, VisuallyHidden, RadioProps, cn, Button} from "@nextui-org/react";
import PopoverThemeSwitchWrapper from "@/components/popover/PopoverThemeSwitchWrapper";
import {useTheme} from "next-themes";

export const ThemeRadio = (props: RadioProps) => {
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
                "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
                "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
                "data-[selected=true]:border-primary",
            )}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            {/*      <span {...getWrapperProps()}>*/}
            {/*  <span {...getControlProps()} />*/}
            {/*</span>*/}
            <div {...getLabelWrapperProps()}>
                {children && <span {...getLabelProps()}>{children}</span>}
                {/*{description && (*/}
                {/*    <span className="text-small text-foreground opacity-70">{description}</span>*/}
                {/*)}*/}
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
        //TODO 后续设计一个对比鲜明的版面，进行比较
        <PopoverThemeSwitchWrapper icon={changeThemeIcon()}>
            <RadioGroup
                value={selected}
                aria-label="ThemeSwitch"
                classNames={{
                    wrapper: "gap-2 ",
                }}
                orientation={"horizontal"}
                onValueChange={setSelected}
            >
                <ThemeRadio description="Up to 20 items" value="light">
                    <Button color={"warning"} isIconOnly>purple-dark</Button>
                </ThemeRadio>
                <ThemeRadio description="Unlimited items. $10 per month." value="dark">
                    <Button color={"warning"} isIconOnly>purple-dark</Button>
                </ThemeRadio>
                <ThemeRadio
                    description="24/7 support. Contact us for pricing."
                    value="purple-dark"
                >
                    <Button color={"warning"} isIconOnly>purple-dark</Button>
                </ThemeRadio>
            </RadioGroup>
        </PopoverThemeSwitchWrapper>
    );
}
