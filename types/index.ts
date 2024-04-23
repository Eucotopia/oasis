import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type ResultResponse<T> = {
    code: string
    data: T
    message: string
}

export type PageType = {
    current: number
    pageSize: number
}