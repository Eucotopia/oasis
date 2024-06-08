import React, {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
    width?: number | string | undefined;
    height?: number | string | undefined;
    style?: React.CSSProperties; // Add this property
    [key: string]: any; // Add this to allow for any other props
};

export type ResultResponse<T> = {
    code: number
    data: T
    message: string
}

export type PageType = {
    current: number
    pageSize: number
}
