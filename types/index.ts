import React, {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
    width?: number | string | undefined;
    height?: number | string | undefined;
    style?: React.CSSProperties;
    [key: string]: any;
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
