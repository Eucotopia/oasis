"use client";

import type {RadioProps} from "@nextui-org/radio";
import React from "react";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {useRadio} from "@nextui-org/radio"
import {Tooltip} from "@nextui-org/tooltip"
import {cn} from "@nextui-org/react";
import {Editor} from "@tiptap/react";

export type ColorRadioItemProps =
    Omit<RadioProps, "color">
    & {
    color: string;
    tooltip?: string,
    editor: Editor
};
const ColorRadioItem = React.forwardRef<HTMLInputElement, ColorRadioItemProps>(
    ({color, tooltip, editor, ...props}, ref) => {
        const {Component, isSelected, isFocusVisible, getBaseProps, getInputProps} = useRadio(props);
        if (!editor) {
            return null
        }
        return (
            <Tooltip content={tooltip} delay={1000} isDisabled={!tooltip} offset={0} placement="top">
                <Component {...getBaseProps()} ref={ref}>
                    <VisuallyHidden>
                        <input {...getInputProps()} onChange={() => editor.chain().focus().setColor(color).run() }/>
                    </VisuallyHidden>
                    <span
                        className={cn(
                            "pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90",
                            {
                                "ring-2 ring-offset-2 ring-offset-content1": editor.isActive('textStyle', {color: color}),
                            },
                        )}
                        style={{
                            backgroundColor: color,
                            // @ts-ignore
                            "--tw-ring-color":
                                editor.isActive('textStyle', {color: color}) || isFocusVisible ? "hsl(var(--nextui-primary))" : "transparent",
                        }}
                    />
                </Component>
            </Tooltip>
        );
    },
);

ColorRadioItem.displayName = "ColorRadioItem";

export default ColorRadioItem;
