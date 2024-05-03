"use client";

import {RadioGroupProps, cn} from "@nextui-org/react";

import React from "react";
import {RadioGroup} from "@nextui-org/react";
import SmileRatingItem, { RatingValueEnum } from "./SmileRatingItem";



export default function Component({classNames, ...props}: RadioGroupProps) {
    const [value, setValue] = React.useState<RatingValueEnum | string>(RatingValueEnum.GOOD);

    return (
        <RadioGroup
            value={value}
            {...props}
            classNames={{
                ...classNames,
                base: cn(classNames?.base, "max-w-fit"),
                wrapper: cn(classNames?.wrapper, "gap-3"),
            }}
            defaultValue="1"
            orientation="horizontal"
            size="lg"
            onValueChange={setValue}
        >
            <SmileRatingItem value={RatingValueEnum.BAD} />
            <SmileRatingItem value={RatingValueEnum.NEUTRAL} />
            <SmileRatingItem value={RatingValueEnum.GOOD} />
            <SmileRatingItem value={RatingValueEnum.GREAT} />
        </RadioGroup>
    );
}
