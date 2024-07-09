"use client";

import type {RadioGroupProps} from "@nextui-org/react";

import React from "react";
import {cn, RadioGroup} from "@nextui-org/react";

import RatingRadioItem from "./rating-radio-item";

export type RatingRadioGroupProps = RadioGroupProps & {
    hideStarsText?: boolean;
};

const RatingRadioGroup = React.forwardRef<HTMLDivElement, RatingRadioGroupProps>(
    ({className, label, hideStarsText, ...props}, ref) => {
        const [value, setValue] = React.useState("1");
        const starsText = React.useMemo(() => {
            // Special case for 5 stars
            if (value === "5") {
                return "5 stars";
            }

            // For 1 to 4 stars, use a generic approach
            return `${value} stars & up`;
        }, [value]);

        return (
            <div className={cn("flex items-center gap-3", className)}>
                <div className={"flex flex-row w-full justify-between"}>
                    <RadioGroup
                        ref={ref}
                        value={value}
                        {...props}
                        defaultValue="1"
                        orientation="horizontal"
                        onValueChange={setValue}
                    >
                        <RatingRadioItem value="1"/>
                        <RatingRadioItem value="2"/>
                        <RatingRadioItem value="3"/>
                        <RatingRadioItem value="4"/>
                        <RatingRadioItem value="5"/>
                    </RadioGroup>
                    {!hideStarsText && <p className="text-medium text-default-400">{starsText}</p>}
                </div>
                {label ? label : null}
            </div>
        );
    },
);

RatingRadioGroup.displayName = "RatingRadioGroup";

export default RatingRadioGroup;