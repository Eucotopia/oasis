import * as React from "react";
import {IconSvgProps} from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
                                                 size = 36,
                                                 width,
                                                 height,
                                                 ...props
                                             }) => (
    <svg
        fill="none"
        height={size || height}
        width={size || width}
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
                                                        size = 24,
                                                        width,
                                                        height,
                                                        ...props
                                                    }) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                fill="currentColor"
            />
        </svg>
    );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
                                                        size = 24,
                                                        width,
                                                        height,
                                                        ...props
                                                    }) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                fill="currentColor"
            />
        </svg>
    );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
                                                       size = 24,
                                                       width,
                                                       height,
                                                       ...props
                                                   }) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const SearchIcon = ({
                               size,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        width={size || width}
        role="presentation"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const Fa6SolidTextSlash = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || height}
        height={size || height}
        viewBox="0 0 640 512"
        {...props}>
        <path fill="currentColor"
              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5L400.2 96H503l-6 24.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1c7.5-30.3-15.4-59.6-46.6-59.6h-319c-22 0-41.2 15-46.6 36.4l-6.3 25.2zm168 131.7c.1-.3.2-.7.3-1L217 96h116.7l-32.4 114.8l-94.5-74.1zm120.5 217.1L272.9 311l-29.6 105H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-42.2l17.6-62.1z"></path>
    </svg>
);

const Fa6SolidUpload = ({
                            size = 24,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 512 512"
         {...props}>
        <path fill="currentColor"
              d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM64 352h128c0 35.3 28.7 64 64 64s64-28.7 64-64h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64m368 104a24 24 0 1 0 0-48a24 24 0 1 0 0 48"></path>
    </svg>
);
const Fa6SolidList = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24zm152 16c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zM16 232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24m24 136c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"></path>
    </svg>
);
const Fa6SolidPencil = ({
                            size,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="m11.4 18.161l7.396-7.396a10.289 10.289 0 0 1-3.326-2.234a10.29 10.29 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.556 6.556 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56c.43-.205.836-.456 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.754 8.754 0 0 0 2.092 3.32a8.754 8.754 0 0 0 3.431 2.13z"></path>
    </svg>
);

const Fa6SolidListOl = ({
                            size = 24,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M24 56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v120h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V80h-8c-13.3 0-24-10.7-24-24m62.7 285.2c-6.5-7.4-18.3-6.9-24 1.2l-11.2 15.5c-7.7 10.8-22.7 13.3-33.5 5.6S4.7 340.8 12.4 330l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6.3-20.5zM224 64h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 160h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 160h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32"></path>
    </svg>
);
const Fa6SolidListCheck = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113c-9.3-9.4-9.3-24.6 0-34s24.6-9.4 33.9 0L63 101.1l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L63 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32m-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32M48 368a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></path>
    </svg>
);
const Fa6SolidQuoteRight = ({
                                size = 24,
                                width = "1em",
                                height = "1em",
                                ...props
                            }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v64zm-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v64z"></path>
    </svg>
);
const SolarCodeSquareBold = ({
                                 size = 24,
                                 width = "1em",
                                 height = "1em",
                                 ...props
                             }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" fillRule="evenodd"
              d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.024 2.982a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77c0-.184-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77c0 .184.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68c0-.644.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z"
              clipRule="evenodd"></path>
    </svg>
);
const TableFilled = ({
                         size = 24,
                         width = "1em",
                         height = "1em",
                         ...props
                     }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-2.995-2.824L3 18v-6a1 1 0 0 1 1-1m17 1v6a3 3 0 0 1-2.824 2.995L18 21h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1m-3-9a3 3 0 0 1 2.995 2.824L21 6v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 4v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a3 3 0 0 1 2.824-2.995L6 3h2a1 1 0 0 1 1 1"></path>
    </svg>
);
const MageImageFill = ({
                           size = 24,
                           width = "1em",
                           height = "1em",
                           ...props
                       }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M16.25 2.75h-8.5A5.76 5.76 0 0 0 2 8.5v7a5.76 5.76 0 0 0 5.75 5.75h8.5A5.76 5.76 0 0 0 22 15.5v-7a5.76 5.76 0 0 0-5.75-5.75M8 6.1a2.41 2.41 0 1 1-.922 4.635A2.41 2.41 0 0 1 8.01 6.1zm12.5 6.68l-2.18-1.69a3.26 3.26 0 0 0-4.17.37l-2.33 2.33a3 3 0 0 1-3.72.36a1.48 1.48 0 0 0-.94-.24a1.46 1.46 0 0 0-.88.42l-2.43 2.84a4.25 4.25 0 0 1-.35-1.91l1.68-1.95a3 3 0 0 1 3.76-.41a1.43 1.43 0 0 0 1.82-.18l2.33-2.32a4.77 4.77 0 0 1 6.13-.51l1.28 1z"></path>
        <path fill="currentColor" d="M8.91 8.51a.91.91 0 1 1-1.82 0a.91.91 0 0 1 1.82 0"></path>
    </svg>
);
const Fa6SolidPlus = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"></path>
    </svg>
);
const Fa6SolidGrip = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M128 136c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m128 192c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m128 192c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40z"></path>
    </svg>
);
const Fa6SolidCopy = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M208 0h124.1C344.8 0 357 5.1 366 14.1L433.9 82c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48M48 128h80v64H64v256h192v-32h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48"></path>
    </svg>
);
const Fa6SolidTrashCan = ({
                              size,
                              width = "1em",
                              height = "1em",
                              ...props
                          }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16"></path>
    </svg>
);
const Fa6SolidLink = ({
                          size,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 640 512" {...props}>
        <path fill="currentColor"
              d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0z"></path>
    </svg>
);
const SolarUserBold = ({
                           size,
                           width = "1em",
                           height = "1em",
                           ...props
                       }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <circle cx={12} cy={6} r={4} fill="currentColor"></circle>
        <path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"></path>
    </svg>
);

const LineMdMoonFilledAltToSunnyFilledLoopTransition = ({
                                                            size,
                                                            width = "1em",
                                                            height = "1em",
                                                            ...props
                                                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <g fill="none" stroke="currentColor" strokeDasharray={2} strokeDashoffset={2} strokeLinecap="round"
           strokeWidth={2.15}>
            <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s"
                         values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></animate>
            </path>
            <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s"
                         values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate>
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="1.2s" values="2;0"></animate>
            </path>
            <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                              values="0 12 12;360 12 12"></animateTransform>
        </g>
        <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
            <circle cx={12} cy={12} r={12} fill="#fff"></circle>
            <circle cx={18} cy={6} r={12} fill="#fff">
                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"></animate>
                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"></animate>
                <animate fill="freeze" attributeName="r" dur="0.4s" values="12;3"></animate>
            </circle>
            <circle cx={18} cy={6} r={10}>
                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"></animate>
                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"></animate>
                <animate fill="freeze" attributeName="r" dur="0.4s" values="10;1"></animate>
            </circle>
        </mask>
        <circle cx={12} cy={12} r={10} fill="currentColor" mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)">
            <animate fill="freeze" attributeName="r" dur="0.4s" values="10;6"></animate>
        </circle>
    </svg>
);

const Fa6SolidEllipsisVertical = ({
                                      size = 24,
                                      width = "1em",
                                      height = "1em",
                                      ...props
                                  }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 128 512" {...props}>
        <path fill="currentColor"
              d="M64 360a56 56 0 1 0 0 112a56 56 0 1 0 0-112m0-160a56 56 0 1 0 0 112a56 56 0 1 0 0-112m56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0"></path>
    </svg>
);
const Apple = ({
                   size = 24,
                   width = "1em",
                   height = "1em",
                   ...props
               }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></path>
    </svg>
);
const Fa6SolidAlignJustify = ({
                                  size = 24,
                                  width = "1em",
                                  height = "1em",
                                  ...props
                              }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32m0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M0 192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m448 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32"></path>
    </svg>
);
const SolarLetterBold = ({
                             size,
                             width = "1em",
                             height = "1em",
                             ...props
                         }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693c-.741 0-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455c.345 0 .704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097"
              clipRule="evenodd"></path>
    </svg>
);


const Fa6SolidAlignCenter = ({
                                 size = 24,
                                 width = "1em",
                                 height = "1em",
                                 ...props
                             }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32m96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M0 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m352-128c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32"></path>
    </svg>
);
const MarkdownFill = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
            <path fill="currentColor"
                  d="M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H4a2 2 0 0 1-1.995-1.85L2 17V7a2 2 0 0 1 1.85-1.995L4 5zM6.833 9H6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.64l.626 1.126a1 1 0 0 0 1.748 0L10 12.359V14a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1h-.833a1 1 0 0 0-.874.514L8.5 10.941l-.793-1.427A1 1 0 0 0 6.833 9M16 9a1 1 0 0 0-.993.883L15 10v1.634a1 1 0 0 0-1.29 1.479l.083.094l1.5 1.5a1 1 0 0 0 1.32.083l.094-.083l1.5-1.5a1 1 0 0 0-1.09-1.631l-.117.058V10a1 1 0 0 0-1-1"></path>
        </g>
    </svg>
);
const SolarArrowRightUpLinear = ({
                                     size = 24,
                                     width = "1em",
                                     height = "1em",
                                     ...props
                                 }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M6 18L18 6m0 0H9m9 0v9"></path>
    </svg>
);
const EvaCloudUploadFill = ({
                                size = 24,
                                width = "1em",
                                height = "1em",
                                ...props
                            }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M21.9 12c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 10.08 21 10s-.2-.25-.31-.37s-.21-.2-.32-.3L20 9l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15a3 3 0 0 0-.41-.09L17.67 8A6 6 0 0 0 6.33 8l-.18.05a3 3 0 0 0-.41.09a4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23l-.36.3l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37s-.18.23-.26.36s-.16.29-.24.44s-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 13a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 16a5 5 0 0 0 4 2h3v-1.37a2 2 0 0 1-1 .27a2.05 2.05 0 0 1-1.44-.61a2 2 0 0 1 .05-2.83l3-2.9A2 2 0 0 1 12 10a2 2 0 0 1 1.41.59l3 3a2 2 0 0 1 0 2.82A2 2 0 0 1 15 17a1.92 1.92 0 0 1-1-.27V18h3a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 13a5.23 5.23 0 0 0-.1-1"></path>
        <path fill="currentColor"
              d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></path>
    </svg>

);
const CiCloseSm = ({
                       size = 24,
                       width = "1em",
                       height = "1em",
                       ...props
                   }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.15}
              d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"></path>
    </svg>
);

const Fa6SolidAlignRight = ({
                                size = 24,
                                width = "1em",
                                height = "1em",
                                ...props
                            }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M0 192c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"></path>
    </svg>
);
const Fa6SolidAlignLeft = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h224c17.7 0 32 14.3 32 32m0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32M0 192c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"></path>
    </svg>
);
const Fa6SolidSuperscript = ({
                                 size = 24,
                                 width = "1em",
                                 height = "1em",
                                 ...props
                             }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h15.3l89.6 128l-89.6 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-15.3l-89.6-128l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-10.4 0-20.2 5.1-26.2 13.6L176 200.2L90.2 77.6C84.2 69.1 74.4 64 64 64z"></path>
    </svg>
);
const Fa6SolidSubscript = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h15.3l89.6 128l-89.6 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-15.3l-89.6-128l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-10.4 0-20.2 5.1-26.2 13.6L176 200.2L90.2 77.6C84.2 69.1 74.4 64 64 64zm448 256c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></path>
    </svg>
);
const FluentDockRight16Filled = ({
                                     size = 24,
                                     width = "1em",
                                     height = "1em",
                                     ...props
                                 }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 16 16" {...props}>
        <path fill="currentColor"
              d="M11.5 3A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5A2.5 2.5 0 0 1 4.5 3zM9 4H4.5A1.5 1.5 0 0 0 3 5.5v5A1.5 1.5 0 0 0 4.5 12H9z"></path>
    </svg>
);
const Fa6SolidTableColumns = ({
                                  size = 24,
                                  width = "1em",
                                  height = "1em",
                                  ...props
                              }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 64v256h160V160zm384 0H288v256h160z"></path>
    </svg>
);
const FluentDockLeft48Filled = ({
                                    size = 24,
                                    width = "1em",
                                    height = "1em",
                                    ...props
                                }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 48 48" {...props}>
        <path fill="currentColor"
              d="M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v21.5A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75zM37.75 38.5a3.75 3.75 0 0 0 3.75-3.75v-21.5a3.75 3.75 0 0 0-3.75-3.75h-19.5v29z"></path>
    </svg>
);
const StreamlinePenDrawSolid = ({
                                    size = 24,
                                    width = "1em",
                                    height = "1em",
                                    ...props
                                }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 14 14" {...props}>
        <path fill="currentColor" fillRule="evenodd"
              d="M8.61 2.66c-.227-.198-.817-.365-1.602.129c-2.508 1.58-4.693 4.43-5.432 5.463a.75.75 0 1 1-1.22-.873c.75-1.047 3.078-4.112 5.853-5.86C7.41.763 8.75.795 9.594 1.527c.421.365.684.89.688 1.486c.004.591-.246 1.177-.702 1.698c-1.427 1.632-3.312 3.845-4.104 4.925c-.104.142-.111.25-.102.312c.01.07.047.136.11.183a.411.411 0 0 0 .299.067c.14-.017.36-.094.628-.339c.226-.208.461-.43.703-.657c.745-.701 1.55-1.46 2.356-2.053c.838-.616 1.818-.787 2.561-.333c.371.227.632.59.723 1.024c.09.43.004.878-.213 1.29c-.232.442-.434.76-.615 1.046l-.014.023a10.6 10.6 0 0 0-.485.819a.506.506 0 0 0-.024.415c.024.06.047.089.06.101c.092.007.172-.016.299-.114c.178-.139.377-.374.676-.766a.75.75 0 0 1 1.192.911c-.285.373-.594.764-.948 1.04c-.392.304-.867.489-1.444.413c-.633-.082-1.048-.57-1.231-1.037a2.007 2.007 0 0 1 .09-1.658c.19-.364.37-.647.541-.916l.021-.034c.177-.279.352-.556.555-.942c.085-.162.077-.255.071-.284a.068.068 0 0 0-.036-.051c-.043-.027-.347-.138-.89.262c-.726.533-1.433 1.2-2.16 1.884c-.255.24-.513.483-.775.723c-.923.846-2.047.959-2.838.367c-.77-.576-.981-1.68-.32-2.582c.837-1.142 2.767-3.405 4.185-5.026l.513.448l-.513-.448c.271-.31.332-.555.331-.702a.468.468 0 0 0-.171-.362Zm2.863 8.883l-.003-.002c.002 0 .003.001.003.002"
              clipRule="evenodd"></path>
    </svg>
);
const Fa6SolidCode = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 640 512" {...props}>
        <path fill="currentColor"
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"></path>
    </svg>
);
const Fa6SolidPalette = ({
                             size = 24,
                             width = "1em",
                             height = "1em",
                             ...props
                         }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4.4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256m-384 32a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-96a32 32 0 1 0 0-64a32 32 0 1 0 0 64m160-96a32 32 0 1 0-64 0a32 32 0 1 0 64 0m96 96a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></path>
    </svg>
);
const Fa6SolidBold = ({
                          size = 24,
                          width = "1em",
                          height = "1em",
                          ...props
                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 384 512" {...props}>
        <path fill="currentColor"
              d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64m224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32z"></path>
    </svg>
);
const ArrowLeftIcon = ({
                           size = 24,
                           width = "1em",
                           height = "1em",
                           ...props
                       }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         height={size || height}
         width={size || height}
         viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M512 256a256 256 0 1 0-512 0a256 256 0 1 0 512 0m-395.3-11.3l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v64h96c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-96v64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6"/>
    </svg>
);
const ArrowRightIcon = ({
                            size = 24,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         height={size || height}
         width={size || height} viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M0 256a256 256 0 1 0 512 0a256 256 0 1 0-512 0m395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-64h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6"/>
    </svg>
);
const Fa6SolidItalic = ({
                            size = 24,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 384 512" {...props}>
        <path fill="currentColor"
              d="M128 64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32h-58.7L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h58.7L224 96h-64c-17.7 0-32-14.3-32-32"></path>
    </svg>
);
const Fa6SolidUnderline = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v128c0 53 43 96 96 96s96-43 96-96V96h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v128c0 88.4-71.6 160-160 160S64 312.4 64 224V96H48c-17.7 0-32-14.3-32-32M0 448c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"></path>
    </svg>
);
const Fa6SolidStrikethrough = ({
                                   size = 24,
                                   width = "1em",
                                   height = "1em",
                                   ...props
                               }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 512 512" {...props}>
        <path fill="currentColor"
              d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1.6-.2 1.1-.2 1.7c-2.8 23.9.5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zm187.6 193.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c24.9 8.5 63.6 21.7 87.6 25.6h.2c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1h-75.7c7 5.6 11.4 11.2 13.9 17.2z"></path>
    </svg>
);
const Code16 = ({
                    size = 24,
                    width = "1em",
                    height = "1em",
                    ...props
                }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 16 16" {...props}>
        <path fill="currentColor"
              d="m11.28 3.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215m-6.56 0a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
    </svg>

);

const SolidDuplicate = ({
                            size,
                            width = "1em",
                            height = "1em",
                            ...props
                        }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 20 20" {...props}>
        <g fill="currentColor">
            <path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2V5h8a2 2 0 0 0-2-2z"></path>
        </g>
    </svg>
);
const F7HourglassBottomhalfFill = ({
                                       size,
                                       width = "1em",
                                       height = "1em",
                                       ...props
                                   }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || height}
         height={size || height} viewBox="0 0 56 56" {...props}>
        <path fill="currentColor"
              d="M16.516 49.574h22.757c2.391 0 3.82-1.312 3.82-3.843v-.61c.024-6.469-6.866-11.719-9.89-14.578c-.844-.797-1.289-1.523-1.289-2.578s.445-1.758 1.29-2.578c3-2.907 9.89-7.828 9.89-14.555v-.562c0-2.532-1.43-3.844-3.82-3.844H16.515c-2.344 0-3.633 1.312-3.633 3.633v.773c0 6.727 6.89 11.648 9.914 14.555c.844.82 1.289 1.523 1.289 2.578s-.445 1.781-1.29 2.578c-3.023 2.86-9.913 8.11-9.913 14.578v.82c0 2.32 1.289 3.633 3.633 3.633m.867-36.14h21.234c.89 0 1.031.703.516 1.664c-2.11 3.797-9.211 9.89-11.133 9.89c-1.922 0-9.023-6.047-11.133-9.89c-.515-.961-.375-1.664.516-1.664"></path>
    </svg>
);
const BullhornOutline = ({
                             size,
                             width = "1em",
                             height = "1em",
                             ...props
                         }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.15}
              d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6l5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6z"></path>
    </svg>
);
const ArrowRight = ({
                        size,
                        width = "1em",
                        height = "1em",
                        ...props
                    }: IconSvgProps) => (
    <svg
        width={size || height}
        height={size || height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" {...props}>
        <g fill="currentColor">
            <path d="m12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243l-1.414 1.415L13.88 11H6.343v2h7.537z"></path>
            <path fillRule="evenodd"
                  d="M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556c-4.296-4.296-11.26-4.296-15.556 0c-4.296 4.296-4.296 11.26 0 15.556c4.296 4.296 11.26 4.296 15.556 0m-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"
                  clipRule="evenodd"></path>
        </g>
    </svg>
);


const GravityUiLayoutHeaderColumns = ({
                                          size = 24,
                                          width = "1em",
                                          height = "1em",
                                          ...props
                                      }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 16 16" {...props}>
        <path fill="currentColor" fillRule="evenodd"
              d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 11V7h4.75v5.5H4A1.5 1.5 0 0 1 2.5 11m6.25 1.5H12a1.5 1.5 0 0 0 1.5-1.5V7H8.75zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"
              clipRule="evenodd"></path>
    </svg>
);
const FaSolidBook = ({
                         size = 24,
                         width = "1em",
                         height = "1em",
                         ...props
                     }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height} viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7c-4.2-15.4-4.2-59.3 0-74.7c5.4-4.3 8.9-11.1 8.9-18.6M128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6zm253.4 250H96c-17.7 0-32-14.3-32-32c0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64"></path>
    </svg>
);


const LucideUndo = ({
                        size = 24,
                        width = "1em",
                        height = "1em",
                        ...props
                    }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24" {...props}
    >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
            <path d="M3 7v6h6"></path>
            <path d="M21 17a9 9 0 0 0-9-9a9 9 0 0 0-6 2.3L3 13"></path>
        </g>
    </svg>
);

const LucideRedo = ({
                        size = 24,
                        width = "1em",
                        height = "1em",
                        ...props
                    }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         viewBox="0 0 24 24"
         {...props}
    >
        <g fill="none" stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={3}>
            <path d="M21 7v6h-6"></path>
            <path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7"></path>
        </g>
    </svg>
);
const Fa6SolidRulerHorizontal = ({
                                     size = 24,
                                     width = "1em",
                                     height = "1em",
                                     ...props
                                 }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         strokeWidth={3}
         viewBox="0 0 640 512" {...props}>
        <path fill="currentColor"
              d="M0 336c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48 21.5-48 48z"></path>
    </svg>
);
const Fa6SolidGripLines = ({
                               size = 24,
                               width = "1em",
                               height = "1em",
                               ...props
                           }: IconSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size || height}
         height={size || height}
         strokeWidth={3}
         viewBox="0 0 448 512" {...props}>
        <path fill="currentColor"
              d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></path>
    </svg>
);

const AcmeIcon: React.FC<IconSvgProps> = ({size = 32, width, height, ...props}) => (
    <svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || width} {...props}>
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

const Burst: React.FC<IconSvgProps> = ({
                                           size = 32,
                                           width,
                                           height,
                                           ...props
                                       }) => (
    <svg
        height={height || size}
        width={width || size}
        style={props.style}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 800 800"
        opacity={props.opacity}
    >
        <defs>
            <filter id="bbburst-blur-1" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
            </filter>
            <filter id="bbburst-blur-2" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            </filter>
            <filter id="bbburst-blur-3" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            </filter>
            <filter id="bbburst-blur-4" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
            </filter>
            <symbol id="bbburst-shape-1" viewBox="0 0 194 167">
                <path d="m97 0 96.129 166.5H.871L97 0Z"></path>
            </symbol>
            <symbol id="bbburst-shape-4" viewBox="0 0 149 143">
                <path
                    d="M71.647 2.781c.898-2.764 4.808-2.764 5.706 0l15.445 47.534a3 3 0 0 0 2.853 2.073h49.98c2.906 0 4.115 3.719 1.764 5.427L106.96 87.193a2.999 2.999 0 0 0-1.09 3.354l15.445 47.534c.898 2.764-2.266 5.062-4.617 3.354l-40.435-29.378a3 3 0 0 0-3.526 0l-40.435 29.378c-2.351 1.708-5.515-.59-4.617-3.354L43.13 90.547a3 3 0 0 0-1.09-3.354L1.605 57.815c-2.35-1.708-1.142-5.427 1.764-5.427h49.98a3 3 0 0 0 2.853-2.073L71.647 2.781Z"></path>
            </symbol>
            <symbol id="bbburst-shape-6" viewBox="0 0 133 116">
                <path
                    d="M59.7487 10.2513c-13.6683-13.66839-35.8291-13.66839-49.4974 0-13.66839 13.6683-13.66839 35.8291 0 49.4974l49.4974-49.4974ZM66.5 66.5 41.7513 91.2487 66.5 115.997l24.7487-24.7483L66.5 66.5Zm56.249-6.7513c13.668-13.6683 13.668-35.8291 0-49.4974-13.669-13.66839-35.8294-13.66839-49.4977 0l49.4977 49.4974Zm-112.4977 0 31.5 31.5 49.4974-49.4974-31.5-31.5-49.4974 49.4974Zm80.9974 31.5 31.5003-31.5-49.4977-49.4974-31.5 31.5 49.4974 49.4974Z"></path>
            </symbol>
            <symbol id="bbburst-shape-8" viewBox="0 0 87 168">
                <path
                    d="m12 12 31.2546 18.0749c16.4102 9.4902 20.014 31.6325 7.4603 45.8369L36.3296 92.1884c-12.5684 14.2206-8.9394 36.3916 7.5068 45.8636L75 156"
                    stroke-width="14" stroke-linecap="round" stroke-linejoin="round"></path>
            </symbol>
            <symbol id="bbburst-shape-10" viewBox="0 0 145 145">
                <circle cx="72.5" cy="72.5" r="61.5" fill="none" stroke-width="22"></circle>
            </symbol>
        </defs>
        <use href="#bbburst-shape-8" width="0" opacity="0"
             transform="matrix(0.8817112067420296,0.47178951652777734,-0.47178951652777734,0.8817112067420296,236.03131131615982,-141.40029246657434)"
             fill="none" stroke="#00a19d"></use>
        <use href="#bbburst-shape-10" width="9.082518271374568" opacity="0.9735169881087078"
             transform="matrix(0.9685787658121755,-0.24870700516423536,0.24870700516423536,0.9685787658121755,684.0947856232323,390.10181257420436)"
             fill="none" stroke="#ffa6d5"></use>
        <use href="#bbburst-shape-1" width="19.666998209675906" opacity="0.8301393210103163"
             transform="matrix(0.8649530886363577,-0.5018527218800605,0.5018527218800605,0.8649530886363577,455.40259190290976,356.3629287335071)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-6" width="31.468191844334772" opacity="0.7439652521265567"
             transform="matrix(0.7449071664292045,-0.6671681297861982,0.6671681297861982,0.7449071664292045,334.35689824101945,337.70911603125177)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-1" width="65.57016360374851" opacity="0.40220260099782723"
             transform="matrix(0.7974157125116517,-0.6034303451431118,0.6034303451431118,0.7974157125116517,37.854685283421645,165.24697310090187)"
             fill="#00a19d" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-6" width="21.380322371966205" opacity="0.794656873079039"
             transform="matrix(0.9898110760535134,0.14238691555682353,-0.14238691555682353,0.9898110760535134,644.1211801335298,367.0599731129328)"
             fill="#ffa6d5"></use>
        <use href="#bbburst-shape-1" width="26.968671915678797" opacity="0.8843628860238527"
             transform="matrix(0.9263348385792605,0.37670116383459107,-0.37670116383459107,0.9263348385792605,854.3305141902953,344.78316974542076)"
             fill="#ffbd9b"></use>
        <use href="#bbburst-shape-1" width="47.40778057380765" opacity="0.5183345475610922"
             transform="matrix(0.8824879007739664,-0.47033509861327377,0.47033509861327377,0.8824879007739664,451.97174154429104,-2.9641765682938512)"
             fill="#00a19d" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-6" width="15.617105796697928" opacity="0.9070573668064428"
             transform="matrix(0.980679320337292,0.19562226525318407,-0.19562226525318407,0.980679320337292,852.5218164113414,315.03166591806286)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-10" width="49.59022493643907" opacity="0.5607691474590708"
             transform="matrix(0.9857165781719704,0.16841267029811507,-0.16841267029811507,0.9857165781719704,630.7945075494448,16.927661680146855)"
             fill="none" stroke="#2c2891" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-4" width="47.415938284965584" opacity="0.41704645180102884"
             transform="matrix(0.8224327901243768,-0.5688622906541028,0.5688622906541028,0.8224327901243768,305.86509425323356,-43.436350192388375)"
             fill="#2c2891" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-10" width="14.615765329183908" opacity="0.921480442249391"
             transform="matrix(0.7361212235545878,0.6768497205676431,-0.6768497205676431,0.7361212235545878,991.2196723377153,474.7503177149371)"
             fill="none" stroke="#ffa6d5"></use>
        <use href="#bbburst-shape-4" width="23.966058089942756" opacity="0.7489468024805335"
             transform="matrix(0.9972008440761353,0.07476948959196676,-0.07476948959196676,0.9972008440761353,778.7111039045767,152.2786704051759)"
             fill="#ffbd9b"></use>
        <use href="#bbburst-shape-8" width="11.981371322460326" opacity="0.955420545510461"
             transform="matrix(0.9990921584562465,-0.042601160914208194,0.042601160914208194,0.9990921584562465,735.349945795124,384.65771346946616)"
             fill="none" stroke="#ffbd9b"></use>
        <use href="#bbburst-shape-4" width="12.603688091680691" opacity="0.9341324300369659"
             transform="matrix(0.9294809076414488,0.36887022423886245,-0.36887022423886245,0.9294809076414488,906.861768422624,369.98501685762295)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-8" width="41.05760743073408" opacity="0.5721468424957057"
             transform="matrix(0.9271728192237445,0.3746339056901999,-0.3746339056901999,0.9271728192237445,883.4897692735974,-3.7871365743679917)"
             fill="none" stroke="#ffa6d5" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-4" width="33.96999043138867" opacity="0.6246174053138114"
             transform="matrix(0.9552650078507522,-0.2957511872772489,0.2957511872772489,0.9552650078507522,329.9287308703039,254.67577540271583)"
             fill="#ffa6d5" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-4" width="52.040030351039604" opacity="0.3549322693666773"
             transform="matrix(0.8204359972737321,-0.5717383793112517,0.5717383793112517,0.8204359972737321,-90.78237333214705,412.37007249666607)"
             fill="#ffbd9b" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-8" width="23.38917183392228" opacity="0.7659185878511364"
             transform="matrix(0.9843798642724396,-0.17605761220399782,0.17605761220399782,0.9843798642724396,616.5270783001453,197.39431623053224)"
             fill="none" stroke="#ffa6d5"></use>
        <use href="#bbburst-shape-8" width="59.95761492187175" opacity="0.2712173268564365"
             transform="matrix(0.9885983721246836,0.1505764212366123,-0.1505764212366123,0.9885983721246836,508.7347461832203,-253.81206150471976)"
             fill="none" stroke="#00a19d" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-1" width="60.22148771723572" opacity="0.26685780877337795"
             transform="matrix(0.8698931881509595,-0.49324014557673557,0.49324014557673557,0.8698931881509595,-12.583254612559756,30.590025213737988)"
             fill="#2c2891" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-6" width="23.038062445601145" opacity="0.869591831452859"
             transform="matrix(0.999994376440021,0.00335366789256055,-0.00335366789256055,0.999994376440021,742.876529421836,278.29890156364206)"
             fill="#ff5c58"></use>
        <use href="#bbburst-shape-8" width="59.343598335128355" opacity="0.28470769785404093"
             transform="matrix(0.8621381721872916,-0.50667323992644,0.50667323992644,0.8621381721872916,504.38876817048344,-241.93484264763555)"
             fill="none" stroke="#ffa6d5" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-1" width="37.31925119665561" opacity="0.6217486043790772"
             transform="matrix(0.9264399339348144,-0.3764426235309397,0.3764426235309397,0.9264399339348144,380.97039358063125,153.68390233049166)"
             fill="#ffa6d5" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-1" width="50.110942177354865" opacity="0.23848576581892977"
             transform="matrix(0.9986736903947405,-0.05148650418653478,0.05148650418653478,0.9986736903947405,543.7369703000758,-329.9146068600903)"
             fill="#ffa6d5" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-6" width="0" opacity="0"
             transform="matrix(0.9954216976105511,-0.09558056249117038,0.09558056249117038,0.9954216976105511,-36.40004246676477,40.06351227762872)"
             fill="#ffbd9b"></use>
        <use href="#bbburst-shape-10" width="34.34381591632664" opacity="0.6126772658953445"
             transform="matrix(0.8826850648666716,0.46996497344091476,-0.46996497344091476,0.8826850648666716,598.7100601413532,338.58506304247044)"
             fill="none" stroke="#2c2891" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-6" width="66.05955639109085" opacity="0.348806351896892"
             transform="matrix(0.9275352803456325,0.37373560669830347,-0.37373560669830347,0.9275352803456325,503.0275520618445,-84.49500662995291)"
             fill="#ffa6d5" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-10" width="52.95542609476188" opacity="0.12001715135235769"
             transform="matrix(0.7617249085304233,0.6479005816669084,-0.6479005816669084,0.7617249085304233,310.2638931681104,-15.125631860357828)"
             fill="none" stroke="#2c2891" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-6" width="47.193557671223715" opacity="0.5163916650595068"
             transform="matrix(0.9945602889735106,0.10416252491624446,-0.10416252491624446,0.9945602889735106,367.8488139705327,223.4688222878366)"
             fill="#2c2891" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-4" width="36.74268202521685" opacity="0.6585329941649495"
             transform="matrix(0.9794629517590486,0.20162422010128517,-0.20162422010128517,0.9794629517590486,728.1748908875912,90.67004066641954)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-6" width="25.583319797994854" opacity="0.7389182359291608"
             transform="matrix(0.9996707727240052,-0.025658257177569404,0.025658257177569404,0.9996707727240052,517.5621989672669,370.760972426251)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-1" width="52.695530762520185" opacity="0.13103101148416008"
             transform="matrix(0.9211253751285965,-0.3892660315185521,0.3892660315185521,0.9211253751285965,156.30998547818854,-293.0135374562175)"
             fill="#ffa6d5" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-4" width="63.060864857498814" opacity="0.38679522210760087"
             transform="matrix(0.9793557506727039,-0.20214428912117358,0.20214428912117358,0.9793557506727039,112.92363943358293,202.57482621730287)"
             fill="#ffa6d5" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-4" width="42.477536277979276" opacity="0.5612367274335932"
             transform="matrix(0.8471104363820873,-0.5314168877374426,0.5314168877374426,0.8471104363820873,133.25109071205145,425.2187953327067)"
             fill="#00a19d" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-10" width="25.644149566908574" opacity="0.8206191691970858"
             transform="matrix(0.8106444473118429,-0.5855387092605209,0.5855387092605209,0.8106444473118429,449.73905952885514,338.2835546399817)"
             fill="none" stroke="#00a19d"></use>
        <use href="#bbburst-shape-6" width="47.803599908621294" opacity="0.2468448175025032"
             transform="matrix(0.9527444232769631,-0.30377304672180355,0.30377304672180355,0.9527444232769631,-90.01989002050223,320.72730810519585)"
             fill="#00a19d" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-10" width="22.399688856704255" opacity="0.6923657586311753"
             transform="matrix(0.8913528066976065,0.45331024033469536,-0.45331024033469536,0.8913528066976065,675.8504646166123,352.80079919771885)"
             fill="none" stroke="#ffbd9b"></use>
        <use href="#bbburst-shape-6" width="21.258420380174513" opacity="0.6569567338644753"
             transform="matrix(0.784058086125737,0.6206874556335469,-0.6206874556335469,0.784058086125737,698.0960808332102,451.1300396011975)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-10" width="55.09691910037908" opacity="0.18709203007261044"
             transform="matrix(0.9959899532642483,0.08946514962084658,-0.08946514962084658,0.9959899532642483,261.0806649084774,-201.95773257239642)"
             fill="none" stroke="#ffbd9b" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-10" width="18.710616827135073" opacity="0.8835491484493493"
             transform="matrix(0.9681611739392205,-0.250327667820859,0.250327667820859,0.9681611739392205,578.2147950834527,385.36570880042467)"
             fill="none" stroke="#ffbd9b"></use>
        <use href="#bbburst-shape-4" width="56.38649810220502" opacity="0.539079951995221"
             transform="matrix(0.9767110238462882,-0.21455902660371917,0.21455902660371917,0.9767110238462882,311.10453052372463,148.18369070194063)"
             fill="#00a19d" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-1" width="20.029813771076462" opacity="0.7884529909435577"
             transform="matrix(0.8828188372002287,-0.46971363689426365,0.46971363689426365,0.8828188372002287,418.475626071573,348.6551748241655)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-1" width="31.87449222856607" opacity="0.71543741029868"
             transform="matrix(0.9235943124350859,-0.38337129005386,0.38337129005386,0.9235943124350859,471.954472670257,201.3847028730666)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-10" width="43.620119588757035" opacity="0.46566820892776317"
             transform="matrix(0.9558717777549871,-0.2937841801246632,0.2937841801246632,0.9558717777549871,131.51875868596844,357.1012626474629)"
             fill="none" stroke="#ffa6d5" filter="url(#bbburst-blur-1)"></use>
        <use href="#bbburst-shape-8" width="51.15411692519567" opacity="0.4244636973763416"
             transform="matrix(0.998524232147786,-0.05430799032991769,0.05430799032991769,0.998524232147786,670.0102139141131,-167.58033788664983)"
             fill="none" stroke="#ffbd9b" filter="url(#bbburst-blur-2)"></use>
        <use href="#bbburst-shape-6" width="14.598338864693948" opacity="0.8320630786721137"
             transform="matrix(0.9591668723982252,-0.2828407871821296,0.2828407871821296,0.9591668723982252,663.5253885019414,251.25752583621613)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-6" width="26.43319772241808" opacity="0.6705335630094967"
             transform="matrix(0.9029746412407743,0.42969384132902694,-0.42969384132902694,0.9029746412407743,695.1476369418502,237.0918630713063)"
             fill="#00a19d"></use>
        <use href="#bbburst-shape-4" width="94.27669483277188" opacity="0.008180607361190306"
             transform="matrix(0.9791181998252471,0.20329178726886055,-0.20329178726886055,0.9791181998252471,136.03593526215633,-304.674607330961)"
             fill="#00a19d" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-10" width="17.920289669955586" opacity="0.8094113233685845"
             transform="matrix(0.9591364644791763,0.2829438857907797,-0.2829438857907797,0.9591364644791763,849.6436708712349,231.31183148174796)"
             fill="none" stroke="#00a19d"></use>
        <use href="#bbburst-shape-10" width="29.182086153654698" opacity="0.6714060157606029"
             transform="matrix(0.8950840061951815,-0.445897546364167,0.445897546364167,0.8950840061951815,562.0587980842962,123.18845907491635)"
             fill="none" stroke="#2c2891"></use>
        <use href="#bbburst-shape-6" width="22.285856257528764" opacity="0.8423963547939338"
             transform="matrix(0.8475146385963401,0.5307720201413362,-0.5307720201413362,0.8475146385963401,849.4928474484777,418.80427700237135)"
             fill="#2c2891"></use>
        <use href="#bbburst-shape-6" width="26.961104070290677" opacity="0.7331341177092026"
             transform="matrix(0.9937571262337563,0.11156511130109625,-0.11156511130109625,0.9937571262337563,589.629482520883,287.64987491039915)"
             fill="#ffa6d5"></use>
        <use href="#bbburst-shape-6" width="60.759534388870364" opacity="0.23022546948395428"
             transform="matrix(0.9930880841657955,-0.11737144920256265,0.11737144920256265,0.9930880841657955,9.823497688917286,116.32976631178502)"
             fill="#ffa6d5" filter="url(#bbburst-blur-3)"></use>
        <use href="#bbburst-shape-10" width="56.21534991759137" opacity="0.48808262185976514"
             transform="matrix(0.9112827057043936,-0.41178128938075803,0.41178128938075803,0.9112827057043936,271.82591708937696,62.45945673068263)"
             fill="none" stroke="#00a19d" filter="url(#bbburst-blur-1)"></use>
    </svg>
);

const Platter: React.FC<IconSvgProps> = ({
                                             size = 32,
                                             width,
                                             height,
                                             ...props
                                         }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        width={size || width}
        height={size || height}
        style={props.style}
    >
        <defs>
            <linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="hsl(185, 53%, 55%)" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="hsl(0, 73%, 55%)" stop-opacity="1"></stop>
            </linearGradient>
        </defs>
        <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1">
            <path transform="matrix(1 0 0 1 350 350)" id="two-7"
                  d="M 298.778958 87.729417 C 307.240214 115.922275 278.174208 143.969726 264.907091 170.24545 C 251.045903 197.697741 246.864268 244.761592 216.544276 249.905417 C 147.338327 261.646295 119.577395 94.420871 52.363963 114.661085 C 25.993069 122.602244 55.258866 190.824635 27.960554 194.469924 C 0.023015 198.200573 9.126556 131.244858 -17.570761 122.207321 C -32.927463 117.008792 -49.120231 132.073469 -63.624381 139.31796 C -108.767757 161.866042 -155.46684 256.417626 -192.301931 221.928258 C -234.284591 182.619129 -85.992015 122.540065 -107.986902 69.398967 C -116.49023 48.854369 -154.232528 63.064586 -172.723105 50.716079 C -190.538427 38.818526 -199.46017 16.397027 -213.246938 0 C -237.225617 -28.518582 -304.565062 -51.180283 -288.045712 -84.577853 C -262.196868 -136.837085 -160.516975 -39.795231 -111.828998 -71.868134 C -99.915723 -79.71593 -105.446359 -100.754818 -97.66535 -112.711822 C -89.69177 -124.964748 -76.152609 -133.166334 -65.275736 -142.933924 C -52.366378 -154.526717 -42.835514 -177.856859 -25.493472 -177.31099 C -4.850637 -176.661222 -1.371311 -131.586272 19.193485 -133.493624 C 88.227338 -139.896406 71.778305 -320.085098 139.591983 -305.663807 C 178.443417 -297.401642 133.218267 -214.3706 162.463046 -187.49235 C 189.534509 -162.611548 257.314595 -208.742368 273.246621 -175.604942 C 293.145142 -134.217502 220.876335 -98.331637 198.435228 -58.265841 C 187.982299 -39.603441 164.544061 -20.673946 170.033769 -0.000001 C 183.228337 49.690035 284.000375 38.487263 298.778958 87.729417 Z "
                  fill="url(#two-3)" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1"
                  visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"></path>
        </g>
    </svg>
);

const Pointed: React.FC<IconSvgProps> = ({
                                             size = 32,
                                             width,
                                             height,
                                             ...props
                                         }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 800 800">
        <g stroke-width="10" stroke="hsl(28, 100%, 71%)" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M250 250Q450 350 400 400Q294 533 550 550 " marker-end="url(#SvgjsMarker1031)"></path>
        </g>
        <defs>
            <marker markerWidth="10" markerHeight="10" refX="5" refY="5" viewBox="0 0 10 10" orient="auto"
                    id="SvgjsMarker1031">
                <polyline points="0,5 5,2.5 0,0" fill="none" stroke-width="1.6666666666666667"
                          stroke="hsl(28, 100%, 71%)" stroke-linecap="round"
                          transform="matrix(1,0,0,1,1.6666666666666667,2.5)" stroke-linejoin="round"></polyline>
            </marker>
        </defs>
    </svg>
);
const Life: React.FC<IconSvgProps> = ({
                                          size = 32,
                                          width,
                                          height,
                                          ...props
                                      }) => (
    <svg width={size} height={size} viewBox="0 0 1024 1024" {...props}>
        <path
            d="M892.064 261.888a31.936 31.936 0 0 0-45.216 1.472L421.664 717.248 201.216 532.032a32 32 0 1 0-41.152 48.992l243.648 204.704a31.872 31.872 0 0 0 20.576 7.488 31.808 31.808 0 0 0 23.36-10.112l445.888-475.968a32 32 0 0 0-1.472-45.248z"/>
    </svg>
);
const Cherry: React.FC<IconSvgProps> = ({
                                            size = 32,
                                            width,
                                            height,
                                            ...props
                                        }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M300.574 282.293c.526-1.482.302-2.934.925-3.678 5.692-6.808 11.772-13.473 20.004-16.994 5.319-2.275 11.1-5.68 17.418-1.999.273.159 2.107-1.369 1.997-1.689-3.323-9.606-5.442-19.613-9.772-28.887a310.207 310.207 0 0 1-16.025-42.07c-1.604-5.334-4.287-10.375-8.746-14.3a240.987 240.987 0 0 1-15.418-14.839c-5.307-5.584-8.9-12.3-11.553-19.537-.415-1.134-1.491-2.027-2.261-3.031-.661 1.158-1.585 2.242-1.94 3.487-1.663 5.833-5.595 10.283-9.265 14.757-8.283 10.1-19.125 16.798-31.246 21.226-7.071 2.582-14.67 3.716-21.737 6.304-13.41 4.908-26.339 10.99-37.421 20.19-6.682 5.547-13.441 11.218-19.047 17.789-7.245 8.491-13.238 17.753-17.808 28.351-4.474 10.377-6.473 21.658-12.189 31.482a2.03 2.03 0 0 0-.215 1.323c.179.842.517 1.65.789 2.473.682-.412 1.467-.717 2.031-1.253 4.845-4.617 9.212-9.89 14.595-13.746 5.146-3.687 11.196-6.256 17.105-8.697 7.131-2.946 14.613-5.036 21.795-7.871 8.917-3.519 18.15-5.277 27.574-4.116 10.344 1.273 20.283 3.943 27.95 12.06 3.164 3.35 4.126 7.382 5.522 11.363 1.756 5.007 3.241 10.111 5.054 15.096 1.419 3.905 2.378 7.78 2.187 12.01-.246 5.479.124 10.985-.097 16.467-.504 12.485-3.177 24.498-8.565 35.823-4.854 10.204-9.323 20.634-15.781 29.972-3.755 5.431-7.581 10.885-11.988 15.776-8.692 9.649-17.743 18.979-26.769 28.32-11.202 11.593-25.353 18.454-40.047 24.272-9.398 3.721-19.355 4.466-29.3 3.472-11.598-1.161-22.402-5.619-33.46-9.01-5.147-1.58-9.007-5.038-13.076-8.15-6.765-5.174-13.63-10.452-18.221-17.73-2.302-3.647-3.212-8.192-4.628-12.373-1.775-5.238-3.433-10.515-5.118-15.783-.271-.849-.529-1.726-.61-2.607-.98-10.583-1.909-21.171-2.888-31.753-.431-4.663-1.612-9.368-1.267-13.964.507-6.744 1.936-13.436 3.229-20.1 1.878-9.684 6.512-18.27 10.84-27.018 3.412-6.895 8.175-11.946 15.26-14.929 4.47-1.882 9.013-3.709 13.201-6.122 6.411-3.694 12.648-2.243 18.898-.074 4.159 1.443 8.187 3.274 12.23 5.032 4.351 1.892 5.21 1.853 6.293-2.329 2.453-9.469 6.433-18.33 9.837-27.434 2.795-7.474 6.43-14.256 11.128-20.43 5.908-7.764 11.554-15.799 19.108-22.215 8.155-6.927 16.014-14.16 25.891-18.755 7.014-3.264 13.46-8.232 20.764-10.263 8.35-2.321 16.587-5.075 24.769-7.752 21.471-7.023 34.907-21.92 40.557-44.075 1.221-4.786 2.021-9.104-.984-12.805-2.172-2.675-4.053-5.144-5.512-8.388-3.196-7.1 2.03-17.984 12.407-20.46 3.137-.748 8.419 2.389 9.317 4.871 1.509 4.175 2.266 8.638 3.156 13.017 1.035 5.097-1.208 8.751-5.788 10.678-3.284 1.382-3.448 4.163-2.655 6.357 3.981 11.015 8.163 22.081 14.669 31.819 3.474 5.199 8.706 9.397 13.686 13.368 5.349 4.263 12.581 15.332 14.594 22.119 2.886 9.731 5.947 19.503 10.071 28.749 4.622 10.363 8.424 20.899 11.387 31.823.992 3.659 3.491 6.907 2.808 11.021-.035.213.74.788.782.754.554-.447 1.379-.905 1.498-1.49 1.009-4.976 4.335-8.381 7.623-11.902 10.598-11.351 23.835-18.357 38.163-23.694 14.558-5.421 29.932-5.881 44.704-3.891 22.568 3.041 37.866 16.478 44.688 38.789 1.87 6.118 4.322 12.056 6.358 18.126.919 2.738 1.604 5.573 2.167 8.409 2.03 10.225 2.205 20.667 1.186 30.885-.734 7.357-2.577 14.869-6.684 21.51-1.832 2.962-2.741 6.487-4.138 9.727-5.083 11.789-13.175 21.554-21.29 31.264-4.503 5.389-9.346 10.499-14.151 15.627-4.243 4.53-9.339 7.884-14.871 10.719-3.572 1.83-6.595 4.801-10.238 6.414-9.268 4.105-18.744 7.741-28.149 11.534-.411.165-.947.004-1.423.023-11.494.475-22.995 1.429-34.479 1.262-7.577-.11-14.917-2.444-22.176-5.043-12.539-4.489-23.273-11.806-32.919-20.564-4.171-3.787-7.211-9.288-9.542-14.552-8.287-18.714-7.984-38.705-7.092-58.555.295-6.583 2.732-13.099 4.432-19.581 1.74-6.639 3.998-13.112 7.902-19.412Zm-66.939-21.846-1.327-.104c.442.273.885.547 1.327 1.537.477.239.955.477 1.432 1.432 1.432 3.104 2.864 6.208 4.295 10.028 0 .677-.107 1.378.035 2.025.112.509.531.951.814 1.424.194-.371.635-.829.54-1.098-.371-1.055-.911-2.05-1.389-3.784.123-3.821-.412-7.339-4.295-10.027-.477-.239-.955-.478-1.432-1.433Zm-8.591-5.729-1.327-.105c.442.273.885.547 1.327 1.537.955.239 1.909.478 2.864 1.433l1.327.104c-.443-.273-.885-.547-1.327-1.537-.955-.239-1.909-.477-2.864-1.432Zm253.435-5.73.392 1.824.935-.287c-.442-.751-.884-1.502-1.326-2.97l-.392-1.824-.935.287c.442.751.884 1.502 1.326 2.97Zm-177.547-87.381 1.326.105c-.442-.274-.884-.548-1.326-1.538l-2.351-1.946c-.171.373-.53 1.046-.485 1.073.917.574 1.881 1.074 2.836 2.306Zm163.229 68.759 1.327.104c-.442-.273-.884-.547-1.327-1.537-1.125-.716-2.241-1.45-3.401-2.106-.072-.041-.49.533-.748.82 1.383.668 2.766 1.335 4.149 2.719Zm-143.184-41.542-1.327-.105c.443.274.885.547 1.327 1.537l2.003 6.301c.168-.071.49-.172.482-.21-.405-2.105-.801-4.214-1.314-6.293-.062-.253-.765-.347-1.171-1.23Zm128.15 37.96c-3.422-.955-6.824-2.637-10.27-2.737-13.87-.401-27.967-1.203-41.113 4.269-16.079 6.694-31.8 14.144-40.817 30.502-4.075 7.392-4.146 4.53-.011 11.829 1.964 3.465 3.937 6.957 5.457 10.623.451 1.089-.252 3.102-1.087 4.182-1.453 1.879-3.582.688-5.114-.054-1.033-.5-1.444-2.181-2.278-3.218-2.601-3.234-4.782-7.066-8.01-9.485-8.519-6.384-12.943-8.602-24.328-1.337-1.91 1.219-3.571 2.837-5.508 4.003-6.077 3.657-9.145 9.624-12.251 15.583-3.854 7.393-5.236 15.587-6.997 23.558-1.603 7.256-2.696 14.851-2.419 22.237.321 8.565 2.195 17.097 3.728 25.584 2.648 14.655 9.911 26.149 22.09 35.255 8.28 6.191 17.47 9.814 26.788 13.233 5.821 2.136 11.818 4.082 18.553 3.84 14.672-.527 28.929-2.366 42.611-7.894 5.314-2.147 11.075-3.446 15.992-6.253 5.841-3.336 11.122-7.718 16.404-11.95 4.546-3.643 9.36-7.222 12.975-11.701 6.381-7.907 12.09-16.376 17.8-24.799 5.881-8.674 10.49-17.861 13.153-28.229 1.566-6.097 1.171-12.512 2.998-18.081 2.322-7.079-.349-13.275-.929-19.614-.731-8.007-3.969-15.87-6.701-23.591-5.472-15.467-13.342-29.071-30.716-35.755ZM132.69 285.516c-.675.675-1.241 1.734-2.044 1.963-4.336 1.234-4.839 4.411-4.392 8.131.49 4.083.832 8.198 1.597 12.231 1.559 8.213 4.072 16.223 1.497 24.839-.653 2.187-1.439 3.482-3.058 3.475-1.353-.006-2.853-1.357-3.979-2.434-.507-.485-.051-1.847-.396-2.655-1.48-3.459.58-6.851.054-10.285-.554-3.609-1.227-7.226-1.395-10.86-.329-7.127-1.642-8.827-8.52-10.133-.354-.068-.895-1.015-.78-1.365.547-1.672.847-3.881 2.062-4.776 2.222-1.638.384-2.83-.075-3.861-.632-1.421-1.732-2.88-3.023-3.721-8.93-5.811-18.65-8.571-28.952-4.738-10.67 3.969-20.432 9.45-24.46 21.311-.492 1.449-1.549 2.695-2.153 4.117-3.971 9.354-6.809 18.984-7.225 29.236-.081 1.989-.914 3.936-1.166 5.931-.235 1.862-.772 4.021-.11 5.602 2.656 6.346 1.86 13.177 2.415 19.647.939 10.952 2.332 21.675 6.15 31.927 3.196 8.579 6.393 17.409 13.44 23.738 7.721 6.933 16.735 11.802 26.555 15.295 9.83 3.496 19.554 7.272 30.263 6.357 3.159-.269 6.297-.859 9.425-1.413 7.246-1.282 15.156-.119 21.242-5.717 14.381-3.586 24.085-14.198 34.624-23.417 4.536-3.968 8.402-8.781 12.172-13.528 5.801-7.304 11.511-14.707 16.782-22.396 4.661-6.799 8.796-13.971 12.892-21.134 1.402-2.451 2.041-5.353 2.919-8.084 1.018-3.164 1.254-6.808 3.017-9.45 2.816-4.221 2.712-8.615 2.787-13.225.036-2.231 1.047-4.452 1.044-6.677-.009-8.452.524-17.012-.643-25.322-1.004-7.146-3.786-14.102-6.298-20.953-1.282-3.496-2.935-7.786-5.771-9.575-4.941-3.117-10.781-5.772-16.506-6.469-10.3-1.255-20.651-.329-30.694 3.281-7.11 2.556-13.674 6.299-20.615 8.965-10.134 3.893-19.297 9.099-28.682 16.142ZM305.943 166.62c1.15 1.151 2.26 2.345 3.476 3.42.312.276.958.174 1.451.246.028-.221.165-.542.068-.647-1.591-1.715-1.751-5.656-4.995-3.019Zm-25.057-39.393c-.336-.141-.663-.335-1.012-.394-.108-.019-.438.396-.395.495.436 1.006.891 2.01 1.422 2.97.301.545.753 1.007 1.137 1.506.093-.673.314-1.361.243-2.016-.069-.632-.441-1.231-1.395-2.561ZM324.557 201c-.239.613-.836 1.384-.649 1.811.582 1.328 1.462 2.525 2.226 3.773 1.208-1.887.885-3.504-1.577-5.584Zm-6.443-16.474c.163.163.303.366.497.475.118.067.46-.006.46-.021.022-1.257.02-2.515.02-3.773l-2.374.42c.465.489.931.978 1.397 2.899Zm13.602 35.096c1.934-1.938-.124-2.8-1.105-3.911-.1-.112-.639.165-.974.261.454.978.909 1.956 2.079 3.65Zm124.57 4.297-1.927.496c.947.79 1.864 1.624 2.874 2.324.16.111.739-.382 1.125-.595a80.196 80.196 0 0 0-2.072-2.225Zm-337.914 61.597 1.927-.496c-.947-.79-1.864-1.624-2.874-2.324-.16-.111-.739.382-1.125.595.452.503.904 1.006 2.072 2.225Zm125.286.716.991 3.306c.578-.67 1.713-1.455 1.604-1.984-.16-.775-1.209-1.368-2.595-1.322Zm30.069-177.627 2.832.032c-.944-.488-1.888-.976-2.832-.032Zm55.841 101.706a2199.79 2199.79 0 0 0-2.335-1.961c-.176.367-.58.982-.492 1.063.649.598 1.395 1.089 2.827.898Zm-41.523-63.029c.758.197 1.514.402 2.282.55.023.005.16-.578.244-.888-.603-.126-1.207-.252-2.526.338Zm-12.887-31.514 1.432-.717c-.477-.238-.954-.477-1.432.717Zm207.617 144.679.378 1.812c.309-.085.893-.222.888-.245-.149-.768-.353-1.524-1.266-1.567Zm-9.307-20.77.573-.86c-.43.048-.859.096-.573.86Zm-186.855-98.125-.859-.573c.048.43.095.86.859.573Z"
        />
        <path
            d="M445.225 273.898c-2.375 0-4.068-.207-5.688.045-3.028.473-5.302-2.124-5.412-3.557-.382-5.01.187-10.115.686-15.155.128-1.291.654-3.563 2.924-2.564 1.262.555 2.705 1.785 3.075 3.008.524 1.732-.168 3.802.216 5.61.398 1.873-1.935 4.93 1.939 5.487 5.266.756 8.058-.685 9.396-4.622 2.658-7.819 1.618-9.731-6.12-10.956-1.388-.22-3.128.456-4.188-.162-1.159-.677-2.394-2.403-2.342-3.619.049-1.154 1.607-3.068 2.697-3.217 5.746-.779 11.208.878 16.496 2.934.884.344 1.888 1.712 1.93 2.647.201 4.478.231 8.976.026 13.454-.089 1.947-.672 3.951-1.435 5.76-.551 1.307-1.59 3.073-2.726 3.349-3.506.851-7.162 1.085-11.474 1.558ZM186.476 292.156c2.86-4.629 6.979-2.825 10.466-2.738 2.704.068 5.346 1.839 8.056 2.723 6.126 1.998 7.221 4.384 4.824 10.393a749.582 749.582 0 0 0-6.25 16.262c-1.114 2.996-2.864 3.684-6.129 2.912-4.468-1.057-8.715-3.297-13.685-.557-2.875 1.585-5.467-2.489-4.582-6.253 1.2-5.106 2.068-10.295 3.009-15.462.235-1.289-.512-3.371 1.841-2.815 1.393.33 3.574 1.418 3.675 2.36.237 2.191-.54 4.507-.965 6.761-.449 2.384-.844 4.781 1.485 6.407 1.804 1.26 8.225.557 9.01-1.231 1.431-3.262 3.195-6.755 3.218-10.163.019-2.874-3.579-3.905-6.229-4.128-3.155-.264-5.579-1.588-7.744-4.471Z"
        />
    </svg>
);
const Blast: React.FC<IconSvgProps> = ({
                                           size = 32,
                                           width,
                                           height,
                                           ...props
                                       }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M237.396 108.969c-2.963-.063-3.263-.579-2.724-3.656.246-1.4.024-2.877.067-4.318.035-1.16-.416-2.472.911-3.291.153-.095.368-.394.33-.45-1.8-2.742.372-5.42.145-8.157-.174-2.082 1.055-2.627 2.832-1.575.528.312 1.141.792 1.669.739 2.694-.272 4.899.914 7.156 2.085 4.751 2.464 9.566 4.803 14.29 7.316 2.562 1.362 4.88 3.216 7.505 4.417 3.281 1.5 6.098 3.563 9.027 5.616 5.679 3.98 10.284 9.186 15.86 13.195 2.062 1.482 3.827 3.663 6.592 4.141.358.062.639.589.947.909 2.353 2.437 5.098 3.309 8.866 3.226 2.435-.053 4.878.336 7.32.456 2.79.137 5.513-.186 8.139-1.252.571-.233 1.31-.031 1.969-.075 3.129-.212 6.277-.297 9.378-.719 1.703-.232 3.324-1.054 4.99-1.588.493-.158 1.046-.416 1.514-.327 3.751.718 7.214-.826 10.766-1.445 3.176-.553 6.383-1.075 9.516-1.905.411-.109.998.098 1.272-.125 2.238-1.825 4.958-1.49 7.529-2.027 3.934-.82 7.84-1.004 11.797-1.289 2.436-.175 3.703 1.88 5.781 2.132.024.002.077.574-.04.798-1.689 3.253-3.714 6.261-6.594 8.59-.635.514-1.434.819-2.142 1.247-.448.271-1.234.583-1.24.89-.052 2.364-2.079 3.256-3.388 4.601-3.334 3.426-6.79 6.739-9.376 10.799-1.264 1.983-2.336 4.092-4.255 5.565-.943 4.376-5.385 6.691-6.467 10.984-1.768 1.143-1.727 3.301-2.736 4.861-1.028 1.59-2.262 3.049-3.265 4.653-1.864 2.981-3.838 5.911-5.184 9.18-.589 1.431.174 2.397 1.928 2.439 2.993.073 6.032-.261 8.819 1.243 1.893-.973 3.598-.687 5.125.771 1.769-1.273 3.883-.163 5.681-.772 2.67-.904 5.359-1.371 8.149-1.205 1.034.062 2.047.441 3.083.568.869.107 1.769.15 2.636.053 1.14-.128 2.257-.58 3.392-.611 2.67-.074 5.216-.569 7.658-1.651.467-.207 1.004-.368 1.507-.363 3.005.029 5.895-.534 8.821-1.2 1.551-.353 3.328.421 5.011.492 3.105.13 6.123-.346 9.126-1.25 1.81-.546 3.791-.584 5.704-.703 1.77-.11 3.553-.023 5.329-.023 1.777 0 3.557-.062 5.33.018 1.605.073 3.481.381 4.737-.2 2.262-1.046 4.117.293 6.154.204 2.217-.097 4.441-.022 6.662-.022.444 0 .889.016 1.332-.003 1.75-.076 2.732.442 4.145 1.433.703.493 1.823.376 2.745.578.476.105 1.206.192 1.327.488.162.398.021 1.172-.29 1.474-4.394 4.262-9.049 8.278-13.189 12.769-2.342 2.541-5.479 4.214-7.242 7.473-1.053 1.948-3.937 2.895-5.03 4.837-1.201 2.135-3.366 3.175-4.493 5.074-1.151 1.94-2.348 3.549-4.223 4.903-1.705 1.231-2.867 3.205-4.318 4.808-.335.369-.857.581-1.318.818-.455.234-1.089.281-1.388.63-2.152 2.514-4.249 5.074-6.337 7.641-.597.734-1.021 1.622-1.677 2.29-.9.916-2.225 1.392-2.465 2.948-.069.448-.919 1.132-1.365 1.099-1.512-.115-1.148.851-1.261 1.688-.125.92-.132 2.144-.707 2.665-2.609 2.36-3.262 5.819-5.123 8.578-.755 1.119-1.356 2.345-2.145 3.437-.986 1.366-1.003 2.551.313 3.649 4.512 3.763 9.369 6.945 15.041 8.724.678.213 1.272.68 1.94.941 8.037 3.139 15.562 7.424 23.663 10.443 3.064 1.142 5.798 3.141 8.767 4.573 3.511 1.694 7.315 2.867 10.618 4.88 3.224 1.964 6.664 3.248 10.108 4.598 2.964 1.161 5.984 2.183 9.003 3.198 1.565.526 3.18.903 4.773 1.347-.131.377-.246.761-.399 1.128-.158.379-.353.743-.532 1.113.386-.08.792-.278 1.156-.218.919.153 1.809.477 2.728.629 1.012.168 1.022.658.482 1.3-1.623 1.926-3.056 3.872-6.213 3.48-2.288-.285-4.691.331-7.039.581-.38.041-1.025.213-1.063.415-.263 1.402-1.208 1.482-2.371 1.653-.619.091-1.179.932-1.658 1.522-.583.718-1.104 1.324-1.84.225-.566-.844-1.028-.171-1.149.193-.46 1.383-1.403 1.759-2.738 2.202-1.008.335-1.591 1.902-2.42 2.872-.159.188-.586.227-.88.207-2.755-.184-3.264.082-4.349 2.068-.15.276-.948.545-1.113.41-1.161-.953-1.818-.042-2.813.396-1.787.787-3.052 2.664-5.3 2.534-.414-.025-.891.514-1.288.852-1.286 1.095-2.133 2.907-4.334 2.48-.261-.051-.684.491-.962.818-2.511 2.953-5.775 4.774-9.144 6.592-2.763 1.491-5.019 3.901-7.727 5.524-3.702 2.219-6.208 5.832-9.657 8.133-2.564 1.711-4.162 4.264-6.749 5.916-2.014 1.287-3.244 3.968-3.423 6.447-.226 3.119-1.5 6.169-.245 9.494.55 1.455.752 3.616-.448 5.378-.362.532-.244 1.564-.041 2.28 1.014 3.57.221 7.397 1.766 10.93.695 1.591.583 3.529.874 5.303.66 4.022.923 8.113 2.449 11.98.567 1.437.765 3.077.836 4.638.088 1.916 1.06 3.371 2.052 4.827 1.791 2.629 1.248 5.583 1.28 8.454.002.183-.583.464-.93.544-3.302.76-5.193-1.717-6.2-3.843-1.543-3.252-3.899-5.572-6.307-7.994-.466-.469-1.233-.66-.66-1.956.572-1.294-1.071-1.005-1.682-.615-.84.537-.982.72-1.585-.39-.912-1.678-2.458-2.783-4.515-3.258-1.465-.339-2.864-1.003-4.122-2.174-2.064-1.92-4.554-3.384-6.891-5.003-.229-.159-.64-.033-.959-.086-2.167-.361-4.333-.439-6.127-2.208-.833-.821-2.517-.789-3.823-1.112-.412-.102-1.028.065-1.246-.172-2.283-2.481-5.956-2.521-8.371-4.856-.699-.675-2.177-.573-3.308-.766-1.874-.32-3.781-.481-5.628-.907-2.415-.557-4.838-1.16-7.159-2.012-2.485-.913-2.967-.693-3.085 1.951-.191 4.242-.239 8.504-.732 12.713-.297 2.538-1.124 4.996-.103 7.528-1.26 1.226-1.214 2.776-1.173 4.373.065 2.554.04 5.11.013 7.665-.066 6.067-1.447 11.9-3.399 17.591-.31.903-1.535 2.025-2.392 2.073-1.093.062-2.655-.56-3.29-1.422-1.803-2.446-3.801-4.382-6.512-5.935-1.948-1.117-3.559-2.946-5.752-3.863-.285-.119-.45-.562-.637-.876-.809-1.357-1.802-2.304-3.54-2.463-3.698-.339-6.828-1.721-8.455-5.381-.39-.878-.994-1.486-1.995-1.236-1.629.408-2.398-.748-3.319-1.665-.459-.457-.835-1.141-1.386-1.339-4.795-1.717-8.246-5.39-12.227-8.287-1.032-.752-2.068-1.511-3.013-2.366-1.208-1.093-2.461-2.105-2.108-4.15.259-1.499-.532-.302-.982-.247-1.07.129-2.15.183-2.945-.914-1.044-1.44-3.058-2.2-2.762-4.571.075-.605-.776-1.619-1.73-.39-.137.176-.886.138-1.121-.066-2.221-1.923-4.436-3.857-6.553-5.892-.712-.685-1.118-.749-1.68.035-.192.267-.653.462-.671.714-.265 3.582-2.423 6.599-2.911 10.159-.328 2.4-1.326 4.766-2.349 6.998-1.031 2.249-2.393 4.36-3.767 6.427-.366.552-.441 2.662-2.032.962-.586.696-1.233 1.352-1.737 2.102-.334.499-.454 1.14-.693 1.707-.102.245-.263.465-.397.696-.088-.297-.156-.602-.269-.889-.125-.318-.29-.621-.438-.931-.074.303-.221.609-.207.907.025.524.03 1.112.277 1.538.146.251.969.454 1.096.317.848-.92 2.276-1.494 1.992-3.183-.044-.258.565-.626.872-.943.137.446.466.937.373 1.329-.211.89-.499 1.815-.985 2.579-2.465 3.877-5.02 7.697-7.511 11.557-2.028 3.143-4.639 5.875-6.195 9.37-.672 1.512-2.109 2.682-3.189 4.014-.265.327-.565.652-.728 1.031-1.352 3.138-3.894 3.687-6.371 1.33-1.113-1.058-2.247-2.108-3.233-3.278a4.801 4.801 0 0 1-1.031-2.217c-.252-1.543-.151-1.511-1.634-1.224-.785.151-1.595.479-1.907-.948-.15-.686-1.477-1.074-2.201-1.681-3.024-2.536-5.603-5.467-8.029-8.589-1.713-2.203-4.275-3.753-5.532-6.336-1.842-3.785-5.344-6.392-7.212-10.019-1.599-3.106-4.301-5.409-5.579-8.675-.259-.663-1.057-1.116-1.607-1.666-1.413-1.414-2.869-2.789-4.23-4.251-2.042-2.193-2.783-2.309-5.026-.451-1.865 1.546-3.653 3.189-6.201 3.545-.389.054-.821.25-1.109.515-3.259 2.996-7.351 4.077-11.432 5.412-4.174 1.365-8.224 3.245-12.109 5.312-2.947 1.568-5.549 3.784-8.306 5.709-.429.3-.832.766-1.304.858-3.384.659-5.925 2.905-8.78 4.558a38.373 38.373 0 0 1-2.727 1.461c-2.127 1.013-2.136.997-3.063-1.232-.078-.189-.051-.503-.18-.579-2.408-1.429-1.61-3.8-1.855-5.919-.458-3.959.786-7.524 1.982-11.189 1.465-4.49 3.905-8.416 6.342-12.374.595-.967 1.171-1.955 1.641-2.986.693-1.517 1.527-2.809 3.359-3.047.199-.026.506-.083.562-.212 1.19-2.75 4.047-4.625 4.153-7.949.02-.621.057-1.341.371-1.833 1.018-1.596 2.16-3.114 3.269-4.651 2.05-2.84 2.823-6.169 3.685-9.472.365-1.396.872-2.753 1.252-4.145.584-2.141-.89-4.228-3.148-4.382-3.903-.265-7.808-.526-11.717-.644-1.615-.049-3.146-.579-4.923.485-1.405.84-3.648.138-5.431.527-1.687.368-3.425.399-5.072 1.465-1.291.836-3.28.605-4.963.817-1.904.242-3.808.531-5.721.65-2.289.143-4.465-.443-6.909.49-1.978.755-4.733.108-6.95-.557-2.827-.849-5.614-.457-8.414-.556-3.116-.11-3.742-.845-4.02-4.01-.459-5.233.922-9.846 4.031-14.013.893-1.197 1.584-2.441 3.357-2.743 1.097-.187 2.093-1.111 2.031-2.597-.006-.155.71-.34 1.092-.511.497 1.928 1.246.814 1.468-.006.357-1.318 1.402-1.861 2.233-2.708 1.665-1.699 3.164-3.562 4.743-5.348.367-.415.713-.991 1.185-1.15 4.335-1.461 5.542-5.963 8.55-8.702.65-.592 1.182-1.498 1.939-1.752 1.572-.526 1.684-3.108 3.863-2.612-.105-.458-.063-1.18-.337-1.332-2.246-1.244-3.868-3.902-7-3.203-.212.047-.576.096-.646-.007-1.78-2.63-4.963-1.973-7.39-3.115-4.08-1.92-8.517-3.03-12.39-5.493-1.182-.752-2.455-1.618-4.089-1.423-.54.065-1.17-.347-1.713-.629-3.453-1.795-6.597-4.016-9.749-6.318-3.273-2.39-5.983-5.317-9.08-7.82-2.556-2.066-5.523-3.729-8.524-5.099-2.077-.948-3.497-2.453-5.006-3.956-.274-.273-.444-1.091-.255-1.313.918-1.083 1.967-2.057 2.985-3.053.368-.36.782-.673 1.174-1.008-.071.458-.183.915-.194 1.374-.004.177.223.513.344.513.643-.001 1.371.089 1.915-.174 1.948-.94 3.785-2.119 5.76-2.992 1.258-.557 2.592-1.649 4.12-.227.26.241 1.322-.325 1.986-.588 3.509-1.391 6.925-2.922 10.896-2.765 1.387.055 2.826-1.106 4.234-1.726 1.221-.538 2.413-1.147 3.653-1.637a385.014 385.014 0 0 1 8.63-3.294c.775-.285 1.675-.259 2.419-.595 1.593-.72 3.315-.776 4.931-1.847 2.649-1.754 5.859-2.602 9.138-2.811.581-.037 1.146-.3 1.719-.459-.348-.522-.67-1.064-1.052-1.56-.269-.349-.62-.635-.934-.95-2.421-2.421-4.941-4.753-7.227-7.296-1.543-1.716-2.712-3.762-4.13-5.597-.771-.996-1.607-1.998-2.598-2.758-2.746-2.105-4.963-4.624-6.742-7.589-.761-1.269-1.718-2.459-2.757-3.518-3.371-3.44-6.025-7.391-8.57-11.45-1.397-2.229-3.054-4.296-4.605-6.429-2.979-4.099-5.971-8.189-8.943-12.293-.363-.501-.733-1.034-.929-1.611-.431-1.271.836-2.947 1.873-2.406 2.261 1.18 4.57.543 6.864.609 4.048.117 7.624 1.925 11.305 3.278 1.934.711 3.987 1.311 5.407 3.178.46.603 1.996.492 3.045.522 3.731.105 7.123 2.015 10.974 1.771 2.991-.19 6.027.466 9.048.539 1.456.035 3.059.584 4.407-.599.188-.165.717-.147.968-.003 2.335 1.335 4.923 1.064 7.441 1.411 3.037.417 6.019 1.254 9.123 1.236.777-.004 1.575-.113 2.328.022 1.823.327 1.37.368 1.39-1.42.038-3.201-2.667-5.188-3.043-8.115-.024-.184-.195-.394-.357-.51-2.737-1.955-4.128-4.941-5.055-7.896-.892-2.844-3.08-5.332-2.6-8.615.143-.98.41-2.259-1.251-2.408-.828-2.981-2.915-5.564-2.733-8.872.085-1.551-.108-3.122.051-4.661.143-1.389-.041-2.746-.044-4.117-.002-1.287.178-2.52-1.058-3.605-.655-.575-.757-1.891-.91-2.902-.303-2.007-.473-4.033-.685-6.053-.035-.33-.087-.692.008-.995 1.024-3.266-.392-6.514-.065-9.788.109-1.097-.843-2.407-.523-3.354.738-2.185.087-3.937-.671-5.901-.379-.981-.056-2.382.312-3.47.701-2.069.845-1.988 2.572-.748.635.455 1.551.522 2.343.752 1.091.317 2.435.32 3.237.983 4.227 3.492 9.122 5.966 13.533 9.126 3.085 2.209 6.418 3.939 9.65 5.784 4.125 2.355 7.399 5.868 11.694 7.915 2.322 1.107 4.473 2.561 6.756 3.745 2.032 1.055 4.096 2.491 6.141 3.745 4.108 2.52 8.204 5.037 12.015 8.003.521.406 1.334.437 2.012.642-.128-.758-.155-1.552-.41-2.265-.344-.962-1.12-1.827-1.254-2.796-.262-1.902 1.223-3.845-.048-5.777-.05-.077-.055-.265.001-.322 1.702-1.751.324-3.47.035-5.241-.236-1.449-1.175-2.852-.122-4.491.429-.667-.006-1.905-.087-2.881-.152-1.82-.879-3.799-.399-5.427 1.608-5.463 1.961-11.14 3.26-16.638.247-1.045.76-2.022 1.969-2.486.72-.277 1.093-.561 1.361.453.243.921.947 1.455 1.966 1.258 4.377-.845 7.639 1.912 11.17 3.597 2.983 1.422 5.619 3.566 8.591 5.019 3.127 1.53 5.966 3.396 8.726 5.493 3.682 2.799 7.557 5.345 11.301 8.065.888.644 1.564 1.575 2.389 2.316.18.162.678.203.859.069.197-.147.36-.642.258-.846-1.18-2.361-1.653-4.878-2.151-7.46-.88-4.558-.59-9.014.218-13.493.055-.306.731-.472 1.065-.763.332-.291.598-.658 1.059-1.157.183-.373.199-.579.216-.785l-.382.618Zm-42.647 296.954.618.049c-.206-.128-.412-.255-.618-.716l-.617-.049c.206.128.412.255.617.716Zm49.643-263.626.049-.618c-.127.206-.255.412-.715.618l-.049.618c.127-.206.255-.412.715-.618Zm163.255 94.652.266-1.066-.435-.098c-.055.388-.11.776-.497 1.164l-.049.618c.127-.206.254-.412.715-.618Zm-24.322 160.308c-.222-.111-.444-.222-.666-.666l-1.95-.049c.545.127 1.089.258 1.635.379.101.022.21.003.315.336.222.112.444.223.666.667l1.066.267.098-.436c-.388-.055-.776-.109-1.164-.498ZM367.666 143.63l-.266 1.067.435.097c.055-.388.11-.776.497-1.164l.049-.618c-.127.206-.254.412-.715.618Zm-289.86 59.324-.049 1.951c.127-.545.258-1.09.379-1.636.022-.1.003-.21.336-.315l.049-.617c-.127.205-.255.411-.715.617Zm162.921-59.657-.617-.049c.206.127.411.255.617.715.524.334 1.043.675 1.583.98.034.019.228-.247.348-.381-.643-.311-1.287-.621-1.931-1.265Zm-51.975 253.96-.617-.048c.206.127.412.254.617.715l.228 1.561c.234-.164.689-.38.665-.482-.116-.488-.355-.948-.574-1.407-.02-.042-.208-.005-.319-.339Zm206.567 6-.617-.049c.206.127.412.254.617.715.667.333 1.333.667 1.999 1.333l.618.049c-.206-.127-.412-.255-.618-.715-.666-.334-1.332-.667-1.999-1.333Zm-79.961 19.33-1.066-.267-.098.436c.388.055.776.109 1.164.497 0 .426-.05.86.016 1.275.054.344.245.667.376 1 .091-.282.309-.593.25-.838-.147-.606-.42-1.182-.642-2.103ZM124.117 158.628l-.618-.049c.206.127.412.255.618.715l-.632 1.368 1.533.299c-.078-.492-.099-1.005-.26-1.468-.078-.224-.419-.358-.641-.865Zm15.326 41.993c-.222.35-.566.679-.632 1.056-.067.378.143.805.231 1.21.313-.268.889-.54.885-.802-.011-.602-.305-1.198-.484-2.13.084-1.513-1.011-1.004-1.714-.902-.337.049-.607.557-.907.857.555.126 1.106.276 1.667.369.31.051.635.009.954.342Zm234.887-64.323c-.376.153-.832.22-1.107.48-.412.388-.697.911-1.036 1.376.673-.133 1.428-.126 1.988-.453.325-.19.336-.917.821-1.403l.905-1.094c-.173-.08-.486-.247-.499-.226-.267.427-.5.876-1.072 1.32ZM253.721 400.257c.333-1.524.676-3.045.987-4.573.037-.18-.099-.395-.154-.593-.167.152-.363.282-.495.461-1.067 1.445-.57 3.118-1.004 4.705l-.049.618c.127-.206.255-.412.715-.618Zm151.594 12.331-.933-2.265c-.133.121-.37.231-.384.364-.111 1.056.148 1.922 1.317 2.568.604 1.049 1.191 2.109 1.829 3.137.116.187.443.243.672.359.037-.294.216-.705.087-.865-.825-1.019-1.718-1.983-2.588-3.298ZM240.394 132.299c.111-1.283.245-2.565.314-3.85.014-.255-.222-.525-.343-.787-.101.29-.116.682-.318.854-1.515 1.285.567 2.527-.319 3.783l-.049.617c.127-.206.255-.411.715-.617Zm158.257 234.963.618.049c-.206-.127-.412-.255-.618-.715 0-.886.054-1.777-.02-2.656-.044-.525-.287-1.034-.44-1.55-.291.544-.909 1.163-.806 1.617.232 1.017.822 1.953 1.266 3.255ZM238.062 105.303c-.479 1.651 1.435 2.238 1.602 3.602.132-.121.401-.297.377-.356a69.428 69.428 0 0 0-1.435-3.343c-.062-.134-.357-.16-.544-.57.444-1.459.925-2.908 1.306-4.384.093-.357-.143-.8-.227-1.202-.23.4-.492.784-.684 1.201-.553 1.194-1.121 2.384-1.601 3.608-.505 1.288.476 1.093 1.206 1.444Zm113.612 60.99c-.685.908-1.376 1.811-2.054 2.724-.841 1.132.237 1.592.881 1.862.318.132.99-.584 1.502-.916-1.704-1.225.912-2.446.337-3.67l.267-1.066-.436-.098c-.055.388-.109.776-.497 1.164Zm46.977 209.634.182.849.436-.133c-.206-.35-.412-.699-.618-1.382 1.733-1.742-.587-3.954.666-5.752-.31-.193-.843-.601-.895-.547-.419.437-.859.917-1.074 1.469-.241.619.675 3.827 1.303 5.496Zm-64.969 16.331c-.952.614-1.038 1.537-1.014 2.567.049 2.096-.042 4.196.053 6.289.026.559.518 1.096.796 1.643.166-.482.467-.963.477-1.448.059-3.016-.485-6.034.355-9.051l.053-2.613-.87.098c.161.838.322 1.677.15 2.515Zm-181.579 8.999c3.299-1.444 6.679-2.73 9.877-4.371 4.429-2.275 9.097-4.16 12.859-7.625 1.029-.948 2.455-1.599 3.979-.37.67.539 1.559 1.213 2.574.407.745-.592 1.526-1.139 2.291-1.706.556.755 1.053 1.565 1.683 2.253 1.05 1.145 2.222 2.178 3.277 3.318 2.146 2.32 4.536 4.483 6.3 7.068 2.647 3.879 4.79 8.082 7.749 11.788 1.558 1.951 2.407 4.406 4.281 6.235 1.076 1.049 1.768 2.564 2.403 3.973.769 1.704 4.05 5.767 5.513 6.713 1.245.804 2.4 1.754 3.552 2.692 2.58 2.102 5.106 4.271 7.728 6.318.382.298 1.517.326 1.717.051 1.288-1.764 2.329-3.708 3.609-5.479 2.049-2.839 4.216-5.592 6.352-8.367.154-.201.46-.283.695-.421.062.308.278.703.161.908-.671 1.175-1.294 2.418-2.187 3.41-.661.734-.112 1.004.249 1.174.347.164 1.212.066 1.244-.066.58-2.372 3.185-4.343 1.478-7.201-.136-.228.125-.788.332-1.11 2.565-4.009 4.673-8.257 6.569-12.611.86-1.975 1.804-3.966 2.246-6.049.271-1.277.602-2.407 1.29-3.485.329-.515.686-1.087.771-1.67.293-2.008.539-4.029.679-6.053.272-3.903.515-7.811.651-11.721.048-1.385.604-2.454 1.467-3.39.395-.429 1.048-.621 1.584-.92.104.513.165 1.039.322 1.534.192.612-.628 1.764.743 1.733.669-.015 1.65.69 2.009-.885.265-1.164 1.424-1.569 2.43-.23.966 1.285 1.924 2.605 3.072 3.717 2.654 2.569 5.416 5.028 8.144 7.52 2.386 2.181 4.823 4.308 7.169 6.531 2.067 1.959 4.04 4.019 6.055 6.034 1.177 1.178 2.164 2.747 3.579 3.44 1.981.971 3.651 2.005 4.617 4.044.136.286.988.575 1.044.502.807-1.043 1.169-.116 1.719.289 1.438 1.059 2.903 2.865 4.39 2.898 2.64.057 3.59 1.921 5.026 3.275 1.325 1.25 3.814.637 4.448 2.895.016.058.447-.061.635.019 1.135.477 2.335.864 3.364 1.516 1.864 1.181 3.476 2.884 5.466 3.71 2.226.924 4.3 1.997 6.291 3.32 1.693 1.125 2.795.819 3.039-1.072.589-4.574 1.12-9.171 1.308-13.774.105-2.59-.555-5.202-.618-7.833-.046-1.93.035-3.854.028-5.78-.016-4.11.047-8.221-.023-12.33-.047-2.802-.139-5.58 1.35-8.114.19-.322.364-.654.546-.982.263.358.609.681.773 1.08.826 2.003 1.447 2.127 2.806.448.776-.959 1.402-1.183 2.357-.109.7.787 1.631 1.366 2.886.644.335-.193 1.169.293 1.676.62 1.676 1.081 3.44 1.599 5.46 1.357.552-.066 1.2.285 1.743.564 6.686 3.425 14.175 4.935 20.721 8.696.168.096.433.039.651.029 3.611-.154 6.647 1.758 9.685 3.151 5.707 2.616 11.121 5.871 16.668 8.84.529.283 1.132.429 1.701.638.099-.626.348-1.271.27-1.874-.396-3.042-.521-6.182-1.409-9.082-1.466-4.787-1.361-9.794-2.553-14.595-.276-1.116.516-2.445-.663-3.392 2.216-2.912-1.588-6.247.629-9.181.14-.186.012-.641-.092-.935-1.819-5.139.175-9.348 3.393-13.121 2.532-2.967 5.565-5.391 8.805-7.619 3.422-2.352 6.562-5.117 9.803-7.731.828-.668 1.322-.799 1.469.495.019.165.476.359.751.402.837.129 4.181-3.163 4.177-4.032-.003-.428-.055-1.074.186-1.251 1.944-1.426 3.911-2.831 5.953-4.111 2.622-1.643 4.741-4.382 8.371-3.962.298.034.913-.465.954-.773.339-2.564 2.583-2.963 4.337-3.827 2.483-1.224 5.157-2.088 7.559-3.443 2.37-1.335 4.484-3.117 6.744-4.655 4.293-2.923 8.507-5.98 13.329-8.031.788-.335 1.5-.847 2.246-1.277-.848-.499-1.687-1.014-2.549-1.489-.356-.197-.75-.413-1.142-.445-3.396-.283-6.351-1.896-9.253-3.395-4.574-2.362-9.089-4.815-13.92-6.626-.864-.324-1.998-.489-2.497-1.127-2.406-3.075-6.12-3.475-9.348-4.863-3.212-1.382-6.507-2.5-9.531-4.4-1.391-.875-2.777-2.031-4.678-2.378-2.38-.435-4.557-2.109-6.929-2.418-1.903-.248-2.94-1.621-4.495-2.104-3.475-1.079-6.366-3.362-9.781-4.551-1.255-.436-2.596-.883-3.607-1.69-.913-.729-1.685-1.352-2.887-1.125-2.449.464-2.467-2.289-4.008-3.024.476-1.135.663-2.581 1.484-3.348 2.466-2.303 4.502-4.967 5.686-8.007.551-1.415 1.236-2.781 2.115-3.752 1.878-2.076 3.195-4.454 4.63-6.786.383-.621.732-1.273 1.187-1.838 1.147-1.425 2.379-2.782 3.515-4.216 1.448-1.83 2.663-3.878 4.286-5.53 2.834-2.884 6.025-5.418 8.835-8.322 2.307-2.384 4.093-5.279 6.44-7.616 3.884-3.868 6.981-8.408 11.148-12.067 4.274-3.753 7.929-8.212 11.856-12.361.076-.081.147-.17.237-.234 1.014-.718.03-1.087-.338-1.38-.283-.225-.822-.166-1.247-.168-3.519-.017-7.044.105-10.2-1.946-.47-.305-1.544-.335-1.92-.009-1.266 1.095-2.258-.614-3.516-.116-1.07.424-2.427.584-3.545.342-5.267-1.14-10.308.477-15.423 1.099-1.294.158-2.53 1.22-3.783 1.2-1.759-.027-3.756.931-5.332-.744-.15-.159-.804-.154-.891-.016-1.07 1.703-3.173.116-4.344 1.403-3.757-1.052-7.417.438-10.95 1.034-3.145.53-6.484.925-9.475 1.943-2.119.721-3.922-.175-5.938.325-3.104.771-6.441.645-9.684.792-2.216.101-4.443-.049-6.66.049-1.026.046-2.444.95-2.984.541-1.999-1.513-3.7.119-5.513.138-.467.005-1.093.718-1.368.574-1.874-.981-3.631.131-5.412.248-2.523.164-3.456-.373-3.546-2.748-.055-1.451-.054-2.79 1.309-3.821.622-.47 1.164-1.318 1.323-2.082.914-4.39 4.283-7.498 5.89-11.567 1.126-2.854 3.183-5.4 5.109-7.862 1.951-2.492 2.854-5.596 5.007-7.952.83-.908 1.321-2.116 2.033-3.141 2.023-2.91 3.694-6.09 5.753-8.913 3.241-4.441 7.194-8.37 10.932-12.436 2.103-2.288 4.395-4.401 6.564-6.629.345-.353.493-.898.733-1.354-.505-.116-1.003-.28-1.514-.341-3.006-.36-6.115.714-9.064-.647-.155-.071-.64.2-.728.413-1.093 2.638-2.88 2.767-5.171 1.6-.361-.183-1.178.005-1.48.316-1.915 1.969-4.761 1.516-7.002 2.758-1.101.61-3.007.222-4.376-.234-1.461-.486-2.592-.659-3.727.505-.276.283-.694.549-1.073.592-2.346.266-4.696.53-7.052.667-1.73.101-3.545-.295-4.725 1.554-.159.249-.873.178-1.332.191-.456.014-.922-.12-1.371-.073-1.876.2-3.555 1.37-5.309 1.58-4.424.53-8.911.519-13.37.778-3.02.175-6.039-.328-9.085.545-1.378.396-3.143.533-4.745-.465-.705-.439-1.919-.475-3.077-.168-2.392.634-4.562-.399-6.566-1.718-.514-.339-1.061-.707-1.644-.842-1.022-.236-1.84-.676-3.195-.342-1.408.346-3.291-1.227-4.942-2.01-.025-.012.252-.959.386-.958.733.002 1.469.147 2.198.276 1.505.269 3.163 1.096 4.474.715 2.045-.596 3.812-.865 5.671.28.43.265.935.471 1.429.548.345.054.73-.16 1.097-.254-.193-.316-.31-.782-.592-.924-1.465-.74-3.04-1.281-4.451-2.107-3.488-2.039-6.131-5.109-9.18-7.682-3.273-2.763-5.998-6.207-9.878-8.247-.459-.242-1.048-.607-1.183-1.037-.963-3.092-4.163-3.063-6.309-4.097-2.538-1.223-5.234-2.011-7.304-4.073-.353-.352-.86-.6-1.34-.765-3.308-1.135-6.648-2.18-9.922-3.401-.525-.197-.804-1.12-1.14-1.74-.265-.487-.444-1.023-.661-1.537-.227.504-.466 1.004-.678 1.514-.236.57-.588 1.134-.645 1.725-.276 2.829-.733 5.676-.624 8.498.136 3.492-.692 6.958-.116 10.456.08.491-.518 1.089-.787 1.644-.179.37-.58.936-.458 1.1 1.448 1.952.32 4.427 1.774 6.653 1.531 2.343 1.715 5.629 1.535 8.658-.045.746-.173 1.944.209 2.184 2.1 1.324 1.683 3.338 1.794 5.259.048.827.281 1.649.481 2.461.32 1.294-.781 3.711-2.018 4.358-.904.472-3.597.132-4.259-.658-1.23-1.468-2.313-3.061-3.565-4.51-2.627-3.039-5.019-6.384-8.068-8.933-3.926-3.28-8.253-6.164-12.712-8.678-1.719-.969-3.181-2.33-5.028-3.096a62.903 62.903 0 0 1-6.106-2.947c-2.273-1.245-4.411-2.739-6.698-3.955-1.626-.864-2.34-.442-2.68 1.323-.582 3.015-1.788 5.94-1.353 9.111.042.306.004.665-.121.944-1.068 2.396-1.323 4.912-1.205 7.501.238 5.239.42 10.481.681 15.719.168 3.354.429 6.704.666 10.054.021.3.126.621.279.88 1.006 1.703-.082 2.89-1.154 3.851-1.164 1.043-2.637 1.296-4 .196-.767-.619-1.416-1.381-2.171-2.017-2.628-2.216-5.214-4.491-7.947-6.572-1.63-1.241-3.619-1.985-4.656-3.972-.222-.424-1.061-.588-1.65-.74-.614-.159-1.4.046-1.886-.262-2.739-1.736-5.601-3.357-8.043-5.458-1.86-1.601-3.81-2.544-6.131-2.976-.5-.093-1.032-.232-1.453-.5-4.022-2.553-8.173-4.861-12.363-7.136-5.384-2.923-10.457-6.421-15.641-9.707-.272-.172-.349-.67-.49-1.027-.113-.287-.184-.59-.274-.886-.132.236-.288.462-.392.71-.237.568-.582 1.132-.65 1.724-.53 4.612.362 13.606 1.445 18.042.38 1.554.08 3.28.056 4.926-.014.968-.466 2.582-.09 2.796 2.236 1.273 1.33 3.561 1.767 5.269.564 2.205.262 4.526 1.3 6.819.878 1.94.209 4.472 1.49 6.493.496.782 1.304 1.642 1.272 2.438-.168 4.218 3.748 6.708 4.314 10.584.051.352.675.585.894.955 1.638 2.761 3.384 5.472 4.801 8.344.809 1.64.793 3.702 1.662 5.294.649 1.19 1.212 1.797.549 3.362-.484 1.145-.592 2.411-1.629 3.331-.675.6-1.005.92-2.146.39-1.563-.727-3.509-.625-5.29-.889-.834-.123-1.673-.229-2.494-.414-3.193-.72-6.51-.796-9.677-.63-2.093.11-3.556-.185-5.03-1.409-.921-.765-1.89-2.791-2.652.155-.056.214-1.03.394-1.474.257-.673-.208-1.263-.698-1.877-1.087-1.362-.865-2.487-1.472-4.457-1.046-2.355.509-5.15.925-7.456-1.098-.686-.601-1.976-.618-3.006-.704-3.346-.278-6.7-.459-10.049-.698-.296-.021-.579-.203-.871-.3-1.954-.652-3.69-2.549-6.04-1.052-.12.075-.5-.332-.788-.435-.872-.311-1.74-.682-2.644-.837-.74-.127-1.527.024-2.293.051.383.55.808 1.075 1.14 1.654.727 1.273 1.048 2.918 2.988 3.015.109.006.18.555.288.844 1.574 4.18 5.441 6.895 7.051 11.076.477 1.24 1.182 2.519 2.124 3.427 2.19 2.11 3.867 4.58 5.644 7.007 1.833 2.503 4.409 4.27 6.028 7.151 1.563 2.781 4.516 4.781 6.858 7.124 3.834 3.835 7.686 7.654 11.487 11.521a10.653 10.653 0 0 1 1.855 2.559c.243.471.271 1.48-.03 1.729-1.212 1.001-2.077 2.244-3.754 2.949-3.031 1.275-6.093 2.028-9.283 2.53-.92.145-1.844.677-2.716.58-.745-.083-1.417-.814-2.122-1.258-.329.722-.469 1.717-1.029 2.105-.988.686-2.241.985-3.37 1.478-3.026 1.323-6.06 2.539-9.459 1.408-.142-.047-.463.251-.615.453-1.117 1.483-2.412 3.162-4.388 2.338-1.128-.47-1.391-.047-2.153.35-2.046 1.064-4.006 2.823-6.638 1.25-.465-.277-1.259-.302-1.613.922-.347 1.199-1.704 1.627-2.869.377-.411-.441-.845-1.248-1.088.207-.076.454-1.094.842-1.746 1.09-1.345.512-2.712 1.168-4.11 1.285-1.59.132-2.906.527-3.994 1.673 1.11.707 2.175 1.498 3.336 2.105 4.581 2.394 7.874 6.369 11.512 9.822 1.597 1.515 3.198 2.874 5.009 4.047 1.305.846 2.603 1.739 4.007 2.391 2.655 1.234 4.697 4.438 8.336 2.715.226-.107.653.025.903.179 3.541 2.184 7.515 3.309 11.38 4.705 2.801 1.011 5.519 2.44 8.404 2.965 2.048.372 3.583 1.042 5.045 2.415.805.756 1.916 1.221 2.947 1.69.743.338 1.601.416 2.375.7 1.46.536 1.627 1.199.658 2.317-1.415 1.635-2.781 3.314-4.249 4.9-3.492 3.769-6.981 7.544-10.574 11.216-1.662 1.699-3.715 3.026-5.307 4.778-1.288 1.418-3.566 1.393-4.39 2.684-.99 1.552-2.045 2.965-3.318 4.254-.213.216-.556.3-.782.507-3.595 3.3-7.568 6.165-8.301 11.723-.243 1.839.136 2.073 1.37 2.244 2.265.313 4.548.518 6.83.683 6.207.447 12.332-.369 18.434-1.343 3.516-.561 6.989-1.398 10.508-1.941a14.848 14.848 0 0 1 4.648.016c1.524.254 2.9-.749 4.477-.11 1.369.554 3.146.169 4.344-.181 3.456-1.008 6.866.143 10.249-.406.207-.034.664.276.682.457.288 2.88 2.391 2.914 4.481 2.83 1.594-.063 2.573.808 2.803 2.132.187 1.083-.24 2.291-.48 3.425-.192.906-.596 1.769-.765 2.677-1.126 6.044-2.508 11.951-7.454 16.25-1.043.907-1.981 1.857-2.186 3.435-.193 1.476-1.067 2.73-2.283 3.718-.567.46-1.041 1.096-1.401 1.74-1.541 2.754-2.867 5.636-5.379 7.732-.405.339-.432 1.132-.634 1.714-.648 1.865-1.204 3.786-2.674 5.219-.49.478-1.082.852-1.627 1.274.323.413.882.814.902 1.242.021.423-.438.936-.8 1.296-.719.713-1.235 1.39-1.188 2.54.036.886-.324 1.845-.703 2.682-1.525 3.362-2.043 6.896-1.868 10.54.026.555.562 1.086.862 1.628.144-.541.437-1.09.407-1.62-.139-2.408.419-4.323 2.833-5.473a30.416 30.416 0 0 0 5.06-3.053c4.613-3.442 9.897-5.529 15.454-8.085Zm182.246 3.666c-.3.077-.849.125-.862.237-.304 2.543-.573 5.09-.781 7.643-.037.455.231.936.357 1.405.318-.422.862-.817.915-1.269.3-2.553.482-5.12.371-8.016Zm-144.93-288.289c.155.067.371.235.456.185.621-.37 1.216-.784 1.82-1.184-.052.595-.19 1.198-.14 1.785.134 1.578.335 3.15.541 4.72.036.279.222.54.339.809.105-.286.317-.579.299-.857-.196-2.987-.42-5.972-.662-8.955-.023-.282-.218-.549-.333-.823-.233.233-.527.43-.688.706a16.876 16.876 0 0 0-1.632 3.614Zm76.963 269.625-1.359-1.307c.105.532.103 1.118.34 1.584.373.735.916 1.382 1.369 2.078.45.691.872 1.401 1.318 2.095.196.304.421.589.633.883.232-.383.615-.745.672-1.153.282-2.048-1.794-2.534-2.973-4.18Zm88.29-224.298c.108.346-.115 1.451.649.602 1.464-1.626 2.687-3.47 3.963-5.257.122-.17.006-.683-.173-.846-.17-.155-.812-.127-.83-.063-.577 2.072-3.296 2.803-3.609 5.564Zm-9.328 15.331c-.223.571-.526 1.126-.637 1.718-.071.376.146.806.234 1.212.312-.267.816-.48.906-.808.572-2.079 2.553-3.661 2.156-6.07-.062-.376 1.377-.566.132-1.011-.163-.058-.635.384-.773.683-.6 1.296-1.13 2.625-2.018 4.276Zm17.325-27.329c-.889 1.279-1.815 2.535-2.63 3.859-.139.226.195.744.31 1.127.233-.233.569-.427.675-.707.181-.478.108-1.068.343-1.503.221-.41.658-.858 1.079-.96.395-.094.894.244 1.347.391-.152-.428-.377-.849-.423-1.289-.018-.173.39-.368.552-.59.248-.339.45-.711.672-1.068a7.218 7.218 0 0 0-1.925.74ZM291.703 122.3c.545.545 1.07 1.112 1.648 1.619.137.119.451.035.684.044 0-.22.092-.511-.014-.65-1.533-2.02-3.554-3.264-6.065-3.65-.162-.025-.53.358-.546.571-.019.232.211.639.419.708 1.166.385 2.358.692 3.874 1.358Zm41.646 260.96c-.156.601-.493 1.223-.428 1.798.098.856.481 1.679.742 2.515.118-.605.204-1.217.361-1.812s.505-1.162.553-1.759a13.07 13.07 0 0 0-.094-2.892c-.041-.288-.585-.503-.899-.751-.078.3-.198.597-.225.903-.038.44-.01.887-.01 1.998Zm-2.665 39.993c.152.375.2.879.475 1.1.946.758.918 1.173-.308 1.444-.092.02-.118.813-.095.818.72.134 1.449.256 2.179.268.134.002.444-.649.389-.701-.984-.941-.112-3.205-2.64-2.929Zm1.999-4.665c-.135.531-.47 1.483-.373 1.529.87.415 1.006-.187 1.116-.912.074-.485.686-1.16.537-1.358-.583-.773-1.365-1.398-2.095-2.052-.074-.066-.3.039-.456.064.346.61.689 1.221 1.041 1.827.054.092.152.157.23.902Zm103.95-213.301v-.657c-.67.001-1.592-.272-1.955.062-.639.588-.943 1.543-1.352 2.362-.017.034.324.246.499.376-.074-1.834 2.079-.618 2.808-2.143Zm-198.571-87.986c-.144-1.033-.27-2.069-.45-3.095-.03-.177-.269-.364-.455-.445-.09-.039-.411.159-.408.243.043 1.392.121 2.783.191 4.174.374-.07.748-.14 1.122-.877Zm176.581 108.65-.46.46c.222.18.546.56.65.507.722-.365 1.407-.809 2.088-1.252.555-.361 1.089-.756 1.633-1.136-.726-.082-1.504-.361-2.16-.185-.547.147-.95.828-1.751 1.606Zm-17.325 23.329c-.222.9-.504 1.791-.631 2.704-.04.291.332.64.515.963.261-.245.678-.449.755-.742.291-1.102.486-2.23.669-3.357.015-.093-.343-.356-.504-.338-.171.02-.315.281-.804.77Zm1.999 133.98.231.897c.146-.092.425-.201.416-.275-.212-1.78-.437-3.56-.728-5.329-.023-.14-.543-.237-.842-.269-.094-.011-.335.274-.313.385.281 1.423.596 2.84 1.236 4.591ZM90.467 220.285c-.157-.156-.34-.293-.463-.472-.327-.477-.628-.972-.938-1.459.055.676.094 1.354.173 2.028.035.303.062.678.247.878.319.345 1.014.884 1.104.808.519-.435 1.443-.88-.124-1.783Zm320.845 10.998-.212-.878c-.596.745-1.225 1.467-1.76 2.253-.111.163.038.667.226.822.174.144.709.151.824.008.372-.46.624-1.018.922-2.205ZM400.65 354.597c.222-.458.752-1.084.61-1.344-.471-.863 1.979-1.576.088-2.216-.2-.068-1.049 1.281-1.31 2.069-.173.52.168 1.21.612 1.491Zm-76.63 73.322c-.606-.384-1.195-.798-1.826-1.136-.229-.122-.556-.061-.839-.083.203.517.261 1.219.638 1.518 1.135.903 1.369.842 2.027-.299Zm45.645-286.955c1.091.178 1.939-.148 2.303-1.248.062-.186-.233-.699-.404-.72-1.216-.147-2.136.207-1.899 1.968Zm33.317 265.292.47.469c.176-.237.544-.639.501-.688a27.705 27.705 0 0 0-2.03-2.152c-.328-.309-.771-.496-1.162-.739.16.456.23.978.502 1.353.384.531.917.954 1.719 1.757Zm-59.638-223.632.628-1.372c-.393.196-.954.296-1.136.613-.245.426-.21 1.02-.272 1.544-.061.514-.091 1.032-.135 1.548l1.307-.058c-.13-.536-.261-1.072-.392-2.275Zm-14.659 245.962c.462.463.901.953 1.395 1.378.343.295.763.499 1.148.744-.067-.593.079-1.412-.252-1.725-.468-.44-1.288-.505-2.291-.397Zm-132.603-17.997c.185.777.149 1.773.628 2.26.352.358 1.083-1.579.699-2.912-.027-.091-.151-.231-.213-.223-.374.049-.743.135-1.114.875Zm35.983 26.662.219 1.553c.23-.377.56-.727.669-1.135.214-.799.352-1.627.416-2.451.021-.26-.292-.545-.452-.819-.181.387-.44.759-.522 1.166-.087.433-.005.901-.33 1.686Zm30.652-53.325c.077.078.144.174.236.225.055.03.212.003.219-.024.278-1.133-.604-2.824-1.685-3.186-.162-.054-.39.087-.588.137.418.761.832 1.524 1.256 2.281.052.092.151.157.562.567Zm140.599-139.978.416-1.583c-.45.173-.924.303-1.343.534-.275.151-.591.411-.674.687-.126.418-.065.893-.084 1.343a10.24 10.24 0 0 0 1.685-.981ZM239.061 122.3c.112-.944.24-1.887.316-2.835.012-.15-.215-.32-.332-.482-.105.177-.249.341-.309.532-.153.477-.16 1.039-.422 1.437-.519.787-.574.751.747 1.348Zm39.315 275.291c.531.753 1.016 1.547 1.618 2.239.22.253.717.265 1.088.386-.111-.306-.17-.646-.343-.911-.503-.772-1.009-1.553-1.619-2.236-.128-.144-.706.115-.744.522Zm123.274 9.998-1 .511c.686.497 1.362 1.008 2.07 1.469.087.056.351-.161.533-.251-.113-.155-.212-.324-.343-.462-.301-.319-.617-.623-1.26-1.267ZM88.134 353.931l.217.883c1.1-.375 1.269-1.24 1.077-2.214-.031-.158-.683-.39-.771-.304-.251.244-.359.635-.523 1.635Zm150.594-259.96c.002-.336 1.358-.625.084-.982-1.666-.466-1.442.783-1.392 1.74.013.245.331.473.508.71.156-.379.311-.757.8-1.468ZM111.123 318.936c.778-.737 1.556-1.472 2.324-2.22.019-.019-.087-.168-.135-.256-.764.638-1.529 1.275-2.292 1.915-.082.069-.154.152.103.561Zm-29.652 27.663-.413 1.586 1.354-.528c-.203-.464-.405-.928-.941-1.058ZM429.969 210.62c-.444.467-.911.917-1.316 1.416-.098.122-.037.431.043.614.04.092.411.153.422.128.396-.83 2.189-1.008.851-2.158Zm-123.94 209.301c.222-.446.469-.883.654-1.344a.936.936 0 0 0-.007-.633c-.045-.119-.304-.262-.422-.229-1.05.293-1.161 1.788-.225 2.206Zm6.664 1.333c-.157-.156-.286-.385-.474-.455a13.905 13.905 0 0 0-1.768-.524c-.085-.019-.236.246-.356.38.644.311 1.286.626 1.936.926.091.042.218.006.662-.327Zm-37.316-26.663-.826-1c-.168.44-.513.897-.472 1.316.102 1.036.704.809 1.298-.316Zm-32.651-300.62c-.593-.458-1.196-.685-1.298.351-.041.42.304.876.473 1.316.275-.334.55-.667.825-1.667Zm156.591 152.643c.371.519.995 1.523 1.073 1.482 1.041-.546-1.087-1.535.252-2.156-.441.002-.883.005-1.325.674ZM122.784 143.963c-.078-.078-.145-.176-.238-.226-.056-.03-.221.018-.221.028.012.6-.053 1.222.1 1.786.066.244.583.365.895.542.044-.313.147-.633.113-.938-.032-.294-.205-.573-.649-1.192Zm-.333-4.332-.502-1.836c-.157.047-.371.046-.458.15-.224.271.157 1.431.96 1.686Zm-6.33 172.306.216.883c.15-.616.382-1.23.406-1.851.009-.223-.463-.501-.762-.675-.084-.049-.332.185-.505.289.215.229.43.459.645 1.354Zm71.965-180.638.211.878 1.122-1.545c-.445 0-.889 0-1.333.667Zm110.613-4c-.379.158-.875.221-1.099.502-.174.217-.121.965.03 1.032.796.357 1.168-.01 1.069-1.534Zm84.626-1.333.212.878 1.121-1.544c-.444 0-.889 0-1.333.666Zm-18.324 20.33c-.076.369-.304.797-.189 1.091.139.357.568.6.871.893.106-.385.28-.768.294-1.157.01-.271-.199-.551-.976-.827Zm115.277 156.643-.999.804.632.529c.345-.444.689-.889.367-1.333ZM379.66 395.591c-.8-1.355-.842-1.412-1.663-1.315-.2.024-.373.278-.558.426.29.074.612.093.861.238.267.155.465.429 1.36.651ZM128.448 170.959c-.111.617-.271 1.232-.301 1.852-.009.174.365.367.564.552.179-.313.5-.626.5-.938-.001-.378-.274-.755-.763-1.466ZM392.654 402.59l1.132.2c-.473-.4-.929-.828-1.444-1.164-.064-.041-.448.408-.684.631.221 0 .442 0 .996.333Zm-268.87 1.666-.244 1.756c.152.011.377.092.443.022.47-.5 1.338-.921-.199-1.778Zm111.613 26.996c-.079-.078-.146-.176-.239-.226-.055-.03-.217.006-.22.03-.079.523-.184 1.048-.191 1.574-.004.294.158.59.246.885.155-.331.329-.654.46-.994.117-.302.186-.623-.056-1.269Zm-87.958-69.322.466.867c.289-.433.698-.835.821-1.31.072-.28-.31-.678-.488-1.023-.155.377-.311.755-.799 1.466Zm178.581 67.989.764 1 .568-.569c-.333-.254-.666-.509-1.332-.431Zm-114.612-1.333c-.234-.234-.438-.52-.714-.68-.138-.08-.594.092-.592.11.066.515.172 1.024.271 1.534.234-.21.468-.42 1.035-.964Zm73.964-22.663 1.121-.454-.696-1.121c-.141.303-.283.606-.425 1.575ZM144.774 132.632c.477.111.963.327 1.427.286.213-.019.382-.541.572-.836-.346.072-.69.159-1.039.211-.205.03-.418.006-.96.339Zm23.988 263.959-.231-.897c-.367.441-.755.868-1.081 1.338-.051.074.178.344.277.523.234-.21.468-.42 1.035-.964Zm-36.982-7.666c-.234.234-.558.43-.679.712-.142.335-.11.744-.154 1.121.312-.2.688-.348.915-.619.179-.214.174-.581-.082-1.214Zm-5.331-232.63-.202 1.131c.39-.255.842-.455 1.14-.792.124-.141-.081-.572-.137-.871-.156.066-.312.132-.801.532Zm15.326 192.637c-1.24-.187-.999.702-.987 1.392.003.176.154.35.238.525.287-.454.571-.91.863-1.36.056-.086.145-.15-.114-.557Zm312.516-163.975-.879 1.121c.513-.15 1.038-.272 1.528-.475.081-.034.015-.422-.649-.646Zm-112.946 3-.764-1-.568.568c.333.255.666.51 1.332.432Zm89.624 139.645c.078-.078.176-.145.226-.238.03-.056-.016-.152-.028-.23-.532.178-1.071.341-1.591.552-.073.03-.05.295-.071.451.377-.067.754-.135 1.464-.535Zm16.992-134.313c0-.209-.025-.422.005-.627.052-.349.139-.693.211-1.039-.294.189-.817.358-.836.572-.041.464.175.95.62 1.094Zm-331.84 4.666c-.234-.234-.43-.558-.712-.679-.334-.143-.744-.11-1.121-.154.201.312.348.688.62.915.214.179.581.175 1.213-.082Zm337.837 92.652 1.131.202-.766-1.17c-.233.212-.466.424-.365.968Zm-344.501-37.994c-.696-.111-1.391-.244-2.092-.317-.162-.017-.345.17-.519.263.229.129.448.344.688.37.525.057 1.06.018 1.923-.316Zm-25.654-39.66c-.076.076-.171.142-.222.233-.03.055-.004.212.015.215.509.082 1.019.166 1.531.197.066.004.15-.279.224-.43-.294-.072-.588-.143-1.548-.215Zm28.653 38.66c-.073.073-.16.136-.212.221-.034.055-.015.142-.02.214l1.231-.173c-.222-.198-.444-.397-.999-.262Zm-62.303 19.664.652-.652-1.036-.297c.017.427.034.855.384.949Zm12.66 5.333c.244.333.473.68.751.983.038.04.324-.148.495-.23-.304-.362-.609-.724-1.246-.753Zm20.657 15.997c-.244-.333-.473-.681-.751-.983-.038-.041-.324.147-.495.229.304.363.609.725 1.246.754Zm12.66 5.333-.652.652 1.036.297c-.017-.428-.033-.855-.384-.949Zm51.309 71.988 1.087.913c.082-.171.27-.457.229-.495-.302-.278-.65-.507-1.316-.418Zm-20.99-204.301.882-.216c-.183-.15-.493-.456-.529-.426-.315.258-1.429-.696-.353.642Zm211.898 217.299c.111-.477.253-.95.315-1.433.021-.156-.167-.34-.26-.511-.129.223-.32.433-.373.673-.065.3-.015.624.318 1.271ZM189.419 150.629c.244.333.473.681.751.983.037.041.323-.147.494-.229-.304-.362-.608-.725-1.245-.754Zm-12.661 238.63-.652.652 1.036.297c-.017-.428-.034-.855-.384-.949Zm77.963 1.333c-.077-.076-.142-.172-.233-.222-.055-.031-.213-.004-.216.015-.081.509-.165 1.019-.197 1.532-.004.065.28.148.43.223.072-.294.144-.588.216-1.548Zm-68.634 3.333c0 .209-.044.431.01.625.094.337.249.658.379.985.092-.275.274-.557.256-.825-.026-.378-.201-.746-.645-.785Zm111.28-262.626-.181-.848-1 1c.283.06.565.121 1.181-.152Zm-107.948-4.666c0-.209.044-.431-.01-.625-.094-.338-.25-.658-.379-.986-.093.276-.275.557-.256.825.026.379.201.747.645.786Zm-65.302 284.622.215.882c.151-.183.456-.493.427-.528-.259-.316.695-1.431-.642-.354ZM190.418 124.3c.111-.477.253-.95.316-1.434.02-.156-.168-.339-.26-.51-.13.223-.321.432-.373.672-.065.3-.016.625.317 1.272Zm51.642 297.62.181.848.999-1c-.282-.06-.564-.121-1.18.152Zm83.96 11.998c.352.092.704.187 1.061.256.011.003.075-.269.114-.413-.281-.058-.561-.117-1.175.157Zm-119.276-11.331.176.843c.144-.04.415-.103.413-.114-.069-.357-.165-.71-.589-.729Zm97.286-6.666c-.353-.091-.705-.187-1.062-.256-.011-.002-.074.27-.114.413.281.059.562.118 1.176-.157Zm-109.947-7.332c.353.092.705.187 1.062.256.011.002.075-.269.114-.413-.281-.059-.562-.117-1.176.157Zm-1.333-5.999.667-.333c-.222-.111-.444-.223-.667.333Zm208.9-1.666.842-.177c-.039-.143-.103-.415-.114-.413-.357.069-.709.165-.728.59Zm-.667-2.667.843-.176c-.039-.144-.103-.415-.114-.413-.357.069-.709.165-.729.589Zm-29.319-5.999c-.091.353-.187.705-.256 1.062-.002.011.269.075.413.114.059-.281.118-.562-.157-1.176Zm28.32-1.666.176.843c.144-.04.415-.103.413-.114-.069-.357-.164-.71-.589-.729ZM145.44 370.595l-.176-.843c-.144.039-.415.103-.413.114.069.357.164.709.589.729Zm-61.97-16.664c-.353-.092-.705-.187-1.062-.256-.01-.002-.075.269-.114.413.281.059.562.117 1.176-.157Zm321.178-6.666-.176-.842c-.144.039-.415.102-.413.113.069.358.165.71.589.729Zm4.665-2.666.666-.333c-.222-.111-.444-.223-.666.333ZM117.12 306.272l.333.666c.111-.222.222-.444-.333-.666Zm276.2-46.993c-.352-.092-.704-.187-1.061-.256-.011-.002-.075.269-.114.413.281.059.561.117 1.175-.157Zm-267.204-58.658.666-.333c-.222-.111-.444-.222-.666.333Zm15.992-.666.667-.334c-.223-.111-.445-.222-.667.334Zm48.977-50.992-.843.176c.039.144.103.415.114.413.357-.069.709-.164.729-.589Zm-67.301-6.666.333.667c.111-.223.222-.445-.333-.667Zm116.943-6.999-.666.333c.222.112.444.223.666-.333Zm69.3-3.333.176.843c.144-.039.415-.103.413-.114-.069-.357-.164-.709-.589-.729ZM380.66 121.3c.353.092.705.187 1.062.256.01.002.074-.269.113-.413-.28-.059-.561-.117-1.175.157Zm-167.253-1.333-.176-.843c-.144.04-.415.103-.413.114.069.358.164.71.589.729Zm-10.661-5.332c.352.091.704.187 1.061.256.011.002.075-.27.114-.413-.281-.059-.561-.118-1.175.157Zm76.963-2.333.842-.176c-.039-.144-.103-.416-.114-.414-.357.069-.709.165-.728.59Zm-41.647-22.33-.4-.267c.022.2.045.4.4.267Zm3.998 1.333.4.267c-.022-.2-.045-.4-.4-.267Zm-4.331 5-.267.4c.2-.023.4-.045.267-.4Zm30.318 6.998-.399-.267c.022.2.044.4.399.267Zm-77.296 7.332.4.267c-.022-.2-.044-.4-.4-.267Zm4.665 0 .4.267c-.023-.2-.045-.4-.4-.267Zm12.327 5.666-.266.4c.2-.022.399-.044.266-.4Zm1.666 2.333.4.267c-.022-.2-.045-.4-.4-.267Zm177.248 3.333-.4-.267c.022.2.044.4.4.267Zm-166.586 2.666.399.267c-.022-.2-.044-.4-.399-.267Zm-97.953 3.333-.4-.267c.022.2.044.4.4.267Zm69.633.333.266-.4c-.199.023-.399.045-.266.4Zm112.612 2.666.267-.399c-.2.022-.4.044-.267.399Zm24.322-.333.4.267c-.023-.2-.045-.4-.4-.267Zm-179.58 3 .266-.4c-.2.022-.399.044-.266.4Zm227.557-.333.399.266c-.022-.2-.044-.4-.399-.266Zm-187.91 3.332-.399-.266c.022.2.044.4.399.266Zm-1.332 23.33.399.267c-.022-.2-.044-.4-.399-.267Zm-56.64 15.997.4.267c-.022-.2-.044-.4-.4-.267Zm221.227 11.999.4.266c-.022-.2-.045-.4-.4-.266ZM68.81 189.29l-.4-.267c.023.2.045.4.4.267Zm358.161 23.663-.267.4c.2-.022.4-.045.267-.4Zm0 4.666.266-.4c-.2.022-.399.044-.266.4Zm-6.997 4.332-.4-.266c.023.2.045.4.4.266Zm-7.663 8.332.267-.4c-.2.023-.4.045-.267.4Zm-8.995 9.666.399.266c-.022-.2-.044-.4-.399-.266ZM110.124 255.28l-.4-.267c.022.2.044.4.4.267Zm-11.328.666-.4-.267c.022.2.044.4.4.267Zm1.666.333-.267.4c.2-.022.4-.044.267-.4Zm293.525 1 .4.267c-.023-.2-.045-.4-.4-.267Zm1.999 3.333-.4-.267c.022.2.044.4.4.267Zm50.642 25.996-.4-.267c.023.2.045.4.4.267ZM79.472 291.94a86.565 86.565 0 0 1-.4-.266c.022.2.044.4.4.266Zm391.811 6 .4.266c-.023-.2-.045-.4-.4-.266Zm-367.156 3.332.399.267c-.022-.2-.044-.4-.399-.267Zm7.329 2.667.4.266c-.022-.2-.044-.4-.4-.266Zm323.178 21.33.4.266c-.023-.2-.045-.4-.4-.266Zm-29.986 23.996-.4-.267c.023.2.045.4.4.267Zm-5.331 8.665a92.125 92.125 0 0 0-.399-.266c.022.2.044.4.399.266Zm-255.876 13.998-.4-.267c.022.2.045.4.4.267Zm199.237 10.665.4.267c-.022-.2-.045-.4-.4-.267Zm56.639 2.666.4.267c-.022-.2-.044-.4-.4-.267Zm-67.967 5.333-.4-.267c.023.2.045.4.4.267Zm-147.928 1.333-.4-.267c.022.2.044.4.4.267Zm88.957.333.266-.4c-.2.023-.4.045-.266.4Zm-110.28 6.333.399.266c-.022-.2-.044-.4-.399-.266Zm223.892 1.333.399.266c-.022-.2-.044-.4-.399-.266Zm-225.558 2.999.266-.4c-.2.023-.4.045-.266.4Zm89.623 4.999.4.267c-.022-.2-.044-.4-.4-.267Zm47.311 4.666.399.267c-.022-.2-.044-.4-.399-.267Zm-98.286 1.667.266-.4c-.2.022-.4.044-.266.4Zm-74.298 1.666.4.267c-.022-.2-.044-.4-.4-.267Zm79.628 3 .267-.4c-.2.022-.4.044-.267.4Zm-78.961 1.666-.4-.266c.022.2.044.399.4.266Zm115.944 4-.4-.267c.022.2.044.4.4.267Zm-33.318 1.333.4.266c-.022-.2-.044-.4-.4-.266Z"/>
        <path
            d="M136.209 293.113c-1.644-2.202-4.083-1.426-6.022-2.125-1.364-.492-2.963-.372-4.283-.933-1.273-.542-2.402-1.162-3.877-1.161-1.442 0-2.755-2.027-3.008-3.988-.182-1.412.972-2.383 1.72-2.521 2.948-.548 4.954-3.031 7.926-3.507 1.163-.186 2.027-1.911 3.558-.648.132.109.958-.396 1.274-.772 1.842-2.203 4.501-2.539 7.033-3.173.61-.152 1.306-.098 1.846-.37 2.762-1.392 5.735-2.534 8.16-4.385 2.97-2.267 4.11-4.499 2.139-8.139-2.165-3.998-5.062-7.426-7.467-11.218-3.224-5.084-8.135-8.34-13.242-11.291-1.829-1.058-2.848-3.316-2.243-5.34.273-.916.949-1.387 1.98-1.268 2.084.241 3.983-.159 5.783-1.357.727-.484 1.802-.581 2.726-.609 2.41-.075 4.751.248 7.212-.58 2.394-.806 5.109.259 7.729-.666 1.366-.482 3.152.227 4.749.4.424.046.98.299 1.249.119 1.717-1.148 3.612-.448 5.415-.625.55-.055 1.205.181 1.65-.041 2.168-1.079 2.665-.681 1.544 1.532-.135.266.194.767.308 1.158.236-.235.63-.441.682-.711.421-2.206 2.435-2.2 3.906-2.513 1.2-.256 1.346-.953 1.026-1.509-1.794-3.112-1.644-6.812-3.246-9.999-1.992-3.964-3.302-8.231-6.14-11.814-1.5-1.894-2.072-4.497-3.419-6.545-1.951-2.965-3.136-6.265-4.654-9.418a4.91 4.91 0 0 1-.483-1.792c-.101-1.721.327-2.167 1.745-1.517 1.198.55 2.143.041 3.208.006 3.444-.114 6.959-.827 10.392.445 1.16.43 2.418.512 3.794.147 1.106-.292 2.455.351 3.699.559.836.14 1.779.045 2.496.407 1.566.791 2.995 1.394 4.707.309.475-.301 1.463-.299 1.943 0 1.748 1.088 3.616.508 5.422.6 2.101.107 4.29-.292 6.291.172 1.939.45 3.635-.45 5.504-.232 1.528.177 3.135-.476 4.717-.56 2.521-.134 5.018.234 7.511.613.598.091 1.249-.167 1.875-.265-.209-.569-.377-1.157-.633-1.704-1.333-2.845-2.288-5.84-4.877-8.033-1.259-1.065-1.885-2.939-2.643-4.521-1.384-2.887-3.98-5.121-4.516-8.466-.096-.596-.645-1.188-.572-1.726.092-.672.611-1.285.946-1.923.536.315 1.192.529 1.572.977.31.366-.18 1.236 1.017.53 2.928-1.726 5.875-.705 8.769.467.953.386 2.019.59 3.05.671 3.572.278 7.152.446 10.726.697 1.647.115 1.497.294.805 2.197-.306.84.462 2.076.784 3.119.018.058.524.086.612-.025.182-.229.266-.553.335-.851.189-.812-1.069-1.62.003-2.45.546-.422 1.031-1.231 1.591-1.276 3.342-.27 6.616.246 9.877 1.032 2.752.663 5.561 1.101 8.357 1.564 1.786.297 3.604.395 5.388.7 1.617.277 1.583-.715 1.456-1.746-.166-1.359-.57-2.7-.626-4.059-.157-3.747 1.14-7.258 2.014-10.827.203-.829.567-1.81 2.048-1.078.989.488 2.333.373 3.513.336 2.704-.086 5.176.663 7.692 1.573 2.813 1.018 5.727 1.874 8.669 2.386 2.913.506 5.707 1.809 8.779 1.434.43-.052 1.173.288 1.344.649.842 1.777 2.399 1.347 3.766 1.279 1.139-.056 2.322-.26 3.377-.674 1.111-.435 2.043 1.152 3.174.086.236-.224 1.009.09 1.525.202.504.11 1.18.56 1.462.375 1.858-1.219 4.342-.75 6.051-2.341.607-.565 1.32-1.114 2.085-1.381.651-.227 2.101-1.775 1.875.761-.127 1.421.973 1.712 2.205 1.688.975-.018 2.685-.141 2.798.2.394 1.199.426 2.603.252 3.884-.293 2.169-1.473 4.405-1.145 6.428.484 2.978-.088 5.429-1.441 7.941-.278.517-.213 1.369-.012 1.968 1.325 3.945-.372 7.859-.069 11.793.068.891-.371 1.824-.593 2.734-.221.906-.936 2.06-.611 2.662 1.201 2.226-.076 4.635.691 6.728.92 2.511.845 4.749-.474 7.007-.105.179-.277.354-.294.542-.092.978.147 1.289 1.257 1.91 4.881 2.729 9.81 3.671 15.244 2.224 1.634-.435 3.397-.359 5.081-.637 3.944-.65 7.906-1.237 11.798-2.128 1.755-.402 3.318-.404 5.097-.217 1.437.152 2.986-1.21 4.551-1.686 1.3-.396 2.798-.9 4.023-.599 1.622.4 2.829-1.081 4.581-.362 1.024.421 2.656-.666 4.023-1.042 1.705-.468 2.284.007 2.373 1.788.048.956.178 1.913.362 2.852.047.238.443.408.679.609.094-.295.35-.768.255-.855-.605-.551-.73-1.203.075-1.411.991-.256 2.131-.334 3.102-.083.419.109.925 1.322.785 1.881-.399 1.582-1.077 3.099-1.709 4.615a157.291 157.291 0 0 1-2.603 5.92 3.53 3.53 0 0 1-1.063 1.299c-1.068.786-2.067 1.47-1.967 3.091.036.581-.926 1.159-1.127 1.829-1.325 4.442-4.563 8.13-4.907 13.006-.098 1.396-1.131 3.123-2.276 3.942-1.225.875-1.607 1.709-1.629 3.017-.046 2.626-.869 4.907-2.689 6.904-.879.964-1.429 2.275-1.955 3.504-1.217 2.842-2.438 5.614-5.08 7.541-.758.552-.256 1.49.409 2.243a27.889 27.889 0 0 0 9.18 6.861c4.088 1.896 8.408 3.338 12.714 4.708 4.805 1.529 9.096 3.923 13.224 6.751 1.328.91 2.996 1.325 4.518 1.943.191.078.616-.045.637.02.28.876.242 2.099.823 2.567.615.496 2.043-.329 2.609.822.826 1.677.447 3.489-.421 4.899-2.498 4.057-4.48 8.379-6.786 12.509-1.34 2.399-2.849 5.191-5.605 6.659-.364.194-.754.579-.872.956-1.041 3.35-3.751 5.565-6.322 7.264-2.911 1.923-4.334 4.463-5.725 7.3-.185.378-.566.703-.929.943-3.283 2.177-4.167 6.196-6.816 8.86-.189.189-.332.694-.217.875 1.496 2.357.7 5.339 2.273 7.747.925 1.416 1.542 3.262 1.626 4.948.179 3.645 2.006 7.031 1.489 10.787-.104.751.638 1.754 1.228 2.436 1.064 1.231 2.595 2.301.029 3.505.191 2.688-1.745 2.283-3.339 2.212-.578-.026-1.186-.367-1.699-.691-1.681-1.06-3.293-2.23-4.996-3.251-.758-.454-1.565-1.2-2.612-.43-.175.128-.619-.065-.922-.162-2.946-.934-5.884-1.897-8.835-2.817-2.169-.676-4.354-1.298-6.529-1.951-.394-.118-.802-.225-1.159-.42-1.565-.853-3.051-1.599-4.976-1.784-1.605-.154-3.555-.606-4.681-2.404-.325-.52-1.506-.579-2.317-.705-1.654-.256-3.583.679-4.859-1.208-.118-.175-.62-.181-.92-.13-2.171.372-3.388-.217-2.863-2.7.035-.163-.15-.373-.233-.561-.139.219-.399.437-.401.657-.023 4.555-.317 9.138.111 13.653.21 2.211 1.165 4.409 1.381 6.734.203 2.185.728 4.344 1.17 6.503.273 1.334-.738 1.917-1.378 2.778-.872 1.174-1.698.43-2.701.348-1.916-.156-3.307-1.2-4.868-2.009-1.002-.519-2.07-.912-3.074-1.428-.696-.358-1.643-.676-1.942-1.278-1.07-2.158-3.043-2.35-5.016-2.73-1.007-.193-2.081-.414-2.939-.929-2.595-1.558-5.096-3.273-7.647-4.905-.249-.16-.656-.086-.887-.259-4.582-3.44-9.032-7.072-13.768-10.285-2.368-1.608-4.46-3.694-7.5-4.437-1.712-.419-3.225-1.958-4.639-3.206-1.899-1.676-3.502-3.694-5.447-5.306-1.417-1.175-3.199-1.903-4.787-2.882-1.335-.823-2.564-1.836-3.95-2.551-1.361-.701-2.845-1.185-4.307-1.667-1.261-.415-2.109-1.008-1.893-2.521.04-.28-.27-.611-.419-.918-.296.321-.741.597-.859.974-.308.993-.577 2.019-.676 3.05-.279 2.902-.091 5.904-.767 8.702-1.267 5.236.327 10.721-1.81 15.902-.704 1.709-.105 3.954-.112 5.954-.012 3.293.127 6.595-.655 9.839-.076.315-.152.781.012.979 1.07 1.297.651 2.472.037 3.827-.334.737-.218 1.786-.025 2.631.344 1.509-.469 2.326-1.643 2.565-1.301.264-2.594.456-3.789-.97-2.067-2.468-4.802-4.404-6.708-6.971-1.424-1.918-3.823-1.778-5.261-3.512-1.362-1.642-3.217-2.875-4.851-4.292-1.719-1.49-3.434-2.982-5.146-4.479-.251-.219-.432-.585-.716-.687-1.895-.677-2.576-1.716-1.301-3.57.177-.256-.087-.816-.148-1.236-.384.294-.934.507-1.126.896-1.004 2.034-.927 1.959-2.586.776-1.513-1.079-3.176-1.958-4.816-2.845-1.816-.981-2.244-.81-3.3.958-1.862 3.119-3.639 6.298-5.663 9.309-.851 1.267-1.535 2.401-1.727 3.98-.323 2.647-2.659 3.744-4.697 4.696-1.729.808-4.195-.997-5.096-3.459-1.448-3.959-2.793-7.956-4.154-11.946-1.794-5.258-3.023-10.799-5.513-15.701-1.946-3.831-1.708-8.139-3.78-11.785-.096-.169-.024-.429-.051-.644-.154-1.241-.314-2.481-.472-3.721-1.039.444-2.042 1.024-3.123 1.309-3.616.954-7.264 1.786-10.89 2.705-.69.175-1.34.516-2 .801-1.902.821-3.755.407-4.791-1.082-1.062-1.526-.99-3.596.185-4.982 3.223-3.803 5.647-7.935 6.512-12.993.369-2.156 2.02-4.065 2.619-6.217.809-2.906 1.978-5.686 2.072-8.861.104-3.473-1.862-5.076-4.253-6.681-4.532-3.042-9.878-4.063-14.858-5.992-2.103-.815-4.232-1.562-6.517-2.506Zm219.608 70.832.619.049c-.206-.128-.412-.255-.619-.716l-.618-.049c.206.128.412.255.618.716Zm-173.085-1.667.049-.618c-.127.206-.255.412-.716.618l-.049.618c.128-.206.255-.412.716-.618Zm148.073-144.664.049-.618c-.127.206-.255.412-.716.618l-.049.618c.128-.206.255-.412.716-.618ZM156.052 232.28l-.266 1.067.436.098c.054-.388.109-.777.497-1.165l.049-.617c-.127.206-.255.411-.716.617Zm-18.008 7.334a4.853 4.853 0 0 1 1.334-.667l.849-.182-.134-.436a5.502 5.502 0 0 1-1.382.618c-.334.222-.667.444-1.334.667l-.049.617c.127-.206.255-.411.716-.617Zm222.776 17.333-.267 1.066.436.098c.055-.388.11-.776.498-1.164.111-.445.222-.889.667-1.334.272-.644 2.107-1.178.213-1.954-.497-.204-1.226.155-1.848.255.434.346.894.664 1.285 1.053.11.11.016.425-.317.646-.111.445-.222.889-.667 1.334Zm-200.099 65.999.267-1.067-.436-.098c-.054.388-.109.776-.498 1.165l-.048.617c.127-.206.255-.411.715-.617Zm-12.672-74.666c.333-.248.681-.48.983-.761.039-.037-.154-.324-.239-.495-.292.24-.605.46-.866.73-.122.125-.145.348-.545.526l-.049.618c.127-.206.255-.412.716-.618ZM184.4 369.278l.182.849.436-.133c-.206-.35-.412-.7-.618-1.382l-.934-1.6c-.133.121-.402.306-.379.353.221.462.465.919.761 1.337.099.141.363.165.552.576Zm57.361-18.666c.248.333.481.681.762.983.037.039.324-.154.495-.239-.24-.292-.46-.605-.73-.866-.126-.122-.348-.144-.527-.545.223-.571.472-1.134.64-1.721.027-.095-.307-.294-.474-.445-.277.548-.641 1.075-.788 1.656-.054.215.4.559.622 1.177Zm119.392 14-.618-.049c.206.127.412.255.618.715.235.235.436.609.711.675.577.138 1.192.115 1.791.158-.502-.389-.973-.832-1.52-1.142-.251-.142-.65-.024-.982-.357Zm9.338 4 .619.048c-.207-.127-.413-.254-.619-.715.146-1.449-1.481-.871-1.907-1.667-.253.144-.664.243-.72.442-.069.242.086.751.274.828.757.309 1.565.497 2.353 1.064Zm-206.435-57c.6-.257.014-1.97 1.631-1.152.723.367 1.867-.081 2.816-.193.187-.022.356-.195.533-.298-.156-.119-.298-.316-.469-.344-1.445-.244-2.895-.539-4.346-.559-.154-.002-.332 1.658-.832 2.546-.111.286-.324.576-.308.854.021.378.217.745.338 1.117.257-.39.597-.754.734-1.182.062-.198-.274-.522-.097-.789Zm-.667 21.333c.329 0 .736.127.976-.019 2.628-1.603 5.303-1.738 8.205-.699 1.333.477 3.215 1.015 4.239.441 2.26-1.267 1.374 1.269 2.255 1.467-1.697 2.165.233 3.95.718 5.824.929 3.587 2.193 7.086 3.256 10.641.597 1.998 1.674 3.888 1.386 6.106-.064.493.007 1.17.304 1.515 1.592 1.847 1.629 4.228 2.355 6.371a117.046 117.046 0 0 0 2.694 7.216c.203.491.936.763 1.425 1.137.178-.443.344-.89.537-1.327 2.442-5.543 4.883-11.087 7.353-16.619.133-.299.526-.483.798-.721.172.337.441.659.499 1.014.151.93-.437 2.321.758 2.591.716.161 1.69-.744 2.522-1.216.279-.159.64-.431.688-.7.41-2.278 1.184-.769 1.872-.204 2.488 2.043 5.19 3.88 7.4 6.189 1.971 2.059 5.049 2.617 6.467 5.496.726 1.476 2.53 2.689 4.125 3.365.898.38 1.704.717 2.44 1.358 3.18 2.768 6.379 5.514 9.59 8.245.301.256.736.356 1.109.529.133-.377.383-.754.38-1.13-.018-2.526.578-5.011.63-7.505.112-5.287.429-10.564.586-15.838.112-3.792.437-7.629-.381-11.531-.808-3.848 1.173-7.556 2.687-11.126.201-.474.736-.827 1.173-1.163.085-.065.639.23.63.329-.188 2.11 1.416 1.109 2.272 1.246.271.043.733-.473.948-.83.821-1.356 1.758-.776 2.954-.511 5.569 1.234 10.229 4.386 15.085 7.053 3.247 1.783 6.336 3.939 8.906 6.738 1.153 1.255 2.54 2.338 3.955 3.303 3.105 2.116 6.317 4.073 9.434 6.173.799.538 1.311 1.777 2.12 1.958 1.141.256 1.886.796 2.75 1.483 3.993 3.175 7.973 6.385 12.154 9.301 2.787 1.946 5.871 3.484 8.894 5.066.93.486 2.265.963 3.123.649 1.391-.509.698-2.103.779-3.248.027-.376-.305-.764-.375-1.163-.33-1.868-.593-3.749-.941-5.614-.443-2.372-.173-4.801-.643-7.175-.308-1.557-.476-3.143-.669-4.721-.037-.297.07-.872.171-.886 1.734-.24 1.139-1.568 1.115-2.502-.026-.997.487-1.191 1.195-.981.348.104.724.613.811 1 .298 1.335.444 2.704.717 4.046.067.331.392.61.599.912.238-.271.61-.509.69-.821.284-1.114.457-2.256.693-3.383.433-2.065.486-2.151 2.446-1.109 3.37 1.792 7.245 2.359 10.487 4.498 1.166.769 2.676 1.031 4.044 1.477 5.484 1.79 10.974 3.561 16.462 5.338 4.116 1.334 8.228 2.679 12.358 3.965.215.066.843-.373.852-.594.113-2.783-.071-5.71-1.669-7.931-2.301-3.194-3.496-6.796-4.79-10.37-.396-1.092-.31-2.758.271-3.737 3.649-6.144 8.27-11.585 12.915-16.988 2.348-2.733 5-5.213 7.254-8.018 2.302-2.865 4.423-5.901 6.368-9.021 2.13-3.416 3.95-7.024 5.94-10.53.853-1.502.501-3.118-.865-4.118-3.282-2.401-6.941-4.141-10.469-6.117-2.002-1.121-3.998-2.319-6.29-2.496-3.541-.275-6.663-1.659-9.58-3.44-1.36-.831-2.599-1.311-4.155-1.303-.813.004-1.742-.14-2.422-.545-3.764-2.242-6.834-5.317-9.84-8.454-.979-1.021-.933-2.124-.087-3.169a112.188 112.188 0 0 1 3.77-4.438c2.197-2.441 3.911-5.24 4.943-8.284a96.312 96.312 0 0 1 4.575-11.102c2.567-5.287 4.221-10.928 6.818-16.183.497-1.006.453-2.406 1.157-3.158 2.232-2.386 2.444-5.711 4.177-8.302.554-.828.862-1.82 1.283-2.737-1.57.062-3.14.113-4.709.194-.304.016-.605.138-.902.229-.69.211-1.4.669-2.061.606-2.161-.207-4.288.934-6.467.076-.449-.177-1.129-.088-1.587.126-3.375 1.58-6.734 3.137-10.638 2.539-.336-.052-.751.3-1.106.504-2.208 1.269-4.459 2.125-7.117 2.227-2.057.079-4.067.32-6.126-.061-.955-.177-2.056-.227-2.953.075-2.88.968-5.617.956-8.349-.464-.532-.277-1.241-.217-1.868-.312-1.464-.222-2.977-.285-4.379-.71-1.499-.453-2.451-2.872-2.389-4.757.1-2.996.344-6.042-.067-8.984-.375-2.693.717-5.225.189-7.926-.335-1.716.928-3.9.299-5.371-1.501-3.503.423-6.749.09-10.199-.503-5.212.535-10.567.824-15.866.093-1.692-.214-1.79-1.885-1.286-2.176.658-4.351 1.332-6.561 1.856-.78.185-1.708-.238-2.479-.039-.873.226-1.626 1.173-2.465 1.222-2.769.162-5.556.113-8.331.016-.541-.019-1.512-.605-1.521-.95-.087-3.262-2.768-3.05-4.773-3.656-4.939-1.494-9.982-2.633-14.823-4.464-.489-.184-1.694.148-1.75.414-.567 2.678-1.481 5.444-1.221 8.079.164 1.659.306 3.383.474 5.075.106 1.066-.177 1.861-1.355 2.25-.571.189-1.064.719-1.502 1.179-.763.803-1.477.597-2.532.521-3.553-.257-6.688-2.834-10.453-1.782-.493.138-1.148-.404-1.749-.524-.826-.165-1.67-.245-2.51-.331-1.647-.168-3.323-.188-4.934-.523-.847-.176-1.19-2.152-2.577-.665-.824.885-1.855-1.188-2.737.089-2.591-.557-5.486 1.196-7.909-1.117-.32-.305-1.486.301-2.267.443-.687.125-1.439 1.147-2.066-.181-.128-.273-.714-.416-1.108-.463-2.127-.255-4.257-.495-6.392-.66-.617-.048-1.254.168-1.881.263.282.536.498 1.123.862 1.597.53.691 1.287 1.226 1.738 1.956 3.155 5.106 5.906 10.387 7.389 16.273.734 2.916.58 3.831-1.918 5.206-1.548.853-3.118.871-4.897.329-2.003-.61-4.172-.684-6.271-.978-1.831-.257-3.926 1.689-5.526-.655-.04-.059-.38.11-.584.136-1.295.165-2.922.884-3.816.359-1.741-1.024-2.973.444-4.548.269-4.764-.53-9.587-.526-14.381-.812-.674-.04-1.307-.577-1.984-.814-.279-.098-.791-.143-.91.011-.765.985-1.426 1.029-2.427.208-.772-.633-1.798-1.21-2.758-1.296-1.101-.099-2.252.384-3.386.583-.322.056-.803.145-.973-.022-1.336-1.314-2.959-.529-4.42-.583-1.755-.065-2.039.633-1.266 2.327.341.747.696 1.492.97 2.264 1.045 2.937 3.589 4.944 4.887 7.647 1.954 4.065 4.543 7.944 4.818 12.666 2.512 3.28 2.497 7.41 3.722 11.122.965 2.927.189 5.508-1.809 7.027-1.42 1.08-3.198 1.314-4.595.789-1.903-.715-3.413-.369-5.296-.043-3.129.542-6.432.314-9.642.105-3.911-.255-4.193-.326-7.958 1.238-.445.185-1.045.08-1.557 0-.822-.128-1.64-.535-2.443-.493-2.358.123-4.709.396-7.059.649-.252.027-.477.304-.715.465.226.283.41.619.685.842 1.576 1.277 3.303 2.396 4.739 3.811 4.26 4.199 7.49 9.191 10.575 14.273 1.018 1.678 2.235 3.327 2.8 5.162.544 1.765 1.513 3.385.818 5.663-1.175 3.855-3.951 5.865-6.856 8.092-2.983 2.287-6.647 2.779-9.891 4.335-3.635 1.743-7.489 2.875-11.335 4.037-.669.202-1.23.799-1.794 1.268-.07.058.163.674.227.669 2.535-.203 4.628 1.219 6.879 1.956 3.409 1.115 6.668 2.679 10.04 3.921 1.742.641 3.953.528 5.315 1.58 3.479 2.684 7.61 3.674 11.475 5.374 1.25.55 2.101 2.139 2.973 3.367.584.823.838 1.872 1.322 2.776 1.035 1.93 1.27 4.248.596 5.997-2.399 6.225-3.582 12.917-7.13 18.719-.615 1.004-.525 2.438-1.095 3.673l-1.6.934c.121.133.307.401.353.379.463-.222.92-.466 1.338-.761.141-.099.165-.363.576-.552Zm79.373 8-.931.931c1.127.827.039 1.595.03 2.381-.01.777.793 1.561 1.233 2.346.162.291.303.593.454.89.071-.299.231-.608.2-.897-.194-1.775-.43-3.545-.986-5.651Zm75.37-136.664c.334-.284.944-.557.955-.853.06-1.637-.022-3.28-.071-4.92-.002-.075-.146-.147-.224-.22-.109.287-.272.565-.317.86-.242 1.598-.454 3.199-.343 5.133Zm-19.343 163.997c1.155.889 2.303 1.788 3.477 2.651.121.089.421.001.598-.086.072-.035.105-.381.041-.428a190.924 190.924 0 0 0-4.549-3.205c-.094-.064-.547.18-.539.222.058.291.194.566.972.846Zm-13.006-7.666 1.584 1.666c.633-.778.613-1.475-.115-2.231-.49-.509-.798-1.189-1.239-1.753-.072-.092-.408.023-.622.043.052.235.1.472.158.706.074.302.156.601.234 1.569Zm-106.052-3.334c.391.614.775 1.232 1.177 1.838.217.328.466.635.701.952.041-.426.271-.972.09-1.258-.833-1.317-2.133-2.389-1.988-4.178.005-.066-.379-.255-.42-.216-.301.283-.837.682-.778.91.149.577.571 1.084 1.218 1.952Zm183.757-16.999c.111 1.377.212 2.755.345 4.13.018.181.199.346.305.519.117-.157.231-.315.351-.469 1.166-1.496.587-2.852-1.001-4.18Zm3.668-1.667c-.077-.078-.158-.153-.232-.233-.442-.478-1.143-1.435-1.283-1.359-1.242.675-.1 1.122.249 1.682.161.26.09.676.27.91.334.434.768.793 1.189 1.152.018.015.477-.361.447-.431-.164-.373-.417-.707-.64-1.721Zm-11.005-125.665c.556-.173 1.115-.338 1.658-.545.03-.012-.007-.471-.133-.571-.946-.756-3.047-.112-3.139 1.071-.079 1.029.662.855 1.614.045Zm-34.017 163.331c-.641-.694-.484-2.213-2.035-1.966.337.758.686 1.511 1.003 2.277.116.279.076.652.248.871.229.289.597.47.905.697.071-.515.142-1.03-.121-1.879Zm53.693-156.997c-1.415-.176-1.401.812-1.311 1.721.065.659.283 1.831.528 1.857 1.359.142.621-1.005.765-1.608.098-.413.018-.868.018-1.97Zm-20.01 50.665c-.222-.462-.431-.932-.671-1.386-.172-.326-.384-.632-.578-.947-.434.294-.963.516-1.26.912-.15.2 0 .914.225 1.051.708.433 1.515.704 2.284.37ZM193.071 377.945c0-.984.054-1.972-.036-2.947-.025-.261-.491-.481-.755-.72-.181.321-.565.884-.513.928 1.146.963.455 2.247.664 3.36.01.053.417.032.64-.621Zm126.062-10.667.499 1c.278-.221.785-.44.788-.665.006-.479-.21-.98-.409-1.44-.169-.391-.442-.738-.669-1.104-.07.514-.139 1.028-.209 2.209ZM172.727 233.614c.634-.856.11-2.458 1.745-2.687.154-.022.269-.327.402-.501-.2-.049-.4-.138-.601-.139-2.238-.019-1.849 1.62-1.546 3.327Zm106.386 120.998c-.144-1.032-.486-1.904-1.747-1.462-.099.035.19 1.415.469 2.1.064.157.833.027 1.278-.638Zm-122.394-84.999-.036 1.964.87-.131c-.163-.723 1.033-1.759-.834-1.833Zm223.444 49.333c-.111.386-.317.774-.31 1.158.009.499.187.994.293 1.491.339-.497.78-.957.977-1.505.111-.306-.182-.758-.96-1.144Zm-44.355 39.666c.076.076.141.17.231.221.055.031.211.009.215-.012.083-.397.313-.861.187-1.185-.276-.712-.718-1.363-1.138-2.011-.046-.071-.383.046-.585.076.363.534.749 1.053 1.075 1.609.094.159.015.42.015 1.302Zm-173.419-42c0 .222.048.456-.009.662-.189.684-.415 1.358-.627 2.036.156.045.44.149.451.127.301-.648.656-1.29.818-1.977.083-.35-.188-.785-.633-.848Zm4.669-2c.796-.59.88-1.348.46-2.179-.059-.115-.528-.164-.534-.146-.218.607-.453 1.217-.568 1.848-.044.244.197.539.642.477Zm138.401-154.33c-.453.586-.689 1.212.34 1.297.618.051 1.265-.25 1.899-.393-.524-.302-1.048-.603-2.239-.904Zm-63.698 209.663c-.794-.646 1.321-1.09.147-1.597-.302-.131-.975.594-1.477.926.444.446.887.892 1.33.671Zm26.68-197.33c.075.075.14.167.229.218.055.032.21.01.212-.002.083-.605.236-1.217.188-1.813-.02-.262-.451-.492-.695-.737-.201.289-.535.564-.566.871-.037.362.187.752.632 1.463Zm70.702 185.997 1.383.617c.028-.384.23-.935.051-1.123-.688-.725-.743-.68-1.434.506ZM164.39 192.614c.077.077.144.174.235.224.056.031.191.019.222-.024.734-.996-.389-1.246-.735-1.81l-1.723 1.401c.259.033.522.109.777.087.3-.026.594-.137 1.224.122Zm153.742 1.667c-.896-.089-1.327.344-.825 1.1.287.433 1.023.567 1.557.835a7.159 7.159 0 0 0-.732-1.935Zm51.692 138.998c.208.575-.558 1.663.751 1.596.218-.011.435-.933.565-1.457.069-.278-.049-.603-.083-.907-.299.145-.599.29-1.233.768Zm-127.729 25.666h-.642c.368.599.727 1.204 1.119 1.786.041.06.288-.02.439-.035-.083-.584-.166-1.167-.916-1.751Zm-67.367-143.998-.249 1.751c.454-.287.915-.564 1.357-.867.174-.119.306-.297.458-.448-.3-.145-.599-.291-1.566-.436Zm159.746 1c-.189 1.278.75 1.041 1.42.957.225-.028.389-.553.581-.85-.556-.147-1.112-.294-2.001-.107Zm-15.341 146.665-.209-.876c-.375.403-1.043.806-1.043 1.209s.668.806 1.043 1.209c.07-.292.139-.584.209-1.542ZM198.74 190.948c-.896-.09-1.328.344-.825 1.1.287.432 1.023.566 1.557.835-.133-.534-.265-1.068-.732-1.935Zm-70.034 96.665c-.444.565-.688 1.162.305 1.264.184.019.599-.845.665-1.335.122-.896.047-.909-.635-.872-.012.001-.002.398-.335.943Zm164.747 76.665c-.111-.285-.147-.656-.352-.835-.268-.235-.669-.318-1.013-.467-.046.378-.27.906-.103 1.104.437.518.897 1.434 1.468.198Zm1.334 3.334c.374-.374.71-.797 1.128-1.11.981-.736-.057-.974-.309-1.406-.162.381-.3.774-.492 1.139-.191.363-.438.697-.327 1.377ZM319.8 177.948c0-.538.04-1.081-.019-1.613-.025-.225-.256-.428-.394-.641-.295.739-.662 1.463-.819 2.231-.028.14.799.455 1.232.023ZM177.73 347.279l-.219-1.553c-.15.41-.357.809-.432 1.232a3.881 3.881 0 0 0 0 1.308c.075.423.283.822.432 1.231.073-.517.146-1.034.219-2.218Zm192.094-111.332c-.145-.367-.242-.766-.452-1.091-.136-.209-.437-.31-.664-.46-.072.184-.188.362-.21.552-.089.775.013.89 1.326.999Zm-12.339 23c-.075.075-.19.137-.217.227-.088.283-.104.593-.218.864-.462 1.104-.059 2.088.304 1.536.397-.605.33-1.516.131-2.627Zm11.005-19-.229-1.562-1.667 1.666c.521.077 1.042.153 1.896-.104Zm-60.363 134.331c.158.379.221.876.502 1.1.218.174.965.121 1.033-.03.357-.797-.011-1.169-1.535-1.07Zm5.67 3.667c0 .104-.042.271.006.304.34.229.698.43 1.05.64l-.056-1.944-1 1Zm-150.408-62.333v-1.333l-1.529.195c.288.38.575.759 1.529 1.138Zm225.778-5.666c-.222.35-.566.678-.633 1.056-.066.377.143.804.232 1.209.155-.332.363-.651.454-1 .137-.522.191-1.065-.053-1.265Zm-76.704-147.998c1.383.195 1.361-.755 1.314-1.665-.01-.193-.277-.372-.425-.557-.074.29-.093.612-.237.861-.156.267-.43.466-.652 1.361Zm-47.023 3.667c.957.178 1.723-.11 2.259-.937.026-.04-.075-.223-.089-.22-.662.155-1.324.31-1.976.499-.191.055-.353.213-.194.658Zm-51.692 3 1.306.028-.384-1.028c-.348.356-1.479-.762-.922 1Zm-57.362 96.665c0 .442-.057.894.019 1.322.056.311.288.59.442.884.191-.391.564-.8.528-1.168-.047-.474-.422-.916-.989-1.038Zm214.439 99.665c-.31-.309-.613-.624-.931-.925-.139-.132-.307-.234-.461-.35-.092.181-.31.428-.255.531.414.78.627 2.008 1.647.744Zm-1.668-5c-.075-.076-.141-.169-.23-.22-.055-.032-.211-.008-.214.008-.082.503-.217 1.011-.199 1.513.012.322.252.635.39.953.151-.151.281-.335.457-.448.851-.553.03-.791-.204-1.806ZM239.76 387.278l-.461-1.539c-.27.312-.798.678-.747.924.074.361.563.636 1.208.615Zm-1.334-3.333c-.444.003-.89-.002-1.331.037-.019.001-.019.591 0 .592.441.039.887.034 1.331-.629Zm64.032-220.664-.765-1-.569.569c.333.255.667.51 1.334.431Zm-37.352 5.334.221.887v-2.441c-.074.296-.147.591-.221 1.554Zm-22.011 170.664c.445-.004.89.001 1.332-.037.019-.002.019-.591 0-.593-.442-.039-.887-.034-1.332.63Zm75.371-156.665c.444-.003.89.002 1.331-.036.019-.002.019-.592 0-.593-.441-.039-.887-.034-1.331.629Zm-110.388 7.667c-.299.077-.667.072-.88.251-.272.228-.42.604-.621.916.378-.044.787-.012 1.122-.155.283-.121.478-.445.379-1.012Zm163.08 19.666c-.285-.111-.575-.324-.853-.308-.378.021-.747.216-1.119.337.156.156.344.291.463.472.522.788.825.169 1.509-.501Zm-3.668 33c-.003-.445.001-.89-.037-1.331-.002-.019-.591-.019-.593 0-.039.441-.034.886.63 1.331Zm-190.094-18.666-.202 1.131 1.171-.766c-.212-.233-.424-.466-.969-.365Zm3.335 7.333c-.111.268-.384.61-.302.789.211.459-1.467.775-.077 1.159.136.038.502-.624.698-.995.087-.163.015-.411-.319-.953Zm-32.349 1c-.477-.111-.951-.253-1.434-.316-.157-.02-.34.168-.511.26.223.13.433.321.673.373.3.066.624.016 1.272-.317Zm229.446-14.667c0 .21-.044.431.01.625.095.338.25.659.38.986.092-.275.274-.557.256-.825-.026-.378-.201-.747-.646-.786Zm-50.024 0 1.319-.681c-.44.005-.88.01-1.319.681Zm37.018 27.666c.111-.477.253-.95.316-1.433.02-.157-.168-.34-.26-.511-.13.223-.322.433-.374.673-.065.3-.016.624.318 1.271Zm-24.012-28.666c.076-.076.172-.142.222-.232.031-.056.004-.213-.015-.216-.509-.082-1.019-.166-1.533-.197-.065-.004-.148.279-.223.43.294.072.588.144 1.549.215Zm24.012 32 .913-1.088c-.171-.081-.457-.269-.495-.229-.278.302-.507.65-.418 1.317Zm-1.334 2 .051-1.283-1.037.297.986.986Zm-214.105.666-.682-1.318c.005.439.01.879.682 1.318Zm169.75-40.332c-.077-.077-.142-.172-.233-.222-.056-.031-.213-.004-.216.014-.081.509-.166 1.02-.197 1.533-.004.065.28.148.43.224.072-.295.144-.589.216-1.549Zm78.705 83.998c.077.077.142.172.233.222.056.031.213.004.216-.014.081-.509.166-1.02.197-1.533.004-.065-.28-.148-.43-.223-.072.294-.144.588-.216 1.548ZM223.085 192.614l1.088.913c.082-.171.27-.457.23-.495-.303-.278-.651-.507-1.318-.418Zm.334-8.333c-.334.244-.681.473-.984.751-.04.038.148.324.23.495.362-.304.725-.608.754-1.246Zm145.738 152.331c-.244-.333-.473-.681-.751-.983-.038-.041-.324.147-.495.229.304.362.609.725 1.246.754ZM263.772 171.281l-1.283-.05.297 1.036.986-.986Zm-49.357.667-.216-.882c-.151.183-.456.493-.427.529.259.315-.696 1.43.643.353Zm-56.028 167.331-1.283-.051.297 1.036.986-.985Zm59.362 29.333-1.087-.913c-.082.171-.27.457-.23.495.303.278.651.507 1.317.418Zm77.705-203.664c.334-.244.682-.473.984-.751.041-.038-.147-.324-.229-.495-.363.304-.725.609-.755 1.246Zm9.338 206.663.334.667c.111-.222.222-.444-.334-.667Zm-118.725.667c.092-.353.187-.705.257-1.062.002-.011-.27-.075-.414-.114-.059.281-.117.562.157 1.176Zm172.418-7-.667.334c.223.111.445.222.667-.334Zm-25.679-7.666c-.091.353-.187.705-.256 1.062-.002.011.269.075.413.114.059-.281.118-.562-.157-1.176Zm-3.001-.334c.353.092.705.187 1.062.256.011.003.075-.269.114-.413-.281-.059-.562-.117-1.176.157Zm-6.337-4.333c.092-.353.187-.705.256-1.062.003-.011-.269-.075-.413-.114-.059.281-.117.562.157 1.176Zm-144.071 0c.092-.353.187-.705.257-1.062.002-.011-.27-.075-.414-.114-.059.281-.117.562.157 1.176Zm-2.334-1.667-.176-.842c-.144.039-.416.103-.414.113.069.358.165.71.59.729Zm89.377-5.999.667-.334c-.222-.111-.444-.222-.667.334Zm-13.006-5c-.092.353-.187.705-.257 1.062-.002.011.27.075.414.114.059-.281.117-.562-.157-1.176Zm2.001-1.334c.091-.353.187-.705.256-1.062.002-.011-.269-.075-.413-.114-.059.281-.118.562.157 1.176Zm117.057-9.666.177.843c.144-.039.415-.103.413-.114-.069-.357-.165-.71-.59-.729Zm2.668-2.667-.667.334c.223.111.445.222.667-.334Zm2.001-1.333-.176-.843c-.144.039-.416.103-.413.114.069.357.164.709.589.729Zm-209.436-18.666-.176-.843c-.144.039-.416.103-.414.114.069.357.165.709.59.729Zm228.779-15.334-.176-.842c-.144.039-.416.103-.413.113.069.358.164.71.589.729Zm-266.798-10.666c.353.091.706.187 1.063.256.011.002.075-.269.114-.413-.281-.059-.562-.118-1.177.157Zm18.009-4.667.667-.333c-.222-.111-.445-.222-.667.333Zm3.669-23.666c-.092.353-.188.705-.257 1.062-.002.011.27.075.414.114.059-.281.117-.562-.157-1.176ZM320.8 214.281c-.091.353-.187.705-.256 1.062-.002.011.269.075.413.114.059-.281.118-.562-.157-1.176Zm-137.067-23 .667-.333c-.223-.111-.445-.222-.667.333ZM319.8 169.948l.176.843c.144-.039.416-.103.414-.114-.07-.357-.165-.709-.59-.729Zm1.334-2-.177-.843c-.144.039-.415.103-.413.114.069.357.165.709.59.729Zm-48.691-11.333.4.267c-.022-.2-.044-.4-.4-.267Zm-7.337.667.4.266c-.022-.2-.044-.4-.4-.266Zm57.028 2.333-.267.4c.201-.022.401-.045.267-.4Zm-5.669 1.667-.4-.267c.022.2.044.4.4.267Zm-6.003 1.333-.4-.267c.022.2.044.4.4.267Zm-10.005 1.333-.4-.267c.022.2.044.4.4.267Zm-85.709 1-.267.4c.2-.022.4-.044.267-.4Zm5.336 1.333-.267.4c.2-.022.4-.044.267-.4Zm26.346 3.667.401.267c-.023-.2-.045-.4-.401-.267Zm71.369 3.333.4.267c-.022-.2-.044-.4-.4-.267Zm1.334 12.667.4.266c-.022-.2-.045-.4-.4-.266Zm-101.05 4.333.267-.4c-.2.022-.4.044-.267.4Zm-15.007.333.4.267c-.022-.2-.045-.4-.4-.267Zm12.006 0 .4.267c-.022-.2-.045-.4-.4-.267Zm104.384 1.667.267-.4c-.2.022-.4.044-.267.4Zm-154.743 4.667-.266.4c.2-.023.4-.045.266-.4Zm4.336 5 .4.266c-.022-.2-.044-.4-.4-.266Zm149.407 7.999.4.267c-.022-.2-.044-.4-.4-.267Zm55.027 1 .267-.4c-.2.023-.401.045-.267.4Zm-198.098 1.334a55.48 55.48 0 0 0-.266.4c.2-.023.4-.045.266-.4Zm167.75 3.666.4.267c-.022-.2-.045-.4-.4-.267Zm-184.425 17 .267-.4c-.2.022-.4.044-.267.4Zm-24.011 5.333.266-.4c-.2.023-.4.045-.266.4Zm224.443 22.333.401.267c-.023-.2-.045-.4-.401-.267Zm-204.767 8-.4-.267c.022.2.044.4.4.267Zm-19.343 10 .4.267c-.022-.2-.044-.4-.4-.267Zm-10.005 4.667-.4-.267c.022.2.045.4.4.267Zm41.02 33.666-.266.4c.2-.023.4-.045.266-.4Zm207.769 14.999-.4-.266c.022.2.045.4.4.266Zm-200.765 4.667.4.267c-.022-.2-.044-.4-.4-.267Zm-19.343.667.4.266c-.022-.2-.044-.4-.4-.266Zm103.718 2.333-.267.4c.2-.022.4-.044.267-.4Zm107.719 8.333.401.267c-.023-.2-.045-.4-.401-.267Zm-90.044 2.667-.4-.267c.022.2.044.4.4.267Zm93.379 5.333-.4-.267c.022.2.045.4.4.267Zm-85.708 3.667.266-.4c-.2.022-.4.044-.266.4Zm60.029 0 .267-.4c-.2.022-.4.044-.267.4Zm-135.733.333-.401-.267c.023.2.045.4.401.267Zm138.068 0-.401-.267c.023.2.045.4.401.267Zm-50.025 8.667-.4-.267c.022.2.044.4.4.267Zm25.346.666.4.267c-.022-.2-.045-.4-.4-.267Zm-78.372 4.333-.267.4c.2-.022.4-.044.267-.4Zm-14.674 4 .267-.4c-.2.023-.4.045-.267.4Zm89.711.334.4.266c-.022-.2-.044-.4-.4-.266Zm2.001.666.4.267c-.022-.2-.044-.4-.4-.267Zm-76.038 8-.4-.266c.022.2.045.4.4.266Zm-2.001 2.667-.4-.267c.022.2.045.4.4.267Z"/>
    </svg>
);
const Claymorphism: React.FC<IconSvgProps> = ({
                                                  size = 32,
                                                  width,
                                                  height,
                                                  ...props
                                              }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 800 800"
    >
        <defs>
            <radialGradient id="ccclaymoji-grad-dark" r="93%" cx="20%" cy="20%">
                <stop offset="70%" stop-color="hsl(41, 100%, 67%)" stop-opacity="0"></stop>
                <stop offset="97%" stop-color="#c89924" stop-opacity="1"></stop>
            </radialGradient>
            <radialGradient id="ccclaymoji-grad-light" r="65%" cx="28%" cy="20%">
                <stop offset="0%" stop-color="#fffd88" stop-opacity="0.75"></stop>
                <stop offset="100%" stop-color="hsl(41, 100%, 67%)" stop-opacity="0"></stop>
            </radialGradient>
            <filter id="ccclaymoji-blur" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="30" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic"
                                edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
            <filter id="inner-blur" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic"
                                edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
            <filter id="eye-shadow" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="#000000" flood-opacity="0.2" x="0%" y="0%"
                              width="100%" height="100%" result="dropShadow"></feDropShadow>
            </filter>
            <linearGradient id="eye-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="#555555" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="black" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="mouth-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="#ff9667" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="hsl(3, 100%, 51%)" stop-opacity="0"></stop>
            </linearGradient>
            <filter id="mouth-shadow" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="#c20000" flood-opacity="0.2" x="0%" y="0%"
                              width="100%" height="100%" result="dropShadow"></feDropShadow>
            </filter>
        </defs>
        <g stroke-linecap="round">
            <path
                d="M650 449.99998478233977C650 602.9582058065985 552.9582210242588 726.9541626799139 400 726.9541626799139C247.04245283018867 726.9541626799139 150 602.9582058065985 150 449.99998478233977C150 297.04243761252843 247.04245283018867 173.04580688476562 400 173.04580688476562C552.9582210242588 173.04580688476562 650 297.04243761252843 650 449.99998478233977Z "
                fill="#c89924" opacity="0.09" filter="url(#ccclaymoji-blur)"></path>
            <path
                d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
                fill="hsl(41, 100%, 67%)"></path>
            <path
                d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
                fill="url(#ccclaymoji-grad-dark)"></path>
            <path
                d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
                fill="url(#ccclaymoji-grad-light)"></path>
            <path d="M325 362.5Q375 412.5 375 362.5 " stroke-width="20" stroke="black" fill="none"
                  filter="url(#eye-shadow)"></path>
            <path d="M325 362.5Q375 412.5 375 362.5 " stroke-width="6.666666666666667" stroke="url(#eye-light)"
                  fill="none" filter="url(#inner-blur)"></path>
            <path d="M425 362.5Q475 412.5 475 362.5 " stroke-width="20" stroke="black" fill="none"
                  filter="url(#eye-shadow)"></path>
            <path d="M425 362.5Q475 412.5 475 362.5 " stroke-width="6.666666666666667" stroke="url(#eye-light)"
                  fill="none" filter="url(#inner-blur)"></path>
            <path d="M350 512.5Q400 562.5 450 512.5 " stroke-width="20" stroke="hsl(3, 100%, 51%)" fill="none"
                  filter="url(#mouth-shadow)"></path>
            <path d="M350 512.5Q400 562.5 450 512.5 " stroke-width="6.666666666666667" stroke="url(#mouth-light)"
                  fill="none" filter="url(#inner-blur)"></path>
        </g>
    </svg>
);

const HeartShaped: React.FC<IconSvgProps> = ({
                                                 size = 32,
                                                 width,
                                                 height,
                                                 ...props
                                             }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M357.289 281.104c-15.718 27.887-37.424 47.617-61.977 65.692-15.648 11.521-33.636 15.906-50.296 23.987-20.754 10.068-41.273 19.887-56.999 37.434-1.9 2.12-6.998 4.48-8.127 3.59-2.838-2.232-5.995-6.275-5.972-9.571.308-43.764-14.62-84.397-24.945-126.035-6.903-27.837-4.972-56.593-3.812-84.92.333-8.142 3.435-17.371 10.835-24.366 9.702-9.173 17.527-20.285 26.654-30.107 10.161-10.935 27.379-10.039 39.881-.807 12.026 8.88 13.969 21.798 17.3 34.292 1.241 4.655.874 8.912 5.869 2.718 17.52-21.729 44.627-29.456 66.818-44.232 10.792-7.185 28.36-4.339 42.888-5.765 1.659-.164 3.656 1.169 5.216 2.222 23.037 15.553 34.528 51.943 27.162 80.252-6.805 26.161-16.546 50.934-30.495 75.616Zm-154.585 71.353 3.846.303c-1.282-.791-2.564-1.581-3.846-4.44l-1.134-5.266-2.712.827c1.282 2.169 2.564 4.338 3.846 8.576Zm-20.75 4.136c0-1.956.312-3.981-.099-5.847-.325-1.471-1.54-2.748-2.359-4.112-.564 1.072-1.841 2.393-1.566 3.17 1.076 3.046 2.641 5.92 4.024 10.926 0 8.04-.154 16.086.198 24.111.044.985 2.842 2.634 4.278 2.547 1.335-.08 3.837-2.433 3.629-3.159-2.463-8.591-5.338-17.064-8.105-27.636Zm195.047-165.456c0 1.957-.312 3.981.1 5.848.324 1.471 1.539 2.748 2.358 4.111.564-1.071 1.841-2.393 1.567-3.17-1.076-3.046-2.642-5.919-4.025-10.925 6.825-18.264 5.551-24.724-7.369-36.204-1.098-.975-2.833-1.253-4.309-1.743-.069-.023-.861 1.172-.721 1.611 4.087 12.816 8.249 25.608 12.399 40.472ZM250.428 333.843c-12.11 10.692-24.256 21.344-36.27 32.142-1.058.952-1.26 2.85-1.859 4.308 1.868.035 4.537.893 5.483-.021 11.72-11.305 23.197-22.861 34.677-34.41.345-.347.044-1.331 2.119-2.019l.304-3.833c-.793 1.277-1.586 2.555-4.454 3.833Zm-33.199-82.728c5.652-10.076.894-19.13-3.31-27.898-2.611-5.445-7.093-5.432-9.983-.022-2.378 4.453-3.951 9.416-5.301 14.312-1.717 6.224-2.738 12.634-4.266 18.915-1.21 4.979-3.762 9.851-3.924 14.828-.515 15.821-.338 31.673-.078 47.507.058 3.523 1.549 7.022 2.381 10.532 1.935-3.333 4.926-6.479 5.559-10.042.95-5.341.781-11.038.13-16.469-1.167-9.733.39-19.266-2.708-29.497-2.527-8.347 4.006-19.598 7.103-29.378 1.453-4.587 4.271-8.745 6.471-13.097.975 3.729 1.886 7.477 2.945 11.182.877 3.068 1.93 6.087.831 9.127l-5.185 19.651c.975-.283 2.091-.352 2.901-.884 7.385-4.857 3.308-12.41 6.434-18.767Zm26.974-2.068c-1.746-20.88-9.511-40.673-9.208-62.215.158-11.251-7.433-22.614-11.553-33.917-.634-1.741-1.417-3.429-2.132-5.142-1.456 1.452-3.79 2.7-4.187 4.397-.834 3.573-2.181 9.691-.633 10.709 8.734 5.742 6.359 14.123 7.063 22.03.988 11.097.957 22.719 4.512 33.038 3.87 11.235 2.94 24.911 16.138 31.1Zm-20.749 33.091c13.822 3.992 14.391 5.205 10.851 18.251-1.363 5.021-2.132 10.295-2.333 15.487-.07 1.803 2.393 3.702 3.699 5.558 1.461-1.701 3.363-3.189 4.315-5.137 11.183-22.889-2.541-42.575-8.573-63.205-.314-1.074-3.419-1.336-5.225-1.977.195 1.792.618 3.593.544 5.374-.322 7.863-.789 15.721-3.278 25.649Zm85.073-55.841c4.453-.044 12.505 7 10.474-5.628-1.048-6.519-1.113-13.198-1.53-19.811-.148-2.336-.023-4.689-.023-7.034-2.84 1.039-7.026 1.243-8.288 3.262-5.569 8.91-10.633 18.291-.633 29.211Zm-118.273-59.978c-3.527 9.544 3.389 20.172-3.228 29.751-.909 1.316 3.414 6.33 5.643 9.394.125.173 4.493-1.571 4.759-2.861.896-4.324 1.034-8.844 1.085-13.294.126-10.929.133-21.862-.07-32.788-.027-1.43-1.563-2.831-2.4-4.245-.546 1.824-.781 3.831-1.723 5.421-1.008 1.701-2.682 3.007-4.066 8.622Zm170.147 0c-2.766-9.193-5.309-18.464-8.505-27.507-.583-1.651-3.831-2.368-5.849-3.516-.503 2.313-2.149 5.194-1.322 6.844 4.765 9.515 8.154 19.171 7.49 30.05-.214 3.501-2.061 9.538 4.808 8.143 1.727-.351 2.283-6.431 3.378-14.014Zm-95.448 16.545c-8.293 7.412-9.098 17.139-8.153 27.239.127 1.356 2.155 3.416 3.465 3.548 1.467.147 3.96-1.158 4.547-2.477 3.068-6.905 6.306-13.853 8.18-21.121.972-3.769 2.575-10.437-8.039-7.189Zm39.424 93.069 6.225-9.582c-4.201-.942-8.442-2.664-12.584-2.453-1.72.088-3.621 4.132-4.75 6.68-2.421 5.465-4.394 11.127-6.55 16.709 8.92 3.117 10.31-6.323 17.659-11.354Zm20.75-20.682c2.97 3.841 4.063 6.841-2.372 8.362-6.723 1.588-4.45 5.681-1.161 8.433 1.445 1.209 5.578 1.299 7.007.117 9.761-8.08 9.891-16.696.422-25.226-2.163-1.95-5.586-2.513-8.429-3.713.82 3.32 1.639 6.639 4.533 12.027Zm-76.773-51.705-1.434-5.565c-.906.569-2.491 1.018-2.616 1.723-2.518 14.272 6.14 26.283 8.259 39.648.187 1.176 1.213 2.22 1.85 3.326.747-1.635 1.785-3.201 2.193-4.915 2.741-11.493.732-21.754-8.252-34.217Zm51.873-6.204-4.339-3.948c-3.237 9.526-12.248 17.126-10.033 28.382.604 3.072 3.069 5.781 4.679 8.657 1.156-2.649 3.377-5.34 3.275-7.94-.353-9.005-.234-17.521 6.418-25.151ZM171.58 259.388c10.058-6.582 5.173-16.802 6.038-25.563.098-1.002-3.132-3.437-3.521-3.189-1.783 1.139-4.281 2.92-4.39 4.607-.473 7.333-.202 14.713 1.873 24.145Zm89.223 10.341 1.378 5.51c3.823-10.326 12.752-6.959 20.255-7.75 1.212-.128 3.015-2.518 3.035-3.885.021-1.391-1.835-4.031-2.848-4.022-7.745.077-16.467-2.765-21.82 10.147Zm-95.448-95.137c-6.531 3.938-14.527 19.919-12.251 24.883.434.946 2.523 2.158 3.051 1.857 1.869-1.066 4.336-2.448 4.879-4.225 1.833-6.007 2.938-12.235 4.321-22.515Zm176.371 64.114c.488.485 1.151.886 1.433 1.47 1.743 3.624 3.399 7.288 5.084 10.939 1.286-4.616 3.545-9.252 3.451-13.839-.048-2.326-4.342-4.565-6.717-6.843-1.775 2.068-3.55 4.136-3.251 8.273Zm-26.974-97.205c-3.753 2.361-7.838 4.359-11.071 7.29-1.079.977.02 4.343.124 6.617 2.266-1.183 4.853-2.007 6.705-3.653 1.805-1.602 2.859-4.044 4.242-10.254Zm53.949 78.591-3.955 12.603c.972.28 2.738.927 2.803.787 1.871-4.019 3.721-8.066 5.166-12.248.262-.758-1.248-2.125-4.014-1.142Zm-215.796 12.409 1.32 13.726c.943-4.546 2.284-9.056 2.693-13.649.281-3.156-.729-6.426-1.163-9.645-.95.451-2.453.692-2.726 1.402-.455 1.185-.124 2.671-.124 8.166Zm60.174-31.023c-.692 1.739-2.269 3.712-1.881 5.163.692 2.583 2.572 4.848 3.956 7.246 1.383-2.398 3.264-4.663 3.955-7.246.388-1.451-1.189-3.424-6.03-5.163Zm72.624 113.751 7.218 5.214c-.707-2.802-.712-6.105-2.281-8.293-2.563-3.574-2.993-3.267-4.937 3.079Zm-107.899-16.545 4.15-8.028-4.757-2.313c-1.181 2.473-2.818 4.852-3.363 7.458-.305 1.456 1.204 3.288 3.97 2.883Zm153.548-74.456c-2.767.02-5.538-.009-8.285.229-.116.01-.116 3.668 0 3.678 2.747.239 5.518.21 8.285-3.907Zm-161.847-12.409 4.76 6.205 3.539-3.528c-2.075-1.581-4.149-3.163-8.299-2.677Zm6.224 97.206c-.691 4.325-1.517 8.636-1.973 12.986-.106 1.007 1.058 2.146 1.637 3.224.804-1.42 2.141-2.783 2.302-4.273.353-3.256.109-6.576-1.966-11.937Zm93.374 31.023 7.984.315-1.848-6.431-6.136 6.116Zm-53.949-148.911c0-1.298.275-2.673-.062-3.878-.587-2.095-1.553-4.084-2.36-6.117-.576 1.71-1.709 3.458-1.594 5.12.163 2.348 1.249 4.632 4.016 4.875Zm139.022 6.205c.692-2.961 1.575-5.896 1.965-8.896.126-.97-1.042-2.107-1.618-3.168-.807 1.384-1.999 2.685-2.324 4.174-.406 1.859-.098 3.874 1.977 7.89Zm-93.373 97.205 1.127 5.26 6.224-6.205c-1.758-.374-3.517-.749-7.351.945Zm87.148-24.818c-.474-.474-.885-1.064-1.449-1.378-.344-.191-1.324-.022-1.342.092-.506 3.158-1.031 6.323-1.227 9.508-.025.407 1.741.923 2.677 1.388.447-1.825.895-3.649 1.341-9.61Zm-33.199-99.274c0 1.299-.277 2.674.061 3.879.587 2.094 1.553 4.084 2.36 6.117.576-1.71 1.71-3.458 1.595-5.12-.163-2.348-1.25-4.633-4.016-4.876ZM206.854 141.5c1.521 2.069 2.944 4.226 4.676 6.101.234.253 2.016-.913 3.08-1.423-1.893-2.248-3.787-4.497-7.756-4.678Zm132.798 62.046c0 1.299-.278 2.674.06 3.879.588 2.095 1.554 4.083 2.361 6.117.576-1.71 1.71-3.458 1.594-5.12-.162-2.348-1.249-4.632-4.015-4.876Zm-37.35 119.956-2.49-1.655c.139 1.241.277 2.482 2.49 1.655Zm-14.525-171.661-1.66 2.482c1.246-.138 2.49-.275 1.66-2.482Z"/>
    </svg>
);

const Pentagram: React.FC<IconSvgProps> = ({
                                               size = 32,
                                               width,
                                               height,
                                               ...props
                                           }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M310.132 299.456c2.278-.549 5.309-.718 5.37-.37.42 2.406.119 4.925.268 7.395.067 1.114.637 2.199.979 3.297 1.413-.439 3.171-.488 4.187-1.379 8.534-7.488 16.566-15.593 25.459-22.617 13.288-10.496 27.147-20.273 40.8-30.306.567-.417 1.828-.055 2.225-.517 2.848-3.326 5.556-6.771 8.308-10.178-3.802-.579-7.645-1.841-11.399-1.619-15.526.917-31.058 1.648-46.431 4.63-5.897 1.144-12.257-.085-18.406-.233-.266-5.261-.638-10.518-.769-15.783-.133-5.367-.094-10.742-.017-16.112.216-15.225-1.896-30.14-4.782-45.083-1.89-9.782-1.817-19.937-2.732-29.916-.128-1.399-.875-2.742-1.337-4.11-.585 1.411-.907 3.018-1.795 4.202-10.183 13.577-20.689 26.92-30.637 40.665-12.156 16.794-23.901 33.885-35.746 50.902-4.896 7.034-9.633 14.18-14.357 21.332-3.823 5.789-10.091 8.192-16.084 9.008-29.403 4.001-56.839 13.925-83.688 25.952-1.459.654-3.38.279-5.087.383.824-1.703 1.184-4.123 2.543-4.996 12.038-7.735 24.729-13.668 38.909-17.034 12.982-3.082 25.384-8.567 38.107-12.795 2.581-.858 5.649-.344 8.153-1.324 3.91-1.531 8.872-2.847 11.053-5.909 13.796-19.373 26.057-39.887 40.571-58.681 13.667-17.696 25.692-36.281 37.068-55.408 2.372-3.987 16.62-8.222 20.794-6.242 1.649.782 2.933 2.7 3.908 4.377.539.927.046 2.425.104 3.662.817 17.423.343 35.038 2.876 52.21 2.159 14.63 1.745 29.098 2.03 43.653.131 6.671 2.947 6.81 8.658 5.542 4.402-.978 9.382.947 14.116 1.032 2.835.052 5.686-1.387 8.536-1.411 16.974-.144 33.952-.214 50.921.09 2.418.044 4.796 2.257 7.192 3.466-1.481 2.097-2.525 4.82-4.509 6.195-19.903 13.785-40.453 26.694-59.793 41.213-12.322 9.251-23.033 20.672-34.239 31.358-7.5 7.151-7.051 17.285-7.977 26.347-1.687 16.509-1.821 33.173-2.825 49.759-.131 2.178-1.069 5.508-2.526 6.094-1.75.703-5.267-.229-6.621-1.718-11.518-12.672-26.155-22.358-35.556-37.069-1.726-2.701-4.26-4.926-6.594-7.195-9.624-9.353-9.974-9.628-18.925.064-12.318 13.34-23.871 27.385-36.193 40.721-4.867 5.268-10.73 9.695-16.487 14.045-5.062 3.824-8.227 1.913-8.723-4.635-.598-7.889 4.341-13.97 7.112-20.617 5.289-12.689 11.651-24.942 17.816-37.251 2.268-4.527 5.477-8.501 5.097-14.102-.103-1.511 2.088-3.178 3.226-4.773 1.347 1.713 3.434 3.269 3.843 5.182.455 2.125-.096 4.845-1.122 6.839-3.866 7.515-8.325 14.726-12.144 22.262-4.837 9.548-9.315 19.28-13.777 29.01-.347.758.349 2.617 1.103 3.076.726.441 2.531.12 3.218-.537 5.327-5.096 10.991-9.958 15.603-15.655 7.165-8.851 12.289-19.839 20.776-26.953 5.486-4.598 8.122-12.722 17.379-14.309 4.244-.728 6.111-.923 8.798 1.775 12.502 12.548 25.018 25.083 37.653 37.497 1.602 1.573 3.941 2.401 5.938 3.573 1.249-2.371 3.596-4.758 3.564-7.112-.173-12.431 2.194-24.41 4.991-36.409.465-1.992 2.227-6.245-3.137-6.198-.549.005-1.826-2.155-1.565-2.588 4.834-8.01 1.204-16.771 2.528-25.041.134-.837 2.336-1.343 4.2-2.623Z"
        />
        <path
            d="M210.732 315.575a918.951 918.951 0 0 1 7.646 8.488c-4.818 2.77-6.893-2.106-10.305-3.38-12.998-4.856-26.164-8.954-40.13-11.011-15.096-2.223-30.682-1.736-45.29-7.096-.723-.265-1.954.043-2.267-.397-1.81-2.551-8.586-1.747-5.664-7.042.973-1.765 5.906-3.166 7.899-2.26 11.33 5.153 23.086 6.394 35.38 7.684 17.895 1.877 35.612 6.457 52.731 15.014ZM224.399 171.751c7.06-11.178 13.334-21.842 20.04-32.228 1.972-3.055 4.918-5.678 7.924-7.779 1.206-.843 3.775.257 5.724.472-.668 1.244-1.229 2.56-2.02 3.721-10.11 14.83-20.228 29.655-30.541 44.345-.229.326-2.77-.965-4.233-1.502.828-2.136 1.656-4.273 3.106-7.029ZM163.518 368.889c1.319-4.382 2.49-8.419 7.331-6.055 3.415 1.668 4.554 4.976 2.164 9.144-3.573 6.233-6.35 12.915-9.682 19.293-.593 1.134-2.554 2.624-3.329 2.356-1.335-.462-3.195-2.22-3.143-3.358.174-3.85.749-7.766 1.827-11.467.943-3.231 2.773-6.205 4.832-9.913ZM355.483 364.549c-.144 9.102 1.378 17.319-4.952 23.849-.772.795-1.304 1.823-1.947 2.742-.874-.871-2.143-1.599-2.524-2.648-.524-1.447-.627-3.16-.474-4.717.733-7.471 1.424-14.958 2.599-22.365.24-1.515 2.492-2.711 3.816-4.055 1.161 1.985 2.322 3.97 3.482 7.194ZM351.134 130.836c4.071-8.43 4.874-8.731 9.546-2.726 3.03 3.895 5.38 8.343 7.782 12.681.805 1.452.831 3.334 1.213 5.019-1.931.075-4.324.898-5.691.059-2.343-1.44-4.184-3.805-5.981-5.99-2.218-2.696-4.177-5.606-6.869-9.043Z"
        />
    </svg>
);
const Smile: React.FC<IconSvgProps> = ({
                                           size = 32,
                                           width,
                                           height,
                                           ...props
                                       }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M145.594 326.14c-1.086-1.907-1.444-3.437-1.908-4.933-.833-2.683-1.037-5.129 2.364-6.094 2.814-.799 3.892.773 5.03 3.202 2.169 4.627 4.86 9.015 7.421 13.452 5.06 8.765 12.311 15.591 19.706 22.32 4.14 3.768 7.984 7.863 11.959 11.813.344.342.599.852 1.008 1.038 7.112 3.25 14.081 6.907 21.417 9.539 5.895 2.116 12.179 3.736 18.397 4.235 11.403.915 22.635-.035 33.918-3.167 7.918-2.197 14.228-7.295 21.997-9.466 5.29-1.479 7.213-7.14 10.997-10.579 2.176-1.977 3.812-4.537 5.829-6.707.517-.555 1.557-.623 2.356-.915.085.855.513 1.869.202 2.54-3.549 7.642-8.656 14.241-15.365 19.194-12.523 9.244-26.606 14.564-42.281 15.917-15.08 1.301-29.748-1.52-43.725-5.904-9.021-2.83-16.69-9.978-24.95-15.214-1.059-.671-2.004-1.517-3.041-2.224-13.493-9.194-22.466-22.167-30.231-36.147-.246-.444-.285-1.002-1.1-1.9ZM154.432 178.89c-9.264-2.662-17.645-5.496-24.882-10.795-6.038-4.42-11.868-9.131-17.678-13.852-1.072-.871-1.677-2.366-2.371-3.641-1.165-2.141-.212-3.002 1.975-3.358 2.796-.456 4.831-.482 7.473 1.809 5.348 4.637 11.511 8.385 17.546 12.165 8.121 5.087 16.458 9.158 26.35 10.685 4.933.761 10.209 1.202 14.974 2.651 4.998 1.521 9.979 1.145 14.516.542 8.397-1.117 16.902 2.77 25.088-.987.938-.43 2.002-.607 3.025-.823 1.374-.291 2.473-3.643 3.962-.644.317.64-1.615 2.639-2.776 3.73-6.336 5.949-13.663 7.816-22.419 6.762-14.643-1.762-29.396-2.616-44.783-4.244ZM405.742 215.613c5.847-1.488 11.158-2.833 16.469-4.178 1.15-.292 2.299-.586 3.448-.879-.441 1.161-1.077 2.287-1.29 3.487-.948 5.363-6.184 4.949-9.526 6.592-3.396 1.67-7.67 1.721-11.597 2.11-7.371.732-14.801.934-22.147 1.834-11.336 1.39-22.433-.308-33.212-3.119-12.089-3.154-23.323-8.809-33.719-15.771-4.902-3.282-9.236-7.452-13.6-11.469-1.079-.993-1.268-2.955-1.866-4.471 1.589-.33 3.245-1.112 4.75-.887 2.397.359 5.41.702 6.9 2.26 4.906 5.125 10.41 9.238 16.397 13.024 11.955 7.559 23.843 12.874 39.459 13.28 11.213.292 22.649.908 33.858-1.402 1.661-.343 3.424-.19 5.676-.411Z"
        />
    </svg>
);
const Circle: React.FC<IconSvgProps> = ({
                                            size = 32,
                                            width,
                                            height,
                                            ...props
                                        }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#a)">
            <path
                d="M68.233 280.495c1.053 11.509 1.807 22.52 4.735 33.421 2.03 7.555 5.388 13.849 10.677 19.075 3.017 2.98 6.255 6.482 11.265 6.463.478-.002 1.064.624 1.421 1.095 3.513 4.632 8.788 4.801 13.78 5.063 6.692.35 13.418.196 20.125.043 3.639-.083 6.849-1.397 10.061-3.387 2.386-1.479 5.754-1.381 8.692-1.948.339-.066 1.001.022 1.046.176 1.958 6.63 9.29 7.641 13.06 12.567 3.832 5.005 8.992 8.97 13.303 13.638 4.618 5.002 10.426 6.739 16.888 6.852 9.39.165 18.274-1.498 26.733-6.104 4.176-2.275 6.561-5.7 8.09-9.429 1.552-3.786 4.163-3.094 6.756-3.285 2.222-.164 4.219-.385 5.289 2.808 1.599 4.772 6.657 6.393 10.513 8.705 8.136 4.879 16.582 9.241 24.488 14.531 1.274.853 2.845 1.334 4.344 1.762 1.91.547 4.052.519 5.794 1.359 2.897 1.398 5.621 1.217 8.617.53 3.686-.845 7.544-.982 11.192-1.943 3-.79 6.445-1.664 8.557-3.687 4.263-4.082 8.643-3.279 13.145-1.545 3.097 1.193 6.062 2.9 8.822 4.768 9.842 6.66 20.755 11.287 31.21 16.784 3.177 1.67 6.409 2.225 9.986 1.837 1.731-.187 3.59.891 5.335.742 4.434-.379 9.018-.546 13.208-1.861 6.332-1.987 12.676-4.344 18.452-7.556 4.408-2.451 8.287-6.149 11.783-9.872 5.169-5.504 7.687-12.554 8.545-19.907.655-5.61.131-11.358.131-17.045 0-1.271-.285-2.638.096-3.783.269-.808 1.441-1.317 2.21-1.959.13.717.43 1.45.364 2.149-.468 4.981 2.253 9.688.986 14.797-1.391 5.614-2.096 11.401-3.547 16.996-.674 2.599-1.959 5.322-3.733 7.302-6.056 6.758-12.45 13.387-20.8 17.221-12.623 5.795-25.714 8.508-39.92 6.538-8.708-1.207-15.661-5.28-22.937-9.271-5.522-3.028-11.057-6.038-16.647-8.939-2.604-1.351-5.26-2.78-8.065-3.508-2.131-.553-4.968-.842-6.734.129-4.881 2.683-9.838 4.224-15.426 4.347-2.942.065-5.872 1.65-8.793 1.607-11.125-.161-21.111-3.668-29.881-10.728-3.062-2.465-6.517-4.682-10.142-6.156-6.456-2.625-12.415-5.684-16.803-11.336-.349-.45-3.094-.017-3.36.597-2.555 5.903-7.614 8.214-13.054 10.829-6.288 3.023-12.9 3.743-19.429 5.384-9.326 2.344-16.513-1.131-23.389-6.5-2.558-1.997-4.134-5.27-7.736-5.903-3.418-6.559-11.137-8.198-15.607-13.649-1.736-2.116-4.399-3.517-6.779-5.023-.56-.354-1.715.081-2.543.331-2.821.85-5.698 1.59-8.412 2.714-8.62 3.573-17.063 1.634-25.796.193-6.413-1.057-12.39-2.631-18.076-5.622-11.88-6.247-20.056-15.12-22.188-29.021-1.601-10.441-4.085-20.747-6.228-31.103-.143-.692-.591-1.465-1.137-1.903-1.885-1.513-3.963-2.791-5.806-4.35-2.961-2.507-5.897-5.059-8.88-7.504-3.906-3.203-6.919-7.935-9.228-12.553-4.606-9.215-7.14-19.074-2.689-29.085 2.53-5.691 5.928-11.022 11.95-14.054 2.658-1.338 5.08-3.221 7.428-5.083 5.332-4.226 11.514-6.943 17.392-10.218 6.95-3.872 14.296-6.167 22.228-6.144 2.988.008 2.54-1.891 1.728-2.955-4.89-6.406-4.83-13.505-3.213-20.804.457-2.062 1.746-3.928 2.545-5.928 1.278-3.199 9.786-12.387 12.175-14.558 4.205-3.822 8.875-6.217 14.461-6.62 6.247-.451 12.335-2.089 18.824-.66 5.488 1.209 9.735 4.299 14.334 6.911 3.586 2.037 4.417 2.297 5.856-1.481 2.584-6.786 8.198-10.495 13.724-14.129 4.057-2.667 8.894-4.112 13.187-6.462 4.307-2.358 8.258-.256 11.278 1.673 3.502 2.237 6.104 6.12 8.562 9.66 1.317 1.894 2.87 2.908 4.541 2.098 2.82-1.368 5.893-1.972 8.408-4.426 8.216-8.017 18.51-11.566 29.812-10.575 7.13.625 13.472 4.412 19.185 8.745 1.488 1.128 2.12 3.335 3.31 4.923 1.518 2.027 2.811 3.254 5.265.435 6.943-7.976 16.335-10.163 26.419-9.732 11.366.485 20.426 6.473 26.395 16.859 1.113 1.937 2.317 2.807 4.205.516 5.69-6.903 13.476-8.554 21.924-8.437 5.496.075 10.766.301 16.129 2.518 7.177 2.968 11.413 8.82 16.049 14.201 3.281 3.809 5.909 8.37 7.471 13.389.233.75 2.259 1.113 3.512 1.348 8.271 1.556 16.684 2.565 24.771 4.776 2.849.779 5.402 2.887 8.705 3.576 2.715.566 5.014 3.135 7.492 4.824.172.117.33.276.448.448 2.125 3.076 5.072 5.326 7.676 7.922 2.456 2.45 3.812 5.987 5.746 8.985.56.869 1.359 1.64 2.193 2.264 3.587 2.685 5.309 6.532 6.777 10.56.335.92.592 1.903 1.106 2.716 2.093 3.31 2.463 6.833-.074 9.424-3.413 3.485-6.113 8.138-11.381 9.214-2.669.546-1.481 2.309-.979 2.981 1.383 1.847 3.169 3.405 4.861 5.008 10.935 10.36 17.575 23.227 21.21 37.612.904 3.579.507 7.852-.494 11.473-2.463 8.911-4.234 18.209-11.047 25.314-2.378 2.48-4.176 5.506-6.435 8.113-5.473 6.319-12.302 7.482-20.043 5.039-3.601-1.137-3.536-1.057-3.75 2.463-.094 1.547-.636 3.067-.975 4.6-.561-1.523-1.219-3.017-1.665-4.573-2.301-8.024-.763-11.912 8.829-8.089 5.034 2.007 9.251.56 14.086-2.601 6.903-4.513 10.46-10.73 13.613-17.68 6.136-13.527 7.007-27.158-.962-40.09-5.534-8.984-11.418-17.896-19.445-25.033-1.063-.945-2.259-1.741-3.335-2.673-1.302-1.127-2.543-2.325-3.809-3.493 1.702-1.379 2.593-3.515 5.393-3.836 2.849-.327 5.898-1.313 8.272-2.893 5.95-3.962 6.116-9.261 2.313-15.71-3.896-6.608-9.038-12.648-14.421-18.171-8.622-8.846-19.306-13.994-31.774-15.296-5.805-.605-11.595-1.559-17.3-2.78-1.43-.306-2.868-2.058-3.663-3.498-1.219-2.207-1.443-5.028-2.859-7.049-5.857-8.359-11.602-17.056-22.678-19.237-9.256-1.823-18.055-.12-26.254 4.37-2.633 1.442-4.92 3.538-7.293 5.427-2.617 2.083-4.201 1.819-5.746-1.196-1.612-3.144-2.621-6.794-4.878-9.355-2.304-2.616-5.554-5.083-8.84-5.994-5.041-1.398-10.458-1.786-15.732-1.909-6.015-.139-11.196 2.591-15.721 6.435-1.772 1.504-3.286 3.307-4.973 4.915-3.137 2.989-5.416 2.785-7.404-.815-4.013-7.269-9.696-12.204-17.937-14.295-7.925-2.011-15.216-.782-22.101 3.268-3.214 1.891-7.109 3.172-7.948 7.736-.131.711-1.916 1.295-3.029 1.595-.988.266-2.166-.167-3.15.108-1.488.414-3.095.934-4.201 1.916-.402.357.394 2.202.803 3.309 1.575 4.257 4.231 8.21 3.865 13.014-.298 3.916-.487 7.879-1.267 11.711-.767 3.766-7.231 4.756-9.89 4.012-.685-.192-1.687-1.255-1.601-1.756.154-.895 1.022-2.371 1.594-2.372 2.819-.004 4.158-2.157 5.349-3.879 1.169-1.69 2.096-4.206 1.774-6.133-.674-4.042-2.209-7.945-3.456-11.884-.38-1.2-.8-3.17-1.509-3.318-1.459-.305-3.212.151-4.684.712-2.375.905-4.629 2.13-6.914 3.26-.708.35-1.345 1.152-2.029 1.17-.931.023-1.875-.508-2.813-.801.374-.687.578-1.61 1.151-2.023 2.918-2.103 5.85-4.209 8.931-6.056 3.713-2.226 4.051-2.915 2.202-6.618-3.421-6.85-9.422-9.863-16.42-7.132-8.977 3.503-16.472 9.014-21.671 17.62-1.842 3.048-.636 5.016.184 7.24 1.013 2.742 2.595 5.303 4.145 7.81 1.171 1.892 1.044 3.312-.526 4.891-1.212 1.22-2.186 1.992-3.442.192-1.721-2.466-3.819-4.757-5.066-7.444-2.06-4.438-5.197-7.49-9.596-9.4-4.132-1.794-8.203-3.746-12.405-5.358-5.411-2.076-10.824-.131-16.252.305-9.589.771-14.746 6.977-19.948 14.205-3.22 4.474-4.898 8.997-4.672 13.954.28 6.175 2.761 11.948 6.644 16.875 1.073 1.363 2.782 2.354 4.384 3.141 2.631 1.293 3.585 3.248 3.198 6.044-.346 2.493-1.678 3.311-3.881 1.734-9.577-6.859-20.02-4.471-29.918-2.044-5.915 1.451-11.46 5.296-16.57 8.915-5.789 4.101-12.198 7.496-16.886 13.063-4.024 4.777-5.724 9.907-4.902 16.417.818 6.48 2.02 12.427 5.447 18.175 3.074 5.157 7.201 8.948 11.834 12.34 3.67 2.686 6.85 6.221 11.61 7.289.504.113.669 1.734.99 3.106Z"/>
            <path
                d="M342.99 265.205c-1.864-3.662-3.162-6.933-4.723-10.073-1.756-3.529 1.943-3.475 3.175-4.291 2.305-1.525 1.533 1.106 2.067 2.215 4.224 8.761 10.097 15.845 19.474 19.634 6.1 2.464 10.861-.006 15.416-3.416 2.174-1.627 3.871-3.88 5.905-5.716.368-.333 1.324-.015 2.009.002-.038.536.083 1.151-.139 1.594-2.811 5.614-6.847 10.599-12.922 11.961-6.289 1.41-13.156 1.11-18.926-2.536-3.937-2.486-7.279-5.916-11.336-9.374ZM271.94 233.278c-5.847-.713-10.729-3.028-15.146-5.889-5.08-3.292-6.389-8.816-5.925-14.592.241-3 2.451-3.841 5.345-3.892 1.953-.036 1.956.802 1.78 2.119-1.01 7.56.798 9.547 7.15 14.437 5.701 4.388 11.724 4.353 18.018 4.107 2.028-.079 4.011-1.467 6.004-2.282 1.087-.445 2.127-1.015 3.235-1.393.636-.217 1.365-.163 2.052-.231-.107.687.003 1.526-.356 2.037-2.448 3.492-6.378 5.32-10.069 6.214-3.616.876-7.739-.338-12.088-.635ZM271.939 311.073c-1.199-1.199-1.833-2.144-2.716-2.667-6.377-3.77-6.08-9.845-5.885-16.053.122-3.897 2.876-2.247 4.531-2.326 2.363-.113 1.365 1.075 1.07 2.717-1.321 7.359 6.845 18.674 15.731 17.978 5.176-.406 10.169-.605 13.968-4.75.27-.294.602-.614.965-.725 1.576-.479 3.175-.885 4.765-1.317-.872 1.436-1.467 3.177-2.66 4.26-6.701 6.08-14.379 8.634-23.313 5.716-2.043-.668-4.006-1.582-6.456-2.833Z"/>
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h534v534H0z"/>
            </clipPath>
        </defs>
    </svg>
);
const Line: React.FC<IconSvgProps> = ({
                                          size = 32,
                                          width,
                                          height,
                                          ...props
                                      }) => (
    <svg
        width={size || width}
        height={size || height}
        style={props.style}
        opacity={props.opacity}
        fill={props.fill}
        viewBox="0 0 534 534"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M311.207 234.886c5.985 1.657 11.333 2.317 16.524 3.605 17.224 4.275 35.491 3.732 52 11.294.391.179 1.069-.17 1.386.052 2.98 2.091 7.47 3.716 8.436 6.536 1.055 3.083-7.061 6.017-12.61 4.535a5284.782 5284.782 0 0 1-30.588-8.265c-6.785-1.854-13.474-4.143-20.341-5.593-10.484-2.215-22.285-1.579-31.347-6.326-12.47-6.533-26.056-4.463-38.725-9.245-14.786-5.579-31.281-6.449-46.828-10.213-19.243-4.658-38.265-10.226-57.408-15.307-3.015-.8-6.146-1.284-9.255-1.573-2.81-.261-6.347 1-8.341-.296-3.23-2.097-5.459-5.738-8.11-8.728 2.864-1.748 5.538-4.171 8.648-5.052 3.051-.864 7.45-1.48 9.699.067 14.663 10.084 33.737 7.035 48.374 16.796 24.461 2.204 47.011 12.357 70.872 17.092 15.673 3.111 31.272 6.594 47.614 10.621ZM318.302 384.109c8.829 5.318 17.853 8.22 24.512 15.561 2.277 2.51 7.491 2.13 11.091 3.695 9.223 4.011 18.157 8.714 27.47 12.485 7.297 2.955 15.091 4.665 22.435 7.521 1.929.75 4.364 3.846 4.18 5.617-.357 3.447-1.863 7.19-7.131 5.66-2.169-.631-5.659.661-6.771-.554-7.181-7.844-18.029-6.864-26.544-11.638-8.305-4.657-17.975-6.794-26.739-10.724-13.175-5.908-26.133-12.312-39.077-18.722-4.733-2.343-9.052-5.516-13.752-7.938-10.514-5.42-21.279-10.36-31.703-15.943-15.51-8.306-30.847-16.939-46.141-25.637-1.19-.677-1.408-2.993-2.188-4.49-.553-1.059-1.292-2.019-1.948-3.024 1.281-.265 2.828-1.136 3.802-.706 23.996 10.601 47.931 21.34 71.876 32.055 11.973 5.357 23.946 10.714 36.628 16.782ZM338.88 121.902c11.45-5.402 22.423-8.33 31.957-15.558 9.22-6.989 21.749-8.08 33.668-6.97.7.066 1.993 3.499 1.519 4.834-2.613 7.366-8.151 11.177-15.896 12.056-3.076.349-6.431.563-9.079 1.95-12.888 6.75-26.443 11.66-40.532 14.971-9.967 2.342-20.087 5.16-30.205 5.448-12.842.366-24.503 4.898-36.686 7.501-16.287 3.479-32.429 6.208-48.251-1.574-1.243-.611-1.926-2.366-2.87-3.589 1.022-.672 2.024-1.883 3.07-1.924 5.185-.2 10.387-.248 15.572-.059 10.523.384 20.408-2.551 30.501-4.946 8.747-2.077 17.972-2.048 26.841-3.714 13.058-2.452 25.988-5.584 40.391-8.426Z"
        />
    </svg>
);
const ProgramIcon: React.FC<IconSvgProps> = ({
                                                 size = 32,
                                                 width,
                                                 fill = "#1D262D",
                                                 height,
                                                 ...props
                                             }) => (
    <svg
        viewBox="0 0 500 500"
        // xml:space="preserve"
        enableBackground="new 0 0 500 500"
        {...props}
    >
        <g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M113.741 146.683c-.322.167-.503.339-.681.337-.929-.01-1.856-.063-2.865-.106-2.158-2.832-3.789-5.966-5.312-9.135-5.677-11.816-11.475-23.569-17.67-35.123-2.359-4.396-4.816-8.74-7.215-13.116-.19-.346-.265-.755-.439-1.275.719-.373 1.329-.734 1.976-1.012.878-.376 1.672-.118 2.226.606.63.821 1.226 1.687 1.708 2.6 3.354 6.347 6.752 12.669 9.986 19.076 4.028 7.986 7.894 16.058 11.868 24.071 1.617 3.259 3.325 6.474 5.023 9.693.579 1.099 1.184 2.175 1.395 3.384zm-5.951 4.562c-1.459.212-2.204-.689-2.786-1.686-1.832-3.136-3.757-6.234-5.364-9.485-2.438-4.936-4.535-10.04-6.968-14.979-3.581-7.268-7.327-14.454-11.009-21.673-2.074-4.07-4.161-8.134-6.187-12.094.271-1.251 1.23-1.501 2.143-2.004.283.225.698.407.883.723 1.256 2.152 2.554 4.289 3.672 6.513a6477.37 6477.37 0 0 1 14.883 29.847c2.723 5.491 5.381 11.013 8.112 16.501.692 1.392 1.44 2.78 2.347 4.037 1.056 1.463.983 2.849.274 4.3zm-4.219.597c-.786.82-1.491 1.558-2.323 2.428-.452-.619-.954-1.137-1.258-1.752-2.995-6.06-5.993-12.119-8.916-18.212-2.79-5.813-5.563-11.638-8.211-17.515-2.565-5.691-4.963-11.454-7.432-17.187-.905-2.102-1.834-4.194-2.683-6.318-.36-.903.171-1.345 1.221-1.453.623 1.229 1.275 2.513 1.921 3.799 3.08 6.133 6.202 12.247 9.225 18.408 2.745 5.602 5.48 11.213 8.041 16.901 2.989 6.642 5.927 13.297 9.805 19.489.265.421.402.922.61 1.412z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M103.1 156.497c-.03-1.249.312-2.063 1.253-2.541.84-.431 1.689-.816 2.66-.37.281.129.58.23.882.302 1.715.403 2.259 0 2.411-1.77.062-.721.094-1.444.183-2.162.021-.184.206-.347.426-.693 1.425-.389 2.881.277 4.443.3.806 3.564 1.087 7.049 1.302 10.518-1.753 1.077-3.405 2.089-5.081 3.117-1.683-.9-6.158-4.425-8.479-6.701z"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M68.52 82.876c-.389-.326-.502-.377-.542-.461-1.99-4.307-1.594-5.291 2.838-6.803 1.656-.564 3.325-1.154 5.118-1.01 1.174.68 1.716 1.789 2.362 3.043-.529.316-.997.712-1.538.902-2.926 1.028-5.804 2.138-8.238 4.329z"
                        fill="#FFA1BA"
                    />

                    <path
                        d="m71.595 90.27-.661-1.702c.933-1.3 2.261-1.958 3.558-2.554 2.065-.948 4.201-1.75 6.338-2.53.79-.288 1.076.346 1.228 1.186-2.608 1.909-5.689 3.153-8.465 4.905-.498.314-1.137.404-1.998.695zm-2.184-3.143c-.591-1.054-.648-1.882.167-2.638 2.505-2.328 5.574-3.505 8.836-4.249.913-.208 1.64.083 1.87 1.313-1.847.806-3.77 1.544-5.594 2.473-1.742.886-3.38 1.973-5.279 3.101z"
                        fill="#D4D4D4"
                    />
                </g>
                <path
                    d="M70.798 73.467c1.498-.318 2.916-.643 4.344-.917 1.38-.265 2.435.293 3.231 1.404.545.762 1.156 1.484 1.616 2.294 1.589 2.8 3.162 5.609 4.671 8.453 2.336 4.406 4.52 8.896 6.941 13.254 4.397 7.914 8.552 15.951 12.555 24.068 2.714 5.503 5.373 11.036 8.129 16.518a88.197 88.197 0 0 0 3.82 6.794c.565.912 1.006 1.806 1.144 2.852.806 6.082 1.657 12.158 2.384 18.25.347 2.917-1.104 3.966-3.729 2.688-1.67-.813-3.257-1.861-4.729-3.001-2.3-1.784-4.457-3.749-6.704-5.605-.879-.725-1.765-1.507-2.777-1.989-1.213-.577-2.005-1.438-2.584-2.576-1.983-3.893-4.039-7.75-5.926-11.689-3.685-7.695-7.353-15.4-10.88-23.166-2.623-5.779-5.022-11.658-7.503-17.502-1.016-2.394-1.96-4.82-2.99-7.208-.322-.748-.789-1.44-1.242-2.124-1.737-2.625-3.078-5.41-3.626-8.542-.103-.592-.338-1.162-.522-1.739-.473-1.485-1.054-2.944-1.4-4.458-.416-1.812.251-3.328 1.878-4.247 1.262-.708 2.629-1.229 3.899-1.812zm42.943 73.216c-.211-1.209-.816-2.284-1.396-3.384-1.698-3.219-3.407-6.434-5.023-9.693-3.975-8.014-7.84-16.085-11.868-24.071-3.233-6.407-6.632-12.729-9.986-19.076-.482-.914-1.078-1.779-1.708-2.6-.554-.724-1.348-.983-2.226-.606-.647.278-1.256.64-1.976 1.012.175.52.249.929.439 1.275 2.399 4.375 4.856 8.72 7.215 13.116 6.195 11.554 11.993 23.307 17.67 35.123 1.523 3.169 3.154 6.304 5.312 9.135 1.009.043 1.936.097 2.865.106.179.002.36-.171.682-.337zm-5.951 4.562c.709-1.45.782-2.837-.274-4.302-.907-1.257-1.655-2.645-2.347-4.037-2.73-5.488-5.389-11.01-8.112-16.501a6477.37 6477.37 0 0 0-14.883-29.847c-1.118-2.224-2.416-4.36-3.672-6.513-.185-.316-.6-.498-.883-.723-.913.504-1.873.754-2.143 2.004 2.026 3.96 4.113 8.024 6.187 12.094 3.682 7.219 7.429 14.405 11.009 21.673 2.433 4.939 4.53 10.044 6.968 14.979 1.607 3.251 3.532 6.349 5.364 9.485.582.999 1.327 1.9 2.786 1.688zm-4.219.597c-.208-.491-.345-.991-.61-1.412-3.878-6.192-6.816-12.848-9.805-19.489-2.561-5.688-5.296-11.299-8.041-16.901-3.022-6.162-6.145-12.275-9.225-18.408-.646-1.286-1.299-2.57-1.921-3.799-1.05.108-1.582.55-1.221 1.453.849 2.124 1.777 4.216 2.683 6.318 2.469 5.733 4.867 11.496 7.432 17.187 2.648 5.877 5.421 11.702 8.211 17.515 2.923 6.094 5.921 12.152 8.916 18.212.305.616.807 1.133 1.258 1.752l2.323-2.428zm-.471 4.655c2.321 2.276 6.797 5.801 8.479 6.703 1.676-1.028 3.328-2.04 5.081-3.117-.215-3.47-.497-6.955-1.302-10.518-1.563-.022-3.019-.688-4.443-.3-.22.346-.405.51-.426.693-.089.717-.121 1.441-.183 2.162-.152 1.77-.696 2.172-2.411 1.77a4.782 4.782 0 0 1-.882-.302c-.971-.447-1.819-.061-2.66.37-.941.477-1.283 1.29-1.253 2.539zM68.52 82.876c2.434-2.191 5.313-3.3 8.237-4.33.541-.19 1.009-.585 1.538-.902-.646-1.254-1.188-2.364-2.362-3.043-1.793-.144-3.462.446-5.118 1.01-4.432 1.513-4.828 2.497-2.838 6.803.041.085.154.135.543.462zm3.075 7.394c.861-.29 1.5-.381 1.998-.695 2.775-1.752 5.856-2.997 8.465-4.905-.152-.84-.438-1.474-1.228-1.186-2.137.78-4.273 1.582-6.338 2.53-1.297.596-2.625 1.254-3.558 2.554l.661 1.702zm-2.184-3.143c1.9-1.128 3.538-2.215 5.278-3.102 1.825-.93 3.748-1.667 5.594-2.473-.23-1.229-.957-1.521-1.87-1.313-3.262.744-6.33 1.921-8.836 4.249-.814.757-.758 1.585-.166 2.639z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M165.725 154.531c-1.743-.534-2.968-1.51-4.17-2.485a3163.72 3163.72 0 0 1-15.432-12.617 505.127 505.127 0 0 1-5.962-4.998c-.133-.112-.155-.355-.272-.646.223-.134.447-.37.701-.405 3.492-.489 6.996-.897 10.483-1.427 10.094-1.536 20.249-1.914 30.437-1.649 1.23.031 2.47.288 3.675.575 1.075.256 1.435 1.22.844 2.182-.486.79-1.066 1.533-1.673 2.24-3.587 4.169-7.158 8.356-10.812 12.469-1.994 2.246-4.025 4.483-6.593 6.125-.349.22-.734.38-1.226.636z"
                    fill="#FFC91C"
                />

                <path
                    d="M157.94 152.337c1.313.953 2.551 1.882 3.82 2.767 3.512 2.447 4.608 2.42 8.023-.201.898-.689 1.758-1.431 2.756-2.247 1.712.878 3.091 2.125 4.335 3.487 2.941 3.221 5.816 6.502 8.706 9.769.747.843 1.452 1.722 2.105 2.499-.236.866-.833.788-1.296.822-1.864.138-3.732.263-5.6.319-5.512.171-10.967.882-16.43 1.583-6.077.779-12.169 1.439-18.259 2.112-1.098.121-2.233.29-3.568-.179.354-.75.573-1.422.951-1.988 2.656-3.972 5.297-7.956 8.04-11.867 1.783-2.54 3.827-4.871 6.417-6.876zm-20.778-17.144c1.397.079 2.094.919 2.852 1.584 1.721 1.51 3.346 3.125 5.074 4.626 3.062 2.662 6.172 5.269 9.258 7.9.624.533 1.231 1.085 1.808 1.592-.121.319-.135.566-.265.672-2.923 2.403-5.249 5.326-7.392 8.415-1.837 2.649-3.663 5.308-5.507 7.955-.465.666-.979 1.297-1.611 2.132-.278-.573-.538-.911-.608-1.283-.999-5.207-2.077-10.403-2.917-15.636-.659-4.103-1.056-8.252-1.49-12.389-.288-2.754-.158-3.247.798-5.568zm36.964 15.95c4.432-5.818 9.317-11.019 13.805-16.523.7.33.613.908.609 1.391-.038 5.955 1.128 11.789 1.727 17.68.4 3.925.458 7.885.618 11.832.027.676-.211 1.363-.384 2.389-5.693-5.629-9.877-12.233-16.375-16.769z"
                    fill="#FFC91C"
                />

                <path
                    d="M172.317 128.035c3.188-.196 7.248-.389 11.283.211 1.318.196 2.659.533 3.877 1.062 1.824.793 2.96 2.249 3.219 4.288.093.722.257 1.446.256 2.168-.007 5.542 1.126 10.959 1.681 16.44.458 4.547.612 9.126.869 13.693.039.72-.039 1.459-.156 2.173-.39 2.406-1.246 3.273-3.64 3.498-2.278.212-4.567.294-6.852.436-2.907.179-5.824.262-8.718.559-4.654.476-9.294 1.104-13.941 1.649-4.442.522-8.882 1.056-13.331 1.516a25.32 25.32 0 0 1-4.362.085c-2.604-.183-3.354-1.117-3.753-3.654a295.465 295.465 0 0 0-2.209-12.271c-1.295-6.438-1.965-12.955-2.59-19.477-.135-1.424.079-2.9.282-4.331.292-2.06 1.636-3.303 3.525-3.986.679-.247 1.4-.497 2.11-.522 2.932-.098 5.758-.81 8.62-1.325 8.468-1.522 12.401-1.817 23.83-2.212zm-6.592 26.496c.492-.255.877-.416 1.224-.637 2.568-1.642 4.599-3.879 6.593-6.125 3.653-4.112 7.224-8.299 10.812-12.469.607-.707 1.187-1.45 1.673-2.24.591-.962.231-1.926-.844-2.182-1.205-.287-2.445-.544-3.675-.575-10.188-.265-20.343.113-30.437 1.649-3.486.53-6.991.938-10.483 1.427-.254.035-.478.271-.701.405.117.291.14.534.272.646a505.127 505.127 0 0 0 5.962 4.998 3212.288 3212.288 0 0 0 15.432 12.617c1.204.976 2.429 1.952 4.172 2.486zm-7.785-2.194c-2.591 2.004-4.634 4.335-6.416 6.876-2.742 3.911-5.383 7.895-8.04 11.867-.378.566-.598 1.238-.951 1.988 1.335.469 2.47.3 3.568.179 6.09-.672 12.182-1.333 18.259-2.112 5.463-.701 10.918-1.412 16.43-1.583 1.868-.056 3.736-.182 5.6-.319.463-.035 1.06.044 1.296-.822-.653-.776-1.359-1.656-2.105-2.499-2.891-3.267-5.765-6.548-8.706-9.769-1.244-1.362-2.623-2.608-4.335-3.487-.997.816-1.857 1.558-2.756 2.247-3.415 2.621-4.512 2.648-8.023.201-1.27-.884-2.508-1.814-3.821-2.767zm-20.778-17.144c-.956 2.321-1.086 2.813-.797 5.567.434 4.137.832 8.286 1.49 12.389.84 5.233 1.918 10.429 2.917 15.636.07.373.33.71.608 1.283.632-.834 1.146-1.466 1.611-2.132 1.844-2.646 3.669-5.305 5.507-7.955 2.142-3.089 4.469-6.012 7.392-8.415.13-.106.144-.353.265-.672-.577-.507-1.184-1.059-1.808-1.592-3.086-2.632-6.197-5.239-9.258-7.9-1.728-1.501-3.353-3.117-5.074-4.626-.759-.664-1.455-1.503-2.853-1.583zm36.964 15.95c6.498 4.537 10.682 11.141 16.374 16.769.173-1.026.412-1.713.384-2.389-.159-3.947-.218-7.907-.618-11.832-.599-5.891-1.766-11.725-1.727-17.68.004-.482.091-1.061-.609-1.391-4.487 5.504-9.372 10.705-13.804 16.523z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M374.465 62.398c-1.296-3.653-.52-6.706.904-9.677 1.035-2.161 2.171-4.255 3.769-6.074 2.229-2.535 5.004-3.992 8.338-4.442 8.081-1.088 15.237 1.256 21.643 6.039 4.241 3.168 6.393 7.587 6.681 12.857.102 1.861-.076 3.738-.118 5.608-.02.829-.089 1.665-.013 2.487.106 1.134.815 1.788 1.898 1.5 2.686-.717 4.665.633 6.541 2.121 3.607 2.86 4.693 8.764 2.478 12.763-1.047 1.892-2.589 2.883-4.798 2.875-15.805-.055-31.61-.095-47.417-.124-4.47-.008-8.943.008-13.414.07-3.124.043-6.227-.019-9.313-.615-2.548-.492-5.123-.872-7.698-1.211-2.286-.301-3.507-1.646-3.996-3.776-.564-2.467-.593-4.969-.027-7.422.656-2.847 2.437-4.897 5.251-5.673 4.139-1.141 8.354-1.632 12.573-.233.388.128.803.232 1.205.235.583.006 1.014-.361 1.092-.913.07-.498-.146-1.034-.086-1.535.175-1.432.251-2.911.689-4.267.557-1.712 1.889-2.676 3.762-2.778 1.892-.103 3.72.104 5.509.795 1.332.514 2.611 1.253 4.547 1.39z"
                    fill="#FFFFFF"
                />

                <path
                    d="M357.344 66.438c.366-1.443.584-2.67.987-3.833 1.033-2.995 3.166-4.504 6.289-4.701 2.35-.148 4.503.56 6.839 1.461.158-.676.334-1.241.415-1.82.637-4.544 2.508-8.544 5.338-12.116 2.503-3.162 5.794-5.037 9.76-5.617 9.421-1.378 17.727 1.336 24.913 7.361 5.048 4.234 6.868 9.989 6.655 16.458-.041 1.238-.106 2.476-.151 3.481.414.824 1 .682 1.476.792 7.313 1.704 11.548 8.011 10.347 15.426-1.363 3.634-3.711 7.766-8.779 7.305-1.735-.158-3.508.132-5.264.133-14.971.007-29.942.004-44.912-.015-4.671-.005-9.355.148-14.007-.161-4.555-.302-9.076-1.077-13.607-1.69-3.263-.441-5.187-2.339-5.94-5.542-.73-3.114-.701-6.202.264-9.232 1.123-3.531 3.597-5.765 7.116-6.837 2.103-.641 4.275-.849 6.469-.855 1.861-.002 3.724.002 5.792.002zm17.121-4.04c-1.935-.138-3.215-.876-4.548-1.391-1.789-.691-3.617-.898-5.509-.795-1.873.102-3.205 1.066-3.762 2.778-.438 1.356-.515 2.836-.689 4.267-.06.501.156 1.038.086 1.535-.078.552-.509.918-1.092.913-.402-.003-.817-.107-1.205-.235-4.219-1.399-8.435-.908-12.573.233-2.814.775-4.595 2.826-5.251 5.673-.565 2.453-.536 4.955.027 7.422.489 2.13 1.71 3.475 3.996 3.776 2.575.339 5.15.719 7.698 1.211 3.087.596 6.189.658 9.313.615 4.471-.062 8.944-.078 13.414-.07 15.807.029 31.612.069 47.417.124 2.209.008 3.751-.983 4.798-2.875 2.215-3.999 1.129-9.903-2.478-12.763-1.876-1.488-3.855-2.837-6.541-2.121-1.083.289-1.792-.365-1.898-1.5-.076-.822-.007-1.659.013-2.487.042-1.87.22-3.747.118-5.608-.287-5.271-2.439-9.689-6.681-12.857-6.405-4.783-13.562-7.127-21.643-6.039-3.334.45-6.108 1.907-8.338 4.442-1.598 1.819-2.733 3.914-3.769 6.074-1.423 2.972-2.199 6.025-.903 9.678z"
                    fill={fill}
                />
            </g>
            <path
                d="M256.141 160.897c.227-.21.413-.327.526-.495 4.473-6.64 11.046-10.222 18.431-12.571 1.771-.564 3.623-.996 5.515-.44.784.23 1.309.633.99 1.753-.494.112-1.069.277-1.656.371-5.768.91-10.924 3.251-15.614 6.674-1.939 1.417-3.649 3.059-4.997 5.273.859.704 1.688 1.29 2.408 1.986 2.355 2.268 3.267 5.019 2.456 8.221a5.756 5.756 0 0 1-1.109 2.191c-1.761 2.13-4.387 2.122-6.188.023-1.414-1.646-1.966-3.645-2.092-5.757-.08-1.332-.016-2.673-.016-4.106-.421-.484-1.064-.313-1.646-.178-2.174.503-4.071 1.568-5.689 3.087-4.083 3.831-6.429 8.624-7.593 14.032-.254 1.177-.274 2.407.039 3.584 1.104.035 1.249-.86 1.733-1.327.836-.808 1.708-1.565 2.857-1.802.408-.084.897.225 1.533.405-.25.566-.324 1.002-.578 1.263-1.47 1.514-2.625 3.213-3.331 5.212-.102.288-.292.552-.475.802-.698.95-1.876 1.154-2.694.292a27.414 27.414 0 0 1-2.933-3.625c-.744-1.114-1.296-2.365-1.85-3.594-.259-.576-.273-1.284.352-1.681.634-.403 1.168-.026 1.646.43.212.203.474.354.902.663.233-.899.453-1.655.623-2.42.921-4.129 2.773-7.821 5.299-11.183 1.318-1.755 2.864-3.294 4.709-4.509 1.937-1.277 4.016-2.168 6.364-2.34.722-.05 1.439-.16 2.078-.234zm1.984 3.471c-.688 2.462-.721 4.226-.079 5.903.217.567.532 1.111.889 1.606.616.859 1.736.757 2.277-.177.152-.263.291-.545.367-.836.739-2.771-.408-5.01-3.454-6.496z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill={fill}
            />

            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M431.58 362.161c-.76.372-1.395.684-2.116 1.035-.911-.79-1.79-1.509-2.612-2.288-.403-.384-.864-.766-1.325-.427-.348.258-.581.834-.635 1.295-.12 1.027-.12 2.072-.124 3.108-.009 2.597.016 5.192.006 7.788-.001.508-.096 1.017-.153 1.577-1.089.674-2.197.43-3.493.37-.084-.665-.177-1.249-.228-1.838-.105-1.24-.145-2.488-.294-3.724-.184-1.52-.488-1.702-2.02-1.616-.809.046-1.627-.005-2.441-.042-1.197-.055-1.697.318-1.81 1.575-.145 1.648-.204 3.305-.313 5.169l-3.383.547c-.722-2.467-.287-4.854-.382-7.209-.094-2.349.38-4.754-.611-7.108-1.976.059-2.516 2.162-4.42 2.645l-1.561-.719c0-.339-.085-.614.013-.714 3.915-4.009 7.843-8.005 11.777-11.993a7.875 7.875 0 0 1 1.179-1.004c.717-.49 1.328-.455 1.987.119.546.477 1.04 1.014 1.552 1.529 3.654 3.685 7.31 7.37 10.955 11.063.138.137.192.356.452.862z"
                    fill="#FFFFFF"
                />

                <path
                    d="M427.139 364.435c-.398 4.174.379 8.318-.471 12.409-1.147.559-2.303.244-3.409.298-1.133.055-2.27.012-3.365.012-1.365-2.336-.056-4.939-1.29-7.202h-2.141c-.126.306-.324.58-.341.865-.068 1.243-.066 2.491-.126 3.735-.036.707-.143 1.412-.225 2.186-2.422.859-4.797.235-7.309.472-.178-.833-.433-1.504-.448-2.182-.056-2.596-.037-5.194-.045-7.791-.002-.823 0-1.646 0-2.788-.636.326-1.015.578-1.432.723-.477.163-1.097.469-1.462.3-1.396-.647-2.773-1.374-4.038-2.244-.749-.514-.754-1.508-.201-2.243.434-.577.955-1.091 1.472-1.599 2.671-2.618 5.324-5.255 8.04-7.823a131.907 131.907 0 0 1 5.59-4.954c1.259-1.061 2.01-1.043 3.257.051a215.257 215.257 0 0 1 5.984 5.445c2.488 2.356 4.924 4.767 7.382 7.156.446.434.92.848 1.318 1.324.896 1.075.826 2.129-.222 2.979-.477.387-1.046.669-1.589.969-2.383 1.315-2.385 1.311-4.929-.098zm4.441-2.274c-.26-.506-.314-.725-.451-.861-3.645-3.692-7.301-7.378-10.955-11.063-.512-.516-1.006-1.053-1.552-1.529-.659-.574-1.271-.609-1.987-.119a7.925 7.925 0 0 0-1.179 1.004 3249.294 3249.294 0 0 0-11.777 11.993c-.098.1-.013.375-.013.714l1.561.719c1.904-.482 2.444-2.586 4.42-2.645.991 2.354.518 4.76.611 7.108.095 2.355-.34 4.742.382 7.209l3.383-.547c.108-1.864.168-3.521.313-5.169.112-1.257.612-1.63 1.81-1.575.815.037 1.632.088 2.441.042 1.531-.086 1.836.097 2.02 1.616.149 1.235.188 2.483.294 3.724.051.589.144 1.173.228 1.838 1.296.06 2.404.304 3.493-.37.058-.56.152-1.069.153-1.577.01-2.596-.015-5.191-.006-7.788.004-1.036.004-2.081.124-3.108.054-.461.287-1.037.635-1.295.461-.339.922.043 1.325.427.822.779 1.701 1.498 2.612 2.288l2.115-1.036z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M370.581 114.06h6.59c.236-.597.601-1.127.64-1.68.114-1.656.129-3.322.132-4.983.005-2.6-.046-5.198-.044-7.796 0-.808.096-1.614.144-2.37 2.789-.627 9.563-.574 11.974.1.382 5.715.421 11.53 1.517 17.391l6.23.208c-.147.619-.134 1.153-.377 1.514-2.148 3.184-4.31 6.362-6.537 9.49-1.024 1.437-2.182 2.781-3.331 4.122-.592.69-1.301 1.283-2.029 1.991-.773-.458-1.478-.72-1.975-1.197-1.723-1.65-3.537-3.246-5.016-5.103-2.457-3.086-4.691-6.348-6.986-9.562-.333-.464-.477-1.063-.932-2.125z"
                    fill="#74BAA5"
                />

                <path
                    d="M375.359 111.935c.065-1.259.146-2.271.168-3.286.077-3.745.104-7.491.212-11.236.057-1.885.604-2.636 2.331-2.658 4.465-.056 8.932.07 13.398.133.081.001.162.119.475.364.663 2.616.128 5.546.565 8.397.436 2.859.186 5.805.807 8.744 2.529.706 5.074-.086 7.436.558.523 1.286-.017 2.319-.617 3.298-1.465 2.393-2.864 4.84-4.502 7.113-2.064 2.868-4.272 5.642-6.54 8.354-2.628 3.143-4.282 3.321-7.319.59-2.154-1.939-4.205-4.058-5.97-6.351-2.914-3.789-5.564-7.783-8.314-11.698-.176-.25-.294-.548-.394-.838-.245-.708.215-1.604.969-1.65 1.448-.087 2.903-.067 4.356-.046.83.011 1.657.115 2.939.212zm-4.778 2.125c.455 1.062.599 1.661.931 2.125 2.295 3.213 4.529 6.476 6.986 9.562 1.479 1.857 3.293 3.452 5.016 5.103.497.478 1.201.74 1.975 1.197.729-.708 1.438-1.301 2.029-1.991 1.149-1.341 2.307-2.685 3.331-4.122 2.228-3.128 4.389-6.306 6.537-9.49.243-.361.23-.895.377-1.514l-6.23-.208c-1.096-5.86-1.135-11.676-1.517-17.391-2.411-.674-9.185-.727-11.974-.1-.048.756-.144 1.563-.144 2.37-.002 2.598.049 5.197.044 7.796-.003 1.661-.018 3.327-.132 4.983-.039.553-.403 1.084-.64 1.68h-6.589z"
                    fill={fill}
                />
            </g>
            <path
                d="M140.415 289.317c2.704-3.796 6.497-6.25 10.949-7.807-.708-1.129-1.933-.843-2.778-1.349-.374-.225-.813-.811-.758-1.159.058-.365.664-.906 1.043-.918 2.674-.075 5.109.755 7.3 2.267.648.447.875 1.296.504 1.953a72.317 72.317 0 0 1-2.767 4.503c-.167.251-.706.253-1.278.435l-.542-3.306c-3.353 1.169-6.225 2.896-8.661 5.735.551.547 1.036 1.024 1.515 1.506 2.622 2.654 1.718 7.101-1.734 8.531-2.217.918-4.244-.117-4.739-2.502-.166-.798-.118-1.652-.082-2.477.032-.7.188-1.394.325-2.341-.704.03-1.206-.024-1.667.088-2.055.502-3.902 1.469-5.508 2.826-6.386 5.396-9.697 12.338-10.196 20.646-.067 1.136-.095 2.276.469 3.36.121.23-.148.941-.377 1.018-.425.146-1.123.166-1.399-.092-.413-.383-.69-1.03-.797-1.607-.518-2.81-.218-5.615.371-8.369 1.251-5.844 4.019-10.9 8.246-15.132 3.104-3.105 6.707-5.246 11.213-5.548.405-.026.806-.153 1.348-.261zm.967 7.869c1.587-.427 2.261-1.105 2.352-2.411.084-1.21-.536-1.902-1.794-2.186-1.109 1.46-1.171 2.968-.558 4.597z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill={fill}
            />

            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M440.063 338.653c-1.236.421-2.391.571-3.439.049-1.383-.69-2.79-1.429-3.66-2.802-.134-.212-.123-.761.015-.847.301-.189.77-.322 1.089-.223.477.15.862.569 1.326.789.963.452 1.948.134 2.348-.81.279-.661.553-1.39.556-2.09.012-2.574-.091-5.15-.154-7.948-1.189 0-2.206-.028-3.222.006-1.348.045-2.077-.677-2.512-1.755.275-.893.827-1.433 1.598-1.411 3.616.098 7.23.275 10.688.42.573.866.238 1.367-.252 1.963l-1.741.155c-2.15.191-2.41.461-2.443 2.707-.015.936.061 1.871.066 2.806.018 2.393.034 4.782.01 7.174-.009.599-.176 1.196-.273 1.817z"
                        fill="#74BAA5"
                    />

                    <path
                        d="M442.387 326.388c.053.992.112 1.805.137 2.618.081 2.798.156 5.594.216 8.392.009.411-.04.83-.118 1.236-.336 1.779-1.1 2.522-2.87 2.752-2.022.265-3.931.02-5.586-1.31-.887-.713-1.854-1.34-2.668-2.127-.951-.92-1.288-2.093-.922-3.424.475-1.722 1.411-2.408 3.191-2.221.604.062 1.194.25 1.963.417.598-2.006.163-3.887.011-5.898-.924-.151-1.736-.219-2.513-.423-2.001-.526-3.612-3.677-2.752-5.525.216-.462.928-.887 1.466-.967a29.952 29.952 0 0 1 4.339-.314c2.798-.008 5.598.072 8.397.123.31.006.623.031.929.087 1.179.22 1.746.98 1.647 2.228-.033.412-.088.834-.223 1.22-.595 1.719-.734 2.946-3.392 2.848-.292-.011-.589.129-1.252.288zm-2.324 12.265c.098-.621.265-1.219.272-1.816.024-2.392.008-4.781-.01-7.174-.005-.935-.081-1.87-.066-2.806.033-2.246.293-2.516 2.443-2.707.613-.056 1.225-.109 1.741-.155.49-.596.825-1.097.252-1.963-3.458-.145-7.071-.322-10.688-.42-.77-.022-1.322.518-1.598 1.411.435 1.078 1.164 1.8 2.512 1.755 1.016-.034 2.033-.006 3.222-.006.064 2.798.166 5.374.154 7.948-.003.7-.276 1.429-.556 2.09-.399.943-1.385 1.262-2.348.81-.464-.22-.85-.639-1.326-.789-.319-.1-.788.033-1.089.223-.138.086-.148.635-.015.847.87 1.373 2.277 2.111 3.66 2.802 1.049.522 2.203.371 3.44-.05z"
                        fill={fill}
                    />
                </g>
                <g>
                    <path
                        d="M461.133 325.324c-1.642-.68-2.754-1.207-3.912-1.597-.958-.324-1.88.363-2 1.369-.116.987.142 1.886.866 2.557.909.845 1.861 1.65 2.854 2.398 1.192.895 2.13 1.969 2.692 3.352 1.05 2.581-.563 5.327-3.313 5.79-3.055.515-5.402-.792-7.578-2.615.576-1.927.846-2.098 2.223-1.41a9.81 9.81 0 0 1 1.571.981c.724.55 1.516.607 2.361.476 1.461-.228 2.164-1.055 2.147-2.552a5.055 5.055 0 0 0-.108-.925c-.082-.404-.199-.799-.338-1.349-1.14-.58-2.333-1.191-3.526-1.796-.865-.438-1.501-1.082-1.902-1.975-1.104-2.457-.393-4.371 2.246-5.98 1.816-1.108 4.308-.478 5.686 1.532.218.32.031.918.031 1.744z"
                        fill="#74BAA5"
                    />

                    <path
                        d="m461.074 327.716-3.314-1.737c-.569.567.037.781.242.959.785.679 1.696 1.221 2.439 1.94.886.858 1.788 1.76 2.435 2.797 1.722 2.765 1.356 4.885-.732 7.359-2.012 2.385-4.483 2.839-7.293 2.133a11.445 11.445 0 0 1-5.362-3.045c-1.213-1.215-1.235-2.183-.256-3.613.233-.341.504-.663.785-.967.936-.999 1.497-1.173 2.757-.616 1.131.5 2.18 1.188 3.311 1.692.23.102.692-.205.972-.421.065-.05-.109-.633-.309-.756a24.174 24.174 0 0 0-2.467-1.329c-2.832-1.327-3.758-3.814-3.772-6.645-.005-1.045.54-2.297 1.242-3.095 1.007-1.142 2.323-2.06 3.632-2.873 1.017-.633 2.237-.453 3.307.06.74.354 1.441.822 2.091 1.326 3.156 2.452 3.223 3.348.292 6.831zm.059-2.392c0-.826.188-1.424-.031-1.743-1.378-2.011-3.869-2.641-5.686-1.532-2.639 1.609-3.35 3.523-2.246 5.98.401.893 1.037 1.537 1.902 1.975 1.193.604 2.387 1.216 3.526 1.796.139.55.256.944.338 1.349.061.303.105.616.108.925.017 1.497-.686 2.323-2.147 2.552-.846.132-1.638.074-2.361-.476a9.81 9.81 0 0 0-1.571-.981c-1.377-.688-1.646-.517-2.223 1.41 2.176 1.823 4.523 3.13 7.578 2.615 2.75-.463 4.362-3.209 3.313-5.79-.563-1.384-1.5-2.457-2.692-3.352a36.273 36.273 0 0 1-2.854-2.398c-.725-.671-.982-1.569-.866-2.557.12-1.006 1.042-1.693 2-1.369 1.158.389 2.27.917 3.912 1.596z"
                        fill={fill}
                    />
                </g>
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M428.832 236.069c.775 1.312.658 2.413-.526 3.339-.492.383-.993.755-1.453 1.172-1.542 1.399-3.22 1.256-4.901.372-1.922-1.01-3.209-2.621-3.872-4.675-1.161-3.594-.806-7.229.241-10.732.707-2.36 2.541-4.036 4.857-4.96 2.651-1.057 5.88 1.314 5.832 4.208-.005.258-.24.604-.469.739-.229.134-.665.174-.865.039-.417-.28-.741-.701-1.102-1.067-1.19-1.212-2.55-1.378-3.83-.353-1.067.855-1.951 1.935-2.212 3.299-.308 1.622-.598 3.284-.573 4.923.042 2.726 1.433 4.7 3.954 5.82.94.416 1.822.364 2.577-.396.508-.512.959-1.084 1.498-1.56.189-.162.562-.118.844-.168z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M424.567 225.282c-1.54.74-2.253 1.841-2.384 3.257a37.307 37.307 0 0 0-.132 4.347c.044 1.917 1.061 3.047 3.087 3.405.8-.901 1.602-1.806 2.51-2.832.79.346 1.516.688 2.258.984 1.264.505 1.611 1.523 1.569 2.752-.04 1.176-.467 2.225-1.175 3.156-3.548 4.659-10.588 4.102-13.355-1.428-1.072-2.141-1.749-4.409-1.628-6.885.17-3.46.734-6.784 2.522-9.824.937-1.592 2.315-2.634 3.926-3.417 1.258-.61 2.597-.707 3.952-.454 2.822.525 5.558 4.46 5.113 7.315-.304 1.943-2.722 2.845-4.405 1.581-.642-.483-1.127-1.175-1.858-1.957zm4.265 10.787c-.282.05-.655.006-.845.172-.539.475-.99 1.047-1.498 1.56-.755.76-1.637.813-2.577.396-2.521-1.121-3.912-3.094-3.954-5.82-.024-1.639.266-3.302.573-4.923.261-1.365 1.145-2.444 2.212-3.299 1.28-1.025 2.64-.86 3.83.353.36.366.685.787 1.102 1.067.2.134.637.094.865-.039.229-.135.464-.48.469-.739.048-2.894-3.181-5.265-5.832-4.208-2.315.923-4.15 2.6-4.857 4.96-1.047 3.503-1.402 7.138-.241 10.732.663 2.054 1.95 3.665 3.872 4.675 1.682.883 3.359 1.027 4.901-.372.46-.417.961-.79 1.453-1.172 1.185-.931 1.302-2.031.527-3.343z"
                        fill={fill}
                    />
                </g>
                <g>
                    <path
                        d="M443.479 225.602c-.838-.632-1.363-1.153-1.99-1.479-1.28-.667-2.782-.094-3.419 1.21-.856 1.748-.479 3.532.9 5.121 1.084 1.25 2.138 2.556 3.005 3.961 1.44 2.331 1.092 4.798.096 7.193-.171.412-.697.865-1.126.948a36.126 36.126 0 0 1-4.327.543c-.951.066-1.194-.417-1.16-2.059.662-.148 1.373-.247 2.041-.469 2.117-.704 2.862-2.306 2.173-4.426-.377-1.158-1.215-1.925-2.093-2.656-1.221-1.016-2.21-2.177-2.83-3.661-.588-1.406-.791-2.803-.18-4.236.406-.953.777-1.937 1.314-2.816 1.502-2.46 3.021-3.044 5.785-2.346.955.242 1.74.753 2.103 1.693.407 1.052.684 2.141-.292 3.479z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M439.898 226.093c-.59 1.429.059 2.663 1.011 3.58 1.319 1.268 2.113 2.82 2.952 4.371a7.396 7.396 0 0 1 .802 4.835c-.19 1.129-.33 2.267-.56 3.387-.225 1.097-.916 1.872-1.955 2.262-2.184.819-4.453 1.041-6.76.766-1.02-.122-1.728-.746-1.99-1.737-.184-.694-.341-1.438-.29-2.143.111-1.504.408-2.55 2.386-2.644 1.048-.05 2.121-.059 2.683-1.289-.308-1.403-1.515-2.15-2.523-2.994-1.589-1.329-2.485-3.032-3.098-4.949a6.223 6.223 0 0 1-.065-3.689c.634-2.242 1.728-4.222 3.335-5.925.83-.879 1.793-1.427 3.02-1.363 1.137.06 2.285.096 3.402.296 2.221.396 3.26 2.184 4.061 3.978.717 1.606-.852 4.261-2.565 4.767-.746.221-1.426.107-2.038-.423-.514-.448-.771-1.315-1.808-1.086zm3.581-.491c.976-1.339.698-2.427.292-3.48-.363-.94-1.148-1.451-2.103-1.693-2.765-.698-4.283-.114-5.785 2.346-.536.879-.907 1.863-1.314 2.816-.611 1.433-.408 2.83.18 4.236.62 1.484 1.609 2.646 2.83 3.661.878.731 1.716 1.498 2.093 2.656.689 2.12-.056 3.722-2.173 4.426-.668.222-1.379.321-2.041.469-.034 1.642.209 2.125 1.16 2.059 1.45-.1 2.901-.269 4.327-.543.429-.083.955-.536 1.126-.948.996-2.395 1.345-4.862-.096-7.193-.867-1.405-1.921-2.71-3.005-3.961-1.38-1.589-1.757-3.373-.9-5.121.637-1.304 2.139-1.877 3.419-1.21.627.328 1.153.848 1.99 1.48z"
                        fill={fill}
                    />
                </g>
                <g>
                    <path
                        d="M459.168 225.528c-.56-.486-.976-.965-1.494-1.274-1.414-.844-2.949-.36-3.664 1.089-.933 1.884-.643 3.419.869 5.08a35.478 35.478 0 0 1 2.36 2.887c2.142 2.924 2.102 5.939.235 9.19-1.578.205-3.214.435-4.854.616-.285.031-.612-.097-.885-.225a.812.812 0 0 1-.392-.458c-.104-.378-.129-.778-.21-1.314.889-.214 1.698-.336 2.456-.607 2.066-.74 2.742-2.419 1.951-4.501-.431-1.132-1.272-1.886-2.143-2.619-1.13-.95-2.022-2.042-2.645-3.407-.689-1.516-.741-3.022-.23-4.545.298-.878.777-1.696 1.18-2.538 1.105-2.321 3.014-2.937 5.407-2.566 2.299.356 3.407 2.136 2.801 4.59-.038.155-.301.254-.742.602z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M456.32 225.952c-.771.341-.941.861-.752 1.363.359.957.638 1.956 1.504 2.673 1.578 1.304 2.298 3.192 3.102 4.988.559 1.243.794 2.566.42 3.957-.213.795-.261 1.638-.357 2.462-.199 1.729-1.071 2.841-2.783 3.356-1.825.548-3.68.723-5.555.617-1.73-.098-2.633-1.005-2.816-2.748a8.213 8.213 0 0 1 .083-2.169c.151-.901.733-1.462 1.668-1.614.814-.132 1.646-.21 2.436-.435.753-.215 1.014-1.184.491-1.781-.612-.704-1.265-1.39-1.983-1.982-3.669-3.022-4.943-7.868-1.528-12.829.06-.085.113-.174.174-.26 2.132-3.034 4.982-3.883 8.43-2.507 2.475.987 3.998 4.033 3.076 6.327a4.59 4.59 0 0 1-1.268 1.72c-1.093.921-2.144.802-3.331-.217-.367-.311-.712-.646-1.011-.921zm2.848-.424c.441-.348.704-.448.742-.602.606-2.454-.502-4.234-2.801-4.59-2.394-.371-4.302.245-5.407 2.566-.402.842-.882 1.66-1.18 2.538-.511 1.523-.459 3.029.23 4.545.622 1.365 1.515 2.457 2.645 3.407.872.733 1.713 1.487 2.143 2.619.791 2.081.115 3.761-1.951 4.501-.758.271-1.567.393-2.456.607.081.536.106.936.21 1.314a.809.809 0 0 0 .392.458c.272.128.6.256.885.225 1.641-.182 3.276-.411 4.854-.616 1.866-3.252 1.907-6.266-.235-9.19a35.65 35.65 0 0 0-2.36-2.887c-1.512-1.661-1.802-3.195-.869-5.08.715-1.449 2.25-1.933 3.664-1.089.518.309.934.788 1.494 1.274z"
                        fill={fill}
                    />
                </g>
            </g>
            <path
                d="M310.505 378.445c-1.06 1.338-.527 2.644-.771 3.822-.069.34-.451.885-.664.871-.449-.025-1.061-.241-1.279-.588-.308-.49-.505-1.192-.427-1.757a35.79 35.79 0 0 1 .936-4.548c.116-.426.605-.9 1.034-1.067 2.555-.993 5.214-1.313 7.944-1.03.101.01.2.05.298.085.525.197.962.554.847 1.126-.068.338-.423.767-.743.877-.676.233-1.417.271-2.127.408-.576.111-1.148.255-2.121.472.776.749 1.26 1.223 1.751 1.689 4.598 4.378 7.908 9.591 10.057 15.55.711 1.97 1.185 4.001.979 6.104-.099 1.015-.415 2.016-.729 2.993-.102.323-.508.55-.984 1.032-1.092-2.568-.539-5.161-1.412-7.439-.928-2.419-1.79-4.886-2.989-7.169-1.152-2.193-2.62-4.237-4.095-6.239-1.475-1.998-3.2-3.788-5.505-5.192z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill={fill}
            />

            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M76.436 247.77c-.721-5.67-.953-11.431-3.992-16.744.639-.292 1.083-.528 1.55-.71 2.145-.824 4.009-2.069 5.729-3.52 5.643-4.758 10.971-9.784 14.762-16.104.148-.247.444-.413.879-.804.329.9.69 1.616.853 2.375 1.525 7.129 3.037 14.26 4.51 21.399.969 4.691 1.867 9.396 2.795 14.097.1.506.183 1.015.314 1.753-.692.041-1.32.221-1.863.088-1.89-.466-3.775-.972-5.617-1.584-5.949-1.975-11.916-1.989-17.923-.293-.414.118-.844.181-1.27.251-.089.016-.193-.049-.727-.204z"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M61.836 252.083c-1.678-6.184-3.153-12.315-3.54-18.704 2.639-1.622 5.205-2.828 8.252-2.938 1.851-.067 3.198.59 3.947 2.173.668 1.414 1.427 2.852 1.708 4.354.648 3.473 1.101 6.984 1.492 10.496.201 1.787-.355 2.408-2.102 3.042-.403.147-.816.309-1.24.37-2.764.407-5.535.787-8.517 1.207z"
                        fill="#74BAA5"
                    />

                    <path
                        d="M78.667 260.015c-1.183 2.658.175 4.656 1.734 6.476l-1.348 5.607c-2.721 1.055-8.78.744-12.579-.798.119-.629.162-1.335.391-1.979 1.665-4.707 2.318-9.483 1.22-14.407-.062-.277.064-.592.119-1.03 2.92-.62 6.021-.926 8.001-3.393 1.397.724 1.397.724 2.276 2.362-1.637 2.301-2.47 4.776.186 7.162zm31.348-6.964c-1.152.152-1.879.351-2.596.32-1.37-.061-2.027-.8-1.628-2.085.52-1.676.396-3.314.062-4.936a3801.152 3801.152 0 0 0-6.41-30.559c-.436-2.03-1.057-4.03-1.715-6.009-.388-1.161-1.017-2.251-1.599-3.503.354-.245.665-.608 1.023-.661.372-.055.888.084 1.178.318 1.352 1.102 2.196 2.557 2.891 4.095 1.601 3.542 2.682 7.245 3.53 11.005 1.945 8.635 3.865 17.278 4.876 26.072.214 1.847.248 3.714.388 5.943z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M107.472 220.244c.379.122.803.173 1.12.377 1.532.983 2.298 2.455 2.603 4.142.907 5.013 1.405 10.063 1.242 15.158-.017.504-.007 1.057-.681 1.236-.091-.047-.232-.078-.244-.132a5718.339 5718.339 0 0 1-4.256-20.061c-.036-.175.109-.384.216-.72z"
                        fill="#74BAA5"
                    />
                </g>
                <path
                    d="M111.822 243.94c.226 2.261.47 4.323.623 6.395.069.926.069 1.883-.091 2.795-.214 1.217-1.003 2.055-2.315 2.332-2.397.511-4.559.323-5.941-1.969-.589-.976-1.512-1.42-2.595-1.712-2.399-.646-4.807-1.277-7.174-2.02-4.573-1.439-9.175-1.375-13.813-.412-.201.043-.386.182-.559.3-.079.053-.113.169-.167.257 1.357 3.064 1.357 3.064-.461 6.766.272.427.562.978.944 1.455.791.985 1.057 2.022.574 3.207-.398.977-.176 1.863.608 2.567 1.692 1.516 1.568 3.271.891 5.17-.31.865-.577 1.787-.607 2.691-.051 1.496-.816 2.291-2.235 2.661-.416.108-.822.281-1.245.343-3.914.571-7.784.328-11.608-.629a5.979 5.979 0 0 1-.622-.184c-2.01-.73-2.567-1.607-2.103-3.589.332-1.416.788-2.808 1.229-4.201.794-2.512 1.185-5.076.988-7.694-.1-1.324-.394-2.634-.61-4.016-1.382-.105-2.553-.208-3.725-.283-1.095-.071-1.813-.631-2.218-1.569a13.235 13.235 0 0 1-.632-1.763c-1.275-4.74-2.211-9.537-2.666-14.413-.143-1.547-.216-3.107.339-4.729 1.601-.749 3.218-1.573 4.892-2.269 2.345-.975 4.847-1.295 7.331-.818 1.714.331 3.228.074 4.692-.626 1.158-.555 2.316-1.177 3.311-1.961 5.385-4.238 10.31-8.919 14.424-14.328 1.205-1.585 2.237-3.232 2.632-5.278.475-2.471 3.971-3.379 5.933-1.686a12.265 12.265 0 0 1 3.315 4.577c1.126 2.697 2.141 5.434 3.301 8.4.395.108 1.018.232 1.604.447 2.471.91 4.179 2.564 5.067 4.956.289.779.515 1.589.671 2.403.893 4.611 1.4 9.257 1.279 13.956-.073 2.939-.253 3.208-3.261 4.471zm-35.386 3.83c.533.154.637.22.728.204.426-.07.856-.133 1.27-.251 6.007-1.696 11.974-1.682 17.923.293 1.842.612 3.728 1.118 5.617 1.584.544.133 1.171-.047 1.863-.088-.131-.738-.215-1.247-.314-1.753-.928-4.701-1.826-9.406-2.795-14.097a2999.388 2999.388 0 0 0-4.51-21.399c-.163-.759-.524-1.475-.853-2.375-.435.392-.731.557-.879.804-3.791 6.321-9.119 11.346-14.762 16.104-1.72 1.451-3.585 2.695-5.729 3.52-.468.182-.912.419-1.55.71 3.039 5.314 3.27 11.074 3.991 16.744zm-14.6 4.313c2.983-.42 5.753-.8 8.518-1.207.423-.062.836-.223 1.24-.37 1.746-.634 2.303-1.255 2.102-3.042-.391-3.511-.844-7.022-1.492-10.496-.281-1.502-1.04-2.94-1.708-4.354-.749-1.583-2.096-2.24-3.947-2.173-3.048.11-5.614 1.316-8.252 2.938.386 6.389 1.861 12.52 3.539 18.704zm16.831 7.932c-2.656-2.386-1.823-4.86-.185-7.162-.879-1.639-.879-1.639-2.276-2.362-1.981 2.467-5.081 2.772-8.001 3.393-.055.439-.18.753-.119 1.03 1.099 4.924.445 9.7-1.22 14.407-.229.645-.272 1.351-.391 1.979 3.799 1.542 9.858 1.853 12.579.798l1.348-5.607c-1.56-1.82-2.918-3.818-1.735-6.476zm31.348-6.964c-.139-2.229-.174-4.096-.386-5.941-1.011-8.795-2.931-17.438-4.876-26.072-.848-3.76-1.93-7.463-3.53-11.005-.695-1.538-1.54-2.993-2.891-4.095-.29-.234-.806-.373-1.178-.318-.359.053-.669.417-1.023.661.582 1.253 1.211 2.342 1.599 3.503.658 1.979 1.28 3.979 1.715 6.009a3880.68 3880.68 0 0 1 6.41 30.559c.334 1.622.458 3.26-.062 4.936-.399 1.285.258 2.023 1.628 2.085.715.028 1.442-.17 2.594-.322zm-2.543-32.807c-.107.336-.252.545-.216.72 1.405 6.69 2.827 13.376 4.256 20.061.011.055.152.085.244.132.674-.18.665-.732.681-1.236.163-5.095-.335-10.145-1.242-15.158-.305-1.688-1.071-3.159-2.603-4.142-.317-.204-.741-.255-1.12-.377zm14.088 3.058c.683-.708 1.034-1.267 1.548-1.569 2.487-1.467 5.016-2.869 7.539-4.278.175-.098.442-.161.625-.108.393.112.902.22 1.097.5.192.279.133.786.034 1.155-.071.268-.343.545-.603.704-2.845 1.728-5.788 3.258-9.157 3.842-.192.033-.413-.087-1.083-.246zm1.66 18.574c.438 0 .928-.143 1.24.022a382.926 382.926 0 0 1 8.97 4.895c.277.157.549.809.426 1.022-.22.381-.705.712-1.152.855-.364.116-.876.02-1.25-.139-3.19-1.353-6.063-3.112-8.04-5.966-.111-.159-.114-.387-.194-.689zm-8.194-26.352c.355-1.331.451-2.037.73-2.669 1.368-3.089 3.523-5.67 5.903-8.086.458-.463 1.053-.798 1.582-.01-.982 2.453-5.117 8.013-8.215 10.765zm21.238 17.574c.385.723.151 1.253-.487 1.604-1.682.928-3.555.736-5.379.757-1.705.021-3.43.031-4.814-.999-.067-.741.414-.818.805-.91 2.959-.71 5.988-.702 9.009-.745.298-.005.6.199.866.293z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M347.848 343.964c3.576.697 6.349 2.292 8.865 4.666-.082.329-.126.691-.265 1.017-.759 1.769-.167 3.185 1.171 4.361 1.101.966 2.396 1.61 3.861 1.783 2.304.272 3.655-1.308 3.084-3.544-.634-2.482-2.685-4.213-5.323-4.486-.279-.03-.561-.047-.886-.07-2.11-2.262-4.707-3.84-7.883-5.12.684-.417 1.03-.717 1.434-.862 1.935-.686 3.935-.878 5.941-.435 1.303.289 2.646.582 3.84 1.148 7.444 3.542 13.213 8.771 16.248 16.625 1.42 3.669 1.845 7.405.57 11.241-.574 1.722-1.558 3.059-3.1 3.983-1.652.987-3.318 1.935-5.34 1.887-.285-.009-.571.055-.855.109-4.572.895-8.46-.605-12.004-3.384-4.999-3.915-7.883-9.292-10.339-14.954-.644-1.485-1.221-3.035-1.585-4.609-.807-3.495.005-6.613 2.566-9.356zm16.904 27.297c.276 1.373.882 2.06 1.341 1.75.689-.47.448-1.148.298-1.769-.227-.932-.875-1.513-1.189-1.137-.307.366-.37.934-.45 1.156zm-1.007-.7c-.073-.289-.098-.381-.119-.473-.255-1.053-.707-1.545-1.152-1.261-.615.388-.47.991-.367 1.52.086.445.322.871.552 1.273.066.119.342.191.504.165.156-.026.373-.176.417-.319.11-.348.135-.722.165-.905zm5.221-.114c-.087.026-.212.025-.256.083-.564.78-.583 1.127-.053 1.577.111.094.372.141.492.076.646-.358.425-.899.212-1.396-.062-.145-.259-.23-.395-.34z"
                    fill="#EDEDED"
                />

                <path
                    d="M359.093 349.554c.127 0 .412-.039.682.017.274.054.549.169.793.311 1.42.824 2.474 2.543 2.061 3.413-.099.208-.435.418-.669.428-1.577.057-3.422-1.186-3.793-2.505-.197-.704.171-1.48.926-1.664z"
                    fill="#A6A6A6"
                />

                <path
                    d="M381.288 361.971c.626 2.496.473 4.961-.03 7.434-.499 2.445-1.718 4.463-3.597 6.065-3.772 3.216-8.081 4.434-13.061 3.841-3.383-.404-6.335-1.661-8.852-3.744-1.969-1.626-3.696-3.621-5.229-5.678-2.999-4.022-4.984-8.608-6.677-13.302-.955-2.648-1.267-5.396-.662-8.202.875-4.077 3.267-6.833 7.133-8.344 3.535-1.382 7.091-1.465 10.681-.237.092.032.184.059.271.096 10.093 4.263 17.247 11.19 20.023 22.071zm-33.44-18.007c-2.561 2.743-3.373 5.861-2.565 9.356.364 1.574.941 3.124 1.585 4.609 2.456 5.662 5.34 11.039 10.339 14.954 3.544 2.778 7.432 4.278 12.004 3.384.284-.055.57-.118.855-.109 2.022.049 3.688-.899 5.34-1.887 1.542-.925 2.525-2.262 3.1-3.983 1.274-3.836.85-7.572-.57-11.241-3.035-7.854-8.804-13.083-16.248-16.625-1.193-.566-2.537-.859-3.84-1.148-2.007-.443-4.007-.251-5.941.435-.403.145-.75.445-1.434.862 3.176 1.28 5.772 2.858 7.883 5.12.324.023.606.04.886.07 2.639.273 4.69 2.005 5.323 4.486.571 2.236-.78 3.815-3.084 3.544-1.466-.173-2.761-.817-3.861-1.783-1.338-1.177-1.93-2.592-1.171-4.361.139-.325.183-.688.265-1.017-2.518-2.374-5.29-3.969-8.866-4.666zm11.245 5.59c-.755.185-1.123.96-.926 1.664.371 1.319 2.216 2.561 3.793 2.505.233-.01.57-.22.669-.428.412-.87-.642-2.589-2.061-3.413a2.57 2.57 0 0 0-.793-.311c-.27-.056-.555-.017-.682-.017z"
                    fill={fill}
                />

                <path
                    d="M364.752 371.261c.08-.222.143-.79.449-1.155.314-.376.963.205 1.189 1.137.15.62.392 1.299-.298 1.769-.458.308-1.064-.378-1.34-1.751zm-1.007-.7c-.03.183-.055.557-.166.905-.044.144-.261.293-.417.319-.162.026-.438-.046-.504-.165-.229-.402-.466-.828-.552-1.273-.103-.528-.248-1.132.367-1.52.445-.284.897.208 1.152 1.261.022.093.047.184.12.473zm5.221-.114c.136.109.333.194.396.34.213.497.434 1.038-.212 1.396-.12.064-.381.018-.492-.076-.53-.45-.511-.797.053-1.577.043-.057.168-.056.255-.083z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M391.718 266.252c.087-3.969 1.668-6.962 4.926-9.016 2.289-1.441 5.593-1.85 8.21.979 2.042 2.208 3.05 4.695 2.661 7.676-.358 2.755-1.538 5.157-3.364 7.251-.89 1.02-2.036 1.404-3.33 1.446-3.548.112-6.131-1.739-8.281-4.272-.997-1.175-.758-2.763-.822-4.064zm4.288-.629c-.139 2.496.905 4.212 2.822 4.772 1.982.577 4.271-.3 5.45-2.088 1.141-1.735 1.017-4.287-.371-5.81-1.382-1.513-3.103-1.938-5.109-1.466-1.887.443-2.268 1.938-2.624 3.481-.093.403-.125.821-.168 1.111z"
                    fill="#74BAA5"
                />

                <path
                    d="M380.673 264.654c3.232-4.029 7.342-6.627 12.509-7.702-3.76 4.886-4.243 9.969-1.313 15.539-1.461.068-2.368-.66-3.305-1.203-3.243-1.875-6.34-4.488-7.891-6.634zm26.82-7.088c3.69.645 6.876 3.422 9.438 8.176-1.4 2.609-3.269 4.894-5.836 6.583-1.57 1.035-2.036 1.194-4.113 1.291-.038-1 .67-1.679 1.044-2.465 1.324-2.789 2.112-5.69 1.356-8.75-.391-1.585-1.184-3.07-1.889-4.835zm-8.229 5.213c.985-.363 1.886-.082 2.603.568.438.394.763.986.962 1.553.339.961.035 1.85-.656 2.582-.797.845-1.796 1.002-2.868.705-.657-.182-1.013-.699-1.138-1.355-.248-1.301.018-2.259 1.097-4.053z"
                    fill="#FFFFFF"
                />

                <path
                    d="M378.155 265.642c.491-1.936 1.626-3.278 2.876-4.53 4.289-4.298 9.548-6.616 15.514-7.271 3.732-.411 7.461-.331 11.101.947 4.175 1.467 7.516 3.947 10.015 7.588 2.324 3.387 2.355 3.401.065 6.706-.824 1.189-1.704 2.374-2.735 3.38-2.703 2.641-5.941 4.068-9.781 4.237-3.764.169-7.499-.123-11.205-.603-2.594-.338-4.981-1.521-7.103-3.061-1.849-1.343-3.589-2.835-5.339-4.307-1.105-.925-2.142-1.933-3.408-3.086zm13.563.61c.064 1.301-.175 2.889.821 4.063 2.15 2.533 4.733 4.385 8.281 4.272 1.294-.042 2.44-.427 3.33-1.446 1.826-2.094 3.006-4.496 3.364-7.251.389-2.98-.619-5.468-2.661-7.676-2.617-2.828-5.921-2.42-8.21-.979-3.257 2.055-4.838 5.048-4.925 9.017zm-11.045-1.598c1.551 2.146 4.648 4.759 7.892 6.634.937.543 1.844 1.272 3.305 1.203-2.931-5.57-2.447-10.653 1.313-15.539-5.168 1.075-9.278 3.673-12.51 7.702zm26.82-7.088c.705 1.765 1.498 3.25 1.889 4.835.756 3.06-.032 5.961-1.356 8.75-.374.786-1.082 1.465-1.044 2.465 2.077-.097 2.543-.256 4.113-1.291 2.567-1.689 4.436-3.974 5.836-6.583-2.562-4.754-5.747-7.531-9.438-8.176z"
                    fill={fill}
                />

                <path
                    d="M396.006 265.623c.043-.29.075-.708.168-1.11.356-1.543.737-3.038 2.624-3.481 2.007-.472 3.728-.047 5.109 1.466 1.388 1.522 1.512 4.074.371 5.81-1.179 1.788-3.469 2.665-5.45 2.088-1.917-.561-2.961-2.277-2.822-4.773zm3.258-2.844c-1.079 1.794-1.345 2.752-1.098 4.053.125.656.48 1.174 1.138 1.355 1.072.297 2.071.14 2.868-.705.691-.732.995-1.621.656-2.582-.199-.566-.524-1.159-.962-1.553-.717-.65-1.617-.931-2.602-.568z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M372.134 410.248c1.442-.083 3.079.19 4.637.833 4.111 1.699 6.435 4.704 6.884 9.2.383 3.848-.79 7.172-2.981 10.234-.812 1.134-1.884 1.854-3.218 2.333-3.47 1.246-6.902 1.236-10.4.13-2.7-.854-4.442-2.662-5.375-5.239-2.206-6.093.393-12.281 3.853-15.477 1.7-1.57 3.248-2.02 6.6-2.014zm-1.943 5.715c-1.093-.031-1.695.503-1.657 1.336.121 2.693.287 5.385.441 8.076.036.621.046 1.248.149 1.859.278 1.646 1.396 2.102 2.645 1.054 1.031-.866 1.953-1.865 2.992-2.718 1.122-.92 2.342-1.717 3.484-2.61 1.05-.821 1.089-1.7.099-2.589a9.53 9.53 0 0 0-1.773-1.237 200.877 200.877 0 0 0-5.218-2.747c-.446-.229-.951-.349-1.162-.424z"
                    fill="#FFC91C"
                />

                <path
                    d="M371.233 425.63c-.285-2.419-.362-4.25-.243-6.111 2.081.384 3.207.902 4.971 2.279-.184.234-.331.518-.559.693-1.224.947-2.468 1.865-4.169 3.139z"
                    fill="#FFFFFF"
                />

                <path
                    d="M372.147 437.916c-.831 0-1.663.025-2.493-.006-3.258-.12-5.738-1.686-7.564-4.283-3.059-4.354-3.628-9.2-2.501-14.285.542-2.442 1.438-4.765 3.017-6.774 2.117-2.692 4.793-4.222 8.287-4.21 1.98.007 3.935.033 5.841.716 4.649 1.664 7.71 4.763 8.84 9.635.234 1.01.383 2.041.59 3.057 1.042 5.113-.771 9.37-3.912 13.253-.961 1.188-2.157 1.987-3.626 2.25-2.137.384-4.3.627-6.451.931l-.028-.284zm-.013-27.668c-3.352-.006-4.899.444-6.602 2.015-3.46 3.195-6.059 9.384-3.853 15.477.933 2.577 2.675 4.385 5.375 5.239 3.498 1.107 6.931 1.116 10.4-.13 1.334-.479 2.406-1.199 3.218-2.333 2.191-3.063 3.364-6.387 2.981-10.234-.449-4.496-2.773-7.501-6.884-9.2-1.556-.644-3.193-.917-4.635-.834z"
                    fill={fill}
                />

                <path
                    d="M370.191 415.963c.211.075.716.195 1.163.424 1.75.894 3.495 1.802 5.218 2.747a9.544 9.544 0 0 1 1.773 1.237c.99.889.951 1.768-.099 2.589-1.143.893-2.362 1.69-3.484 2.61-1.039.853-1.961 1.852-2.992 2.718-1.249 1.048-2.367.592-2.645-1.054-.104-.611-.113-1.238-.149-1.859-.154-2.691-.32-5.383-.441-8.076-.039-.833.564-1.367 1.656-1.336zm1.042 9.667c1.7-1.273 2.944-2.192 4.168-3.139.228-.175.376-.459.559-.693-1.764-1.377-2.89-1.896-4.971-2.279-.118 1.861-.041 3.692.244 6.111z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M407.917 410.272c2.191-.122 4.101.313 5.901 1.21 3.651 1.82 5.624 4.763 6.018 8.837.349 3.602-.691 6.774-2.655 9.719-.955 1.431-2.215 2.347-3.893 2.922-3.184 1.091-6.323 1.066-9.512.209-3.596-.968-5.62-3.424-6.384-6.955-.982-4.551.137-8.667 2.848-12.379 1.934-2.651 4.556-3.869 7.677-3.563zm-4.276 6.078c-1.182 3.359-.833 6.443-.505 9.504.092.865.766 1.526 1.697 1.562 2.062.077 4.132.135 6.193.049 1.262-.053 1.851-.763 1.82-2.059-.045-1.859-.193-3.716-.348-5.57-.189-2.235-.791-2.954-2.986-3.204-1.829-.21-3.687-.187-5.871-.282z"
                    fill="#FFA1BA"
                />

                <path
                    d="M410.203 419.237c.337 1.875.408 3.78.17 5.811-1.59.309-3.007.176-4.564.067-.951-2.026-.58-4.132-.442-6.196 2.414-.616 2.522-.609 4.836.318z"
                    fill="#FFFFFF"
                />

                <path
                    d="M408.417 437.923c-.831 0-1.662.02-2.492-.003-3.386-.095-5.923-1.743-7.793-4.451-3.034-4.39-3.432-9.277-2.334-14.324.462-2.117 1.247-4.169 2.538-5.987 2.187-3.088 5.038-4.822 8.918-4.817 2.423.004 4.764.236 6.985 1.263 3.918 1.812 6.507 4.735 7.468 8.989.298 1.315.519 2.648.712 3.983.687 4.752-.982 8.755-3.931 12.368-.962 1.18-2.13 2.022-3.598 2.297-2.132.398-4.294.648-6.443.962l-.03-.28zm-.5-27.651c-3.121-.306-5.743.912-7.677 3.563-2.711 3.712-3.83 7.828-2.848 12.379.764 3.531 2.788 5.987 6.384 6.955 3.188.857 6.328.882 9.512-.209 1.679-.575 2.939-1.491 3.893-2.922 1.964-2.944 3.004-6.117 2.655-9.719-.395-4.074-2.367-7.017-6.018-8.837-1.8-.898-3.71-1.333-5.901-1.21z"
                    fill={fill}
                />

                <path
                    d="M403.641 416.35c2.185.096 4.042.072 5.872.281 2.195.25 2.798.969 2.986 3.204.154 1.855.303 3.711.348 5.57.03 1.296-.559 2.006-1.82 2.059-2.062.086-4.131.028-6.193-.049-.932-.035-1.606-.696-1.697-1.562-.329-3.06-.678-6.144.504-9.503zm6.562 2.887c-2.314-.927-2.422-.935-4.837-.318-.138 2.064-.509 4.17.442 6.196 1.558.108 2.975.242 4.564-.067.239-2.03.168-3.936-.169-5.811z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M299.605 410.034c1.517.31 3.093.452 4.54.963 4.474 1.582 6.859 4.845 7.29 9.563.362 3.966-1.042 7.357-3.439 10.392-.496.627-1.201 1.192-1.931 1.514-3.78 1.663-7.64 1.784-11.558.426-2.433-.845-4.086-2.479-4.968-4.839-.882-2.363-1.301-4.807-.772-7.347a18.096 18.096 0 0 1 2.11-5.511c1.945-3.311 4.658-5.287 8.728-5.161zm1.774 12.68c.9-.204 1.613-.302 2.274-.543.333-.121.764-.471.813-.772.098-.607-.444-.865-.964-.97-.786-.159-1.585-.264-2.494-.41-.06-.958-.112-1.765-.166-2.571-.035-.513-.014-1.04-.141-1.53-.058-.22-.394-.421-.647-.518-.142-.054-.455.071-.543.21-.268.426-.543.875-.67 1.353-.23.869-.354 1.767-.542 2.754-.969 0-1.793-.064-2.597.031-.327.04-.768.371-.886.676-.219.56.18.971.689 1.191.378.161.784.261 1.183.364.676.176 1.357.331 2.054.501.191 1.076.316 1.993.527 2.889.141.598.322 1.215.638 1.729.174.28.695.54 1.003.485.277-.048.672-.535.675-.831.009-1.229-.112-2.459-.206-4.038z"
                    fill="#FFA1BA"
                />

                <path
                    d="M299.921 437.919c-.832 0-1.662.023-2.491-.005-3.387-.111-5.912-1.769-7.77-4.489-3.07-4.508-3.458-9.476-2.224-14.632.533-2.225 1.408-4.343 2.847-6.183 2.105-2.691 4.766-4.242 8.266-4.257 2.196-.008 4.359.068 6.433.9 4.463 1.791 7.351 4.938 8.382 9.691.132.61.242 1.224.374 1.831 1.107 5.117-.167 9.645-3.298 13.762-1.06 1.394-2.36 2.383-4.044 2.709-2.129.412-4.296.641-6.445.949a11.655 11.655 0 0 1-.03-.276zm-.316-27.885c-4.07-.126-6.783 1.85-8.728 5.161a18.07 18.07 0 0 0-2.11 5.511c-.528 2.54-.109 4.983.772 7.347.882 2.359 2.535 3.994 4.968 4.839 3.918 1.358 7.777 1.237 11.558-.426.729-.321 1.435-.887 1.931-1.514 2.397-3.035 3.802-6.427 3.439-10.392-.431-4.718-2.816-7.98-7.29-9.563-1.447-.511-3.023-.653-4.54-.963z"
                    fill={fill}
                />

                <path
                    d="M301.379 422.714c.094 1.579.215 2.81.206 4.038-.003.296-.397.783-.675.831-.308.055-.829-.205-1.003-.485-.315-.515-.497-1.132-.638-1.729-.211-.896-.336-1.813-.527-2.889-.696-.17-1.378-.325-2.054-.501-.398-.103-.805-.203-1.183-.364-.509-.221-.907-.631-.689-1.191.118-.305.559-.636.886-.676.804-.096 1.628-.031 2.597-.031.189-.987.313-1.885.542-2.754.127-.478.402-.927.67-1.353.088-.139.401-.264.543-.21.253.097.589.298.647.518.127.49.105 1.018.141 1.53.054.807.105 1.613.166 2.571.909.146 1.708.251 2.494.41.519.104 1.061.362.964.97-.049.302-.479.651-.813.772-.661.241-1.374.339-2.274.543z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M335.567 410.153c1.134.129 2.297.143 3.397.408 6.463 1.553 10.043 7.659 8.344 14.183-.209.801-.564 1.563-.836 2.349-1.618 4.668-5.161 6.612-9.832 6.682-1.839.026-3.718-.353-5.525-.777-2.87-.675-4.684-2.655-5.601-5.376-.803-2.388-1.122-4.846-.498-7.374.478-1.942 1.201-3.767 2.256-5.454 1.911-3.049 4.536-4.832 8.295-4.641zm.394 12.044.004.094c1.44-.078 2.89-.088 4.315-.283.35-.049.847-.693.854-1.073.006-.369-.479-.806-.84-1.104-.206-.172-.591-.174-.895-.176a344.545 344.545 0 0 0-6.82.005c-.387.006-.796.172-1.155.346-.652.318-.665 1.461-.017 1.809.351.185.756.35 1.144.367 1.134.046 2.273.015 3.41.015z"
                    fill="#74BAA5"
                />

                <path
                    d="M335.989 437.913c-.831 0-1.662.027-2.491-.005-3.258-.122-5.747-1.696-7.558-4.293-3.183-4.564-3.631-9.626-2.329-14.898.523-2.12 1.347-4.142 2.686-5.919 2.13-2.826 4.855-4.446 8.481-4.447 2.09-.001 4.154.072 6.133.828 4.608 1.76 7.584 4.95 8.616 9.842.171.813.354 1.622.498 2.44.841 4.789-.412 9.028-3.298 12.881-1.322 1.764-3.022 2.848-5.162 3.175-1.842.281-3.707.406-5.563.6l-.013-.204zm-.422-27.76c-3.76-.191-6.385 1.592-8.296 4.64-1.055 1.688-1.777 3.512-2.256 5.454-.624 2.528-.305 4.986.498 7.374.917 2.721 2.73 4.701 5.601 5.376 1.808.425 3.686.804 5.525.777 4.671-.069 8.214-2.014 9.832-6.682.272-.786.627-1.548.836-2.349 1.699-6.523-1.881-12.63-8.344-14.183-1.099-.264-2.262-.278-3.396-.407z"
                    fill={fill}
                />

                <path
                    d="M335.961 422.197c-1.137 0-2.275.031-3.41-.016-.388-.018-.793-.182-1.144-.367-.648-.348-.636-1.49.017-1.809.359-.174.769-.34 1.155-.346 2.273-.03 4.547-.02 6.82-.005.304.002.689.004.895.176.36.298.846.734.84 1.104-.008.38-.505 1.024-.854 1.073-1.425.195-2.875.205-4.315.283l-.004-.093z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M263.421 410.144c1.131.146 2.293.169 3.387.457 7.007 1.84 9.228 7.567 8.353 13.358-.169 1.115-.637 2.19-1.021 3.266-1.555 4.368-4.883 6.272-9.302 6.572-2.095.143-4.137-.183-6.153-.8-2.834-.867-4.641-2.782-5.512-5.503-1.827-5.705-.267-10.681 3.674-14.972 1.659-1.807 3.393-2.273 6.574-2.378zm.87 16.878c.667.605 1.19 1.083 1.718 1.555.462.412.903.858 1.404 1.216.899.638 1.926.307 2.18-.779a12.95 12.95 0 0 0 .352-3.068c-.025-2.38-.154-4.761-.262-7.14-.019-.407-.035-.875-.239-1.197-.257-.404-.665-.915-1.078-.988-2.856-.508-5.733-.954-8.634-.343-1.752.369-2.406.989-2.349 2.736.09 2.685.365 5.366.673 8.037.092.796.488 1.581.859 2.313.593 1.169 1.586 1.403 2.537.563.924-.822 1.734-1.767 2.839-2.905z"
                    fill="#FFC91C"
                />

                <path
                    d="M259.452 418.445c2.614-1.021 5.236-.453 7.819-.006.798 2.575.944 4.834.567 8.298-.774.382-1.091-.322-1.542-.673-.491-.381-.923-.841-1.429-1.197-.616-.434-1.431-.273-1.97.281-.778.797-.973 2.096-2.214 2.587-.218-.207-.546-.371-.621-.614-.695-2.267-.949-6.056-.61-8.676z"
                    fill="#FFFFFF"
                />

                <path
                    d="M263.84 437.923c-.829 0-1.661.018-2.491-.004-3.388-.092-5.941-1.728-7.788-4.453-3.116-4.6-3.601-9.638-2.206-14.917.616-2.329 1.576-4.505 3.147-6.373 2.053-2.44 4.611-3.729 7.849-3.834 4.239-.137 8.021.879 11.165 3.837 1.544 1.453 2.74 3.165 3.269 5.214.517 2.004.982 4.05 1.159 6.104.415 4.758-1.531 8.69-4.662 12.127-.8.879-1.838 1.405-2.964 1.611-2.137.392-4.295.648-6.447.963-.011-.092-.019-.183-.031-.275zm-.419-27.779c-3.181.105-4.915.571-6.574 2.379-3.94 4.291-5.501 9.267-3.674 14.972.871 2.721 2.678 4.636 5.512 5.503 2.017.617 4.059.942 6.153.8 4.419-.3 7.747-2.204 9.302-6.572.384-1.075.852-2.15 1.021-3.266.875-5.791-1.346-11.519-8.353-13.358-1.094-.289-2.256-.313-3.387-.458z"
                    fill={fill}
                />

                <path
                    d="M264.291 427.022c-1.104 1.139-1.915 2.084-2.838 2.903-.951.841-1.944.607-2.537-.563-.371-.731-.768-1.517-.859-2.313-.308-2.671-.583-5.353-.673-8.037-.058-1.747.597-2.367 2.349-2.736 2.9-.611 5.777-.165 8.634.343.413.073.821.584 1.078.988.204.322.221.79.239 1.197.107 2.379.236 4.76.262 7.14a12.95 12.95 0 0 1-.352 3.068c-.254 1.086-1.28 1.417-2.18.779-.501-.357-.942-.804-1.404-1.216-.53-.471-1.052-.948-1.719-1.553zm-4.839-8.577c-.339 2.62-.085 6.409.611 8.676.075.243.403.407.621.614 1.241-.491 1.435-1.79 2.214-2.587.539-.555 1.354-.715 1.97-.281.506.356.938.816 1.429 1.197.451.35.768 1.055 1.542.673.377-3.464.23-5.723-.567-8.298-2.584-.447-5.206-1.014-7.82.006z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M384.605 314.127c-.04-1.363-.052-2.594-.124-3.818-.049-.823-.112-1.658-.302-2.457-.229-.962-.819-1.69-1.863-1.874-1.119-.193-2.244-.401-3.375-.483-.822-.059-1.401.499-1.575 1.253-.184.795-.173 1.64-.218 2.465-.063 1.136-.043 2.283-.17 3.412a2.61 2.61 0 0 1-.624 1.376c-.221.245-.742.317-1.114.287-.222-.019-.549-.358-.598-.601-.227-1.117-.482-2.246-.528-3.378-.2-4.771-.335-9.547-.478-14.321-.011-.406-.022-.876.162-1.206.168-.299.603-.614.923-.614.317 0 .864.342.909.604.194 1.118.301 2.261.324 3.397.054 2.56 1.183 3.804 4.401 3.053 1.158-.27 1.78-1.019 1.872-2.185.09-1.138.094-2.282.216-3.414.108-1.013.568-1.473 1.288-1.476.896-.004 1.512.5 1.747 1.458.073.301.124.612.143.921.318 5.179.632 10.357.938 15.536.025.414.026.832-.01 1.244-.09 1.014-.751 1.095-1.944.821z"
                        fill="#FFA1BA"
                    />

                    <path
                        d="m382.057 308-2.211-.385c-.189.327-.458.578-.461.834-.011.93.058 1.861.114 2.79.206 3.279-1.978 5.317-5.2 4.826-.501-.078-.986-.26-1.663-.443-.166-.79-.446-1.576-.48-2.374-.204-4.773-.397-9.549-.491-14.325-.026-1.441.22-2.898.446-4.329.271-1.72.983-2.371 2.345-2.347 1.742.03 2.828.871 3.081 2.463.114.715.102 1.449.149 2.175.028.415.042.831.093 1.243.182 1.475.599 1.649 2.453.967.175-1.384.306-2.826.553-4.25.276-1.6 1.161-2.391 2.675-2.564 1.481-.168 3.026.619 3.605 1.924.25.56.454 1.184.494 1.791.361 5.49 1.381 10.932 1.281 16.455-.015.727.025 1.465-.086 2.177-.179 1.126-.967 1.796-2.127 1.929-.31.035-.622.026-.934.026-2.562.003-3.143-.54-3.195-3.044-.031-1.556-.026-3.111-.063-4.666-.004-.192-.158-.379-.378-.873zm2.548 6.127c1.192.274 1.854.193 1.945-.821.036-.412.034-.83.01-1.244-.307-5.179-.62-10.357-.938-15.536a5.22 5.22 0 0 0-.143-.921c-.235-.958-.852-1.462-1.747-1.458-.72.003-1.18.463-1.288 1.476-.122 1.132-.126 2.276-.216 3.414-.092 1.166-.714 1.915-1.872 2.185-3.219.751-4.348-.492-4.401-3.053a22.595 22.595 0 0 0-.324-3.397c-.045-.262-.592-.604-.909-.604-.319 0-.755.315-.923.614-.185.33-.173.8-.162 1.206.143 4.774.277 9.55.478 14.321.047 1.132.302 2.261.528 3.378.049.242.376.582.598.601.372.03.894-.042 1.114-.287a2.61 2.61 0 0 0 .624-1.376c.127-1.129.107-2.276.17-3.412.045-.825.034-1.67.218-2.465.174-.754.753-1.312 1.575-1.253 1.131.082 2.256.29 3.375.483 1.044.184 1.634.912 1.863 1.874.189.799.253 1.634.302 2.457.072 1.224.083 2.455.123 3.818z"
                        fill={fill}
                    />
                </g>
                <g>
                    <path
                        d="M355.932 295.384c1.705-1.519 3.335-2.061 5.194-1.645 2.088.469 3.902 1.454 5.212 3.183 1.286 1.701.914 5.532-.656 6.959-.369.337-.872.558-1.349.741-.379.145-.813.147-1.221.221-2.688.491-2.813.632-2.872 3.446-.025 1.143.012 2.286.017 3.43.007 1.039.04 2.078.006 3.117-.054 1.547-.904 2.027-2.244 1.354-.907-.455-1.476-1.116-1.592-2.139-.082-.722-.188-1.443-.249-2.168-.467-5.492-.191-10.991-.246-16.499zm2.784 5.139c.012.22 0 .74.075 1.247.196 1.323 1.225 1.979 2.457 1.564 1.575-.528 2.654-1.598 3.086-3.196.115-.425-.052-1.033-.303-1.419-.262-.401-.748-.699-1.195-.93-2.809-1.451-3.995-.737-4.12 2.734z"
                        fill="#FFA1BA"
                    />

                    <path
                        d="M362.372 307.24c0 2.167.015 4.03-.005 5.892-.012 1.244-.012 2.492-.13 3.726-.09.924-.714 1.477-1.641 1.611-.616.091-1.238.158-1.859.188-2.817.139-3.836-.628-4.05-3.455-.34-4.554-.54-9.12-.752-13.684-.078-1.659.026-3.325-.031-4.984-.068-2.002.768-3.23 2.633-4.088 2.354-1.082 4.607-1.061 6.927-.141.671.266 1.317.612 1.932.992 4.548 2.808 4.722 6.816 2.7 11.079-.608 1.28-1.716 2.058-3.128 2.347-.802.165-1.604.321-2.596.517zm-6.44-11.856c.056 5.508-.221 11.007.246 16.5.062.725.167 1.446.249 2.168.116 1.022.685 1.684 1.592 2.139 1.34.673 2.19.192 2.244-1.354.034-1.039.001-2.078-.006-3.117-.005-1.144-.042-2.286-.017-3.43.059-2.814.185-2.955 2.872-3.446.408-.073.842-.076 1.221-.221.477-.184.979-.404 1.349-.741 1.57-1.427 1.942-5.258.656-6.959-1.31-1.729-3.124-2.714-5.212-3.183-1.859-.417-3.489.125-5.194 1.644z"
                        fill={fill}
                    />

                    <path
                        d="M358.716 300.523c.125-3.472 1.311-4.186 4.12-2.734.447.23.934.528 1.195.93.251.386.418.994.303 1.419-.432 1.599-1.511 2.668-3.086 3.196-1.232.416-2.261-.24-2.457-1.564-.075-.506-.064-1.027-.075-1.247zm2.807-1.349c-.378.265-.684.369-.791.575-.257.494.047 1.292.41 1.194.334-.088.749-.39.846-.688.08-.246-.253-.628-.465-1.081z"
                        fill={fill}
                    />
                </g>
                <g>
                    <path
                        d="M394.983 314.28c-.129-.64-.251-1.035-.281-1.436-.422-5.705-.86-11.409-1.229-17.117-.132-2.022.561-2.836 2.492-3.299 2.858-.686 6.676 1.309 7.671 4.042.175.477.36 1.058.242 1.512-.626 2.375-1.77 4.413-4.085 5.566-.182.09-.409.082-.6.155-2.27.871-2.699 1.552-2.565 3.983.096 1.762.227 3.524.237 5.288.005.946-.26 1.074-1.882 1.306zm.088-17.096c.081.599.159 1.217.255 1.831.065.41.122.827.251 1.218.321.96 1.308 1.445 2.257 1.041a5.018 5.018 0 0 0 1.529-1.016c.947-.923 1.457-2.073 1.021-3.39-.409-1.238-1.532-1.602-2.692-1.817-1.724-.319-2.632.417-2.621 2.133z"
                        fill="#FFA1BA"
                    />

                    <path
                        d="M398.264 305.95c.18 1.367.376 2.478.462 3.598.106 1.444.204 2.896.157 4.34-.041 1.276-.807 2.103-2.069 2.394-.999.229-2.008.418-3.179.658-.293-.563-.634-1.059-.818-1.608a7.17 7.17 0 0 1-.347-1.83c-.345-5.798-.739-11.594-.968-17.395-.128-3.241 2.055-5.434 5.305-5.574 3.695-.159 6.338 1.707 8.254 4.656.951 1.463 1.061 3.213.21 4.766a24.339 24.339 0 0 1-2.996 4.324c-.556.634-1.603.852-2.443 1.221-.368.161-.778.228-1.568.45zm-3.281 8.33c1.622-.232 1.887-.36 1.882-1.306-.011-1.764-.142-3.526-.237-5.288-.134-2.432.296-3.112 2.565-3.983.191-.073.419-.065.6-.155 2.315-1.153 3.459-3.191 4.085-5.566.118-.454-.067-1.035-.242-1.512-.995-2.733-4.813-4.728-7.671-4.042-1.932.463-2.624 1.276-2.492 3.299.368 5.708.807 11.412 1.229 17.117.03.401.152.797.281 1.436z"
                        fill={fill}
                    />

                    <path
                        d="M395.071 297.184c-.012-1.716.896-2.451 2.62-2.133 1.16.216 2.283.579 2.692 1.817.436 1.316-.073 2.467-1.021 3.39-.43.422-.973.779-1.529 1.016-.949.404-1.936-.081-2.257-1.041-.129-.391-.186-.808-.251-1.218-.095-.615-.173-1.233-.254-1.831zm2.8-.39c-.342.416-.634.608-.642.813-.018.443-.234 1.12.502 1.153.227.012.622-.503.677-.822.047-.28-.274-.623-.537-1.144z"
                        fill={fill}
                    />
                </g>
            </g>
            <g>
                <g>
                    <path
                        d="m56.784 363.169-.441-1.354c1.086-.585 2.133-1.259 3.265-1.729 1.902-.793 2.596-3.31.41-5.065-1.116-.896-2.458-1.322-5.077-1.587-.125-.315-.324-.678-.398-1.061-.054-.275.065-.582.12-.969.63-.087 1.24-.133 1.832-.259 2.081-.45 3.596-2.512 3.277-4.6-.104-.682-.394-1.494-.882-1.928-1.383-1.232-2.803-2.56-4.955-2-.271.071-.594-.057-1.373-.148.863-.441 1.322-.739 1.824-.916 2.929-1.029 3.457-5.281 1.873-7.43-.459-.622-1.032-1.085-1.802-1.07-.921.02-1.837.214-2.758.267-.188.012-.392-.265-.814-.572.563-.108.864-.26 1.109-.197.866.228 1.618.202 2.281-.51.664-.714 1.111-1.487 1.093-2.493-.036-2.126-.924-3.82-2.63-5.051-.386-.278-.95-.39-1.441-.422-.61-.04-1.23.084-1.916.143-.561-1.044-.718-2.13-.523-3.395 2.279-1.469 4.873-2.256 7.452-2.932a193.55 193.55 0 0 1 13.068-2.965c8.681-1.647 17.389-3.152 26.091-4.682 1.326-.231 2.681-.331 4.027-.407 1.022-.058 1.81.472 2.286 1.358.391.728.693 1.509 1.012 2.275 2.011 4.823 3.037 9.925 4.245 14.978a892.275 892.275 0 0 0 4.461 17.842c2.471 9.462 4.494 19.016 5.994 28.679.352 2.259.772 4.509 1.065 6.775.192 1.499-.206 2.11-1.564 2.669a8.495 8.495 0 0 1-2.094.58c-2.882.379-5.769.942-8.662.992-5.122.087-10.149.837-15.177 1.656-3.385.549-6.748 1.237-10.122 1.847-5.65 1.022-11.102 2.685-16.343 5.039-.365.164-.758.263-1.318.456-.198-.563-.549-1.053-.465-1.452.088-.417.522-.896.929-1.087 1.435-.671 2.77-1.418 3.635-2.821.509-.826.797-1.685.631-2.66-.25-1.463-.936-2.126-2.438-2.396-1.322-.235-2.643-.487-4.348-.804 1.215-1.046 2.127-1.937 3.148-2.681 1.165-.847 1.514-1.931 1.246-3.267-.279-1.393-.857-2.563-2.41-2.93-1.205-.287-2.397-.622-3.604-.895-.581-.133-.904-.447-.997-1.018-.101-.626.303-.963.763-1.22.632-.356 1.269-.731 1.947-.979 1.363-.499 1.844-1.566 2.062-2.868.543-3.231-1.666-5.577-4.872-5.14-.504.071-.995.233-1.722.404zm13.376-9.678c2.815-.486 5.279-.872 7.724-1.339 5.197-.998 10.39-2.021 15.575-3.071 1.319-.265 2.645-.577 3.906-1.04 2.106-.771 2.794-2.114 2.356-4.393-.528-2.751-1.099-5.494-1.67-8.238-.569-2.745-1.232-5.47-1.714-8.23-.284-1.62-.427-3.248-.862-4.863-.413-1.532-1.321-2.225-2.675-2.702-1.654-.588-3.3-.262-4.932-.049-8.336 1.089-16.656 2.277-24.881 4.05-1.49.32-2.033.686-2.055 2.241-.023 1.64.074 3.352.532 4.911 1.56 5.314 2.239 10.765 2.857 16.234.117 1.03.224 2.069.44 3.081.621 2.93 1.521 3.603 4.52 3.48.414-.017.828-.067.879-.072zm35.014 17.07c.782-1.146.325-1.866-.121-2.571-1.413-2.237-3.404-3.893-5.491-5.451-.815-.607-1.642-1.196-2.481-1.809.484-1.08 1.976-1.054 2.046-2.501-1.871-.177-3.458.388-4.788 1.578-.399.358-.727 1.128-.641 1.632.298 1.743.937 3.393 2.133 4.748.144.163.627.203.829.086.204-.118.38-.521.345-.768-.106-.758-.321-1.498-.577-2.605 2.045 1.064 3.387 2.36 4.799 3.564 1.394 1.188 2.071 3.081 3.947 4.097zm2.426 10.379c2.557-.189 4.121-2.03 3.898-4.595-.228-2.638-2.308-4.717-4.535-4.534-2.562.208-4.477 2.296-4.333 4.72.157 2.665 2.339 4.6 4.97 4.409zm-24.652-2.918c1.853.029 3.704.061 5.555.08.306.004.671.051.901-.093.312-.196.59-.527.734-.864.049-.113-.324-.582-.548-.617a27.457 27.457 0 0 0-12.226.732c-.467.135-.904.484-1.265.831-.175.167-.252.592-.167.826.073.197.428.335.685.409.178.052.42-.004.597-.087 1.817-.859 3.776-.97 5.734-1.217zm-11.095-12.56c2.517.902 4.328.372 6.102-.117 2.034-.561 4.028-.842 6.133-.374.99.219 2.062.111 3.095.084.624-.017 1.279-.145 1.43-.917.092-.459-.595-.868-1.411-.851-.829.018-1.663.161-2.48.083-3.676-.352-7.228.476-10.799 1.094-.54.093-1.031.485-2.07.998zm16.073-7.573c-1.6-.192-3.201-.258-4.854.077-1.722.348-3.487.506-5.239.687-1.448.15-2.908.177-4.358.324-.608.061-1.221.239-1.79.467-.202.081-.422.498-.378.708.045.213.412.522.625.512 2.587-.127 5.174-.277 7.755-.486a9.47 9.47 0 0 0 2.432-.511c1.669-.607 3.304-1.205 5.14-.82.381.079.761-.275.667-.958zm-4.813 12.655.035.178c.625-.018 1.258.034 1.869-.067a26.967 26.967 0 0 0 3.012-.677c.206-.058.495-.598.431-.682-.213-.285-.539-.555-.876-.66-.26-.08-.597.103-.904.152-.814.131-1.641.402-2.448.351-2.538-.156-4.962.461-7.4.96-.946.195-2.113.098-2.595 1.289.907 1.244 2.068.448 3.081.299 1.946-.291 3.865-.752 5.795-1.143zm-11.204 24.573c.22-.298.386-.777.668-.862 2.188-.648 4.369-1.374 6.606-1.783 6.126-1.118 12.274-2.134 18.425-3.102 2.047-.321 4.131-.404 6.202-.56 2.069-.156 4.146-.243 6.218-.404 3.314-.256 6.578-.778 9.633-2.219.387 1.505.363 1.844-.468 2.075-2.397.665-4.797 1.364-7.238 1.802-4.394.787-8.805 1.339-13.299 1.445-5.08.118-10.158.649-15.22 1.156-2.261.225-4.492.793-6.725 1.268-1.62.346-3.22.794-4.829 1.194l.027-.01z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFFFFF"
                    />

                    <g>
                        <path
                            d="M57.125 382.919c-.723-.191-1.542-.331-2.303-.62-1.399-.534-1.893-2.583-.768-3.577.906-.802 2.039-1.365 3.122-1.936.535-.28 1.252-.223 1.768-.522.994-.575 1.79-.202 2.582.33 1.032.692 1.374 1.919.734 2.978-1.139 1.886-2.958 2.796-5.135 3.347zm-4.533-38.523c1.835-.126 3.01.46 3.609 1.802.447.999.263 1.915-.667 2.407-1.463.78-2.956 1.534-4.502 2.121-1.298.492-2.589-.304-2.886-1.583-.068-.296-.114-.628-.048-.914.42-1.843 2.625-3.707 4.494-3.833zm1.753 26.495c-.311-.021-.62-.025-.925-.064-.754-.098-1.387-.384-1.645-1.178-.248-.772-.005-1.386.561-1.945 1.587-1.574 3.601-2.339 5.672-2.949.548-.161 1.261-.076 1.799.144.404.164.855.689.926 1.111.214 1.304-1.028 3.169-2.274 3.609-1.065.378-2.135.738-3.209 1.088-.29.095-.603.123-.905.184zm10.772 16.239c.127 1.31-.368 2.502-1.443 3.158-1.914 1.167-3.855 2.48-6.426 1.944-.849-1.002-.709-2.208-.548-3.382 3.724-3.036 4.989-3.298 8.417-1.72zm-11.989-26.499c-.736-.026-1.295.076-1.748-.098-.427-.164-.852-.561-1.077-.966-.323-.583-.205-1.293.356-1.667 1.816-1.21 3.818-2.023 5.992-2.29.456-.055 1.003.223 1.435.475 1.068.623 1.146 2.246.049 2.826-1.627.861-3.332 1.608-5.007 1.72zm-6.525-19.385c-.898-1.883-.866-2.979.345-3.553 1.762-.834 3.62-1.491 5.48-2.088.85-.272 1.657.336 1.934 1.152.276.815-.028 1.839-.79 2.115-2.312.838-4.654 1.595-6.969 2.374zm-1.936-10.952c1.287-2.23 3.017-3.672 5.617-3.828 1.917-.114 2.303.349 2.233 2.674-1.662 1.31-3.838 1.673-5.77 2.547-.851.386-1.535-.284-2.08-1.393z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#FFC91C"
                        />
                    </g>
                    <path
                        d="M64.261 397.949c-.148.123-.318.367-.44.346-.362-.065-.705-.23-1.048-.372-.024-.011-.018-.183.025-.244.213-.293 1.112-.309 1.41-.02.056.056.037.191.053.29zm19.787-3.15c.355-.031.179-.016.002 0 .177-.013.354-.024-.002 0zm-12.167.329a68.534 68.534 0 0 1-.436-.101l.458.09c.006 0-.022.011-.022.011zm22.413-68.73c1.61 6.43 2.192 12.65 3.742 18.665-1.025 1.071-2.256 1.279-3.469 1.511-3.677.701-7.361 1.371-11.036 2.089-2.856.559-5.696 1.206-8.557 1.745a80.487 80.487 0 0 1-5.551.835c-.691.081-1.411-.074-2.093-.121-.832-2.098-.985-4.177-1.3-6.228a193.858 193.858 0 0 0-1.049-6.149c-.38-2.02-.82-4.03-1.248-6.119.517-.226.873-.433 1.257-.539 3.418-.935 6.889-1.557 10.431-1.775a32.174 32.174 0 0 0 3.098-.327c4.417-.714 8.79-1.62 13.047-3.039.768-.257 1.6-.328 2.728-.548zm-27.2 7.591c-.167 2.869.487 5.592 1.152 8.312.265 1.088.993 1.778 2.189 2.289 2.215-.744 4.556-1.527 6.995-2.345.445-3.348-.646-6.278-1.552-9.222-.224-.729-.942-1.092-1.742-1.09-2.531.009-4.944.422-7.042 2.056zm12.856 8.029c.696.291 1.123.635 1.533.616 3.625-.165 7.156-.926 10.653-1.842.282-.074.773-.317.485-1.039-.39-.084-.896-.337-1.35-.267a438.31 438.31 0 0 0-10.066 1.694c-.35.063-.647.421-1.255.838zm11.724-10.172c.25-.82-.278-1.036-.784-1.032-1.659.01-3.321.046-4.975.18-2.275.183-4.544.447-6.812.714-.846.1-1.543.709-1.286.957.332.319.834.529 1.296.632.386.085.821-.046 1.234-.091 3.508-.367 7.017-.732 10.525-1.111.288-.032.564-.174.802-.249zm-12.215 5.781c2.548.157 10.922-1.125 13.154-2.016-.227-.226-.414-.584-.631-.603-3.967-.328-7.851.172-11.653 1.306-.468.14-.992.364-.87 1.313z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M63.652 330.102c-.16-.328-.349-.583-.411-.869-.243-1.111-.446-2.23-.694-3.498.674-.211 1.227-.443 1.805-.554 2.96-.565 5.921-1.118 8.888-1.64a138.18 138.18 0 0 1 4.93-.747c3.29-.453 6.583-.898 9.879-1.316 1.028-.131 2.072-.243 3.102-.205.59.021 1.18.337 1.748.571.166.068.335.293.372.473.122.589.185 1.189.287 1.907-1.574.521-3.022 1.075-4.512 1.478-4.817 1.304-9.676 2.304-14.684 2.688-3.501.27-6.962 1.091-10.71 1.712zm16.527-3.351c.38-.643.732-1.019.821-1.449.095-.462-.566-.88-1.104-.784-.594.105-.999.53-.859 1.063.103.385.62.66 1.142 1.17zm8.862-2.207c.259-.698.536-1.134.527-1.564-.004-.192-.608-.561-.892-.52-.579.083-.851.618-.662 1.159.104.299.521.486 1.027.925zm-3.548-.017c-.035-.919-.563-1.566-1.039-1.379-.284.11-.667.645-.595.84.146.399.523.776.902.996.132.079.549-.337.732-.457z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFC91C"
                    />

                    <path
                        d="M109.954 376.576c.116 1.504-.826 2.574-2.326 2.642-1.725.078-3.001-.975-3.197-2.636-.203-1.707.884-3.141 2.488-3.283 1.444-.126 2.893 1.436 3.035 3.277z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#74BAA5"
                    />

                    <g>
                        <path
                            d="M72.953 338.982c1.161.476 2.073.909 2.755 2.015-1.304.642-2.528 1.006-3.849 1.176.011-1.566-.007-1.573 1.094-3.191zm-3.791-2.379c1.085-.002 1.594.643 2.271 1.448l-1.176 2.493c-1.141-1.297-1.09-2.572-1.095-3.941zm.524-2.163c1.37-.496 2.409-.798 3.574-.684.218 1.055-.275 1.618-1.05 2.17l-2.524-1.486zm4.611 1.507c.277.176.381.208.43.277.273.394.592.806.179 1.274-.086.097-.387.117-.516.046-.51-.283-.571-.73-.342-1.236.039-.085.109-.159.249-.361z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#FFA1BA"
                        />
                    </g>
                </g>
                <path
                    d="M60.192 394.389c-.998.085-1.92.285-2.819.212-1.227-.102-2.075-.77-2.452-2.049-.931-3.163-.694-4.127 1.763-6.264.383-.333.801-.626 1.193-.929-.176-.882-.794-.491-1.215-.553-.409-.059-.833-.028-1.238-.107-3.216-.63-4.232-2.069-3.772-5.272.138-.969.471-1.775 1.364-2.321.795-.485 1.525-1.08 2.378-1.696l-.173-2.021c-1.142-.289-2.15-.49-3.125-.801-2.304-.735-3.267-5.05-1.104-6.484.519-.345 1.045-.693 1.497-1.115a2.21 2.21 0 0 0 .596-1.016c.068-.264-.116-.594-.216-1.018-.666-.142-1.378-.232-2.05-.444-2.156-.684-3.06-2.658-2.009-4.684.557-1.072 1.449-1.972 2.329-3.133l-.247-1.735c-.479-.179-.943-.487-1.416-.503-1.898-.063-2.699-1.292-3.291-2.843-.32-.838-.376-1.65.143-2.381.825-1.169 1.72-2.285 2.74-3.627-.028-.378-.454-.466-1.04-.391-.511.065-1.05.151-1.543.052-.481-.097-1.014-.316-1.362-.651-1.417-1.358-1.308-4.323.172-5.606.628-.544 1.335-.998 1.952-1.553.2-.18.391-.629.299-.812-.158-.315-.503-.609-.837-.75-.37-.157-.824-.1-1.227-.194-1.707-.399-2.927-2.281-2.374-4.09.511-1.676 1.197-3.084 3.012-3.779.006-.862.083-1.687.004-2.495-.205-2.109.646-3.624 2.461-4.635a33.623 33.623 0 0 1 2.205-1.145c4.477-2.056 9.229-3.227 14.038-4.125 10.534-1.967 21.086-3.84 31.636-5.714 1.118-.2 2.283-.286 3.413-.205 2.429.174 4.063 1.555 4.654 3.925 1.654 6.652 3.191 13.335 4.902 19.97 1.454 5.629 3.094 11.209 4.641 16.815 1.577 5.716 3.182 11.425 4.688 17.159.66 2.51 1.101 5.078 1.644 7.619.262 1.217.429 2.465.816 3.643 1.467 4.465 1.096 9.006.732 13.565-.206 2.575-1.903 3.883-4.118 4.454-1.406.363-2.856.577-4.299.76-6.39.798-12.701 2.355-19.211 2.03a10.276 10.276 0 0 0-1.559.037c-5.585.572-11.17 1.142-16.751 1.745-2.895.314-5.778.742-8.677 1.024-1.338.13-2.707.134-4.043.002-1.497-.147-1.841-.633-2.103-2.201a23.372 23.372 0 0 0-.444-2.109c-.13-.483-.337-.947-.557-1.561zm11.689.739c1.61-.4 3.209-.849 4.829-1.194 2.233-.475 4.464-1.043 6.725-1.268 5.062-.507 10.14-1.038 15.22-1.156 4.494-.107 8.905-.658 13.299-1.445 2.441-.438 4.841-1.137 7.238-1.802.832-.231.855-.57.468-2.075-3.055 1.44-6.319 1.963-9.633 2.219-2.071.161-4.148.248-6.218.404-2.071.155-4.155.238-6.202.56-6.151.968-12.299 1.983-18.425 3.102-2.237.409-4.419 1.136-6.606 1.783-.283.085-.449.564-.679.862l-.453-.09c.146.032.292.067.437.1zm-15.097-31.959c.727-.171 1.218-.333 1.721-.401 3.206-.438 5.415 1.908 4.872 5.14-.218 1.302-.699 2.369-2.062 2.868-.678.247-1.314.622-1.947.979-.46.257-.864.594-.763 1.22.092.57.416.885.997 1.018 1.207.273 2.399.608 3.604.895 1.553.367 2.131 1.536 2.41 2.93.267 1.336-.081 2.42-1.246 3.267-1.021.744-1.933 1.635-3.148 2.681 1.705.316 3.025.568 4.348.804 1.502.27 2.188.934 2.438 2.396.166.975-.122 1.834-.631 2.66-.865 1.403-2.2 2.15-3.635 2.821-.407.19-.841.67-.929 1.087-.084.399.267.89.465 1.452.56-.193.954-.292 1.318-.456 5.241-2.354 10.693-4.017 16.343-5.039 3.375-.609 6.737-1.298 10.122-1.847 5.027-.819 10.055-1.569 15.177-1.656 2.894-.05 5.78-.613 8.662-.992a8.507 8.507 0 0 0 2.094-.58c1.358-.559 1.756-1.17 1.564-2.669-.293-2.267-.713-4.517-1.065-6.775-1.5-9.663-3.523-19.217-5.994-28.679a892.275 892.275 0 0 1-4.461-17.842c-1.208-5.054-2.233-10.155-4.245-14.978-.319-.767-.621-1.547-1.012-2.275-.476-.887-1.263-1.416-2.286-1.358-1.346.076-2.701.176-4.027.407-8.703 1.529-17.411 3.035-26.091 4.682a193.688 193.688 0 0 0-13.068 2.965c-2.579.676-5.173 1.463-7.452 2.932-.195 1.265-.037 2.351.523 3.395.686-.059 1.306-.183 1.916-.143.491.032 1.056.144 1.441.422 1.706 1.23 2.595 2.925 2.63 5.051.018 1.006-.429 1.779-1.093 2.493-.664.712-1.416.738-2.281.51-.245-.063-.546.09-1.109.197.423.308.626.584.814.572.921-.053 1.837-.247 2.758-.267.77-.015 1.343.448 1.802 1.07 1.584 2.149 1.056 6.4-1.873 7.43-.502.177-.961.476-1.824.916.778.092 1.102.22 1.373.148 2.152-.56 3.572.768 4.955 2 .488.434.778 1.246.882 1.928.319 2.088-1.197 4.149-3.277 4.6-.592.126-1.201.172-1.832.259-.055.387-.173.693-.12.969.074.384.274.746.398 1.061 2.619.265 3.961.691 5.077 1.587 2.186 1.756 1.492 4.272-.41 5.065-1.132.471-2.179 1.145-3.265 1.729.158.479.25.763.442 1.351zm.341 19.75c2.177-.551 3.996-1.461 5.135-3.347.639-1.059.297-2.285-.734-2.978-.792-.532-1.588-.905-2.582-.33-.517.299-1.234.241-1.768.522-1.083.57-2.216 1.134-3.122 1.936-1.125.994-.631 3.043.768 3.577.761.289 1.58.429 2.303.62zm-4.533-38.523c-1.87.126-4.074 1.99-4.493 3.833-.066.286-.021.618.048.914.297 1.279 1.588 2.075 2.886 1.583 1.546-.587 3.039-1.341 4.502-2.121.93-.492 1.113-1.408.667-2.407-.6-1.343-1.774-1.928-3.61-1.802zm1.753 26.495c.302-.06.615-.089.905-.185 1.074-.35 2.144-.71 3.209-1.088 1.246-.44 2.489-2.306 2.274-3.609-.071-.422-.521-.947-.926-1.111-.539-.22-1.251-.305-1.799-.144-2.071.61-4.085 1.375-5.672 2.949-.566.56-.809 1.173-.561 1.945.257.794.89 1.08 1.645 1.178.305.039.615.044.925.065zm10.772 16.239c-3.428-1.578-4.693-1.316-8.417 1.721-.161 1.174-.301 2.38.548 3.382 2.57.536 4.512-.777 6.426-1.944 1.074-.657 1.569-1.849 1.443-3.159zm-11.989-26.499c1.675-.112 3.38-.859 5.008-1.72 1.097-.58 1.019-2.203-.049-2.826-.432-.252-.979-.529-1.435-.475-2.174.267-4.176 1.08-5.992 2.29-.561.374-.679 1.084-.356 1.667.225.405.65.802 1.077.966.451.174 1.011.071 1.747.098zm-6.525-19.385c2.315-.779 4.657-1.536 6.969-2.373.762-.276 1.067-1.3.79-2.115-.277-.816-1.084-1.425-1.934-1.152-1.86.597-3.719 1.254-5.48 2.088-1.211.573-1.243 1.669-.345 3.552zm-1.936-10.952c.544 1.109 1.229 1.779 2.08 1.393 1.932-.874 4.108-1.237 5.77-2.547.069-2.325-.316-2.788-2.233-2.674-2.599.156-4.33 1.598-5.617 3.828zm19.594 67.654c-.016-.099.004-.233-.054-.289-.298-.289-1.197-.273-1.41.02-.043.061-.048.233-.025.244.344.142.686.307 1.048.372.123.021.292-.223.441-.347zm19.787-3.149c.356-.023.179-.013.002 0 .177-.016.353-.031-.002 0z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />

                <path
                    d="M70.16 353.491c-.051.005-.464.055-.878.072-3 .123-3.899-.551-4.52-3.48-.216-1.012-.323-2.051-.44-3.081-.618-5.47-1.297-10.92-2.857-16.234-.458-1.56-.555-3.272-.532-4.911.022-1.556.565-1.921 2.055-2.241 8.226-1.772 16.545-2.961 24.881-4.05 1.631-.213 3.277-.539 4.932.049 1.354.478 2.262 1.17 2.675 2.702.435 1.615.578 3.243.862 4.863.482 2.76 1.145 5.484 1.714 8.23.57 2.744 1.142 5.487 1.67 8.238.438 2.279-.25 3.622-2.356 4.393-1.261.463-2.587.775-3.906 1.04a1551.994 1551.994 0 0 1-15.575 3.071c-2.447.467-4.91.853-7.725 1.339zm24.134-27.093c-1.128.22-1.959.29-2.729.547-4.257 1.419-8.63 2.325-13.047 3.039a31.86 31.86 0 0 1-3.098.327c-3.542.219-7.013.841-10.431 1.775-.384.106-.74.313-1.257.539.428 2.089.868 4.099 1.248 6.119.383 2.044.733 4.095 1.049 6.149.315 2.051.469 4.13 1.3 6.228.682.047 1.402.202 2.093.121a80.58 80.58 0 0 0 5.551-.835c2.861-.539 5.7-1.186 8.557-1.745 3.675-.718 7.359-1.388 11.036-2.089 1.213-.231 2.444-.439 3.469-1.511-1.549-6.013-2.131-12.234-3.741-18.664zm-30.642 3.704c3.748-.62 7.209-1.441 10.712-1.712 5.007-.384 9.866-1.384 14.684-2.688 1.49-.403 2.938-.957 4.512-1.478-.102-.719-.165-1.318-.287-1.907-.038-.18-.207-.404-.372-.473-.569-.234-1.158-.55-1.748-.571-1.03-.038-2.074.074-3.102.205-3.296.418-6.589.863-9.879 1.316-1.647.228-3.293.46-4.93.747a608.863 608.863 0 0 0-8.888 1.64c-.578.11-1.131.343-1.805.554.248 1.268.451 2.387.694 3.498.061.286.25.54.409.869zm41.522 40.459c-1.875-1.017-2.553-2.909-3.948-4.098-1.413-1.203-2.754-2.5-4.799-3.564.255 1.107.47 1.848.577 2.605.035.247-.141.649-.345.768-.202.117-.685.077-.829-.086-1.196-1.354-1.835-3.005-2.133-4.748-.086-.504.242-1.274.641-1.632 1.331-1.19 2.918-1.755 4.788-1.578-.07 1.447-1.562 1.421-2.046 2.501.839.612 1.666 1.202 2.481 1.809 2.087 1.558 4.078 3.214 5.491 5.451.446.706.904 1.427.122 2.572zm2.426 10.379c-2.631.191-4.813-1.743-4.97-4.409-.144-2.424 1.772-4.512 4.333-4.72 2.227-.183 4.307 1.897 4.535 4.534.223 2.564-1.341 4.406-3.898 4.595zm2.354-4.364c-.142-1.841-1.591-3.403-3.035-3.277-1.604.143-2.69 1.576-2.488 3.283.196 1.661 1.472 2.714 3.197 2.636 1.5-.068 2.442-1.138 2.326-2.642zm-27.006 1.446c-1.958.246-3.916.357-5.734 1.218-.177.083-.42.139-.597.087-.257-.074-.611-.212-.685-.409-.085-.234-.008-.659.167-.826.361-.347.798-.696 1.265-.831a27.457 27.457 0 0 1 12.226-.732c.225.035.598.504.548.617a1.994 1.994 0 0 1-.734.864c-.23.143-.595.097-.901.093-1.851-.02-3.703-.051-5.555-.081zm-11.095-12.56c1.039-.513 1.53-.905 2.071-.998 3.571-.618 7.123-1.445 10.799-1.094.816.078 1.651-.065 2.48-.083.816-.018 1.503.392 1.411.851-.151.772-.807.9-1.43.917-1.033.027-2.105.135-3.095-.084-2.105-.468-4.1-.188-6.133.374-1.775.489-3.586 1.019-6.103.117zm16.073-7.573c.094.684-.287 1.037-.667.957-1.836-.385-3.471.213-5.14.82a9.546 9.546 0 0 1-2.432.511c-2.581.209-5.169.359-7.755.486-.213.011-.58-.299-.625-.512-.044-.21.176-.627.378-.708.569-.228 1.182-.406 1.79-.467 1.45-.147 2.91-.174 4.358-.324 1.752-.181 3.517-.339 5.239-.687 1.653-.334 3.254-.269 4.854-.076zm-4.813 12.655c-1.931.391-3.849.852-5.795 1.143-1.013.149-2.174.945-3.081-.299.482-1.191 1.649-1.094 2.595-1.289 2.437-.499 4.862-1.116 7.4-.96.808.052 1.634-.22 2.448-.351.307-.05.645-.232.904-.152.337.105.663.375.876.66.064.084-.225.624-.431.682-.989.281-1.997.511-3.012.677-.611.102-1.245.05-1.869.067l-.035-.178z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />

                <path
                    d="M67.094 333.989c2.098-1.634 4.511-2.047 7.042-2.056.799-.002 1.518.36 1.742 1.09.906 2.943 1.997 5.874 1.552 9.222-2.439.817-4.779 1.601-6.995 2.345-1.196-.511-1.924-1.201-2.189-2.289-.665-2.72-1.319-5.443-1.152-8.312zm5.859 4.993c-1.1 1.617-1.083 1.625-1.094 3.191a11.886 11.886 0 0 0 3.849-1.176c-.683-1.105-1.594-1.539-2.755-2.015zm-3.791-2.379c.006 1.369-.046 2.645 1.095 3.941l1.176-2.493c-.678-.806-1.186-1.45-2.271-1.448zm.524-2.163 2.524 1.486c.775-.552 1.267-1.115 1.05-2.17-1.165-.114-2.204.187-3.574.684zm4.611 1.507c-.14.202-.21.275-.25.361-.229.506-.167.953.342 1.236.129.071.43.051.516-.046.413-.469.095-.881-.179-1.274-.048-.069-.152-.101-.429-.277zm5.653 6.071c.608-.417.905-.774 1.255-.837a427.667 427.667 0 0 1 10.066-1.694c.455-.07.96.183 1.35.267.289.722-.203.965-.485 1.039-3.497.916-7.028 1.677-10.653 1.842-.41.017-.838-.326-1.533-.617zm11.724-10.172c-.237.075-.514.217-.801.248-3.508.379-7.017.744-10.525 1.111-.413.045-.848.176-1.234.091-.462-.103-.963-.313-1.296-.632-.257-.248.439-.857 1.286-.957 2.267-.267 4.536-.531 6.812-.714 1.653-.134 3.315-.17 4.975-.18.504-.003 1.033.212.783 1.033zm-12.215 5.781c-.122-.949.402-1.173.87-1.313 3.803-1.134 7.686-1.634 11.653-1.306.217.019.404.377.631.603-2.232.891-10.606 2.173-13.154 2.016zm.72-10.876c-.522-.51-1.04-.785-1.142-1.17-.14-.533.266-.958.859-1.063.538-.096 1.199.322 1.104.784-.088.43-.441.806-.821 1.449zm8.862-2.207c-.506-.438-.923-.626-1.026-.926-.189-.541.083-1.076.662-1.159.284-.041.888.328.892.52.008.431-.268.867-.528 1.565zm-3.548-.017c-.184.12-.601.535-.731.457-.378-.22-.755-.597-.902-.996-.072-.195.311-.73.595-.84.475-.187 1.003.46 1.038 1.379z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />
            </g>
            <g>
                <g>
                    <path
                        d="m184.55 298.858 7.604.511c.159.235.428.539.596.893 1.06 2.211 2.753 3.074 5.242 3.072 26.324-.018 52.649.056 78.973.078 8.012.006 16.025-.195 24.034-.043 3.211.061 5.456-.845 6.587-3.976l7.691-.532c.61 1.221 1.077 2.571 1.539 3.924 2.484 7.296 4.362 14.758 5.964 22.285 1.73 8.135 3.331 16.299 4.938 24.458.382 1.937.606 3.907.829 5.868.188 1.679-.188 2.101-1.796 2.148-1.145.036-2.29.002-3.435 0-46.301-.022-92.603-.047-138.903-.065-3.642 0-7.283.073-10.925.065-2.01-.006-2.369-.396-2.07-2.457.52-3.602 1.055-7.204 1.746-10.775 2.016-10.411 4.118-20.809 6.834-31.066.85-3.215 1.832-6.396 2.817-9.573.489-1.579 1.118-3.115 1.735-4.815zm65.414 40.462v.053c15.301 0 30.603.004 45.903-.004 3.018-.004 6.039-.021 9.055-.11 1.346-.039 2.713-.153 4.025-.44 3.016-.663 4.834-2.971 4.75-6.005-.066-2.383-.171-4.767-.689-7.119-.869-3.958-1.569-7.957-2.502-11.901-.451-1.91-1.254-3.742-1.931-5.597-.403-1.096-1.234-1.624-2.404-1.634-1.25-.011-2.499-.06-3.747-.06-34.976-.003-69.95-.003-104.925 0-1.249 0-2.497.049-3.746.06-1.171.01-2.002.538-2.403 1.636-.678 1.854-1.483 3.686-1.931 5.597-.948 4.046-1.661 8.148-2.543 12.211-.532 2.457-.532 4.944-.665 7.432-.078 1.478.503 2.6 1.555 3.573 1.18 1.094 2.497 1.875 4.134 1.989 1.762.12 3.527.304 5.29.306 17.592.023 35.183.013 52.774.013zm-.158 14.595v.006h16.2c3.22-.002 6.439 0 9.659-.008 1.036-.004 2.064.012 2.987-.639.966-.682 1.244-1.191 1.028-2.356-.305-1.631-.61-3.263-.949-4.885-.146-.71-.354-1.406-.568-2.1-.376-1.225-1.164-1.931-2.501-1.92-.518.004-1.038-.022-1.557-.022-4.361.01-8.724-.009-13.085.034-4.464.047-8.928.229-13.392.215-7.269-.024-14.537-.161-21.804-.247a36.357 36.357 0 0 0-1.868.043c-.919.036-1.61.495-1.943 1.324a16.917 16.917 0 0 0-.813 2.669c-.336 1.518-.494 3.083-.907 4.576-.493 1.781.472 2.551 1.813 3.079.648.257 1.43.22 2.153.222 8.515.013 17.031.009 25.547.009z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#EDEDED"
                    />

                    <path
                        d="M314.398 296.883c-1.818.059-3.89.186-5.961.186-19.669-.01-39.336-.063-59.005-.063-19.253 0-38.506.05-57.758.065-1.664.002-3.329-.141-4.992-.116-1.523.022-2.243-.899-2.757-2.107-.159-.374-.2-.807-.243-1.217-.723-7.041-2.004-13.997-3.139-20.979-1.317-8.108-2.503-16.241-3.648-24.376-.898-6.385-1.601-12.796-2.489-19.182-.386-2.778-1.03-5.519-1.538-8.28-.205-1.117-.357-2.245-.566-3.571.825-.127 1.497-.316 2.172-.319 4.995-.019 9.99.004 14.985.003 44.957-.004 89.915-.012 134.873-.006 1.017 0 2.079-.235 3.188.41-.09.867-.09 1.803-.294 2.692-1.776 7.723-2.547 15.59-3.514 23.437-.994 8.049-2.307 16.059-3.495 24.083-1.281 8.641-3.147 17.191-3.94 25.906-.12 1.323-.604 2.397-1.879 3.434zm-64.438-75.817c-21.958 0-43.917.001-65.875-.003-.935 0-1.87-.068-2.807-.08-1.732-.021-2.547.487-2.925 2.149-.224.983-.215 2.062-.1 3.074a881.723 881.723 0 0 0 1.707 13.938c1.55 11.967 3.298 23.902 5.627 35.746.884 4.488 1.542 9.021 2.382 13.518.439 2.353 1.838 3.909 4.283 4.329.921.158 1.858.309 2.786.304 2.802-.01 5.605-.143 8.408-.145 29.867-.021 59.736-.043 89.604-.009 3.945.004 7.897-.308 11.846.141.905.103 1.861-.134 2.782-.291 2.444-.422 3.81-1.986 4.28-4.334.347-1.731.528-3.496.818-5.239 1.316-7.898 3.009-15.726 4.261-23.641 1.822-11.513 3.249-23.07 4.678-34.631a7.907 7.907 0 0 0-.139-2.765c-.403-1.658-1.196-2.166-2.934-2.144-.937.012-1.872.08-2.807.08-21.957.004-43.915.003-65.875.003zm78.229 138.656c-.699 1.188-1.131 1.987-1.627 2.744-.426.655-1.084.942-1.866.941-.624-.002-1.248-.004-1.871-.004-48.577-.002-97.154-.002-145.73 0l-.313.002c-3.211.013-3.387-.12-4.602-3.398.038-.097.051-.219.12-.284.064-.064.188-.065.284-.094-.001-.001 155.052.091 155.605.093z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#D4D4D4"
                    />

                    <path
                        d="M172.391 215.098c-.144-1.429.203-2.236 1.34-2.395 1.219-.17 2.458-.211 3.691-.277.518-.027 1.038.038 1.558.038 40.352.052 80.705.114 121.058.137 4.78.003 9.561-.236 14.343-.296 2.701-.034 5.405.052 8.106.125a37.6 37.6 0 0 1 3.691.266c1.162.147 1.442.989 1.451 1.905-.17.193-.223.28-.299.331a.614.614 0 0 1-.288.114c-.518.026-1.038.048-1.557.048-50.959.004-101.918.004-153.094.004z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#EDEDED"
                    />

                    <path
                        d="M194.649 299.577c.556-.156.85-.311 1.145-.313 36.113-.01 72.23-.01 108.346.001.293 0 .587.157 1.109.307-.305.471-.467 1.041-.811 1.189-.837.357-1.748.661-2.647.729-1.448.105-2.912-.008-4.367-.008-32.683.012-65.364.025-98.044.034-.83 0-1.671-.009-2.49-.127-.944-.136-1.761-.537-2.241-1.812zm24.59 37.599c-.453-1.334-.476-2.214.206-2.999 2.082-.282 57.003-.39 60.859-.121.863.674.761 1.6.622 2.604-.223.139-.466.408-.734.435-.927.097-1.862.145-2.795.145-18.318.008-36.636.006-54.954.002-1.028-.001-2.057-.042-3.204-.066zm35.136-10.569c-.963.087-1.568.187-2.172.188-2.063.004-4.126-.029-6.107-.047-.683-1.783-.698-1.784-.263-3.882 2.704-.355 5.454-.291 8.208-.04.143.418.31.695.322.981.037.821.012 1.643.012 2.8zm-27.346-.126c-.365-1.284.127-2.421.666-3.642a30.438 30.438 0 0 1 7.094 0c.457 1.247.15 2.339-.094 3.412-1.947.715-4.614.792-7.666.23zm45.203-3.651c.537 1.212 1.001 2.352.63 3.841-.909.05-1.823.144-2.737.142-1.537-.006-3.091.131-4.676-.163-.55-1.275-.699-2.444-.353-3.791 2.411-.315 4.767-.278 7.136-.029zm-26.535-7.604c-.073-.52-.187-1.018-.194-1.516-.008-.492.095-.986.16-1.595 2.861-.357 5.605-.216 8.428-.113.521 1.094.401 2.077.145 3.152-1.33.783-2.803.367-4.197.387-1.415.02-2.878.306-4.342-.315zm49.657 7.457c.846 1.315.883 2.511.665 3.738-2.397.522-3.993.525-6.587-.008l-.439-3.379c2.238-.723 4.355-.208 6.361-.351zm-90.946-.003c1.934 0 3.684-.013 5.433.014.287.003.571.171 1.063.329l-.381 3.406c-2.2.688-4.306.343-6.482.249-.471-1.364-.212-2.514.367-3.998zm58.262.124c.44 1.375.611 2.467.325 3.709-2.143.505-4.261.329-6.424.113-.482-1.241-.34-2.352-.167-3.584 2.004-.71 4.032-.341 6.266-.238zm-19.27 3.781c-2.185.315-4.305.379-6.445-.047-.333-1.238-.129-2.331.183-3.386 2.128-.624 3.072-.655 6.302-.187.348 1.125.354 2.293-.04 3.62zm-47.542.124c-.392-1.605.017-2.734.609-4.042 1.441 0 2.874-.017 4.304.009.496.01.992.124 1.498.19.43 1.369.077 2.504-.347 3.72-2.043.354-3.961.222-6.064.123zm101.744-3.791c.438-.087.828-.225 1.221-.23 1.534-.027 3.069-.012 4.537-.012.794 1.26.986 2.427.825 3.803-2.042.602-4.038.239-5.968.258-.777-1.328-.884-2.497-.615-3.819zm-2.876-10.861c.083.994.174 1.706.188 2.418.005.281-.159.565-.306 1.041-2.132.173-4.271.193-6.406-.052-.653-1.079-.799-2.148-.602-3.426 2.343-.293 4.582-.285 7.126.019zm-89.565 3.305v-3.199c2.476-.586 4.794-.269 7.253-.21-.046.873-.018 1.485-.125 2.072-.088.492-.336.954-.568 1.586-1.788 0-3.545.012-5.301-.012-.395-.005-.788-.143-1.259-.237zm58.837.035-.314-3.138c2.436-.557 4.739-.481 7.263-.159l.314 3.173c-2.445.546-4.674.383-7.263.124zm-34.946.022c-.611-1.15-.216-2.12-.066-3.246 2.425-.594 4.734-.182 7.034-.169.22 1.311.282 2.314-.394 3.419-2.184.276-4.406.31-6.574-.004zm16.637 16.55v-3.134c2.881-.314 5.612-.29 8.553-.013l.13 2.682c-.33.232-.493.448-.659.45-2.571.021-5.142.015-8.024.015zm-.089-11.227v-2.815c.309-.145.579-.382.851-.384 2.485-.029 4.972-.018 7.456-.018.767 1.012.535 1.991.295 3.152-2.799.433-5.543.305-8.602.065zm41.368 2.092c.514 1.266.688 2.426.338 3.75-1.861.363-3.674.293-5.516.051-.807-1.154-.647-2.379-.753-3.662 2.069-.554 3.961-.388 5.931-.139zm-74.066.006c2.084-.33 3.903-.221 5.688-.124.492 1.363.119 2.44-.129 3.607-1.856.98-3.783.263-5.72.48-.538-1.441-.254-2.589.161-3.963zm53.124 9.114c-.225-.6-.43-1.059-.562-1.536-.103-.382-.119-.787-.17-1.154 1.82-.798 4.315-.895 8.037-.301l.395 2.581c-.388.198-.644.435-.914.451-2.24.137-4.48.152-6.786-.041zm-39.121-3.205c2.478-.088 5.003-.375 7.764.176l-.544 2.917c-2.61.352-5.109.357-7.6.047-.13-1.734-.13-1.734.38-3.14zm-32.357 8.56v-3.124c2.236-.485 4.363-.341 6.696-.09l.189 2.877c-2.272.809-4.405.381-6.885.337zm104.078-.319v-2.635c2.291-.585 3.613-.609 6.632-.139.376.943.38 1.908-.02 2.859-2.718.498-4.172.483-6.612-.085zm-42.264-5.105v-2.722c.286-.15.549-.41.816-.416 1.956-.035 3.914-.019 5.833-.019.732 1.021.555 2.012.581 3.214-2.422.175-4.656.21-7.23-.057zm-19.662-3.069c2.309-.221 4.452-.304 6.794.032l.169 2.859c-2.487.609-4.804.352-7.134.251-.361-1.23-.114-2.171.171-3.142zm60.087 5.174v2.708c-.249.206-.388.418-.554.442-1.832.275-3.657.225-5.695-.1l-.169-2.544c.337-.251.485-.453.656-.476 1.831-.225 3.655-.131 5.762-.03zm-93.602 3.041v-2.843c2.071-.483 4.075-.375 6.231-.071v2.83c-2.098.523-4.089.482-6.231.084zm68.517-16.381c-2.293.44-4.603.343-7.112.054-.142-.933-.275-1.813-.395-2.592.287-.26.423-.491.589-.515 2.143-.297 4.288-.267 6.397-.021.595 1.364.616 1.359.521 3.074zm-43.668-.005.303-2.928c2.442-.512 4.741-.339 6.942-.153.186.377.346.551.34.721-.019.704-.089 1.405-.151 2.255-2.474.633-4.856.459-7.434.105zm68.08-8.628c1.027-.076 1.63-.147 2.234-.16 1.127-.02 2.255-.004 3.287-.004.858 1.196.887 2.275.642 3.506-1.855.506-3.665.186-5.676.192l-.487-3.534zm-98.518 3.501c0-.96-.044-1.577.015-2.184.038-.392.226-.77.328-1.096 2.544-.516 3.135-.516 5.745.02l-.232 3.058c-1.976.515-3.784.281-5.856.202zm80.553-3.702c.204.911.355 1.396.411 1.893.055.493.012.998.012 1.582-1.926.503-3.715.384-5.492.139-.186-.388-.396-.649-.435-.934-.094-.707-.11-1.424-.166-2.227 1.814-.827 3.637-.218 5.67-.453zm-73.734 8.909c.073-1.021.085-1.641.179-2.249.045-.286.248-.549.481-1.027 1.163-.017 2.392-.062 3.622-.048.914.011 1.826.095 2.821.151.391 1.181.003 2.108-.376 3.12-2.167.336-4.296.279-6.727.053zm84.246-.161-.563-2.729c2.355-.736 4.578-.457 7.004-.247l.472 2.661c-1.975.789-3.548.856-6.913.315zm-61.2-8.532-.266 3.233c-1.947.642-3.741.233-5.621.301-.399-1.322-.272-2.367.312-3.575.874-.047 1.774-.138 2.674-.132.897.004 1.796.104 2.901.173zm58.173-.079c.189 1.272.333 2.259.49 3.325-2.011.523-3.806.404-5.817.135l-.465-3.102c1.877-.825 3.677-.382 5.792-.358zm-71.557 3.561c-.357-1.396-.08-2.435.465-3.522h5.343c.154 1.23.11 2.283-.369 3.412-1.867.402-3.656.209-5.439.11zm65.136 7.165.54 3.634c-1.557.828-3.063.429-4.524.395-.935-1.112-.916-2.337-.982-3.675 1.648-.742 3.243-.305 4.966-.354zm-54.319 4.006h-4.39c-.532-1.337.101-2.483.188-3.755 1.668-.481 3.248-.465 4.947.007-.039.686-.009 1.305-.126 1.896-.117.593-.38 1.156-.619 1.852zm79.907 5.316h-6.173c-.188-.977-.356-1.862-.549-2.854 2.239-.899 4.364-.414 6.611-.379.281 1.171.797 2.176.111 3.233zm-103.7-.045c-2.029.296-4.063.227-6.31.037.083-1.096.149-1.985.22-2.961 2.229-.667 4.339-.385 6.597-.21.19 1.192.167 2.159-.507 3.134zm2.296-3.121c2.428-.239 4.461-.363 6.664.073l-.202 2.738c-2.521.641-4.074.648-6.674.032l.212-2.843zm93.166.047.166 3.077c-2.238.255-4.268.279-6.314-.007-.695-.959-.6-1.938-.442-3.138 2.148-.258 4.178-.284 6.59.068zm-58.477-13.39v-3.127c1.77-.814 3.494-.374 5.398-.35.09.571.212 1.047.226 1.526.014.51-.076 1.022-.127 1.607-1.724.771-3.448.33-5.497.344zm23.448-3.568c.448 1.343.633 2.319.074 3.526-.959.038-1.974.114-2.987.105-.701-.006-1.402-.128-2.072-.196-.481-1.138-.438-2.118-.12-3.215.435-.078.826-.203 1.221-.211 1.235-.027 2.469-.009 3.884-.009zm44.246 10.992c1.409-.398 2.73-.333 4.056-.094.755 1.15.821 2.354.642 3.663-1.239.525-2.471.291-3.824.23-.805-1.124-.968-2.384-.874-3.799zm-115.761-.135h4.006c.441 1.379-.213 2.492-.41 3.67-1.38.603-2.687.273-4.044.292-.409-1.471-.155-2.632.448-3.962zm112.798-5.284.526 2.958c-1.996.852-3.931.227-5.709.412-.988-1.018-.827-2.02-.691-3.173 1.943-.573 3.853-.218 5.874-.197zm-100.353 3.26h-5.669c-.017-.551-.075-1.026-.032-1.493.046-.504.186-1 .298-1.56 1.969-.557 3.875-.261 5.912-.188.169 1.248.264 2.225-.509 3.241zm59.779-3.177c.071 1.18.125 2.054.19 3.113-2.085.391-3.971.254-6.023.063v-2.805c.224-.149.388-.355.554-.357 1.637-.024 3.275-.014 5.279-.014zm-24.611.137c2.128-.364 3.927-.324 5.886-.075v2.947c-1.932.57-3.826.36-5.886.173v-3.045zm45.199 16.337h5.552l.327 2.849c-2.012.508-3.814.42-5.592.133-.68-.889-.571-1.778-.287-2.982zm-65.507.057-.149 2.787c-1.945.53-3.744.39-5.544.173-.612-.969-.392-1.834-.076-2.683.194-.133.348-.326.524-.349 1.632-.201 3.26-.216 5.245.072zm1.599-13.319c-1.878.296-3.702.31-5.608-.082-.211-1.186-.141-2.154.578-3.148.653-.053 1.367-.141 2.08-.161 1.022-.028 2.046-.007 3.13-.007.494 1.3.44 2.34-.18 3.398zm61.698-3.263h5.377c.757 1.005.819 1.977.613 3.158-1.882.439-3.708.382-5.535.125-.771-.938-.628-1.945-.455-3.283zm-68.809 14.168c.047-.847.094-1.722.153-2.771 2.031-.423 3.911-.438 5.967.021l-.428 2.724c-2.419.563-3.03.567-5.692.026zm70.697.384c-.211-1.214-.365-2.107-.529-3.061 1.936-.727 3.772-.219 5.49-.359.827 1.062.742 2.043.563 3.161-.435.094-.818.238-1.207.248-1.33.03-2.66.011-4.317.011zm-55.917-14.548c.308 1.308.052 2.238-.503 3.171-1.625.459-3.222.402-4.894.088-.564-1.039-.166-1.996.102-3.069 1.764-.617 3.532-.237 5.295-.19zm46.627.051c1.93-.227 3.627-.328 5.449.076l.433 2.76c-1.721 1.067-3.424.423-5.046.478-.835-.979-.925-1.965-.836-3.314zm-53.117 11.189h4.489c.516 1.104.357 2.04-.199 3.059-1.585.425-3.169.318-4.897.08-.197-1.155-.164-2.112.607-3.139zm54.786.217c1.922-.561 3.427-.271 4.809-.294.92 1.002.908 1.977.742 3.123-1.639.438-3.231.357-5.044.029l-.507-2.858zm-83.556-13.44.841-3.348c1.271-.489 2.448-.429 3.811-.039-.156 1.1-.299 2.098-.438 3.085-1.423.622-2.709.316-4.214.302zm113.124-.047c-.198-1.206-.362-2.204-.535-3.244 1.223-.57 2.337-.404 3.501-.253.762.951.829 2.087 1.096 3.272-1.28.578-2.488.315-4.062.225zm-109.304 2.056-.443 2.964c-1.567.602-2.943.408-4.477.145l.538-3.003c.755-.099 1.45-.235 2.147-.264.601-.023 1.203.078 2.235.158zm110.027 3.059-.343-2.688c.326-.179.572-.414.844-.446 1.117-.138 2.245-.228 3.419.206l.617 2.766c-1.463.698-2.856.483-4.537.162zm5.946 8.204.485 3.008c-1.566.461-2.955.427-4.519-.021l-.331-2.777c1.44-.596 2.741-.41 4.365-.21zm-122.167.058c1.374-.384 2.665-.245 4.165-.064l-.234 2.926c-1.527.596-2.916.453-4.459.196-.198-1.153.159-2.075.528-3.058zm118.529 5.149c.857-.049 1.671-.122 2.488-.131.596-.006 1.191.078 1.85.127.019 1.306-.94 1.691-1.656 2.197-.853.604-1.799 1.024-2.855.616-.662-1.011-.149-1.841.173-2.809zm-119.489.086c1.558-.41 2.965-.161 4.25-.174.682.998.821 1.865.553 2.747-1.085.577-1.945.22-2.744-.284-.84-.528-1.817-.981-2.059-2.289zm61.952-23.967c-1.243 0-2.489.027-3.729-.028-.2-.008-.52-.365-.54-.583-.02-.224.257-.68.408-.682 2.588-.039 5.177-.033 7.766.015.146.002.417.469.389.689-.027.218-.354.558-.56.567-1.243.053-2.488.025-3.734.025v-.003zm36.45-1.109c2.915-.522 5.154-.4 7.388-.2.182.017.451.432.458.668.008.234-.263.681-.419.686-2.048.042-4.098.05-6.145-.015-.277-.01-.54-.461-1.282-1.139zm-49.519.11c-.379.473-.551.879-.737.886-2.03.081-4.06.112-6.092.103-.131-.001-.318-.435-.37-.689-.025-.138.172-.33.293-.48.056-.07.167-.113.26-.136 1.216-.285 4.559-.153 6.646.316zm-23.549-.297c-.499.77-.614 1.175-.818 1.227-2.125.528-4.277.334-6.42.107-.169-.017-.416-.457-.406-.691.01-.232.277-.631.466-.655 2.236-.275 4.466-.197 7.178.012zm49.638.105c2.54-.384 4.659-.385 6.774-.077.261.039.456.547.819 1.015-2.433.671-4.635.423-6.828.11-.195-.027-.334-.44-.765-1.048zm-42.47-.156c.312.785.121 1.348-.439 1.375-1.646.085-3.301.03-4.95-.028-.13-.007-.303-.464-.341-.727-.021-.149.182-.344.31-.494.059-.069.183-.102.28-.114 1.745-.204 3.482-.2 5.14-.012zm58.923.006c1.655-.2 3.393-.21 5.131.024.23.03.526.349.604.593.153.489-.19.819-.637.826-1.55.023-3.105.042-4.65-.068-.564-.039-.758-.586-.448-1.375zm-8.381.09c2.54-.277 4.265-.308 5.988-.061.223.032.495.361.576.608.165.5-.198.798-.631.811-1.436.041-2.88.08-4.311-.02-.374-.025-.711-.561-1.622-1.338zm-73.05.885c1.756-1.336 3.606-1.429 6.108-.563-.126.273-.189.714-.381.779-1.797.604-3.591.557-5.727-.216zm30.7-.883c-.634.713-.875 1.231-1.142 1.244-1.631.081-3.267.059-4.9.032-.126-.001-.366-.296-.35-.431.034-.281.16-.581.333-.808.103-.135.369-.192.562-.199 1.628-.055 3.258-.141 5.497.162zm70.182-.289c.641.074 1.467.127 2.266.296.179.037.322.475.376.749.024.127-.182.408-.326.442-1.626.382-3.268.425-4.888-.004-.188-.051-.396-.512-.365-.753.028-.21.359-.502.593-.54.71-.115 1.437-.125 2.344-.19zm-57.832.056c.754.053 1.38.049 1.981.167.223.044.525.367.542.584.02.22-.256.663-.419.671a50.52 50.52 0 0 1-4.007.043c-.199-.006-.528-.363-.541-.572-.013-.229.235-.648.429-.688.702-.14 1.429-.154 2.015-.205zm17.584 1.624c-.617-.058-1.245-.063-1.84-.202-.196-.045-.443-.451-.425-.671.019-.217.34-.576.537-.582a49.562 49.562 0 0 1 4.006.038c.164.008.435.456.423.686-.013.21-.324.539-.543.574-.709.111-1.435.112-2.158.157zm44.778-1.198c.989-.631 2.02-.656 3.072-.13.142.071.24.323.263.504.021.167-.035.456-.145.51-1.05.517-2.096.582-3.045-.221-.118-.099-.087-.375-.145-.663zm-108.743 1.221c-.531-.077-1.224.15-1.503-.611-.188-.521.538-1.068 1.486-1.057.668.009 1.464-.225 1.853.604.247.532-.656 1.06-1.836 1.064zm81.507 33.847c.226.957.533 1.851.63 2.765.164 1.53.577 3.057.3 4.79-.703.095-1.396.264-2.089.268-3.011.013-6.023-.038-9.034-.036-13.398.01-26.796.03-40.194.038-.916 0-1.832-.081-2.706-.122-.434-2.478-.152-4.934.832-7.68.087-.049.172-.106.262-.151.093-.045.188-.108.287-.116.516-.032 1.036-.067 1.554-.073 16.408-.125 32.815-.17 49.221.051.198.001.394.107.937.266z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#A6A6A6"
                    />

                    <path
                        d="M180.265 223.189H319.46c.754 1.031.475 2.078.348 3.083-.796 6.291-1.611 12.58-2.435 18.867-.135 1.03-.267 2.069-.52 3.074-1.086 4.348-1.56 8.795-2.263 13.207-.898 5.643-2.047 11.247-3.057 16.872-.588 3.273-1.162 6.55-1.65 9.838-.52 3.479-.732 3.73-4.369 3.728-19.762-.005-39.526-.033-59.288-.035-17.059 0-34.117.025-51.175.037-4.5.003-4.419-.031-5.084-4.334-.682-4.415-1.508-8.811-2.409-13.186-1.321-6.421-2.279-12.896-3.137-19.39-.067-.516-.092-1.043-.216-1.545-2.003-8.102-2.702-16.4-3.684-24.655-.205-1.731-.85-3.44-.256-5.561zm6.45 4.474c-.758 2.153-.446 3.899-.19 5.635.516 3.497 1.175 6.977 1.561 10.488 1.044 9.51 2.075 19.013 3.834 28.431.819 4.374 1.546 8.757 2.813 12.996.997.668 2.064.37 3.081.366 15.708-.059 31.416-.153 47.123-.198 18.829-.056 37.657-.07 56.486-.11 3.207-.006 4.196-.738 5.029-3.905.447-1.705.725-3.458 1.025-5.196 1.028-5.935 2.026-11.874 3.048-17.81.637-3.688 1.404-7.357 1.91-11.062.603-4.427.988-8.883 1.476-13.325.407-3.703.048-4.479-3.268-6.019-.797-.37-1.81-.373-2.725-.376-7.386-.016-14.773.017-22.157.018-31.728.003-63.458.001-95.184.004-1.236.001-2.471.04-3.862.063z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#74BAA5"
                    />

                    <path
                        d="M311.529 235.523c0 .581.042 1.088-.009 1.587-.083.827-.365 1.655-.32 2.469.304 5.483-1.228 10.719-2.095 16.043-.268 1.641-.611 3.268-.913 4.904-.512 2.759-1.028 5.517-1.522 8.279-.367 2.046-.779 4.089-1.028 6.149-.338 2.808-.689 5.574-2.681 7.807-.181.201-.184.56-.268.833-3.189.377-103.5.14-106.774-.252-.733-.818-.774-1.879-.931-2.897-1.179-7.605-2.421-15.199-3.503-22.818-.82-5.766-1.431-11.562-2.144-17.344-.186-1.53-.406-3.057-.612-4.594.484-.166.767-.349 1.049-.35 40.173-.046 80.346-.081 120.518-.102.393.001.791.179 1.233.286zm-86.15 30.24c1.665-1.282 2.092-2.837 2.027-4.56-.221-5.807-.448-11.616-.724-17.421-.064-1.363-.732-2.028-2.089-2.34-.605-.139-1.23-.206-1.851-.252-8.292-.621-16.6-.678-24.91-.547a11.27 11.27 0 0 0-2.159.25c-.98.21-1.449.757-1.498 1.718a16.96 16.96 0 0 0 .026 2.49c.33 3.514.668 7.027 1.061 10.536.277 2.475.604 4.947.986 7.408.27 1.754.902 2.355 2.598 2.571.819.105 1.659.042 2.488.05 1.869.017 3.738.017 5.606.049 3.218.059 6.434.182 9.653.192 3.002.007 6.004-.094 8.786-.144zm53.116 2.87c.077-1.124.169-2.151.216-3.181.273-5.907.52-11.816.806-17.722.168-3.497-.167-4.028-3.652-4.239-4.86-.295-9.729-.235-14.789-.027-.695 2.148-.458 4.338-.553 6.482-.097 2.175-.14 4.356-.151 6.533-.011 2.283.016 4.566.077 6.848.058 2.15.201 4.297.398 6.359 3.887.961 14.338.366 17.648-1.053zm-43.345 9.656c.833.068 1.446.155 2.058.165 4.143.063 8.285.123 12.426.146.906.006 1.867.076 2.609-.584.844-3.905.938-6.36.371-9.578-.377-2.134-.721-2.415-2.774-2.565-4.751-.343-9.488.324-14.237.127-1.176-.049-1.735.512-1.77 1.693-.089 3.005-.049 6.01.643 8.959.115.496.386.953.674 1.637zm-7.209-3.051c-2.425-.086-4.258-.142-6.093-.216-5.191-.21-10.385-.444-15.579-.631-1.558-.057-3.121-.007-4.679.038-.397.011-.794.182-1.184.301-.064.018-.136.157-.126.23.024.186.036.441.156.53.237.176.54.347.825.365 1.553.095 3.109.174 4.665.2 5.924.101 11.848.188 17.773.259.931.011 1.871-.034 2.794-.155.337-.043.633-.386 1.448-.921zm.17-4.293c-.496-.065-.959-.162-1.425-.181-1.761-.068-3.537.017-5.281-.188-7.034-.828-14.089-.065-21.128-.365-.205-.01-.448-.024-.609.07-.299.173-.549.426-1.06.842.757.129 1.151.248 1.547.254 3.937.064 7.876.09 11.811.17 2.691.054 5.379.197 8.069.266 2.175.057 4.349.082 6.524.068.581-.003 1.27.012 1.552-.936zm-27.92 8.207c.374.412.579.845.877.924a8.354 8.354 0 0 0 2.148.27 694.82 694.82 0 0 0 9.357-.103c4.471-.072 8.941-.154 13.411-.249.528-.011 1.042-.132 1.094-.932-8.5-.11-16.995-.225-25.49-.315-.382-.003-.768.217-1.397.405zm54.402-35.863c-1.043-1.235-1.917-1.089-2.705-1.14-3.105-.201-6.209-.448-9.314-.517-2.69-.059-5.387.072-8.077.178-.603.024-1.205.265-1.784.465-.123.042-.219.352-.209.532.009.171.14.422.281.48.271.111.588.149.887.15 4.661.005 9.324.012 13.985-.01 2.167-.01 4.332-.083 6.936-.138zm-1.659 17.044c-.382-.274-.659-.64-.973-.674-2.572-.276-5.151-.672-7.728-.679-2.997-.008-5.995.328-8.988.549-.396.029-.843.175-1.142.419-.261.212-.347.639-.51.971.269.121.59.402.802.336 1.194-.374 2.389-.486 3.648-.533 4.149-.154 8.286-.201 12.425.228.773.081 1.617.173 2.466-.617zm-19.179-4.782c.616.04 1.132.164 1.621.09 4.89-.753 9.73-.491 14.563.502.994.204 2.064.092 3.095.047.199-.008.384-.377.571-.576-.131-.138-.182-.249-.261-.271-5.769-1.625-11.631-2.097-17.578-1.364-.59.072-1.178.355-1.71.646-.176.096-.177.516-.301.926zm20.56-7.478c-.652-.893-1.624-.871-2.507-.956-5.49-.538-10.987-.558-16.485-.136-.597.046-1.187.289-1.759.499-.136.049-.296.376-.247.503.095.255.288.594.509.657.383.11.819.063 1.231.036 1.346-.085 2.69-.273 4.037-.277 4.047-.018 8.096.046 12.146.048 1.003.001 2.06.315 3.075-.374zm45.461 14.631c-.648-.219-1.279-.546-1.944-.638-3.911-.543-7.834-.968-11.79-.604-.25.023-.483.315-.703.507-.065.056-.058.194-.083.294 2.514.763 10.506 1.26 14.52.441zm-16.399-17.949c.881.495 1.213.828 1.562.851 1.134.074 2.285.14 3.408.015 3.512-.392 7.025-.357 10.544-.201.252.011.512-.142.796-.227-.16-.248-.242-.529-.371-.552-4.718-.845-9.472-.752-14.229-.503-.372.018-.732.254-1.71.617zm2.643 11.701c.207.276.318.564.443.57 4.438.198 8.875.372 13.314.53.229.01.463-.154 1.134-.394-3.342-1.319-6.399-1.459-9.468-1.328-1.79.076-3.684-.409-5.423.622zm-21.893 21.08c.243.624.29.949.39.967 1.723.296 3.445.691 5.184.791 2.602.147 5.63-.493 8.763-1.688-2.092-.3-3.575.01-5.048.071-1.453.062-2.909.181-4.362.159-1.543-.022-3.085-.182-4.927-.3zm21.21-26.702c.308.401.449.781.674.841.594.153 1.228.251 1.839.227 3.935-.153 7.866-.345 11.798-.533.049-.001.092-.125.143-.203-.475-.706-1.3-.689-1.948-.694-3.631-.036-7.263.027-10.894.083-.486.008-.972.164-1.612.279zm-8.432 23.226c-.17-.084-.339-.237-.511-.243-4.55-.145-9.099-.288-13.65-.38-.262-.006-.533.408-.91.718 4.53 1.354 12.1 1.268 15.071-.095zm20.486-5.063c-1.2-.899-2.569-.727-3.854-.909-2.448-.349-4.912-.599-7.373-.848-.223-.022-.613.227-.677.428-.061.196.143.556.336.728.216.191.541.326.833.357 3.569.391 7.138.862 10.735.244zm-11.603 4.509c.407.318.673.7.979.736 2.365.274 4.736.524 7.112.69.922.065 1.864-.059 2.783-.188.384-.055.732-.351 1.371-.675-8.849-1.155-9.848-1.204-12.245-.563z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M312.013 232.98c-1.802.531-3.479.873-5.274.866-24.55-.104-49.103-.192-73.654-.228-14.043-.021-28.087.061-42.132.095-.818.003-1.637 0-2.453 0-.576-1.459-.562-2.777-.702-3.986 1.123-.865 2.198-.571 3.199-.573 8.011-.015 16.022.011 24.032.013 30.275.009 60.548.012 90.822.031 1.54.001 3.044-.061 4.568.641 1.394.645 1.949 1.401 1.594 3.141z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFC91C"
                    />

                    <g>
                        <path
                            d="M212.019 253.396c2.244-2.289 10.214-7.982 12.534-9.032.867 3.059 1.392 12.75.948 17.994-.378-.063-.795-.027-1.087-.203-.89-.528-1.747-1.12-2.589-1.722-3.205-2.288-6.399-4.59-9.806-7.037zm10.275-10.63c-3.675 3.676-7.955 6.209-11.896 9.402l-12.286-9.184c.195-1.006.972-.72 1.494-.713 5.506.062 11.013.159 16.518.271 2.056.041 4.113.147 6.17.224zm1.591 21.065c-5.135.604-19.512.419-23.493-.257 1.52-2.38 4.985-5.487 10.02-8.982 1.97.904 10.834 6.951 13.473 9.239zm-25.511-1.19c-.268-.39-.544-.612-.576-.866-.745-5.844-1.463-11.691-2.218-17.798.627.11 1.063.06 1.32.25a1866.1 1866.1 0 0 1 11.677 8.74c.061.045.045.189.107.503-.532.859-1.548 1.414-2.387 2.137-.942.81-1.932 1.564-2.877 2.372a84.481 84.481 0 0 0-2.543 2.283c-.822.76-1.624 1.542-2.503 2.379z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#FFA1BA"
                        />
                    </g>
                    <g>
                        <path
                            d="M276.727 267.628c-.383.236-.543.414-.719.431-.923.081-1.851.163-2.777.167-3.592.019-7.186.009-10.918.009.098-1.277 1.143-1.777 1.683-2.588.573-.858 1.196-1.684 1.798-2.524.602-.841 1.188-1.69 1.806-2.52.608-.817 1.246-1.614 1.879-2.431 1.971 1.808 6.271 7.416 7.248 9.456zm-13.642-22.385h12.681c.061.211.22.458.152.583-1.002 1.871-4.875 7.076-6.51 8.767-.291-.254-.649-.468-.873-.778a559.783 559.783 0 0 1-5.217-7.335c-.151-.218-.114-.566-.233-1.237zm13.89 19.412c-1.683-1.147-3.693-3.714-6.287-8.061.77-1.733 2.132-3.18 3.24-4.787 1.115-1.619 2.288-3.197 3.557-4.958.24.385.498.604.49.813-.212 5.505-.451 11.01-.701 16.513-.007.164-.195.32-.299.48zm-14.839.133c-.502-4.216-.396-13.504.141-16.393 1.311.832 3.047 3.053 5.975 7.643-.703 1.817-4.301 7.036-6.116 8.75z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#FFA1BA"
                        />
                    </g>
                    <g>
                        <path
                            d="M244.293 272.955c1.988-1.918 4.315-2.898 6.751-3.897.888 2.555.39 4.978.102 7.639-2.587-.839-4.682-2.192-6.853-3.742zm-7.326-4.855c4.779-.686 8.775-.541 12.755-.535.024.288.061.4.033.492a.408.408 0 0 1-.192.208 4114.872 4114.872 0 0 1-7.131 3.652l-5.465-3.817zm-1.392.874c2.246 1.361 3.859 2.576 5.452 3.822-1.629 2.224-2.404 2.734-5.055 3.291-.439-1.022-.347-2.147-.387-3.232-.042-1.115-.01-2.231-.01-3.881zm12.096 7.876h-7.748c.816-1.424.816-1.424 2.907-2.904 1.709.621 3.375 1.539 4.841 2.904z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#FFA1BA"
                        />
                    </g>
                </g>
                <path
                    d="M173.669 365.451c-.602-.702-1.161-1.315-1.673-1.961-2.206-2.783-3.05-6.68-2.423-10.275.446-2.559.611-5.168 1.059-7.725 2.207-12.609 4.808-25.133 8.371-37.438 1.037-3.582 2.2-7.136 4.347-10.431-1.641-1.302-1.961-3.128-2.228-5.005a1958.362 1958.362 0 0 0-2.254-15.439c-1.149-7.718-2.368-15.425-3.452-23.151-.797-5.667-1.379-11.361-2.144-17.032-.708-5.257-1.612-10.488-2.275-15.75-.297-2.359-.352-4.771-.266-7.15.087-2.324.859-3.088 3.106-3.654a8.052 8.052 0 0 1 2.157-.241c3.947.109 7.893.264 11.84.401.415.015.831.021 1.247.019 14.781-.057 29.561-.151 44.339-.167 23.422-.024 46.842-.002 70.263.013 2.185.002 4.37.136 6.556.118 1.447-.012 2.892-.241 4.344-.277 3.017-.074 6.035-.086 9.054-.122.314-.003.628-.019.936.018 3.851.451 4.596 1.468 4.721 4.844.108 2.924-.17 5.818-.706 8.689-1.647 8.805-2.396 17.731-3.607 26.595-1.083 7.936-2.297 15.854-3.452 23.782-.767 5.249-1.53 10.497-2.298 15.747-.136.927-.322 1.847-.434 2.775-.223 1.885-.596 3.699-2.194 4.981 2.949 4.804 4.33 10.044 5.684 15.259 2.98 11.482 5.48 23.074 7.38 34.788.382 2.357.938 4.726.961 7.095.03 2.909-.508 5.807-2.322 8.257-.615.831-1.322 1.592-1.942 2.33-3.215.411-146.533.519-152.695.107zm10.881-66.593c-.617 1.699-1.246 3.235-1.735 4.815-.985 3.177-1.967 6.358-2.817 9.573-2.716 10.258-4.818 20.655-6.834 31.066-.691 3.571-1.226 7.174-1.746 10.775-.299 2.061.06 2.451 2.07 2.457 3.642.008 7.283-.065 10.925-.065 46.3.018 92.603.043 138.903.065 1.145.002 2.29.036 3.435 0 1.607-.047 1.983-.47 1.796-2.148-.223-1.961-.447-3.932-.829-5.868-1.607-8.159-3.208-16.323-4.938-24.458-1.602-7.527-3.48-14.989-5.964-22.285-.462-1.353-.929-2.703-1.539-3.924-2.671.186-5.144.355-7.691.532-1.131 3.131-3.376 4.036-6.587 3.976-8.009-.152-16.022.049-24.034.043-26.324-.023-52.649-.096-78.973-.078-2.489.002-4.182-.861-5.242-3.072-.168-.353-.437-.657-.596-.893l-7.604-.511zm129.848-1.975c1.275-1.037 1.759-2.11 1.879-3.434.793-8.715 2.659-17.266 3.94-25.906 1.189-8.024 2.501-16.034 3.495-24.083.967-7.847 1.737-15.714 3.514-23.437.204-.889.204-1.825.294-2.692-1.109-.645-2.172-.41-3.188-.41-44.958-.006-89.916.002-134.873.006-4.996.001-9.99-.022-14.985-.003-.674.003-1.347.192-2.172.319.209 1.326.361 2.454.566 3.571.508 2.761 1.152 5.502 1.538 8.28.889 6.386 1.591 12.796 2.489 19.182 1.145 8.135 2.33 16.268 3.648 24.376 1.134 6.981 2.415 13.938 3.139 20.979.043.41.084.843.243 1.217.514 1.208 1.234 2.13 2.757 2.107 1.663-.024 3.328.118 4.992.116 19.252-.016 38.505-.065 57.758-.065 19.67 0 39.337.054 59.005.063 2.072 0 4.143-.128 5.961-.186zm13.791 62.839c-.554-.002-155.606-.094-155.606-.094-.096.028-.22.03-.284.094-.068.065-.081.188-.12.284 1.215 3.278 1.391 3.411 4.602 3.398l.313-.002c48.577-.002 97.153-.002 145.73 0 .623 0 1.247.002 1.871.004.782.002 1.44-.285 1.866-.941.498-.756.929-1.556 1.628-2.743zM172.391 215.098c51.176 0 102.136 0 153.096-.002.519 0 1.039-.023 1.557-.048a.6.6 0 0 0 .288-.114c.076-.052.129-.138.299-.331-.009-.916-.289-1.758-1.451-1.905a37.933 37.933 0 0 0-3.691-.266c-2.701-.073-5.405-.158-8.106-.125-4.781.059-9.563.298-14.343.296-40.353-.023-80.706-.085-121.058-.137-.521 0-1.04-.065-1.558-.038-1.232.066-2.472.106-3.691.277-1.139.157-1.486.964-1.342 2.393zm22.258 84.479c.48 1.275 1.297 1.676 2.239 1.813.819.118 1.66.127 2.49.127 32.681-.009 65.362-.022 98.044-.034 1.455 0 2.919.113 4.367.008.899-.067 1.811-.372 2.647-.729.345-.148.507-.719.811-1.189-.522-.149-.816-.307-1.109-.307-36.116-.011-72.233-.011-108.346-.001-.294.001-.587.156-1.143.312z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />

                <path
                    d="M249.964 339.32c-17.591 0-35.182.01-52.774-.015-1.764-.002-3.529-.186-5.29-.306-1.637-.114-2.954-.896-4.134-1.989-1.052-.974-1.632-2.096-1.555-3.573.133-2.487.133-4.975.665-7.432.882-4.063 1.596-8.165 2.543-12.211.448-1.911 1.253-3.742 1.931-5.597.401-1.098 1.232-1.626 2.403-1.636 1.249-.011 2.498-.06 3.746-.06 34.975-.003 69.949-.003 104.925 0 1.248 0 2.497.049 3.747.06 1.17.01 2.001.538 2.404 1.634.677 1.855 1.479 3.687 1.931 5.597.933 3.944 1.633 7.943 2.502 11.901.518 2.353.622 4.736.689 7.119.084 3.034-1.734 5.342-4.75 6.005-1.313.287-2.68.401-4.025.44-3.016.09-6.036.106-9.055.11-15.3.008-30.602.004-45.903.004v-.051zm-30.725-2.144c1.146.024 2.176.065 3.204.065 18.317.004 36.635.006 54.954-.002.933 0 1.868-.049 2.795-.145.268-.026.512-.296.734-.435.139-1.004.241-1.93-.622-2.604-3.857-.269-58.777-.161-60.859.121-.681.786-.659 1.666-.206 3zm35.136-10.569c0-1.157.025-1.979-.013-2.8-.013-.286-.18-.563-.322-.981-2.754-.251-5.504-.315-8.208.04-.435 2.098-.419 2.099.263 3.882 1.981.018 4.044.051 6.107.047.605-.001 1.21-.101 2.173-.188zm-27.346-.126c3.052.562 5.718.484 7.665-.229.244-1.073.551-2.165.094-3.412a30.438 30.438 0 0 0-7.094 0c-.537 1.22-1.03 2.357-.665 3.641zm45.203-3.651c-2.369-.249-4.726-.286-7.137.028-.346 1.347-.196 2.516.353 3.791 1.585.294 3.139.157 4.676.163.914.002 1.828-.092 2.737-.142.372-1.488-.091-2.628-.629-3.84zm-26.535-7.604c1.464.621 2.927.336 4.341.315 1.395-.019 2.867.397 4.197-.387.257-1.075.377-2.059-.145-3.152-2.822-.103-5.567-.244-8.428.113-.065.608-.169 1.103-.16 1.595.008.498.122.995.195 1.516zm49.657 7.457c-2.007.144-4.123-.371-6.361.352l.439 3.379c2.594.533 4.19.529 6.587.008.218-1.229.181-2.424-.665-3.739zm-90.946-.003c-.579 1.484-.837 2.634-.367 3.998 2.175.094 4.282.439 6.482-.249l.381-3.406c-.492-.158-.776-.326-1.063-.329-1.749-.027-3.5-.014-5.433-.014zm58.262.124c-2.233-.103-4.262-.472-6.266.238-.173 1.232-.315 2.343.167 3.584 2.163.216 4.28.392 6.424-.113.286-1.242.115-2.334-.325-3.709zm-19.27 3.781c.393-1.327.388-2.495.04-3.619-3.23-.469-4.173-.438-6.302.187-.311 1.055-.515 2.147-.183 3.386 2.14.425 4.261.361 6.445.046zm-47.542.124c2.104.099 4.021.231 6.065-.123.423-1.216.776-2.35.347-3.72-.507-.066-1.003-.181-1.498-.19-1.43-.025-2.863-.009-4.304-.009-.593 1.308-1.002 2.437-.61 4.042zm101.744-3.791c-.269 1.322-.162 2.491.615 3.818 1.93-.018 3.926.344 5.968-.258.161-1.376-.031-2.543-.825-3.803-1.468 0-3.003-.016-4.537.012-.392.006-.783.144-1.221.231zm-2.876-10.861c-2.544-.304-4.782-.312-7.126-.019-.197 1.277-.052 2.347.602 3.426 2.136.245 4.274.225 6.406.052.146-.476.311-.76.306-1.041-.015-.712-.105-1.424-.188-2.418zm-89.565 3.305c.471.094.864.232 1.258.237 1.756.023 3.513.012 5.301.012.232-.632.479-1.094.568-1.586.107-.587.08-1.199.125-2.072-2.458-.059-4.776-.376-7.253.21l.001 3.199zm58.837.035c2.589.26 4.818.423 7.262-.124l-.314-3.173c-2.523-.322-4.826-.398-7.263.159l.315 3.138zm-34.946.022c2.168.314 4.39.28 6.574.004.675-1.105.613-2.108.394-3.419-2.299-.013-4.609-.425-7.034.169-.15 1.126-.545 2.096.066 3.246zm16.637 16.55c2.881 0 5.452.006 8.023-.015.166-.002.329-.218.659-.45l-.13-2.682c-2.94-.277-5.671-.302-8.553.013l.001 3.134zm-.089-11.227c3.059.24 5.804.368 8.602-.064.24-1.161.473-2.141-.295-3.152-2.483 0-4.97-.012-7.456.018-.272.002-.542.239-.851.384v2.814zm41.368 2.092c-1.97-.249-3.861-.415-5.931.139.105 1.283-.054 2.508.753 3.662 1.842.242 3.654.313 5.516-.051.349-1.324.175-2.484-.338-3.75zm-74.066.006c-.415 1.374-.699 2.522-.161 3.964 1.938-.218 3.864.5 5.72-.48.248-1.168.621-2.244.129-3.607-1.785-.098-3.604-.207-5.688.123zm53.124 9.114c2.306.192 4.546.178 6.786.041.271-.017.526-.253.914-.451l-.395-2.581c-3.722-.594-6.217-.497-8.037.301.051.367.066.772.17 1.154.133.478.338.936.562 1.536zm-39.121-3.205c-.51 1.406-.51 1.406-.38 3.14 2.491.31 4.99.305 7.6-.047l.544-2.917c-2.761-.551-5.286-.264-7.764-.176zm-32.357 8.56c2.48.045 4.613.473 6.885-.337l-.189-2.877c-2.333-.251-4.46-.396-6.696.09v3.124zm104.078-.319c2.44.567 3.894.583 6.612.086a3.661 3.661 0 0 0 .02-2.859c-3.018-.471-4.341-.446-6.632.139v2.634zm-42.264-5.105c2.574.268 4.808.232 7.23.058-.026-1.202.151-2.193-.581-3.214-1.919 0-3.877-.017-5.833.019-.268.006-.53.266-.816.416v2.721zm-19.662-3.069c-.285.971-.532 1.912-.171 3.143 2.33.101 4.647.358 7.134-.251-.06-.998-.111-1.876-.169-2.859-2.342-.336-4.486-.253-6.794-.033zm60.087 5.174c-2.107-.102-3.931-.195-5.762.031-.171.022-.319.225-.656.476l.169 2.544c2.038.324 3.863.375 5.695.1.166-.024.305-.236.554-.442v-2.709zm-93.602 3.041c2.143.397 4.134.438 6.231-.084v-2.83c-2.157-.304-4.16-.412-6.231.071v2.843zm68.517-16.381c.095-1.715.074-1.711-.521-3.074-2.109-.245-4.255-.275-6.397.021-.166.023-.302.255-.589.515l.395 2.592c2.509.289 4.819.387 7.112-.054zm-43.668-.005c2.578.354 4.96.528 7.435-.105.062-.85.132-1.551.151-2.255.005-.17-.155-.344-.34-.721-2.202-.186-4.5-.358-6.942.153-.107 1.018-.198 1.893-.304 2.928zm68.08-8.628.487 3.534c2.011-.006 3.82.313 5.676-.192.245-1.23.217-2.31-.642-3.506-1.032 0-2.16-.016-3.287.004-.604.012-1.206.083-2.234.16zm-98.518 3.501c2.072.079 3.88.313 5.856-.201l.232-3.058c-2.61-.536-3.2-.536-5.745-.02-.102.326-.29.704-.328 1.096-.059.605-.015 1.223-.015 2.183zm80.553-3.702c-2.033.234-3.856-.374-5.67.453.056.803.072 1.52.166 2.227.038.284.248.546.435.934 1.777.245 3.566.364 5.492-.139 0-.584.043-1.089-.012-1.582-.055-.497-.207-.981-.411-1.893zm-73.734 8.909c2.431.227 4.56.283 6.726-.053.379-1.012.767-1.94.376-3.12-.995-.057-1.907-.141-2.821-.151-1.23-.014-2.458.031-3.622.048-.233.479-.437.741-.481 1.027-.093.608-.105 1.228-.178 2.249zm84.246-.161c3.365.542 4.938.475 6.913-.315l-.472-2.661c-2.426-.21-4.648-.489-7.004.247l.563 2.729zm-61.2-8.532c-1.105-.069-2.004-.169-2.901-.173-.9-.006-1.8.085-2.674.132-.584 1.208-.711 2.253-.312 3.575 1.879-.067 3.674.341 5.621-.301l.266-3.233zm58.173-.079c-2.115-.024-3.915-.467-5.792.358.162 1.082.31 2.061.465 3.102 2.012.27 3.807.388 5.817-.135l-.49-3.325zm-71.557 3.561c1.783.1 3.572.292 5.439-.11.479-1.129.523-2.182.369-3.412h-5.343c-.545 1.087-.822 2.126-.465 3.522zm65.136 7.165c-1.723.049-3.317-.388-4.967.353.066 1.338.047 2.563.982 3.675 1.462.034 2.968.434 4.524-.395l-.539-3.633zm-54.319 4.006c.239-.695.502-1.259.619-1.853.117-.591.087-1.21.126-1.896-1.698-.472-3.279-.488-4.947-.007-.086 1.272-.719 2.418-.188 3.755l4.39.001zm79.907 5.316c.686-1.057.17-2.063-.11-3.233-2.247-.035-4.372-.521-6.611.379.192.992.361 1.878.549 2.854h6.172zm-103.7-.045c.674-.975.698-1.942.507-3.134-2.258-.175-4.367-.457-6.597.21-.071.976-.138 1.865-.22 2.961 2.246.19 4.28.259 6.31-.037zm2.296-3.121-.212 2.844c2.601.616 4.153.608 6.674-.032l.202-2.738c-2.203-.437-4.236-.313-6.664-.074zm93.166.047c-2.412-.352-4.442-.326-6.591-.067-.157 1.199-.253 2.179.442 3.138 2.047.286 4.076.262 6.314.007-.057-1.087-.104-1.964-.165-3.078zm-58.477-13.39c2.049-.014 3.773.427 5.496-.343.052-.586.142-1.098.127-1.607-.013-.479-.136-.955-.226-1.526-1.904-.024-3.628-.465-5.398.35l.001 3.126zm23.448-3.568c-1.415 0-2.649-.017-3.885.01-.395.008-.786.133-1.221.211-.317 1.097-.361 2.077.12 3.215.67.068 1.371.19 2.072.196 1.014.009 2.028-.067 2.987-.105.56-1.208.375-2.184-.073-3.527zm44.246 10.992c-.094 1.415.068 2.675.873 3.8 1.353.061 2.585.295 3.824-.23.18-1.31.113-2.513-.642-3.663-1.325-.24-2.646-.305-4.055.093zm-115.761-.135c-.603 1.33-.857 2.491-.448 3.962 1.357-.019 2.664.311 4.044-.292.197-1.178.851-2.291.41-3.67h-4.006zm112.798-5.284c-2.021-.022-3.932-.376-5.874.197-.136 1.153-.297 2.155.691 3.173 1.778-.185 3.713.439 5.709-.412l-.526-2.958zm-100.353 3.26c.772-1.016.677-1.993.509-3.24-2.038-.073-3.943-.369-5.912.188-.112.56-.252 1.056-.298 1.56-.043.467.015.942.032 1.493l5.669-.001zm59.779-3.177c-2.004 0-3.643-.01-5.279.015-.166.002-.33.208-.554.357v2.805c2.053.19 3.938.327 6.023-.063l-.19-3.114zm-24.611.137v3.045c2.061.188 3.954.398 5.886-.173v-2.947c-1.958-.249-3.758-.289-5.886.075zm45.199 16.337c-.284 1.204-.393 2.094.287 2.981 1.778.287 3.58.375 5.592-.133l-.327-2.849-5.552.001zm-65.507.057c-1.985-.288-3.613-.273-5.244-.071-.176.022-.331.216-.524.349-.316.849-.537 1.714.076 2.683 1.799.217 3.598.357 5.544-.173l.148-2.788zm1.599-13.319c.621-1.058.674-2.098.18-3.398-1.083 0-2.107-.021-3.13.007-.713.021-1.427.108-2.08.161-.718.994-.789 1.963-.578 3.148 1.906.392 3.73.378 5.608.082zm61.698-3.263c-.173 1.338-.316 2.345.455 3.283 1.827.257 3.653.314 5.535-.125.206-1.182.144-2.153-.613-3.158h-5.377zm-68.809 14.168c2.662.541 3.273.537 5.692-.026.131-.839.27-1.727.428-2.724-2.057-.459-3.936-.443-5.967-.021-.059 1.05-.106 1.925-.153 2.771zm70.697.384c1.657 0 2.987.019 4.316-.011.389-.01.772-.154 1.207-.248.18-1.118.265-2.1-.563-3.161-1.719.141-3.554-.367-5.49.359l.53 3.061zm-55.917-14.548c-1.763-.047-3.531-.427-5.295.189-.268 1.073-.666 2.03-.102 3.069 1.672.314 3.269.371 4.894-.088.555-.931.811-1.862.503-3.17zm46.627.051c-.089 1.349.001 2.335.836 3.313 1.622-.055 3.325.59 5.046-.478l-.433-2.76c-1.822-.403-3.52-.302-5.449-.075zm-53.117 11.189c-.771 1.026-.804 1.983-.607 3.139 1.728.238 3.312.345 4.897-.08.556-1.018.715-1.955.199-3.059h-4.489zm54.786.217.507 2.858c1.813.328 3.405.408 5.044-.029.166-1.146.178-2.121-.742-3.123-1.383.023-2.887-.267-4.809.294zm-83.556-13.44c1.505.014 2.791.32 4.213-.302.139-.987.282-1.985.438-3.085-1.362-.39-2.54-.45-3.811.039-.263 1.053-.511 2.038-.84 3.348zm113.124-.047c1.574.09 2.782.354 4.061-.225-.267-1.185-.334-2.321-1.096-3.272-1.164-.151-2.278-.317-3.501.253.174 1.04.338 2.038.536 3.244zm-109.304 2.056c-1.032-.079-1.634-.181-2.234-.158-.698.028-1.393.165-2.147.264l-.538 3.003c1.533.264 2.91.457 4.477-.145.127-.86.259-1.743.442-2.964zm110.027 3.059c1.682.32 3.074.536 4.537-.162l-.617-2.766c-1.174-.434-2.302-.344-3.419-.206-.271.032-.518.268-.844.446l.343 2.688zm5.946 8.204c-1.624-.2-2.925-.386-4.364.21l.331 2.777c1.563.447 2.952.481 4.519.021l-.486-3.008zm-122.167.058c-.369.983-.726 1.905-.528 3.059 1.543.257 2.931.399 4.459-.196l.234-2.926c-1.5-.182-2.791-.321-4.165.063zm118.529 5.149c-.322.968-.835 1.798-.174 2.81 1.057.408 2.003-.012 2.855-.616.716-.506 1.675-.892 1.656-2.197-.658-.049-1.254-.133-1.85-.127-.816.008-1.63.081-2.487.13zm-119.489.086c.242 1.308 1.219 1.761 2.059 2.289.799.504 1.659.861 2.744.284.268-.882.129-1.749-.553-2.747-1.285.013-2.692-.236-4.25.174zm61.952-23.967v.003c1.246 0 2.491.027 3.734-.025.206-.01.532-.35.56-.567.028-.22-.243-.686-.389-.689a231.098 231.098 0 0 0-7.766-.015c-.151.002-.428.458-.408.682.021.218.34.575.54.583 1.24.056 2.486.028 3.729.028zm36.45-1.109c.741.678 1.005 1.129 1.282 1.139 2.047.064 4.097.057 6.145.015.156-.005.427-.451.419-.686-.007-.236-.276-.651-.458-.668-2.233-.199-4.473-.322-7.388.2zm-49.519.11c-2.087-.47-5.431-.602-6.645-.316-.094.022-.204.065-.26.136-.121.15-.318.343-.293.48.051.254.239.688.37.689 2.032.01 4.063-.021 6.092-.103.186-.007.357-.413.736-.886zm-23.549-.297c-2.713-.209-4.943-.287-7.178-.013-.189.024-.456.423-.466.655-.01.234.237.674.406.691 2.143.227 4.295.421 6.42-.107.204-.052.319-.457.818-1.226zm49.638.105c.432.608.57 1.021.766 1.048 2.193.313 4.396.56 6.828-.11-.363-.468-.559-.976-.819-1.015-2.116-.308-4.235-.307-6.775.077zm-42.47-.156a22.596 22.596 0 0 0-5.139.012c-.098.013-.221.045-.28.114-.128.15-.332.345-.31.494.038.263.211.72.341.727 1.648.059 3.303.113 4.95.028.559-.028.75-.59.438-1.375zm58.923.006c-.31.789-.116 1.336.447 1.375 1.545.11 3.101.092 4.65.068.446-.007.79-.337.637-.826-.077-.244-.374-.563-.604-.593a20.263 20.263 0 0 0-5.13-.024zm-8.381.09c.911.776 1.248 1.313 1.623 1.34 1.431.1 2.874.061 4.311.02.433-.014.796-.311.631-.811-.081-.247-.353-.576-.576-.608-1.724-.248-3.449-.218-5.989.059zm-73.05.885c2.136.772 3.93.819 5.727.216.192-.065.255-.506.381-.779-2.502-.866-4.352-.773-6.108.563zm30.7-.883c-2.239-.304-3.87-.218-5.496-.161-.193.007-.459.064-.562.199-.173.227-.3.526-.333.808-.016.135.225.43.35.431 1.633.026 3.268.049 4.9-.032.266-.013.508-.532 1.141-1.245zm70.182-.289c-.907.064-1.634.075-2.345.19-.233.038-.565.33-.593.54-.031.241.178.702.365.753 1.62.429 3.262.386 4.888.004.145-.034.351-.315.326-.442-.054-.273-.197-.712-.376-.749-.798-.169-1.624-.221-2.265-.296zm-57.832.056c-.586.051-1.313.065-2.015.205-.194.039-.442.458-.429.688.013.209.342.566.541.572a50.52 50.52 0 0 0 4.007-.043c.163-.008.438-.451.419-.671-.017-.217-.319-.54-.542-.584-.6-.118-1.227-.114-1.981-.167zm17.584 1.624c.723-.045 1.449-.046 2.158-.157.219-.035.53-.364.543-.574.013-.229-.259-.678-.423-.686a49.562 49.562 0 0 0-4.006-.038c-.197.006-.518.365-.537.582-.018.22.228.626.425.671.595.14 1.223.144 1.84.202zm44.778-1.198c.058.288.026.565.145.663.949.803 1.995.737 3.045.221.109-.054.165-.343.145-.51-.022-.181-.121-.433-.263-.504-1.052-.527-2.082-.501-3.072.13zm-108.743 1.221c1.18-.004 2.083-.531 1.837-1.064-.389-.829-1.186-.596-1.853-.604-.949-.012-1.675.536-1.486 1.057.278.761.971.533 1.502.611zm55.145 43.602c-8.516 0-17.032.004-25.547-.009-.723-.002-1.505.035-2.153-.222-1.341-.528-2.306-1.298-1.813-3.079.413-1.493.571-3.059.907-4.576.201-.906.466-1.81.813-2.669.334-.829 1.024-1.288 1.943-1.324a36.41 36.41 0 0 1 1.868-.043c7.268.086 14.535.223 21.804.247 4.464.014 8.928-.168 13.392-.215 4.361-.043 8.724-.024 13.085-.034.518 0 1.038.026 1.557.022 1.337-.011 2.125.695 2.501 1.92.214.693.423 1.39.568 2.1.339 1.622.645 3.254.949 4.885.216 1.165-.063 1.675-1.028 2.356-.923.65-1.951.635-2.987.639-3.22.008-6.439.006-9.659.008h-16.2v-.006zm26.362-9.755c-.543-.159-.739-.266-.937-.268-16.406-.221-32.813-.176-49.221-.051-.518.006-1.038.041-1.554.073-.098.008-.194.071-.287.116-.09.045-.175.102-.262.151-.984 2.746-1.266 5.202-.832 7.68.874.041 1.789.122 2.706.122 13.398-.008 26.795-.028 40.194-.038 3.011-.002 6.023.049 9.034.036.693-.004 1.386-.173 2.089-.268.277-1.733-.136-3.26-.3-4.79-.097-.912-.404-1.806-.63-2.763zM249.96 221.066c21.96 0 43.918.001 65.876-.003.935 0 1.87-.068 2.807-.08 1.737-.022 2.53.485 2.934 2.144.214.883.25 1.859.139 2.765-1.429 11.562-2.855 23.119-4.678 34.631-1.252 7.915-2.944 15.742-4.261 23.641-.29 1.743-.472 3.508-.818 5.239-.471 2.348-1.836 3.912-4.28 4.334-.921.157-1.877.394-2.782.291-3.948-.448-7.9-.137-11.846-.141-29.868-.034-59.737-.012-89.604.009-2.803.002-5.606.135-8.408.145-.928.005-1.866-.146-2.786-.304-2.444-.42-3.843-1.977-4.283-4.329-.841-4.497-1.499-9.029-2.382-13.518-2.329-11.845-4.077-23.779-5.627-35.746a880.288 880.288 0 0 1-1.707-13.938c-.115-1.012-.123-2.09.1-3.074.378-1.662 1.192-2.17 2.925-2.149.937.011 1.872.08 2.807.08 21.957.004 43.916.003 65.874.003zm-69.695 2.123c-.594 2.121.051 3.83.256 5.561.981 8.254 1.681 16.552 3.684 24.655.124.502.149 1.029.216 1.545.858 6.494 1.816 12.969 3.137 19.39.901 4.376 1.727 8.772 2.409 13.186.665 4.303.584 4.337 5.084 4.334 17.059-.012 34.117-.037 51.175-.037 19.762.002 39.527.03 59.288.035 3.638.002 3.85-.249 4.369-3.728.488-3.288 1.063-6.565 1.65-9.838 1.01-5.625 2.158-11.229 3.057-16.872.703-4.412 1.177-8.859 2.263-13.207.252-1.005.385-2.043.52-3.074.823-6.287 1.639-12.576 2.435-18.867.127-1.004.406-2.051-.348-3.083H180.265z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />

                <path
                    d="M186.715 227.663c1.392-.023 2.626-.063 3.861-.063 31.727-.003 63.456-.001 95.184-.004 7.385-.001 14.772-.034 22.157-.018.915.003 1.928.005 2.725.376 3.315 1.54 3.675 2.315 3.268 6.019-.487 4.442-.872 8.898-1.476 13.325-.506 3.705-1.273 7.374-1.91 11.062-1.021 5.935-2.02 11.875-3.048 17.81-.3 1.738-.577 3.491-1.025 5.196-.833 3.167-1.822 3.899-5.029 3.905-18.829.04-37.657.055-56.486.11-15.707.045-31.415.14-47.123.198-1.017.004-2.084.302-3.081-.366-1.266-4.239-1.993-8.622-2.813-12.996-1.759-9.418-2.79-18.921-3.834-28.431-.386-3.511-1.045-6.991-1.561-10.488-.255-1.736-.567-3.482.191-5.635zm124.814 7.86c-.442-.107-.84-.285-1.234-.285-40.172.021-80.345.056-120.518.102-.282.001-.565.184-1.049.35.206 1.537.426 3.064.612 4.594.713 5.782 1.323 11.579 2.144 17.344 1.082 7.619 2.324 15.213 3.503 22.818.157 1.018.197 2.078.931 2.897 3.274.392 103.585.629 106.774.252.084-.273.088-.632.268-.833 1.992-2.232 2.343-4.999 2.681-7.807.249-2.061.661-4.104 1.028-6.149.494-2.763 1.011-5.521 1.522-8.279.302-1.636.646-3.264.913-4.904.867-5.324 2.398-10.56 2.095-16.043-.045-.814.237-1.642.32-2.469.052-.5.01-1.007.01-1.588zm.484-2.543c.355-1.74-.199-2.497-1.594-3.141-1.524-.702-3.028-.64-4.568-.641-30.273-.018-60.547-.021-90.822-.031-8.01-.003-16.021-.028-24.032-.013-1.001.002-2.076-.292-3.199.573.14 1.208.126 2.527.702 3.986.816 0 1.634.003 2.453 0 14.045-.035 28.09-.116 42.132-.095 24.552.035 49.104.124 73.654.228 1.794.008 3.472-.335 5.274-.866z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />

                <path
                    d="M225.379 265.763c-2.782.05-5.784.151-8.786.144-3.219-.011-6.435-.134-9.653-.192-1.868-.032-3.737-.032-5.606-.049-.829-.008-1.669.056-2.488-.05-1.696-.216-2.328-.817-2.598-2.571a175.987 175.987 0 0 1-.986-7.408c-.393-3.509-.73-7.021-1.061-10.536-.078-.824-.069-1.662-.026-2.49.048-.961.518-1.508 1.498-1.718a11.28 11.28 0 0 1 2.159-.25c8.31-.13 16.618-.073 24.91.547a12.5 12.5 0 0 1 1.851.252c1.357.312 2.025.977 2.089 2.34.276 5.805.503 11.615.724 17.421.065 1.723-.363 3.277-2.027 4.56zm-13.36-12.367c3.406 2.446 6.601 4.748 9.805 7.037.843.602 1.7 1.193 2.589 1.722.293.176.71.141 1.087.203.444-5.244-.081-14.935-.948-17.994-2.319 1.051-10.288 6.743-12.533 9.032zm10.275-10.63c-2.057-.077-4.114-.183-6.17-.224-5.506-.112-11.013-.209-16.518-.271-.521-.006-1.299-.292-1.494.713l12.286 9.184c3.94-3.193 8.221-5.726 11.896-9.402zm1.591 21.065c-2.639-2.288-11.503-8.335-13.473-9.239-5.035 3.495-8.5 6.603-10.02 8.982 3.981.676 18.358.861 23.493.257zm-25.511-1.19c.878-.837 1.68-1.619 2.503-2.379a84.481 84.481 0 0 1 2.543-2.283c.945-.808 1.935-1.563 2.877-2.372.839-.723 1.855-1.277 2.387-2.137-.063-.314-.047-.458-.107-.503-3.885-2.924-7.77-5.848-11.677-8.74-.257-.19-.693-.14-1.32-.25.755 6.106 1.473 11.954 2.218 17.798.033.253.308.476.576.866zm80.121 5.992c-3.31 1.419-13.761 2.015-17.649 1.054a94.537 94.537 0 0 1-.398-6.359 217.06 217.06 0 0 1-.077-6.848c.012-2.177.055-4.358.151-6.533.095-2.145-.143-4.335.553-6.482 5.06-.208 9.929-.268 14.789.027 3.485.211 3.82.742 3.652 4.239-.286 5.905-.532 11.814-.806 17.722-.046 1.028-.138 2.056-.215 3.18zm-1.768-1.005c-.977-2.04-5.276-7.647-7.249-9.455-.633.816-1.27 1.613-1.879 2.431-.617.829-1.204 1.679-1.806 2.52-.602.84-1.225 1.665-1.798 2.524-.54.81-1.585 1.31-1.683 2.588 3.732 0 7.326.01 10.918-.009.927-.004 1.854-.086 2.777-.167.177-.018.337-.196.72-.432zm-13.642-22.385c.119.671.082 1.019.233 1.236a546.65 546.65 0 0 0 5.217 7.335c.224.311.582.524.873.778 1.635-1.691 5.508-6.896 6.51-8.767.067-.126-.092-.372-.152-.583l-12.681.001zm13.89 19.412c.105-.16.292-.316.299-.482.25-5.503.489-11.008.701-16.513.008-.208-.25-.428-.49-.813-1.269 1.761-2.441 3.339-3.557 4.958-1.108 1.607-2.471 3.055-3.24 4.787 2.593 4.349 4.604 6.917 6.287 8.063zm-14.839.133c1.816-1.714 5.413-6.933 6.115-8.75-2.928-4.59-4.663-6.811-5.975-7.643-.537 2.889-.642 12.177-.14 16.393zm-26.986 13.501c-.288-.684-.559-1.141-.674-1.637-.691-2.949-.731-5.954-.643-8.959.035-1.182.594-1.742 1.77-1.693 4.749.197 9.486-.47 14.237-.127 2.053.15 2.397.431 2.774 2.565.566 3.218.473 5.673-.371 9.578-.742.66-1.703.59-2.609.584-4.141-.023-8.283-.083-12.426-.146-.612-.01-1.225-.097-2.058-.165zm9.143-5.334c2.171 1.55 4.266 2.903 6.852 3.742.288-2.661.786-5.084-.102-7.639-2.435.999-4.762 1.979-6.75 3.897zm-7.326-4.855 5.464 3.817c2.533-1.296 4.833-2.472 7.131-3.652a.408.408 0 0 0 .192-.208c.029-.092-.008-.204-.033-.492-3.979-.006-7.975-.151-12.754.535zm-1.392.874c0 1.65-.032 2.767.01 3.881.04 1.086-.053 2.21.387 3.232 2.651-.557 3.426-1.067 5.055-3.291-1.592-1.246-3.206-2.461-5.452-3.822zm12.096 7.876c-1.467-1.364-3.133-2.282-4.841-2.904-2.09 1.48-2.09 1.48-2.907 2.904h7.748zm-19.73-1.612c-.815.535-1.112.878-1.448.922-.923.121-1.863.166-2.794.155-5.925-.071-11.849-.158-17.773-.259a105.238 105.238 0 0 1-4.665-.2c-.286-.019-.588-.189-.825-.365-.121-.089-.132-.345-.156-.53-.009-.073.062-.212.126-.23.39-.119.787-.29 1.184-.301 1.559-.045 3.122-.095 4.679-.038 5.194.186 10.388.421 15.579.631 1.835.074 3.669.129 6.093.215zm.17-4.293c-.282.947-.971.933-1.553.936-2.175.014-4.349-.012-6.524-.068-2.69-.068-5.378-.212-8.069-.266-3.936-.08-7.874-.105-11.811-.17-.396-.006-.79-.125-1.547-.254.511-.416.761-.669 1.06-.842.161-.095.404-.08.609-.07 7.039.3 14.094-.463 21.128.365 1.744.205 3.52.12 5.281.188.467.019.93.116 1.426.181zm-27.92 8.207c.628-.188 1.014-.408 1.398-.404 8.495.09 16.99.204 25.49.315-.052.8-.566.921-1.094.932-4.47.095-8.94.177-13.411.249a694.82 694.82 0 0 1-9.357.103 8.262 8.262 0 0 1-2.148-.27c-.299-.08-.504-.512-.878-.925zm54.402-35.863c-2.604.055-4.769.128-6.936.139-4.661.022-9.324.015-13.985.01a2.43 2.43 0 0 1-.887-.15c-.142-.059-.272-.309-.281-.48-.01-.18.086-.489.209-.532.58-.2 1.181-.441 1.784-.465 2.689-.105 5.387-.237 8.077-.178 3.105.069 6.21.316 9.314.517.788.05 1.662-.096 2.705 1.139zm-1.659 17.044c-.849.79-1.692.698-2.465.617-4.14-.43-8.276-.383-12.425-.228-1.259.047-2.455.159-3.648.533-.212.066-.533-.215-.802-.336.163-.332.249-.759.51-.971.299-.244.746-.39 1.142-.419 2.993-.221 5.991-.557 8.988-.549 2.577.007 5.156.402 7.728.679.312.034.59.4.972.674zm-19.179-4.782c.124-.41.124-.83.303-.928.531-.29 1.119-.573 1.71-.646 5.947-.732 11.809-.261 17.578 1.364.079.023.13.134.261.271-.188.199-.372.568-.571.576-1.031.045-2.102.157-3.095-.047-4.833-.993-9.674-1.255-14.563-.502-.49.076-1.006-.048-1.623-.088zm20.56-7.478c-1.016.689-2.072.375-3.074.374-4.05-.002-8.099-.065-12.146-.048-1.347.005-2.691.192-4.037.277-.412.026-.849.074-1.231-.036-.221-.063-.414-.402-.509-.657-.049-.127.111-.454.247-.503.572-.21 1.162-.453 1.759-.499 5.498-.422 10.996-.402 16.485.136.882.085 1.854.063 2.506.956zm45.461 14.631c-4.015.819-12.007.322-14.521-.44.025-.1.018-.238.083-.294.22-.191.453-.483.703-.507 3.956-.364 7.879.061 11.79.604.666.091 1.297.418 1.945.637zm-16.399-17.949c.978-.363 1.338-.599 1.71-.618 4.758-.249 9.512-.342 14.229.503.129.023.211.304.371.552-.284.085-.544.238-.796.227-3.519-.156-7.032-.191-10.544.201-1.123.125-2.275.059-3.408-.015-.349-.022-.681-.355-1.562-.85zm2.643 11.701c1.739-1.031 3.634-.546 5.424-.621 3.068-.131 6.126.009 9.468 1.328-.671.239-.905.403-1.134.394-4.439-.158-8.877-.332-13.314-.53-.126-.006-.237-.295-.444-.571zm-21.893 21.08c1.842.118 3.384.277 4.926.3 1.453.021 2.909-.098 4.362-.159 1.473-.062 2.956-.371 5.048-.071-3.133 1.195-6.161 1.836-8.763 1.688-1.738-.1-3.461-.495-5.184-.791-.099-.018-.146-.343-.389-.967zm21.21-26.702c.641-.115 1.126-.271 1.612-.279 3.631-.056 7.263-.119 10.894-.083.648.005 1.474-.012 1.948.694-.052.078-.095.202-.143.203-3.932.189-7.863.38-11.798.533-.611.023-1.245-.074-1.839-.227-.225-.06-.366-.44-.674-.841zm-8.432 23.226c-2.972 1.363-10.541 1.449-15.071.095.377-.31.648-.724.91-.718 4.552.092 9.101.235 13.65.38.172.005.341.159.511.243zm20.486-5.063c-3.597.618-7.166.146-10.735-.244a1.58 1.58 0 0 1-.833-.357c-.193-.172-.397-.531-.336-.728.063-.201.454-.45.677-.428 2.461.249 4.925.499 7.373.848 1.284.183 2.653.01 3.854.909zm-11.603 4.509c2.397-.641 3.396-.592 12.245.563-.64.324-.987.62-1.371.675-.919.13-1.861.254-2.783.188-2.376-.166-4.747-.416-7.112-.69-.306-.036-.572-.418-.979-.736z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M239 87.926c-2.505-.545-4.763-1.121-7.053-1.508-1.816-.309-3.669-.403-5.508-.552-.609-.05-1.23.004-1.843.047-.907.066-1.712.361-2.031 1.308-.268.788.089 1.468.61 2.018.591.624 1.198 1.264 1.901 1.745 2.029 1.387 4.102 2.713 6.177 4.033 1.12.714 2.28 1.365 3.621 2.161-1.268 2.637-2.731 4.866-4.597 6.821-.881.923-2.029 1.391-3.336 1.329-1.35-.063-2.713-.068-4.049-.264-4.023-.596-8-1.394-11.862-2.738-13.598-4.736-26.105-11.511-37.951-20.068.021-1.03-.003-2.12.072-3.201.381-5.493 1.87-10.672 4.633-15.437.857-1.479 1.945-2.838 3.035-4.165 1.44-1.749 3.261-2.475 5.582-1.949 4.202.949 8.459 1.666 12.638 2.7 8.022 1.982 15.834 4.659 23.606 7.447 2.207.79 4.412 1.584 6.661 2.23 4.17 1.202 7.393 3.827 10.457 6.719 1.26 1.19 1.726 2.636 1.293 4.368-.271 1.073-.332 2.199-.643 3.256-.346 1.171-.863 2.289-1.413 3.7zm-35.763-23.777c-4.828-1.876-10.808-1.869-15.177-.003-5.727 2.442-7.833 7.33-8 13.418-.011.362.071.74.181 1.089 1.396 4.482 3.729 8.301 7.75 10.928 4.706 3.079 9.608 3.73 14.686 1.034 1.621-.86 3.165-1.92 4.596-3.073 7.397-5.958 7.075-19.201-4.036-23.393z"
                        fill="#EDEDED"
                    />

                    <path
                        d="M273.306 114.357c-1.256.106-2.104.176-2.951.249-3.007.254-5.775 1.228-8.335 2.815-.313.194-.611.41-.926.606-3.082 1.919-4.359 1.893-6.743-.698-2.061-2.241-4.132-4.531-5.472-7.502 1.018-1.288 1.988-2.518 3.112-3.943.882.607 1.576 1.058 2.238 1.548.99.729 1.899 1.592 2.954 2.207 2.264 1.323 4.515 1.532 6.999.197 2.793-1.5 5.792-2.62 8.748-3.927.357-.856.023-1.639-.564-2.312-1.464-1.668-2.243-3.456-1.63-5.757.376-1.42-.277-2.71-1.352-3.64-1.111-.962-2.288-1.875-3.554-2.617-1.589-.934-3.321-1.627-4.947-2.507-2.232-1.209-2.28-1.407-1.704-4.684 2.483-.361 5.023-.514 7.567.079 1.754.408 3.138 1.406 4.123 2.916.4.617.744 1.277 1.076 1.936 1.042 2.08 2.546 3.611 4.846 4.261.306.088.564.342 1.078.666-1.141.946-2.152 1.785-3.356 2.786.514.658.819 1.42 1.358 1.666 1.106.503 2.343.725 3.52 1.066 1.647.478 3.292.961 4.898 1.429-.071 1.097-.758.991-1.313 1.088-1.418.251-2.917.065-4.534.73 1.245 3.632 4.816 4.806 7.012 7.187-.498 1.034-1.354.711-1.99.684-2.583-.117-5.164-.34-7.741-.533-.493-.036-.981-.15-1.472-.153-1.428-.011-2.045.74-1.709 2.113.144.592.425 1.15.764 2.044z"
                        fill="#FFA1BA"
                    />

                    <path
                        d="M243.337 128.693c-2.468-.019-4.088-.628-5.661-1.311-6.945-3.018-13.17-7.172-18.874-12.126-.644-.561-1.208-1.229-1.743-1.9-1.292-1.619-1.348-3.346-.413-5.172.815-1.586 1.452-1.96 3.227-1.747 2.441.291 4.886.547 7.319.899.685.1 1.436.354 1.975.773 2.327 1.809 4.584 3.705 7.012 5.687-.573 3.128.936 5.68 2.604 8.156 1.031 1.529 2.172 2.984 3.231 4.497.401.572.714 1.206 1.323 2.244zm-70.495-72.611c-.157.325-.232.712-.465.932-3.499 3.283-4.801 7.623-5.79 12.095-.469 2.129-.783 4.294-1.143 6.309-.961.454-1.432-.101-1.811-.486-3.02-3.05-6-6.143-8.984-9.232-1.3-1.345-1.619-2.987-1.344-4.776.26-1.679 1.09-2.986 2.632-3.775a15.086 15.086 0 0 1 1.68-.746c3.839-1.411 10.666-1.556 15.225-.321zm77.78 20.574c-2.324-.282-4.526-.498-6.709-.824-3.744-.556-7.34-3.846-7.838-8.54-.159-1.516.701-2.618 2.294-2.76 1.337-.117 2.703-.094 4.045.01 6.542.505 12.864 2.023 19.01 4.276 1.594.584 3.09 1.442 5.375 2.531-1.319.188-1.828.32-2.338.32-1.964-.008-3.93-.123-5.892-.072-2.884.071-5.227 1.196-6.776 3.754-.304.499-.788.887-1.171 1.305zM226.051 88.58c.89-.093 1.5-.268 2.084-.202 3.547.392 7.083.865 10.443 2.172 4.017 1.561 8.092 2.978 12.046 4.676 3.047 1.307 5.97 2.913 8.899 4.478 1.055.563 2.188 1.144 2.75 2.317-1.451 2.559-1.579 2.686-3.906 2.013-2.01-.577-4.008-1.236-5.933-2.037-5.455-2.269-10.92-4.521-16.281-6.998-2.89-1.334-5.592-3.084-8.341-4.71-.601-.359-1.039-.995-1.761-1.709z"
                        fill="#74BAA5"
                    />

                    <path
                        d="M270.38 104.483c-2.151 1.09-4.33 1.966-6.26 3.228-2.469 1.613-4.638 1.099-6.834-.354-.376-.25-.643-.664-.965-1.003.729-.952 1.438-.303 2.039-.186 2.65.519 4.518-.662 6.042-2.64.845-1.093.859-2.357-.124-3.337-.862-.86-1.871-1.588-2.893-2.257-1.33-.873-2.737-1.631-4.059-2.407-.103-2.619-.103-2.619.89-5.221 3.204 1.159 6.387 2.346 9.12 4.474 1.117.874 1.885 1.971 1.503 3.5-.52 2.077.024 3.88 1.302 5.536.203.269.239.667.239.667z"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M170.969 80.329c-1.757-.508-2.766-1.531-3.79-2.684.391-4.172 1.097-8.289 2.323-12.308.874-2.867 2.252-5.448 4.378-7.618 1.959-2.002 4.068-1.741 6.704-.737-6.647 6.526-8.794 14.595-9.615 23.347z"
                        fill="#FFC91C"
                    />

                    <path
                        d="m248.207 91.342-6.535-2.537c.366-3.639 2.707-6.92 1.386-10.873.775-.006 1.243-.082 1.68-.001 2.264.409 4.602.469 6.947 1.279.113 3.055-.468 5.918-1.357 8.706-.393 1.217-.536 2.7-2.121 3.426zm-17.193 15.249 6.112-8.232c2.537.377 4.899 1.517 7.193 2.851-1.371 3.225-4.998 8.099-7.563 10.095-1.964-1.454-4.148-2.731-5.742-4.714z"
                        fill="#A6A6A6"
                    />

                    <path
                        d="M250.48 103.857c-2.2 3.604-4.592 6.654-7.306 9.446-1.095 1.126-1.486 1.003-3.945-.619 1.273-1.746 2.588-3.458 3.802-5.237 1.163-1.703 2.224-3.474 3.344-5.237 1.498.068 2.683.575 4.105 1.647zm3.485-24.478c1.087.167 1.78.273 2.558.396.639 4.919-.492 9.433-1.748 13.991-1.559.498-2.359-.86-3.663-1.267.71-2.328 1.479-4.391 1.948-6.521.446-2.025.583-4.123.905-6.599zm-51.797-13.223c9.908 3.711 9.334 14.827 3.622 19.384-1.151.919-2.342 1.815-3.613 2.551-4.52 2.619-8.916 2.267-13.177-.695-2.605-1.81-4.418-4.205-5.722-7.082-2.785-6.148.759-13.419 7.611-14.897 3.381-.731 7.983-.521 11.279.739zm-2.015 1.895c-.867-.147-2.308-.541-3.765-.617-2.935-.151-5.601.729-7.804 2.712-1.829 1.648-2.935 3.701-2.339 6.218.596 2.525 1.661 4.862 3.374 6.891 1.694 2.009 3.861 3.058 6.404 3.205 4.099.235 7.442-1.394 9.917-4.636 2.09-2.735 2.117-6.469.232-9.333-1.336-2.034-3.25-3.31-6.019-4.44z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M199.951 70.106a8.727 8.727 0 0 1 4.139 2.996c1.788 2.336 1.785 5.225-.077 7.486-2.003 2.439-4.631 3.616-7.785 3.524-1.935-.059-3.565-.806-4.84-2.324a14.958 14.958 0 0 1-3.124-6.214c-.386-1.604.057-2.909 1.294-3.972 3.149-2.713 6.671-2.816 10.393-1.496zm-2.23 6.961c.305-1.33-.169-2.168-.848-2.846-.248-.251-.938-.364-1.221-.194-.293.173-.543.813-.46 1.166.274 1.152 1.071 1.793 2.529 1.874zm1.312-2.379c-.213 1.267.119 2.101 1.085 2.611.176.092.494.078.664-.026.159-.096.329-.405.287-.566-.238-.932-.529-1.854-2.036-2.019z"
                        fill="#FFFFFF"
                    />
                </g>
                <path
                    d="M214.952 106.406c-.482-.28-.767-.543-1.094-.621-8.843-2.113-16.928-6.044-24.853-10.354-8.36-4.545-16.275-9.77-23.675-15.75-4.523-3.655-8.617-7.746-12.037-12.476-1.247-1.725-2.212-3.515-2.05-5.785.186-2.662 1.151-4.854 3.604-6.024 1.76-.84 3.641-1.627 5.548-1.917 2.662-.401 5.414-.574 8.098-.39 12.951.887 25.722 2.902 38.143 6.791 4.473 1.4 8.907 2.913 13.359 4.376.118.04.23.088.35.123 2.349.718 4.749 1.304 7.038 2.183 2.29.878 4.467 2.047 6.767 3.119.787-.831.116-1.655.097-2.414-.067-2.931 1.011-4.35 3.917-4.838a13.649 13.649 0 0 1 2.947-.172c8.828.464 17.354 2.232 25.37 6.085.876.421 1.771.908 2.468 1.568.734.692 1.043 1.699.615 2.714-.371.878-1.185 1.258-2.076 1.32-.856.061-1.725-.035-2.584-.059-2.339-.066-4.682-.213-7.021-.176-2.072.031-3.726.87-4.725 3.192 1.063.215 1.884.347 2.689.557 1.817.474 3.152 1.392 3.133 3.531-.002.341.217.685.375 1.155.715.045 1.434.115 2.154.13 1.354.031 2.727-.094 4.063.061 3.356.388 6.154 1.738 7.752 4.936.332.661.662 1.329 1.074 1.941.941 1.404 2.159 2.366 3.975 2.235.124-.009.247-.038.368-.035.996.023 2.053-.026 2.397 1.216.326 1.166-.506 1.822-1.234 2.482-.7.634-1.435 1.231-2.468 2.111 1.332.407 2.243.663 3.138.967 1.635.555 3.266 1.115 4.886 1.719 2.023.753 2.987 2.318 3.396 4.637l-6.767-.657c.435.813.54 1.299.843 1.523 1.966 1.462 3.978 2.87 6.125 4.401-.168 1.616-1.167 2.623-2.763 2.794-1.697.186-3.434.102-5.154.041-1.907-.068-3.81-.531-6.125-.179.775 1.032 1.412 1.746 1.88 2.558.289.501.47 1.166.406 1.725-.036.357-.556.762-.954.948-.269.126-.72-.035-1.056-.159-4.17-1.549-8-.461-11.699 1.528-.977.522-1.886 1.172-2.82 1.766-2.16 1.364-4.302 1.095-6.202-.377-1.245-.961-2.297-2.215-3.29-3.456-1.29-1.61-2.434-3.337-3.739-5.149-1.039 1.044-1.913 1.897-2.759 2.775-1.409 1.461-2.98 2.158-4.976 1.188-.288-.141-.669-.097-1.32-.177.214.85.233 1.609.577 2.17 1.221 1.994 2.529 3.936 3.851 5.87.831 1.221 1.741 2.392 2.607 3.591.6.825 1.063 1.713.55 2.735-.597 1.19-1.771 1.337-2.876 1.194-1.579-.209-3.179-.481-4.675-1-3.982-1.382-7.69-3.372-11.158-5.738-3.151-2.151-6.18-4.484-9.185-6.838-1.054-.824-1.975-1.867-2.791-2.938-1.504-1.979-2.115-4.158-.981-6.577.25-.525.364-1.117.547-1.7zM239 87.926c.55-1.412 1.067-2.529 1.412-3.699.311-1.057.372-2.183.643-3.256.433-1.732-.033-3.177-1.293-4.368-3.064-2.892-6.287-5.518-10.457-6.719-2.249-.646-4.454-1.44-6.661-2.23-7.772-2.789-15.583-5.465-23.606-7.447-4.179-1.034-8.436-1.751-12.638-2.7-2.321-.526-4.142.2-5.582 1.949-1.09 1.327-2.178 2.687-3.035 4.165-2.763 4.765-4.252 9.944-4.633 15.437-.075 1.081-.051 2.171-.072 3.201 11.846 8.557 24.353 15.332 37.951 20.068 3.862 1.344 7.838 2.142 11.862 2.738 1.336.196 2.699.2 4.049.264 1.307.062 2.455-.406 3.336-1.329 1.866-1.955 3.329-4.184 4.597-6.821-1.341-.796-2.501-1.447-3.621-2.161-2.075-1.32-4.148-2.646-6.177-4.033-.703-.481-1.31-1.12-1.901-1.745-.521-.549-.878-1.229-.61-2.018.319-.946 1.125-1.242 2.031-1.308.613-.043 1.234-.097 1.843-.047 1.838.149 3.692.243 5.508.552 2.291.387 4.549.962 7.054 1.507zm34.306 26.431c-.339-.894-.619-1.452-.762-2.043-.336-1.373.281-2.124 1.709-2.113.49.002.978.117 1.472.153 2.577.193 5.158.416 7.741.533.637.027 1.492.35 1.99-.684-2.196-2.381-5.767-3.555-7.012-7.187 1.617-.665 3.116-.48 4.534-.73.555-.097 1.241.009 1.313-1.088-1.606-.468-3.252-.952-4.898-1.429-1.178-.342-2.414-.563-3.52-1.066-.539-.246-.845-1.008-1.358-1.666 1.204-1.001 2.216-1.84 3.356-2.786-.515-.324-.772-.578-1.078-.666-2.3-.65-3.804-2.181-4.846-4.261-.332-.66-.676-1.32-1.076-1.936-.985-1.51-2.369-2.508-4.123-2.916-2.544-.593-5.084-.44-7.567-.079-.576 3.276-.528 3.475 1.704 4.684 1.626.88 3.358 1.573 4.947 2.507 1.266.742 2.442 1.655 3.554 2.617 1.074.93 1.727 2.22 1.352 3.64-.613 2.302.166 4.089 1.63 5.757.587.672.921 1.455.564 2.312-2.956 1.307-5.955 2.427-8.748 3.927-2.484 1.335-4.735 1.126-6.999-.197-1.055-.614-1.964-1.477-2.954-2.207-.662-.49-1.356-.94-2.238-1.548-1.124 1.425-2.094 2.655-3.112 3.943 1.34 2.971 3.411 5.261 5.472 7.502 2.384 2.591 3.661 2.617 6.743.698.314-.196.612-.412.926-.606 2.56-1.587 5.328-2.561 8.335-2.815.844-.074 1.693-.144 2.949-.25zm-29.969 14.336c-.609-1.038-.922-1.671-1.323-2.244-1.059-1.512-2.2-2.967-3.231-4.497-1.669-2.476-3.177-5.028-2.604-8.156-2.428-1.982-4.685-3.878-7.012-5.687-.539-.419-1.29-.673-1.975-.773-2.433-.353-4.879-.608-7.319-.899-1.775-.212-2.412.161-3.227 1.747-.936 1.826-.879 3.553.413 5.172.535.671 1.099 1.34 1.743 1.9 5.704 4.954 11.929 9.108 18.874 12.126 1.573.682 3.193 1.292 5.661 1.311zm-70.495-72.611c-4.559-1.235-11.386-1.09-15.225.32-.575.212-1.136.467-1.68.746-1.543.788-2.372 2.095-2.632 3.775-.274 1.789.044 3.431 1.344 4.776 2.984 3.089 5.964 6.182 8.984 9.232.38.386.851.94 1.811.486.36-2.015.673-4.18 1.143-6.309.989-4.472 2.291-8.813 5.79-12.095.233-.219.308-.606.465-.931zm77.78 20.574c.383-.419.868-.806 1.172-1.305 1.549-2.559 3.893-3.683 6.776-3.754 1.962-.051 3.928.064 5.892.072.51 0 1.019-.132 2.338-.32-2.285-1.088-3.781-1.947-5.375-2.531-6.146-2.253-12.468-3.771-19.01-4.276-1.343-.104-2.709-.127-4.045-.01-1.593.142-2.454 1.245-2.294 2.76.498 4.694 4.094 7.984 7.838 8.54 2.182.326 4.384.542 6.708.824zM226.051 88.58c.722.714 1.16 1.351 1.761 1.71 2.749 1.626 5.452 3.376 8.341 4.71 5.361 2.477 10.826 4.729 16.281 6.998 1.925.801 3.923 1.459 5.933 2.037 2.327.673 2.455.546 3.906-2.013-.563-1.173-1.695-1.753-2.75-2.317-2.93-1.565-5.852-3.17-8.899-4.478-3.954-1.699-8.029-3.115-12.046-4.676-3.36-1.307-6.896-1.78-10.443-2.172-.584-.067-1.194.107-2.084.201zm44.329 15.903s-.036-.399-.239-.666c-1.277-1.655-1.821-3.459-1.302-5.536.382-1.529-.386-2.626-1.503-3.5-2.733-2.128-5.916-3.315-9.12-4.474-.992 2.602-.992 2.602-.89 5.221 1.322.776 2.729 1.534 4.059 2.407 1.022.669 2.03 1.397 2.893 2.257.983.98.969 2.244.124 3.337-1.524 1.978-3.392 3.158-6.042 2.64-.602-.118-1.31-.766-2.039.186.322.339.589.753.965 1.003 2.196 1.452 4.365 1.966 6.834.354 1.93-1.263 4.108-2.139 6.26-3.229zm-99.411-24.154c.822-8.752 2.968-16.821 9.615-23.348-2.635-1.004-4.745-1.265-6.704.737-2.126 2.17-3.504 4.751-4.378 7.618-1.226 4.02-1.933 8.136-2.323 12.308 1.024 1.154 2.033 2.177 3.79 2.685zm77.238 11.013c1.585-.726 1.728-2.21 2.12-3.426.89-2.788 1.471-5.65 1.357-8.706-2.345-.81-4.683-.87-6.947-1.279-.437-.081-.905-.006-1.68.001 1.321 3.953-1.02 7.234-1.386 10.873 2.305.896 4.464 1.733 6.536 2.537zm-17.193 15.249c1.595 1.982 3.778 3.259 5.742 4.714 2.564-1.997 6.192-6.87 7.563-10.095-2.294-1.334-4.656-2.474-7.193-2.851l-6.112 8.232zm19.466-2.734c-1.422-1.072-2.607-1.58-4.105-1.646-1.12 1.763-2.181 3.535-3.344 5.237-1.214 1.779-2.529 3.491-3.802 5.237 2.46 1.622 2.85 1.745 3.945.619a52.73 52.73 0 0 0 7.306-9.447zm3.485-24.478c-.322 2.476-.459 4.573-.905 6.599-.47 2.13-1.238 4.192-1.948 6.521 1.304.407 2.105 1.765 3.663 1.267 1.256-4.558 2.387-9.071 1.748-13.991-.778-.122-1.471-.229-2.558-.396z"
                    fill={fill}
                />

                <path
                    d="M203.237 64.149c11.111 4.191 11.433 17.435 4.035 23.393-1.432 1.153-2.976 2.213-4.596 3.073-5.078 2.697-9.98 2.045-14.686-1.034-4.02-2.627-6.353-6.446-7.75-10.928-.109-.349-.191-.726-.181-1.089.167-6.088 2.273-10.976 8-13.418 4.37-1.865 10.35-1.873 15.178.003zm-1.069 2.007c-3.297-1.26-7.898-1.47-11.279-.74-6.852 1.478-10.396 8.749-7.611 14.897 1.303 2.877 3.116 5.271 5.722 7.082 4.26 2.962 8.657 3.314 13.177.695 1.271-.736 2.462-1.632 3.613-2.551 5.712-4.556 6.286-15.672-3.622-19.383z"
                    fill={fill}
                />

                <path
                    d="M200.153 68.051c2.769 1.13 4.683 2.406 6.019 4.44 1.884 2.864 1.857 6.598-.232 9.333-2.474 3.243-5.818 4.872-9.917 4.636-2.543-.147-4.709-1.196-6.404-3.205-1.713-2.028-2.778-4.366-3.374-6.891-.596-2.518.511-4.57 2.339-6.218 2.204-1.984 4.87-2.864 7.804-2.712 1.458.076 2.898.47 3.765.617zm-.202 2.055c-3.722-1.32-7.244-1.217-10.393 1.496-1.237 1.063-1.68 2.368-1.294 3.972a14.946 14.946 0 0 0 3.124 6.214c1.275 1.518 2.905 2.265 4.84 2.324 3.153.091 5.782-1.085 7.785-3.524 1.862-2.261 1.865-5.15.077-7.486a8.727 8.727 0 0 0-4.139-2.996z"
                    fill={fill}
                />

                <path
                    d="M197.721 77.067c-1.458-.081-2.254-.722-2.529-1.874-.083-.354.167-.993.46-1.166.284-.17.973-.057 1.221.194.679.678 1.152 1.516.848 2.846zm1.312-2.379c1.507.165 1.797 1.087 2.035 2.019.042.161-.128.47-.287.566-.17.104-.488.119-.664.026-.965-.51-1.297-1.344-1.084-2.611z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M164.891 422.418c-4.233.276-7.969-1.218-11.574-3.155-3.205-1.722-6.374-3.513-9.54-5.308-.995-.563-1.972-1.173-2.88-1.863-2.506-1.906-4.834-3.969-5.263-7.291-1.145-.161-1.642.559-2.192 1.172-2.443 2.719-4.46 5.744-6.345 8.866-.394.652-.707 1.399-1.407 1.906-1.381 3.22-1.406 8.153.654 9.965 4.679 4.118 9.882 8.506 15.409 11.36 4.542 2.348 12.571 4.44 17.523 3.419.312-.609 1.217-4.126 1.546-4.725 1.102-2.004 2.275-3.972 3.337-5.995.722-1.38 1.337-2.817 1.935-4.256a9.144 9.144 0 0 0 .568-2.101c.18-1.15-.582-2.071-1.771-1.994z"
                        fill="#74BAA5"
                    />

                    <path
                        d="M161.32 362.578c-3.176 4.424-6.118 8.693-7.341 13.841-.081.338.147.75.217 1.06.792.221 1.144-.199 1.396-.639.725-1.262 1.391-2.556 2.095-3.829 1.057-1.909 2.087-3.835 3.211-5.703.53-.884 1.216-1.686 1.898-2.468 1.462-1.674 3.239-2.182 5.327-1.265.739.325 1.456.703 2.066.999.245.862-.349 1.081-.662 1.443a30.927 30.927 0 0 0-5.924 10.17c-.165.476-.208 1.015-.188 1.522.01.247.251.601.474.691.22.087.674-.004.808-.181a12.4 12.4 0 0 0 1.131-1.848c.707-1.389 1.242-2.884 2.088-4.18a35.296 35.296 0 0 1 3.615-4.658c1.098-1.191 2.447-.814 3.669-.076.585 1.417.236 2.658-.388 3.927-1.01 2.05-1.927 4.147-2.881 6.225-.271.591-.444 1.186.147 1.694.48.413 1.277.121 1.734-.771a63.692 63.692 0 0 0 2.104-4.521c1.796-4.345 4.154-8.375 6.749-12.278 2.1-3.157 4.778-5.751 7.728-8.085a9.685 9.685 0 0 1 1.57-1.016c1.985-1.017 3.479-.404 3.995 1.807.276 1.187.361 2.495.179 3.695-.542 3.54-1.967 6.786-3.845 9.808-1.864 2.999-3.861 5.916-5.81 8.862a208.66 208.66 0 0 1-2.622 3.874c-1.252 1.808-2.257 3.733-2.867 5.853-.114.395-.211.809-.223 1.216-.043 1.418 1.469 2.456 2.545 1.608 2.129-1.673 4.712-2.175 7.144-2.988 4.27-1.429 5.114-.078 6.163 3.321.236.768.205 1.64.184 2.461-.031 1.242-.624 2.18-1.784 2.701-.662.297-1.319.632-2.013.835-6.363 1.858-11.487 5.679-16.295 10.076-2.064 1.885-4.362 3.517-6.561 5.254-.949.749-2.037.94-3.232.838-2.507-.215-4.94-.728-7.227-1.791-2.739-1.272-5.384-2.704-7.734-4.642-2.005-1.653-4.082-3.221-6.094-4.867a13.648 13.648 0 0 1-1.979-1.977c-.293-.366-.461-.938-.461-1.418.003-4.273.446-8.504 1.774-12.577a60.715 60.715 0 0 1 2.865-7.237c1.737-3.659 3.654-7.234 5.528-10.828.843-1.618 2.186-2.756 3.778-3.606 1.129-.604 2.293-.983 3.949-.332z"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M170.433 413.729c-.614 1.665-1.513 3.05-2.602 4.3-1.237 1.419-2.826 2.056-4.727 1.916-2.537-.185-4.92-.961-7.127-2.132a322.612 322.612 0 0 1-12.516-7.007c-1.413-.834-2.684-1.972-3.855-3.137-1.658-1.649-1.759-2.709-.697-4.755.669-1.288 1.43-2.529 2.262-3.985.509.443.971.792 1.369 1.205 4.428 4.577 9.093 8.837 14.919 11.634 2.081.999 4.228 1.759 6.479 2.193 1.843.355 3.707.567 5.503-.327.221-.109.572.048.992.095z"
                        fill="#DEDEDE"
                    />
                </g>
                <path
                    d="M135.634 404.801c-1.145-.161-1.642.559-2.192 1.172-2.443 2.719-4.46 5.744-6.345 8.866-.52.86-.896 1.891-2.21 2.307-.219-.472-.649-.948-.568-1.313.196-.898.484-1.835.985-2.589 1.785-2.68 3.587-5.356 5.552-7.904 1.419-1.841 3.16-3.378 5.745-3.08l4.586-6.244c.154-2.348.168-4.96.527-7.523.702-4.998 2.621-9.6 4.961-14.045.965-1.834 1.751-3.758 2.662-5.62.638-1.305 1.283-2.613 2.04-3.849.938-1.531 2.257-2.731 3.791-3.645 2.569-1.531 5.185-2.297 7.832.063 3.539-1.343 6.535-.036 9.323 1.994 1.425 1.037 2.858 2.017 4.646 2.638 1.062-1.045 1.696-2.364 2.434-3.587a37.897 37.897 0 0 1 8.796-10.04c.966-.775 1.997-1.521 3.104-2.066 2.902-1.427 5.709-.305 6.853 2.703.758 1.992.813 4.059.385 6.146-1.043 5.081-3.229 9.636-6.296 13.792-1.912 2.592-3.847 5.169-5.704 7.8-.897 1.269-1.66 2.636-2.435 3.987-.175.306-.152.727-.255 1.284 1.988-.107 3.596-.866 5.28-1.281 1.306-.32 2.623-.691 3.953-.795 1.915-.151 3.358.73 4.418 2.376 1.364 2.118 1.7 4.468 1.585 6.868-.081 1.666-1.186 2.883-2.641 3.63a23.691 23.691 0 0 1-3.74 1.537c-3.301 1.028-6.412 2.44-9.242 4.43-.929.652-1.84 1.354-2.657 2.14-2.389 2.304-4.726 4.662-7.382 7.295-.386 3.336-2.627 6.171-5.163 8.984.284.684.705 1.397.862 2.166.14.685.061 1.443-.057 2.146a13.425 13.425 0 0 1-.651 2.399c-1.555 4.222-3.785 8.089-6.29 11.807-.345.512-.785.969-1.226 1.406-.458.457-1.087.838-1.625.334-.265-.248-.31-.999-.146-1.393.48-1.146 1.093-2.24 1.692-3.332 1.102-2.004 2.275-3.972 3.337-5.995.722-1.38 1.337-2.817 1.935-4.256a9.144 9.144 0 0 0 .568-2.101c.178-1.151-.583-2.072-1.773-1.995-4.233.276-7.969-1.218-11.574-3.155-3.205-1.722-6.374-3.513-9.54-5.308-.995-.563-1.972-1.173-2.88-1.863-2.503-1.907-4.831-3.969-5.26-7.291zm25.686-42.223c-1.656-.651-2.82-.272-3.95.332-1.592.851-2.935 1.988-3.778 3.606-1.874 3.594-3.791 7.169-5.528 10.828a60.885 60.885 0 0 0-2.865 7.237c-1.328 4.073-1.771 8.305-1.774 12.577 0 .48.167 1.052.461 1.418.582.723 1.26 1.387 1.979 1.977 2.012 1.646 4.089 3.214 6.094 4.867 2.351 1.938 4.995 3.369 7.734 4.642 2.286 1.063 4.719 1.576 7.227 1.791 1.195.103 2.283-.089 3.232-.838 2.199-1.737 4.497-3.369 6.561-5.254 4.808-4.397 9.933-8.219 16.295-10.076.693-.203 1.351-.538 2.013-.835 1.16-.521 1.753-1.459 1.784-2.701.021-.821.052-1.692-.184-2.461-1.049-3.399-1.893-4.75-6.163-3.321-2.433.814-5.015 1.315-7.144 2.988-1.076.849-2.588-.19-2.545-1.608.011-.407.108-.821.223-1.216.61-2.119 1.615-4.045 2.867-5.853a203.83 203.83 0 0 0 2.622-3.874c1.949-2.946 3.946-5.863 5.81-8.862 1.878-3.021 3.303-6.268 3.845-9.808.183-1.2.098-2.509-.179-3.695-.516-2.211-2.01-2.823-3.995-1.807a9.618 9.618 0 0 0-1.57 1.016c-2.95 2.334-5.629 4.928-7.728 8.085-2.595 3.903-4.953 7.934-6.749 12.278a64.107 64.107 0 0 1-2.104 4.521c-.457.892-1.255 1.184-1.734.771-.591-.508-.418-1.104-.147-1.694.954-2.078 1.871-4.175 2.881-6.225.624-1.269.973-2.51.388-3.927-1.222-.737-2.572-1.115-3.669.076a35.447 35.447 0 0 0-3.615 4.658c-.846 1.296-1.381 2.791-2.088 4.18a12.588 12.588 0 0 1-1.131 1.848c-.134.177-.588.268-.808.181-.223-.09-.463-.444-.474-.691-.02-.507.023-1.046.188-1.522a30.927 30.927 0 0 1 5.924-10.17c.313-.362.907-.581.662-1.443-.609-.296-1.327-.674-2.066-.999-2.087-.917-3.865-.409-5.327 1.265-.683.781-1.368 1.584-1.898 2.468-1.124 1.868-2.155 3.794-3.211 5.703-.704 1.273-1.37 2.567-2.095 3.829-.252.439-.604.859-1.396.639-.07-.31-.298-.722-.217-1.06 1.224-5.147 4.166-9.417 7.342-13.841zm9.113 51.151c-.42-.048-.771-.204-.992-.095-1.796.895-3.66.683-5.503.327-2.251-.435-4.398-1.194-6.479-2.193-5.826-2.797-10.491-7.057-14.919-11.634-.398-.413-.86-.762-1.369-1.205-.832 1.456-1.593 2.697-2.262 3.985-1.062 2.046-.962 3.105.697 4.755 1.171 1.165 2.442 2.303 3.855 3.137a321.872 321.872 0 0 0 12.516 7.007c2.206 1.171 4.59 1.947 7.127 2.132 1.901.14 3.489-.497 4.727-1.916 1.089-1.25 1.988-2.634 2.602-4.3z"
                    fill={fill}
                />
            </g>
            <g fillRule="evenodd" clipRule="evenodd">
                <g>
                    <path
                        d="M356.819 141.364a1379.463 1379.463 0 0 0-8.131 8.629c-.347.372-.596.837-1.041 1.472.619.145 1.082.219 1.517.366 1.073.359 2.231.591 3.182 1.163 3.054 1.837 5.648 4.236 8.02 6.892 1.799 2.014 3.671 3.963 5.5 5.952.704.764 1.449 1.503 2.045 2.347 1.15 1.636 1.569 3.39.49 5.264-.202.349-.345.733-.495 1.055.423.89 1.022 1.149 1.784.652.518-.337.979-.775 1.416-1.217 3.204-3.241 9.156-7.993 12.365-11.227.332-2.92-2.156-10.836-8.685-17.278-4.605-4.545-15.112-8.124-15.351-8.203-.474.458-2.162 3.656-2.616 4.133z"
                        fill="#FFC91C"
                    />

                    <path
                        d="M323.872 202.765c-2.545-1.706-2.952-2.836-1.939-5.059.961-2.104 2.449-3.851 3.922-5.607.593-.706 1.098-1.489 1.599-2.263.078-.12 0-.463-.121-.565-.211-.177-.558-.395-.766-.33-.475.148-1.012.356-1.33.711a99.009 99.009 0 0 0-4.017 4.755c-.63.803-1.081 1.747-1.72 2.801-.617-.326-1.284-.478-1.596-.897-.338-.451-.521-1.171-.456-1.738.233-1.99.867-3.868 2.219-5.4.961-1.089 2.039-2.075 3.038-3.132.412-.436.754-.937 1.082-1.351-.424-1.044-1.097-1.149-1.807-.673-1.913 1.278-3.703 2.693-4.793 4.808-.371.716-.811 1.397-1.198 2.058-1.087-.148-1.72-.747-1.892-1.575-.139-.66-.091-1.528.24-2.088.948-1.601 1.941-3.22 3.173-4.604 4.498-5.055 9.26-9.855 14.479-14.181.48-.396.97-.791 1.496-1.12 2.386-1.504 4.525-3.299 6.538-5.28 2.932-2.885 4.057-3.046 7.365-.148 2.504 2.195 4.995 4.404 7.434 6.668 2.775 2.573 4.756 5.767 6.723 8.951.296.482.261 1.195.294 1.806.244 4.444-.706 8.726-2.299 12.795-.772 1.974-2.337 3.655-3.631 5.405-3.025 4.097-6.143 8.126-9.138 12.245-.908 1.251-1.505 2.725-2.303 4.064-.577.972-1.416 1.125-2.397.545-2.463-1.457-3.088-4.922-1.254-7.352 1.565-2.076 3.219-4.083 4.834-6.122.775-.979 1.563-1.948 2.303-2.954a2.56 2.56 0 0 0 .461-1.121c.034-.252-.123-.64-.328-.786-.208-.148-.704-.211-.85-.073-.747.713-1.536 1.428-2.101 2.282-1.444 2.19-3.316 3.992-5.043 5.937-2.345 2.639-4.587 5.377-6.765 8.158-2.818 3.603-5.533 7.287-8.279 10.947-.823 1.095-1.728 2.081-3.004 2.657-1.025.46-1.757.342-2.545-.464-1.646-1.687-2.382-3.727-1.751-6 .582-2.091 1.217-4.248 2.29-6.108 3.271-5.672 6.565-11.36 11.443-15.887.151-.141.395-.315.389-.466-.012-.375-.056-.803-.257-1.092-.114-.164-.637-.226-.841-.106-.438.259-.806.646-1.165 1.016-1.875 1.93-3.741 3.87-5.736 5.933z"
                        fill="#FFFFFF"
                    />

                    <path
                        d="M366.472 170.089c-.758-.979-1.669-1.838-2.518-2.744-1.629-1.737-3.287-3.449-4.889-5.211-2.096-2.307-4.276-4.485-6.845-6.31-3.43-2.437-3.789-1.358-5.871.388-.377.317-.692.708-1.331 1.368 2.994 1.116 4.767 3.31 6.833 5.148 1.551 1.378 3.089 2.778 4.544 4.254a31.67 31.67 0 0 1 3.03 3.536c1.215 1.669 2.293 3.438 3.479 5.24 1.498-.734 2.486-1.926 3.448-3.129.74-.923.814-1.643.12-2.54z"
                        fill="#DEDEDE"
                    />
                </g>
                <path
                    d="M345.353 153.576c-.255-2.085.395-3.802 1.69-5.265a850.004 850.004 0 0 1 8.759-9.747c.553-.603 1.262-1.078 1.954-1.529.626-.409 1.36-.281 1.678.195.407.616.249 1.234-.187 1.712-.77.845-1.643 1.592-2.429 2.421a1379.463 1379.463 0 0 0-8.131 8.629c-.347.372-.596.837-1.041 1.472.619.145 1.082.219 1.517.366 1.073.359 2.231.591 3.182 1.163 3.054 1.837 5.648 4.236 8.02 6.892 1.799 2.014 3.671 3.963 5.5 5.952.704.764 1.449 1.503 2.045 2.347 1.15 1.636 1.569 3.39.49 5.264-.202.349-.345.733-.495 1.055.423.89 1.022 1.149 1.784.652.518-.337.979-.775 1.416-1.217 3.219-3.257 6.417-6.534 9.642-9.785a14.003 14.003 0 0 1 1.892-1.57c.175-.122.635-.03.831.128.201.162.354.536.33.798-.037.394-.163.834-.396 1.146-.558.748-1.154 1.479-1.815 2.136-2.952 2.935-5.932 5.842-8.905 8.757-.222.219-.45.434-.691.633-2.19 1.839-2.669 1.866-5.188.336-.168-.102-.382-.126-.575-.186-1.24.352-1.897 1.118-1.954 2.457-.068 1.558-.313 3.107-.373 4.663-.218 5.605-1.985 10.547-5.833 14.745-4.234 4.619-7.514 9.95-10.967 15.147-.514.776-.996 1.601-1.633 2.267-1.419 1.487-3.455 1.638-5.054.33-.789-.643-1.411-1.509-2.031-2.331-.365-.487-.576-1.087-.971-1.853-.554.492-1.041.817-1.396 1.252-2.038 2.501-4.004 5.06-6.076 7.533-1.601 1.913-3.254 3.792-5.015 5.558-.862.862-1.964 1.54-3.06 2.101-1.209.618-2.455.391-3.479-.54-2.591-2.352-3.687-5.258-2.963-8.712a25.107 25.107 0 0 1 3.08-7.805c1.228-2.042 2.489-4.063 3.835-6.253-.752-.834-1.614-1.59-2.208-2.516-.546-.851-.806-1.886-1.328-3.183-2.115-.967-3.843-2.63-3.256-5.628-.743-.595-1.41-1.08-2.019-1.628-1.814-1.633-2.409-4.021-1.359-6.235a15.892 15.892 0 0 1 2.378-3.641c3.715-4.222 7.656-8.215 11.938-11.884 3.243-2.781 6.693-5.276 10.117-7.818 1.321-.981 2.422-2.267 3.588-3.449 1.678-1.7 3.326-3.431 5.162-5.332zm-21.481 49.189c1.995-2.063 3.861-4.002 5.739-5.93.359-.37.728-.757 1.165-1.016.204-.12.727-.058.841.106.201.29.245.717.257 1.092.006.151-.237.325-.389.466-4.878 4.526-8.172 10.215-11.443 15.887-1.073 1.86-1.708 4.017-2.29 6.108-.631 2.273.105 4.313 1.751 6 .788.806 1.52.923 2.545.464 1.276-.576 2.181-1.562 3.004-2.657 2.746-3.66 5.461-7.344 8.279-10.947 2.178-2.782 4.42-5.52 6.765-8.158 1.727-1.945 3.599-3.747 5.043-5.937.564-.854 1.353-1.568 2.101-2.282.146-.139.642-.075.85.073.205.146.362.534.328.786a2.56 2.56 0 0 1-.461 1.121c-.74 1.006-1.527 1.974-2.303 2.954-1.615 2.04-3.27 4.046-4.834 6.122-1.834 2.43-1.209 5.895 1.254 7.352.98.58 1.819.426 2.397-.545.798-1.339 1.395-2.814 2.303-4.064 2.995-4.119 6.113-8.148 9.138-12.245 1.294-1.75 2.858-3.431 3.631-5.405 1.593-4.07 2.543-8.351 2.299-12.795-.033-.611.002-1.324-.294-1.806-1.967-3.184-3.948-6.378-6.723-8.951-2.439-2.263-4.931-4.472-7.434-6.668-3.309-2.898-4.434-2.738-7.365.148-2.013 1.98-4.152 3.775-6.538 5.28-.526.33-1.016.724-1.496 1.12-5.219 4.326-9.98 9.126-14.479 14.181-1.231 1.384-2.225 3.003-3.173 4.604-.331.56-.379 1.428-.24 2.088.173.829.806 1.428 1.892 1.575.388-.66.827-1.341 1.198-2.058 1.09-2.114 2.88-3.53 4.793-4.808.71-.476 1.383-.371 1.807.673-.328.414-.67.915-1.082 1.351-.999 1.057-2.077 2.043-3.038 3.132-1.352 1.532-1.985 3.41-2.219 5.4-.065.567.118 1.287.456 1.738.312.419.979.571 1.596.897.639-1.054 1.09-1.998 1.72-2.801a98.433 98.433 0 0 1 4.017-4.755c.318-.355.855-.564 1.33-.711.208-.065.555.153.766.33.121.102.199.445.121.565-.501.773-1.006 1.557-1.599 2.263-1.473 1.756-2.961 3.503-3.922 5.607-1.016 2.22-.609 3.349 1.936 5.056zm39.032-27.006c1.498-.734 2.486-1.926 3.448-3.129.739-.923.814-1.643.119-2.54-.758-.979-1.669-1.838-2.518-2.744-1.629-1.737-3.287-3.449-4.889-5.211-2.096-2.307-4.276-4.485-6.845-6.31-3.43-2.437-3.789-1.358-5.871.388-.377.317-.692.708-1.331 1.368 2.994 1.116 4.767 3.31 6.833 5.148 1.551 1.378 3.089 2.778 4.544 4.254a31.67 31.67 0 0 1 3.03 3.536c1.217 1.669 2.295 3.437 3.48 5.24z"
                    fill={fill}
                />
            </g>
        </g>
        <g>
            <g>
                <g fill={fill}>
                    <g>
                        <path
                            d="M260.103 465.465a7.488 7.488 0 0 0-1.107 1.453l-.465-.241a.606.606 0 0 0-.66-.466.604.604 0 1 0 .325 1.146l.451.234a7.357 7.357 0 0 0-.539 1.743l.748.132a6.602 6.602 0 0 1 1.791-3.473l-.544-.528zm5.489-2.302c-.172 0-.342.006-.51.017l-.074-.626a.716.716 0 1 0-.752.087l.072.624a7.585 7.585 0 0 0-2.059.646l.326.685a6.887 6.887 0 0 1 2.996-.674c.496 0 .992.053 1.475.158l.16-.741a7.65 7.65 0 0 0-1.634-.176zm6.601 2.547a.601.601 0 0 0 .525-.672.602.602 0 0 0-1.201.083l-.416.363a7.712 7.712 0 0 0-1.408-1.14l-.404.642a6.748 6.748 0 0 1 2.564 2.925l.69-.313a7.38 7.38 0 0 0-.941-1.545l.402-.351c.06.013.125.017.189.008zm-7.148 7.661c-.387.023-.775.035-1.158.035-.879 0-1.732-.061-2.478-.18a8.496 8.496 0 0 1-1.27-.292 6.171 6.171 0 0 0 5.389 3.125c2.855 0 5.262-1.916 5.949-4.503-.682.449-1.506.825-2.459 1.122-1.18.369-2.555.608-3.973.693z"/>

                        <path
                            d="M265.592 464.68c-3.352 0-6.08 2.666-6.08 5.943 0 .425.047.849.137 1.261.674.483 2.707.891 5.348.731 2.881-.174 5.297-.958 6.672-2.159a5.351 5.351 0 0 0-.045-.581c-.38-2.962-2.974-5.195-6.032-5.195zm-2.16 6.514c-1.02 0-1.85-.83-1.85-1.85 0-1.021.83-1.851 1.85-1.851s1.85.83 1.85 1.851a1.854 1.854 0 0 1-1.85 1.85zm4.738-.908c-.75 0-1.361-.61-1.361-1.36s.611-1.36 1.361-1.36a1.36 1.36 0 0 1 0 2.72z"/>
                    </g>
                    <path
                        d="M281.596 466.547c-.295-.116-.807-.31-1.383-.238-.551.069-.844.341-.844 1.007v.866h2.229v1.717h-2.229v5.455h-1.932v-5.455h-1.34v-1.717h1.34v-.889c0-1.68.895-2.782 2.568-2.782.642 0 1.156.121 1.59.308v1.728zm4.701 3.331a3.289 3.289 0 0 0-.525-.046c-.894 0-1.51.548-1.51 1.613v3.908h-1.932v-7.172h1.873v.784c.451-.673 1.139-.977 2.02-.977.414 0 .848.128 1.096.337l-1.022 1.553zm7.668 1.879c0 .222-.016.488-.037.651h-5.084c.207 1.036.932 1.487 1.842 1.487.623 0 1.295-.252 1.815-.689l1.133 1.243c-.814.748-1.852 1.089-3.057 1.089-2.199 0-3.725-1.496-3.725-3.753 0-2.258 1.48-3.797 3.627-3.797 2.064.001 3.478 1.534 3.486 3.769zm-5.113-.666h3.174c-.178-.918-.732-1.436-1.561-1.436-.91-.001-1.444.547-1.613 1.436zm12.767.666c0 .222-.016.488-.037.651h-5.086c.207 1.036.934 1.487 1.844 1.487.621 0 1.295-.252 1.813-.689l1.133 1.243c-.814.748-1.85 1.089-3.057 1.089-2.199 0-3.723-1.496-3.723-3.753 0-2.258 1.48-3.797 3.627-3.797 2.064.001 3.478 1.534 3.486 3.769zm-5.115-.666h3.176c-.178-.918-.734-1.436-1.563-1.436-.91-.001-1.443.547-1.613 1.436zm13.461.673c0 2.154-1.496 3.775-3.473 3.775-.961 0-1.643-.378-2.109-.933v3.708h-1.924v-10.133h1.887v.792c.467-.585 1.154-.984 2.139-.984 1.984 0 3.48 1.621 3.48 3.775zm-5.678 0c0 1.133.748 1.977 1.844 1.977 1.139 0 1.85-.881 1.85-1.977 0-1.095-.711-1.976-1.85-1.976-1.096 0-1.844.844-1.844 1.976zm8.781-5.929c0 .696-.541 1.23-1.236 1.23a1.207 1.207 0 0 1-1.229-1.23c0-.695.531-1.243 1.229-1.243.695 0 1.236.548 1.236 1.243zm-.259 9.518h-1.932v-7.172h1.932v7.172zm3.222-4.618 2.703-2.554h2.367l-3.479 3.375 3.502 3.797h-2.377l-2.717-2.901v2.901h-1.93v-10.658h1.932v6.04z"/>
                </g>
                <g>
                    <path
                        d="M184.412 475.289v-1.055c-.527.718-1.392 1.23-2.388 1.23-1.846 0-3.149-1.406-3.149-3.706 0-2.256 1.289-3.721 3.149-3.721.952 0 1.816.469 2.388 1.245v-3.765h1.099v9.771h-1.099zm0-1.919v-3.208c-.396-.615-1.245-1.143-2.124-1.143-1.421 0-2.27 1.172-2.27 2.739s.85 2.725 2.27 2.725c.879 0 1.729-.498 2.124-1.113zm2.52-1.626c0-2.051 1.465-3.706 3.486-3.706 2.139 0 3.397 1.67 3.397 3.794v.278h-5.726c.088 1.333 1.025 2.446 2.549 2.446.806 0 1.626-.322 2.182-.894l.527.718c-.703.703-1.654 1.084-2.812 1.084-2.095.001-3.603-1.508-3.603-3.72zm3.471-2.798c-1.509 0-2.256 1.274-2.314 2.358h4.643c-.014-1.054-.717-2.358-2.329-2.358zm4.203 5.406.571-.791c.469.542 1.362 1.011 2.329 1.011 1.084 0 1.67-.513 1.67-1.216 0-1.714-4.38-.659-4.38-3.281 0-1.099.952-2.036 2.637-2.036 1.201 0 2.051.454 2.622 1.025l-.513.762c-.425-.513-1.201-.894-2.109-.894-.967 0-1.567.483-1.567 1.113 0 1.553 4.38.527 4.38 3.281 0 1.186-.952 2.139-2.783 2.139-1.157 0-2.139-.352-2.857-1.113zm6.871-7.881c0-.41.337-.747.732-.747a.75.75 0 0 1 .747.747c0 .41-.337.732-.747.732a.734.734 0 0 1-.732-.732zm.19 8.818v-7.075h1.099v7.075h-1.099zm2.915 1.816.556-.82c.586.703 1.289.967 2.3.967 1.172 0 2.271-.571 2.271-2.124v-1.011c-.513.718-1.377 1.26-2.373 1.26-1.846 0-3.15-1.377-3.15-3.662 0-2.271 1.289-3.677 3.15-3.677.952 0 1.802.469 2.373 1.245v-1.069h1.099v6.87c0 2.344-1.641 3.076-3.369 3.076-1.203 0-2.023-.235-2.857-1.055zm5.126-3.852v-3.091c-.381-.615-1.23-1.143-2.109-1.143-1.421 0-2.27 1.128-2.27 2.695 0 1.553.849 2.695 2.27 2.695.878.001 1.728-.541 2.109-1.156zm7.705 2.036v-4.629c0-1.245-.63-1.641-1.582-1.641-.864 0-1.685.527-2.095 1.099v5.171h-1.099v-7.075h1.099v1.025c.498-.586 1.465-1.201 2.52-1.201 1.48 0 2.256.747 2.256 2.285v4.966h-1.099zm2.519-3.545c0-2.051 1.465-3.706 3.486-3.706 2.139 0 3.398 1.67 3.398 3.794v.278h-5.727c.088 1.333 1.024 2.446 2.548 2.446.806 0 1.626-.322 2.183-.894l.527.718c-.703.703-1.655 1.084-2.813 1.084-2.093.001-3.602-1.508-3.602-3.72zm3.471-2.798c-1.509 0-2.256 1.274-2.313 2.358h4.643c-.015-1.054-.718-2.358-2.33-2.358zm9.947 6.343v-1.055c-.527.718-1.392 1.23-2.388 1.23-1.846 0-3.149-1.406-3.149-3.706 0-2.256 1.289-3.721 3.149-3.721.952 0 1.816.469 2.388 1.245v-3.765h1.099v9.771h-1.099zm0-1.919v-3.208c-.396-.615-1.245-1.143-2.124-1.143-1.421 0-2.27 1.172-2.27 2.739s.85 2.725 2.27 2.725c.878 0 1.728-.498 2.124-1.113zm6.341 1.919v-9.771h1.099v3.765c.571-.776 1.421-1.245 2.388-1.245 1.846 0 3.149 1.465 3.149 3.721 0 2.3-1.304 3.706-3.149 3.706-.996 0-1.86-.513-2.388-1.23v1.055h-1.099zm3.208-.806c1.436 0 2.285-1.157 2.285-2.725 0-1.567-.85-2.739-2.285-2.739-.864 0-1.729.527-2.109 1.143v3.208c.381.615 1.245 1.113 2.109 1.113zm4.629 2.578c.161.073.425.117.601.117.483 0 .806-.161 1.055-.747l.469-1.069-2.959-7.148h1.186l2.358 5.801 2.344-5.801h1.201l-3.545 8.511c-.425 1.024-1.143 1.421-2.08 1.436-.234 0-.601-.044-.806-.104l.176-.996z"
                        fill={fill}
                    />
                </g>
            </g>
        </g>
    </svg>
);
const GameIcon: React.FC<IconSvgProps> = ({
                                              size = 32,
                                              width,
                                              height,
                                              ...props
                                          }) => (
    <svg
        version="1.1"
        // height={size | height}
        // width={size | width}
        x="0px" y="0px"
        viewBox="0 0 500 500"
        enableBackground="new 0 0 500 500"
    >
        <g id="objects">
            <g>
                <path d="M343.607,421.52c0.201,2.34-1.237,5.204-3.502,6.079c-2.865,1.103-7.092-1.845-6.724-5.223
			c0.619-5.697,4.043-4.903,7.082-4.667c0.5,0.05,0.625,0.126,1.485,0.821C342.761,419.186,343.495,420.219,343.607,421.52z"/>
                <path d="M389.868,445.025c-2.703,1.414-7.194-0.602-8.032-3.503c-1.151-3.978,3.826-6.542,7.131-6.243
			c0.213,0.016,0.351,0.127,0.425,0.251c1.563,0.088,2.841,1.501,3.064,3.267C392.745,441.034,392.032,443.9,389.868,445.025z"/>
                <path d="M439.203,419.18c-1.212,2.614-4.152,3.94-6.866,2.814c-2.578-1.075-3.815-3.901-2.366-6.403
			c1.439-2.45,4.167-3.628,6.919-2.9c0.4,0.099,0.513,0.45,0.427,0.747C439.442,414.39,440.218,417.018,439.203,419.18z"/>
                <path d="M414.886,400.091c-3.241,3.904-10.934-0.874-7.706-5.24c0.238-0.299,0.588-0.313,0.85-0.177
			C410.258,391.197,418.439,395.814,414.886,400.091z"/>
                <path d="M363.248,403.144c-2.352,0.602-5.517-0.563-5.868-3.215c-0.324-2.477,1.677-4.728,3.79-5.667
			c0.539-0.238,0.978,0.363,0.751,0.777C365.799,395.39,367.813,401.978,363.248,403.144z"/>
                <path fill={"#A39F95"} d="M423.141,403.491c-2.963-1.652-6.043-3.108-9.166-4.431c-3.914-1.654-8.094-1.534-12.248-1.942
			c2.965-3.011,9.241,0.011,12.704-2.694c0.264-0.208,0.303-0.738,0.033-0.958c-7.736-6.369-20.943-2.36-29.391,2.319
			c-0.305-0.105-0.627-0.218-0.987-0.337c-7.232-2.374-22.92-11.162-27.263-0.669c-0.113,0.273,0.056,0.62,0.292,0.767
			c3.694,2.29,8.147,1.337,12.182,2.44c-1.818,1.169-5.683,1.234-7.347,1.498c-3.324,0.521-6.376,1.791-9.446,3.14
			c-5.343,2.343-10.547,5.774-14.59,10.019c-1.477,1.551-3.784,6.088,0.408,5.693c2.322-0.221,4.551-1.286,6.64-2.259
			c2.879-1.343,5.772-2.642,8.66-3.974c4.152-1.92,8.275-3.851,12.715-5.004c3.768-0.981,9.345-1.681,12.245,1.533
			c3.636,4.036,2.478,11.93,2.478,16.9c0,3.744,0.392,9.664,4.514,11.392c5.677,2.382,5.447-9.879,5.532-12.554
			c0.152-4.952-0.033-12.251,3.746-15.959c3.931-3.85,12.921-2.108,17.617-1.027c4.948,1.135,9.001,3.306,13.397,5.664
			c1.532,0.821,5.232,3.152,6.658,1.034C435.462,409.72,425.743,404.941,423.141,403.491z"/>
                <path d="M392.606,401.717c-1.463,2.74-4.603,4.041-7.567,2.992c-2.514-0.877-4.311-4.192-4.637-6.504
			c-1.602-11.385-1.969-23.02-1.893-34.527c0-0.489,0.425-0.664,0.789-0.577c2.438-2.387,7.316-4.364,9.895-0.962
			c2.289,3.038,2.013,7.393,2.413,10.995c0.727,6.429,1.014,12.896,1.676,19.338C393.582,395.412,394.057,398.99,392.606,401.717z"
                />
                <path fill={"#D17F3F"} d="M337.254,324.274c-0.024,3.101,0.011,6.379-1.002,9.356c-0.475,1.424-1.389,3.965-3.275,3.977
			c-2.241,0-3.916-2.576-4.631-4.44c-2.675-7.042-0.412-14.86-1.813-22.167c-0.125-0.113-0.213-0.275-0.176-0.485
			c0.862-5.693,8.018-2.278,9.307,1.45C336.991,315.815,337.279,320.22,337.254,324.274z"/>
                <path d="M347.773,310.574c-3.302,2.604-8.531,2.565-12.496,2.427c-3.141-0.111-6.255-0.424-9.384-0.086
			c-2.424,0.249-4.814,0.513-7.254,0.249c-4.966-0.538-10.383-7.579-4.38-10.068c2.666-1.701,6.63-1.476,9.571-1.365
			c4.59,0.188,8.992-0.413,13.571-0.637c3.666-0.201,8.532-0.174,11.185,2.889C350.64,306.334,350.174,308.699,347.773,310.574z"/>
                <path fill={"#FBB03B"} d="M432.962,273.785c-0.313,8.532-0.449,16.938-1.639,25.406c-1.15,8.271-2.802,16.449-4.529,24.607
			c-0.838,3.89-2.838,8.869-1.889,12.87c0.726,3.042,2.64,5.595,3.189,8.683c0.939,5.304-0.388,10.533-5.841,12.672
			c-3.529,1.378-7.143,1.3-10.833,1.901c-4.367,0.701-8.533,2.051-12.821,3.065c-4.804,1.126-9.708,2.04-14.363,3.729
			c-4.051,1.474-8.027,3.102-12.346,3.651c-9.168,1.15-17.861-3.39-26.807-4.439c-8.044-0.951-16.663,0.398-24.269-3.028
			c-5.305-2.375-10.982-6.604-11.319-12.972c-0.339-6.316,3.788-12.91,8.618-16.75c4.778-3.79,10.583-4.866,16.462-3.266
			c4.24,1.164,8.232,3.178,12.596,3.904c4.543,0.751,8.621,0,12.724-1.776c-4.929-11.159-2.64-24.207,3.514-34.352
			c3.591-5.916,6.418-11.371,5.017-18.486c-0.926-4.667-2.664-9.395-1.989-14.199c0.714-5.191,5.128-8.47,9.245-11.096
			c2.739-1.751,5.98-3.613,7.605-6.566c1.853-3.339,1.082-7.182,2.54-10.57c4.947-11.51,15.433-13.977,24.449-14.153
			c9.569-0.184,17.368,7.073,20.771,15.64C435.54,249.593,433.4,261.977,432.962,273.785z"/>
                <g>
                    <path d="M358.018,367.102c2.328-0.562,4.512-1.232,6.5-2.599c2.218-1.525,3.805-3.975,5.174-6.234
				c3.263-5.387,5.301-11.281,9.369-16.187c3.747-4.517,8.73-7.884,14.343-9.586c7.038-2.134,13.558-0.578,19.17,4.037
				c0.494,0.406,1.205-0.297,0.707-0.707c-4.608-3.79-9.707-5.823-15.729-5.182c-5.397,0.575-10.385,2.941-14.622,6.259
				c-4.797,3.758-8.027,8.872-10.693,14.263c-1.586,3.206-3.112,6.417-5.21,9.329c-2.359,3.276-5.456,4.721-9.274,5.642
				C357.125,366.288,357.391,367.253,358.018,367.102L358.018,367.102z"/>
                </g>
                <g>
                    <path d="M320.762,361.103c-7.44-7.45-3.159-19.745,6.551-22.443c4.763-1.323,9.978-0.636,14.853-0.701
				c5.404-0.073,10.451-1.915,15.591-3.385c0.619-0.178,0.355-1.143-0.266-0.965c-3.335,0.954-6.627,2.041-10.017,2.789
				c-2.979,0.657-6.036,0.594-9.066,0.546c-5.264-0.084-10.727-0.245-15.453,2.424c-7.996,4.514-9.222,16.113-2.9,22.442
				C320.511,362.268,321.218,361.56,320.762,361.103L320.762,361.103z"/>
                </g>
                <g>
                    <path d="M387.321,262.089c-2.042,5.428-4.63,10.637-6.412,16.163c-1.828,5.668-3.878,11.292-5.851,16.913
				c-1.906,5.43-2.072,11.345-2.458,17.038c-0.439,6.482-0.461,12.989-0.463,19.484c0,0.645,1,0.645,1,0
				c0.002-6.174,0.055-12.347,0.402-18.512c0.334-5.927,0.566-12.09,2.482-17.745c1.817-5.364,3.765-10.683,5.574-16.049
				c1.953-5.796,4.537-11.31,6.689-17.027C388.514,261.75,387.547,261.491,387.321,262.089L387.321,262.089z"/>
                </g>
                <path fill={"#D17F3F"} d="M422.742,252.62c-0.802,5.028-2.84,10.494-6.117,14.448c-4.478,5.392-8.965,0.568-15.493,0.727
			c-4.677,0.111-14.555,4.303-17.369-1.728c-1.739-3.727,1.389-9.594,3.014-12.832c1.951-3.892,4.729-6.418,8.671-7.183
			c0.063-0.049,0.149-0.099,0.248-0.137c3.142-1.075,5.567,0.713,8.495,1.65c4.016,1.291,6.718-1.013,10.445-1.913
			C419.553,244.461,423.567,247.377,422.742,252.62z"/>
                <path d="M404.19,247.565c-0.897-0.287-1.744-0.649-2.581-0.99c-4.669,3.041-7.503,7.858-8.959,13.244
			c-0.815,2.755-1.153,6.765,0.353,9.27c3.02-0.411,6.075-1.245,8.128-1.294c4.367-0.107,7.816,2.006,10.965,1.81
			c-0.368-0.558-3.496-2.046-0.213-14.946c0.729-2.859,2.293-7.191,3.371-9.125c-0.206,0.036-0.41,0.068-0.619,0.119
			C410.908,246.553,408.206,248.856,404.19,247.565z"/>
                <g>
                    <path d="M428.895,246.217c-0.047,7.667-6.762,11.33-10.518,17.159c-3.987,6.188-2.133,13.665-0.784,20.31
				c0.95,4.685,1.289,9.461,0.221,14.152c-0.446,1.961-1.081,3.881-1.535,5.843c-0.59,2.552-0.993,4.941-2.068,7.36
				c-1.567,3.53-3.465,6.663-4.502,10.421c-0.522,1.889-0.97,3.848-1.295,5.778c-0.242,1.445,0.434,3.917-0.244,5.192
				c-0.303,0.568,0.561,1.074,0.863,0.504c0.492-0.925,0.225-2.119,0.227-3.132c0.006-2.2,0.522-4.287,1.004-6.42
				c1.032-4.573,3.273-8.376,5.152-12.606c1.641-3.693,2.045-7.947,3.129-11.834c1.087-3.898,1.165-7.952,0.605-11.948
				c-1.244-8.882-4.656-17.597,1.77-25.396c4.013-4.87,8.935-8.52,8.977-15.385C429.899,245.572,428.899,245.572,428.895,246.217
				L428.895,246.217z"/>
                </g>
                <path fill={"#D17F3F"} d="M422.767,339.722c-0.127,3.777-0.162,7.531-0.162,11.32c0,2.515,0.138,5.13-0.737,7.531
			c-1.189,3.278-4.781,6.604-8.396,5.03c-3.765-1.639-3.353-6.781-2.927-10.059c0.814-6.242,1.763-12.509,1.94-18.813
			c0.211-7.732-0.903-15.461-0.564-23.182c0.013-0.238,0.138-0.387,0.301-0.476c0.787-2.589,4.102-4.4,6.756-3.327
			c3.84,1.552,3.941,5.566,3.875,9.195C422.705,324.536,423.019,332.128,422.767,339.722z"/>
                <path d="M432.915,304.148c-0.967-2.839-1.8-3.594-7.428-4.874c-3.31-0.753-11.742,0.075-15.048,0.509
			c-3.579,0.465-7.513,1.457-10.246,3.943c-1.692,1.54-2.408,4.372-0.991,6.322c1.679,2.311,4.866,2.773,7.513,3.023
			c3.809,0.36,7.699-0.041,11.483-0.488c3.362-0.397,6.966-0.652,10.158-1.791C431.366,309.723,434.041,307.464,432.915,304.148z"/>
                <g>
                    <path d="M357.757,334.574c3.975-1.453,8.751-2.885,13.025-2.033c5.394,1.073,11.048,1.948,16.552,2.051
				c0.645,0.012,0.644-0.988,0-1c-5.799-0.108-11.39-1.559-17.118-2.153c-4.298-0.445-8.726,0.709-12.725,2.171
				C356.891,333.829,357.149,334.796,357.757,334.574L357.757,334.574z"/>
                </g>
            </g>
            <g>
                <path fill={"#D9D3C7"} d="M198.421,418.743c-0.903,4.821,0.002,7.681,6.479,12.052c6.478,4.369,23.352,7.73,26.213,1.079
			C227.196,429.139,198.421,418.743,198.421,418.743z"/>
                <path fill={"#D9D3C7"} d="M261.629,366.49c-1.338,3.762-3.568,7.137-4.93,10.884c-3.156,8.738-7.231,17.248-9.641,26.237
			c-1.784,6.629-2.386,13.752-5.303,20.033c-2.374,5.108-6.183,8.001-11.69,9.266c-3.098,0.71-6.786,1.119-9.943,0.157
			c-6.183-0.676-12.101-3.798-17.403-7.449c-2.29-1.145-4.495-2.544-6.062-4.495c-2.255-2.808-2.988-6.183-2.001-9.702
			c1.675-5.954,3.905-11.604,5.183-17.692c1.289-6.084,3.073-11.894,5.146-17.739c1.676-4.701,3.363-9.402,4.267-14.321
			c1.048-5.807,1.76-14.603,7.833-17.52c-0.433-2.494,0.52-4.52,2.314-5.665c0.061-0.122,0.121-0.243,0.206-0.339
			c4.363-3.471,10.798-2.578,15.873-1.507c3.048,0.639,6.326,1.302,9.195,2.556c3.688,1.592,6.93,3.941,10.391,5.941
			c2.252,1.313,5.326,2.688,6.615,5.111c0.482,0.939,0.916,1.963,0.893,3.049c-0.037,1.578-1.496,3.289-0.508,4.735
			C263.629,360.298,262.473,364.105,261.629,366.49z"/>
                <path fill={"#D17F3F"} d="M230.109,365.162c-9.793-3.125-17.538-9.725-18.299-14.775c-1.461,3.627-1.958,7.947-2.56,11.281
			c-0.904,4.919-2.591,9.62-4.267,14.321c-2.072,5.845-3.857,11.655-5.146,17.739c-0.812,3.866-2.007,7.557-3.201,11.263
			c2.217,5.837,7.754,12.364,17.155,15.426c8.592,2.8,20.748,3.651,28.06,2.992c2.825-6.223,3.444-13.249,5.206-19.798
			c2.41-8.989,6.485-17.499,9.641-26.237c0.857-2.358,2.059-4.569,3.164-6.822C253.711,371.992,236.584,367.229,230.109,365.162z"/>
                <path fill={"#FBB03B"} d="M236.801,374.452c-2.973,1.787-22.761,12.052-23.967,13.257c-1.205,1.205-2.812,3.818,1.004,4.418
			c3.816,0.605,11.776,1.683,11.323,2.512c-0.904,1.654-11.085,12.185-13.714,14.076c-2.63,1.894-1.231,2.68,4.698,0.58
			c5.93-2.102,17.085-12.61,19.744-14.586c2.658-1.977,4.962-4.953,1.1-5.415c-2.562-0.306-12.38-0.983-12.38-0.983
			c4.697-3.413,15.222-12.452,15.222-12.452S241.589,371.571,236.801,374.452z"/>
                <g>
                    <path d="M219.867,340.454c0.007,2.975,3.635,6.048,5.871,7.564c4.086,2.77,8.615,4.341,13.348,5.624
				c4.251,1.152,8.657,2.323,13.025,2.9c3.104,0.41,6.742,0.459,9.184-1.772c0.477-0.435-0.232-1.142-0.707-0.707
				c-2.598,2.374-6.908,1.772-10.091,1.234c-3.445-0.58-6.896-1.534-10.282-2.394c-3.747-0.951-7.42-2.104-10.874-3.862
				c-1.804-0.918-3.443-2.086-4.952-3.43c-1.343-1.195-3.518-3.255-3.522-5.157C220.866,339.81,219.866,339.81,219.867,340.454
				L219.867,340.454z"/>
                </g>
                <g>
                    <path d="M221.623,343.397c2.875-1.904,6.151-1.577,9.43-1.438c3.345,0.142,6.35,1.122,9.468,2.249
				c2.872,1.038,5.697,2.204,8.542,3.311c3.067,1.193,6.472,1.983,8.233,5.04c0.32,0.559,1.185,0.056,0.863-0.504
				c-1.316-2.283-3.412-3.434-5.807-4.377c-3.555-1.399-7.133-2.768-10.707-4.117c-3.488-1.317-6.857-2.38-10.593-2.602
				c-3.455-0.205-6.939-0.409-9.935,1.575C220.584,342.889,221.084,343.755,221.623,343.397L221.623,343.397z"/>
                </g>
                <g>
                    <path d="M216.352,343.367c0.264,2.97,2.287,4.471,4.717,6.041c3.785,2.445,7.818,4.902,11.915,6.779
				c7.576,3.47,17.437,5.616,25.68,3.734c0.629-0.144,0.361-1.108-0.266-0.965c-7.367,1.682-15.668-0.116-22.637-2.696
				c-3.465-1.282-6.517-3.146-9.632-5.088c-3.007-1.873-8.412-3.689-8.777-7.806C217.295,342.73,216.295,342.725,216.352,343.367
				L216.352,343.367z"/>
                </g>
                <g>
                    <path d="M240.892,353.097c-1.742-1.047-8.431-6.311-5.369-8.469c2.701-1.905,6.794,0.335,9.118,1.799
				c2.193,1.382,7.209,4.197,6.635,7.254c-0.119,0.63,0.846,0.899,0.965,0.266c0.652-3.479-2.694-5.148-5.106-6.98
				c-3.239-2.46-7.413-4.972-11.587-3.46c-5.556,2.013,2.701,9.168,4.84,10.454C240.941,354.293,241.444,353.429,240.892,353.097
				L240.892,353.097z"/>
                </g>
                <g>
                    <path d="M239.4,348.761c-0.774-0.394-2.235-1.294-1.265-2.261c0.592-0.591,1.835-0.407,2.553-0.244
				c0.76,0.172,1.905,0.788,1.66,1.734c-0.163,0.63-1.251,0.756-1.751,0.765c-0.721,0.013-1.463-0.29-2.1-0.596
				c-0.579-0.277-1.086,0.585-0.505,0.863c1.412,0.677,4.094,1.383,5.123-0.354c0.821-1.387-0.405-2.734-1.668-3.228
				c-1.27-0.496-3.112-0.551-4.137,0.472c-1.433,1.429,0.334,3.076,1.585,3.713C239.469,349.916,239.975,349.053,239.4,348.761
				L239.4,348.761z"/>
                </g>
                <g>
                    <path d="M244.824,353.78c-0.458-0.281-0.915-0.557-1.322-0.909c-0.617-0.533-0.473-0.966,0.209-1.305
				c0.98-0.487,2.366-0.717,3.447-0.525c0.895,0.159,1.48,0.861,1.299,1.772c-0.197,0.987-1.136,1.508-2.077,1.505
				c-0.645-0.002-0.645,0.998,0,1c1.427,0.005,2.669-0.834,3.04-2.239c0.365-1.378-0.528-2.558-1.811-2.956
				c-1.445-0.449-3.796-0.005-4.976,0.928c-1.713,1.355,0.591,2.921,1.685,3.594C244.87,354.982,245.372,354.117,244.824,353.78
				L244.824,353.78z"/>
                </g>
                <g>
                    <path d="M196.863,421.958c3.903,3.596,8.755,6.125,13.638,8.131c6.146,2.523,12.067,3.569,18.654,3.918
				c0.645,0.034,0.642-0.966,0-1c-11.178-0.592-23.133-3.972-31.585-11.756C197.097,420.815,196.388,421.521,196.863,421.958
				L196.863,421.958z"/>
                </g>
            </g>
            <g>
                <path fill={"#FBB03B"} d="M146.13,317.548c-5.001-1.806-11.047-0.096-15.225,3.213c-0.047-1.063-0.296-2.133-0.142-3.184
			c0.787-5.365,1.964-12.82-1.665-13.303c-9.496-1.266-17.896-0.643-27.454-1.34c-4.083-0.299-11.602,0.098-15.701,0.004
			c-2.009-0.049-12.897,0.602-15.731,1.852c-2.896,1.265-2.944,5.602-2.991,8.213c-0.064,3.212,0.538,6.41,1.107,9.59
			c-5.001-3.497-11.126-5.03-16.997-2.358c-7.534,3.402-9.005,12.597-6.726,19.687c2.199,6.821,7.628,11.506,14.275,13.689
			c4.162,1.379,11.391,2.301,14.271,1.341c1.314,3.847,2.678,5.861,5.574,8.946c4.447,4.701,7.467,7.137,18.623,7.981
			c0.792,2.437,1.767,8.136,1.271,11.751c-0.17,1.236-3.519,1.251-4.69,1.6c-4.083,1.186-5.698,3.466-3.94,7.2
			c-5.825,6.3-10.572,12.028-10.303,21.128c0.016,0.473,0.378,0.623,0.792,0.792c5.927,2.403,16.021,3.188,23.523,2.886
			c12.035-0.482,13.91,0.028,23.417-2.886c0.379-0.116,0.838-0.351,0.791-0.792c-0.76-7.295-4.004-16.174-10.176-20.701
			c2.137-2.611,1.187-5.143-1.836-7.01c-1.947-1.205-4.336-1.807-6.584-2.201c-0.854-0.141-1.709-0.205-2.579-0.19
			c-0.507,0,0.21-5.961,0.226-6.753c0.063-2.17-0.022-4.035,0.14-4.67c2.927-0.092,6.301-0.725,8.486-1.027
			c3.369-0.442,6.33-1.758,8.499-4.416c2.152-2.643,3.449-5.982,4.335-9.511c5.966,1.233,12.328,0.585,17.504-2.818
			c6.393-4.21,8.182-13.073,8.372-20.177C154.77,327.375,153.029,320.03,146.13,317.548z M52.74,332.914
			c1.376-8.927,12.644-7.155,16.696-1.439c0.269,3.542,0.46,7.103,0.807,10.649c0.158,1.52,0.689,4.671,0.958,6.174
			C61.611,349.628,51.237,342.536,52.74,332.914z M130.572,345.939c0.745-5.746,0.823-11.568,0.665-17.377
			c3.878-3.435,9.812-6.76,13.437-1.742c2.452,3.389,1.535,8.563,0.411,12.25c-1.281,4.177-3.782,8.294-7.28,10.968
			c-1.883,1.456-4.177,2.056-6.536,1.742c-0.237-0.032-0.792-0.176-1.424-0.366C130.13,349.532,130.352,347.662,130.572,345.939z"/>
                <path fill={"#FBCD85"} d="M118.697,332.575c-1.414-3.002-7.74-1.814-12.312-2.444c-0.229-3.609-2.807-11.268-5.363-11.268
			c-2.887,0-5.128,7.699-5.547,11.655c-3.492-0.228-12.383,0.046-12.336,2.662c0.055,3.097,7.23,5.754,8.774,6.277
			c-1.269,3.097-2.427,12.147-0.251,12.592c3.764,0.762,7.615-4.412,9.767-7.209c2.572,1.522,9.889,7.69,11.458,6.056
			c1.653-1.724-0.323-8.239-2.242-11.516C113.716,338.91,119.438,334.147,118.697,332.575z"/>
                <path d="M105.313,384.149c-1.644-0.535-3.58-0.52-5.296-0.518c-0.928,0-0.984,1.426-0.05,1.44c1.696,0.028,3.463,0.45,5.147,0.298
			C105.787,385.308,106.032,384.386,105.313,384.149z"/>
                <path d="M112.28,392.019c-6.387-0.773-13.853-1.403-20.142,0.227c-0.794,0.207-0.517,1.344,0.277,1.228
			c6.701-0.988,13.328,0.466,19.983-0.185C113.172,393.212,112.951,392.101,112.28,392.019z"/>
                <g>
                    <path d="M72.364,305.485c-1.297,0.367-2.126,1.192-1.304,2.517c0.908,1.464,3.749,1.214,5.158,1.167
				c3.965-0.13,7.979,0.321,11.949,0.412c4.538,0.104,9.076,0.206,13.614,0.294c1.323,0.025,28.648,1.317,27.558-3.314
				c-0.148-0.628-1.112-0.361-0.964,0.266c0.546,2.319-22.191,2.109-22.699,2.105c-6.165-0.058-12.332-0.231-18.495-0.373
				c-3.285-0.075-6.567-0.258-9.848-0.43c-0.699-0.037-1.42,0.054-2.12,0.064c-0.362,0.002-0.724-0.009-1.085-0.033
				c-0.308-0.04-0.615-0.08-0.922-0.12c-0.786-0.036-0.978-0.565-0.577-1.589C73.249,306.274,72.985,305.31,72.364,305.485
				L72.364,305.485z"/>
                </g>
                <g>
                    <path d="M83.855,369.171c6.662,3.115,13.206,3.073,20.388,3.302c6.89,0.221,14.148-0.576,19.906-4.754
				c0.517-0.375,0.018-1.243-0.505-0.863c-5.339,3.874-12.077,4.793-18.491,4.645c-7.229-0.168-14.086-0.056-20.794-3.192
				C83.779,368.036,83.271,368.898,83.855,369.171L83.855,369.171z"/>
                </g>
            </g>
            <g>
                <path fill={"#D17F3F"} d="M77.234,193.783c-3.09,1.142-6.644,1.546-9.888,2.01c-1.252,0.168-2.349-0.017-3.354-0.495
			c-0.324,0.356-0.911,0.433-1.143-0.125c-0.108-0.248-0.232-0.524-0.339-0.834c-0.077-0.061-0.155-0.107-0.216-0.167
			c-0.294-0.266-0.294-0.591-0.155-0.853c-0.742-2.193-1.328-5.113,0.093-6.535c1.684-1.686,4.712-1.359,6.907-1.702
			c2.163-0.323,5.591-1.574,7.104,0.151c1.008,1.146,1.255,4.904,1.472,7.127c0,0.125-0.015,0.219-0.046,0.31
			C77.854,193.058,77.76,193.599,77.234,193.783z"/>
                <path fill={"#D17F3F"} d="M133.674,187.762c-1.407,1.174-3.117,2.747-4.878,2.978c-2.472,0.34-4.853,0.896-7.339,0.957
			c-0.17,0-0.293-0.061-0.417-0.121c-0.232,0.014-0.479-0.094-0.633-0.373c-1.375-2.395-3.312-9.497,0.335-10.904
			c1.931-0.742,3.91-0.401,5.887-0.788c1.531-0.293,3.446-0.85,4.945-0.199C133.922,180.33,135.96,185.814,133.674,187.762z"/>
                <path fill={"#D9D3C7"} d="M160.858,249.268c-3.539,2.814-8.157,0.944-11.634-1.08c-4.853-2.827-8.823-6.707-13.428-9.827
			c-7.524-5.082-15.158-11.063-23.61-14.586c-1.267-0.17-2.549-0.278-3.832-0.308c-8.776,0.54-16.301,3.413-20.519,11.991
			c-3.245,6.611-4.368,19.658-10.271,24.556c-4.806,3.986-10.956,2.056-13.922-2.95c-4.125-6.969-6.897-18.688-8.009-26.738
			c-0.712-5.156-1.384-10.397-1.272-15.61c0.114-5.243,0.474-11.469,3.033-16.166c3.817-7.007,12.352-10.259,20.026-9.37
			c5.731,0.664,10.862,3.723,16.271,5.485c2.953,0.962,6.024,1.54,9.125,1.693c6.516,0.322,9.288-6.386,14.556-8.92
			c6.367-3.076,14.879-3.186,21.261-0.018c7.57,3.756,12.011,12.063,14.807,19.822c2.889,8.018,5.92,16.177,8.375,24.351
			C163.266,236.46,165.803,245.36,160.858,249.268z"/>
                <path d="M78.988,205.604c-0.495,1.778-3.724,2.254-5.238,1.946c-1.467-0.285-2.263-1.785-2.611-3.116
			c-0.295-1.126-0.868-2.602-0.282-3.721c0.683-1.304,2.831-1.54,4.129-1.661c0.927-0.076,2.226,0.109,2.796,0.974
			c0.541,0.833,0.666,1.977,0.943,2.921C78.988,203.811,79.235,204.708,78.988,205.604z"/>
                <path d="M69.888,215.092c-2.04,0.71-5.085,0.958-5.98-1.53c-0.449-1.235-0.727-2.688-0.31-3.956
			c0.386-1.188,1.576-1.297,2.595-1.577c1.342-0.366,3.142-1.066,4.448-0.242c1.276,0.806,1.471,2.762,1.471,4.094
			C72.112,213.456,71.442,214.548,69.888,215.092z"/>
                <path d="M80.128,220.684c-2.442,0.45-4.96,1.113-5.933-1.839c-0.326-0.976-0.726-2.236-0.477-3.27
			c0.393-1.625,3.048-1.89,4.375-2.067c1.683-0.227,3.629,0.063,4.414,1.785C83.635,217.766,82.924,220.173,80.128,220.684z"/>
                <path d="M89.25,209.415c0.123,2.52-1.961,3.478-4.203,3.588c-2.38,0.105-4.868-1.145-4.822-3.911
			c0.03-1.781,1.253-2.863,2.929-3.181c1.293-0.244,4.053-0.615,5.076,0.477C88.91,207.115,89.204,208.458,89.25,209.415z"/>
                <path fill={"#A39F95"} d="M129.873,209.6c-2.334,1.986-5.881,0.417-7.073-2.003c-0.63-1.275-0.611-2.722,0.166-3.945
			c1.343-2.119,4.435-2.086,6.273-0.742C131.31,204.424,131.943,207.837,129.873,209.6z"/>
                <path fill={"#A39F95"} d="M137.993,198.589c-0.567,1.419-2.106,2.131-3.534,2.24c-1.808,0.139-3.062-0.525-4.03-2.086
			c-0.646-1.035-0.795-2.27-0.331-3.414c0.787-1.947,2.873-3.322,4.991-2.428C137.237,193.815,138.952,196.194,137.993,198.589z"/>
                <path fill={"#A39F95"} d="M144.495,209.501c-1.762,0.383-3.964-0.508-4.891-2.037c-1.121-1.854-0.014-4.355,2.078-4.977
			c2.24-0.666,4.728,0.461,5.394,2.811C147.601,207.186,146.441,209.085,144.495,209.501z"/>
                <path fill={"#A39F95"} d="M142.304,215.316c-1.147,2.149-3.529,2.774-5.642,1.756c-1.945-0.938-3.67-3.276-2.423-5.495
			c0.973-1.731,3.137-2.72,5.053-2.025C141.547,210.372,143.619,212.86,142.304,215.316z"/>
                <path d="M158.053,243.356c-7.63-0.259-13.4-4.95-19.214-9.36c-6.404-4.855-12.207-11.227-19.365-14.952
			c-10.293-5.361-25.478-0.646-32.103,8.566c-0.582,0.811,0.758,1.58,1.334,0.779c3.816-5.307,10.066-7.966,16.234-9.469
			c8.895-2.169,15.529,2.003,22.076,7.482c5.131,4.295,10.332,8.496,15.73,12.452c4.595,3.371,9.529,5.852,15.308,6.044
			C159.049,244.933,159.047,243.39,158.053,243.356z"/>
                <path fill={"#D17F3F"} d="M103.162,210.394c-0.541,1.065-1.993,1.098-3.028,1.098c-1.004,0-2.411,0.155-3.028-0.85
			c-0.748-1.217-0.705-3.419,0.748-4.059c1.291-0.568,3.003-0.25,4.381-0.316c0.309-0.015,0.695,0.248,0.742,0.572
			C103.146,207.906,103.688,209.357,103.162,210.394z"/>
                <path fill={"#D17F3F"} d="M113.159,209.638c-0.788,0.479-1.73,0.492-2.626,0.586c-0.974,0.077-1.933,0.139-2.906-0.014
			c-0.263-0.049-0.464-0.31-0.54-0.543c-0.302-0.908-0.803-2.677-0.307-3.564c0.38-0.679,1.389-0.716,2.068-0.792
			c1.251-0.144,2.557-0.283,3.816-0.295c0.371,0,0.618,0.248,0.741,0.57C113.885,206.808,114.612,208.74,113.159,209.638z"/>
                <g>
                    <path d="M123.838,203.194c-0.788,1.104-0.441,2.561,0.147,3.677c0.729,1.382,2.533,2.163,4.018,2.23c0.645,0.029,0.642-0.971,0-1
				c-1.157-0.052-2.147-0.593-2.933-1.424c-0.683-0.723-0.954-2.157-0.369-2.978C125.077,203.172,124.209,202.674,123.838,203.194
				L123.838,203.194z"/>
                </g>
                <g>
                    <path d="M134.604,211.565c0.503,2.718,2.512,5.186,5.508,4.339c0.62-0.175,0.356-1.14-0.266-0.964
				c-2.473,0.698-3.881-1.492-4.278-3.641C135.451,210.666,134.487,210.935,134.604,211.565L134.604,211.565z"/>
                </g>
                <g>
                    <path d="M140.38,204.093c-0.201,2.447,2.457,4.152,4.619,4.363c0.642,0.063,0.636-0.938,0-1c-1.655-0.162-3.772-1.5-3.619-3.363
				C141.433,203.45,140.433,203.455,140.38,204.093L140.38,204.093z"/>
                </g>
                <g>
                    <path d="M131.177,194.442c-1.13,2.083,1.023,5.337,3.393,5.129c0.637-0.056,0.643-1.056,0-1c-1.577,0.138-3.32-2.168-2.53-3.625
				C132.348,194.38,131.485,193.875,131.177,194.442L131.177,194.442z"/>
                </g>
            </g>
            <g>
                <path fill={"#A39F95"} d="M314.036,153.249c-2.681-3.753-4.16-5.33-9.262-3.041c-5.101,2.29-4.376,5.883-2.357,9.636
			c2.018,3.753,3.138,7.689,9.517,5.703C318.31,163.56,319.638,161.095,314.036,153.249z"/>
                <path fill={"#FBB03B"} d="M356.685,163.774c-3.869-2.959-6.746-3.315-4.005-10.13c2.74-6.815,6.992-11.694,10.416-18.133
			c3.424-6.439,4.455-13.612,11.658-16.371c7.203-2.761,12.439-0.217,18.355,2.705c5.917,2.92,11.491,3.9,6.457,15.104
			C394.53,148.155,385.783,176.421,356.685,163.774z"/>
                <path fill={"#A39F95"} d="M340.432,160.989c-5.39,1.087-8.717,2.819-10.649-6.766c-1.931-9.584-6.754-30.427-6.68-45.213
			c0.075-14.786,5.201-32.648,14.603-44.138c9.4-11.492,21.621-12.708,36.845-8.297c15.225,4.411,25.538,9.19,26.78,24.334
			c1.243,15.143,0.546,28.685-1.576,36.404c-2.124,7.719-4.325,11.34-2.451,13.518c1.873,2.179,8.99,2.083,3.254,12.276
			c-5.737,10.195-9.767,23.125-24.684,24.887c-8.521,1.006-16.97,4.026-20.506-5.17c2.104-4.413,6.237-9.343,9.654-16.513
			c3.416-7.17,6.5-11.655,9.755-15.926c3.254-4.27,8.476-5.571,12.075-18.95c3.598-13.376,2.842-23.01-3.194-37.187
			c-6.035-14.178-11.977-13.356-11.977-13.356s-14.045-1.344-24.355,11.203c-10.311,12.548-15.101,30.842-7.61,41.11
			C347.029,132.797,358.093,159.86,340.432,160.989z"/>
                <path fill={"#FBB03B"} d="M329.707,119.366c1.404-6.64,5.547-9.437,12.978-8.13c7.43,1.307,15.942,4.89,18.905,15.573
			c2.963,10.684,1.582,25.017-3.35,28.69c-4.932,3.674-12.388,5.723-17.586,6.053c-2.947,0.221-3.77-1.502-7.132-13.193
			c-1.203-4.195-1.067-7.489-2.626-18.139C330.432,127.039,330.28,125.764,329.707,119.366z"/>
                <g>
                    <path d="M354.704,124.393c-2.575-2.225-5.714-3.202-8.886-1.564c-3.308,1.707-2.23,5.961-1.615,8.782
				c1.012,4.648,0.448,9.3,2.542,13.678c1.361,2.847,3.454,3.423,6.489,3.18c0.639-0.051,0.643-1.051,0-1
				c-2.393,0.191-4.162-0.004-5.401-2.241c-1.629-2.942-1.795-6.046-1.953-9.326c-0.155-3.209-1.799-6.518-1.306-9.711
				c0.744-4.822,6.975-3.206,9.423-1.091C354.482,125.519,355.193,124.815,354.704,124.393L354.704,124.393z"/>
                </g>
                <g>
                    <path d="M335.269,111.28c-7.294,3.791-2.9,13.516-0.983,19.257c1.183,3.542,2.143,7.151,2.396,10.889
				c0.196,2.911,0.147,5.753,0.838,8.606c0.847,3.492,2.103,7.579,5.819,8.893c0.609,0.216,0.869-0.751,0.266-0.964
				c-4.072-1.44-5.218-7.401-5.661-11.178c-0.277-2.367-0.178-4.77-0.409-7.144c-0.25-2.563-0.97-5.085-1.707-7.543
				c-1.683-5.611-7.326-16.173-0.055-19.954C336.345,111.846,335.84,110.983,335.269,111.28L335.269,111.28z"/>
                </g>
                <g>
                    <path d="M381.688,120.419c-7.955,0.769-12.16,8.247-15.611,14.591c-1.26,2.317-2.341,4.716-3.709,6.976
				c-1.365,2.255-2.925,4.39-4.349,6.608c-2.446,3.814-3.938,8.149-3.2,12.707c0.104,0.635,1.066,0.365,0.965-0.266
				c-0.756-4.669,1.108-8.834,3.57-12.671c2.397-3.735,4.782-7.32,6.783-11.293c3.221-6.399,7.568-14.88,15.551-15.652
				C382.324,121.358,382.33,120.357,381.688,120.419L381.688,120.419z"/>
                </g>
                <g>
                    <path d="M364.533,131.547c-1.819,2.526-3.183,5.292-4.532,8.088c-1.511,3.128-3.538,5.806-5.277,8.788
				c-1.862,3.192-4.83,8.975-2.43,12.583c0.355,0.534,1.222,0.034,0.863-0.505c-1.286-1.934-0.509-4.572,0.137-6.612
				c0.902-2.851,2.453-5.356,4.148-7.799c3.085-4.445,4.788-9.643,7.954-14.039C365.774,131.528,364.906,131.029,364.533,131.547
				L364.533,131.547z"/>
                </g>
                <g>
                    <path d="M345.413,124.594c4.455-1.17,7.363,5.351,8.454,8.68c0.507,1.549,2.958,14.689-0.5,14.213
				c-0.63-0.087-0.902,0.876-0.266,0.964c2.034,0.281,2.8-0.988,3.006-2.876c0.382-3.493-0.194-7.528-0.865-10.958
				c-0.837-4.278-4.534-12.446-10.095-10.986C344.524,123.794,344.789,124.758,345.413,124.594L345.413,124.594z"/>
                </g>
                <g>
                    <path d="M388.84,103.711c1.983-0.156,4.045,0.543,5.993,0.836c2.119,0.319,4.195,0.845,6.328,1.075c0.641,0.069,0.634-0.932,0-1
				c-3.978-0.429-8.318-2.225-12.321-1.911C388.201,102.762,388.196,103.762,388.84,103.711L388.84,103.711z"/>
                </g>
                <g>
                    <path d="M324.768,93.131c1.261,0.653,2.565,0.821,3.968,0.912c2.475,0.159,4.859,0.662,7.309,1.003
				c0.63,0.088,0.902-0.875,0.266-0.964c-1.813-0.253-3.603-0.638-5.417-0.883c-1.906-0.257-3.853-0.017-5.621-0.932
				C324.7,91.972,324.194,92.835,324.768,93.131L324.768,93.131z"/>
                </g>
                <g>
                    <path d="M334.144,75.377c-3.956,6.047-6.284,12.734-7.83,19.792c-1.674,7.644,1.345,15.022,2.753,22.461
				c0.761,4.013,0.512,8.12,1.092,12.15c0.608,4.225,1.846,8.238,2.057,12.526c0.322,6.584,1.839,14.084,5.972,19.386
				c0.397,0.508,1.099-0.205,0.707-0.707c-4.648-5.964-5.257-14.025-5.841-21.251c-0.302-3.724-1.588-7.297-2.02-11.013
				c-0.403-3.466-0.359-6.96-0.842-10.421c-1.083-7.763-4.442-14.906-2.913-22.866c1.328-6.917,3.887-13.68,7.729-19.553
				C335.361,75.34,334.495,74.839,334.144,75.377L334.144,75.377z"/>
                </g>
                <g>
                    <path d="M323.244,124.128c1.323-0.038,2.628-0.245,3.941-0.389c0.634-0.069,0.641-1.07,0-1c-1.313,0.143-2.618,0.35-3.941,0.389
				C322.601,123.147,322.599,124.147,323.244,124.128L323.244,124.128z"/>
                </g>
                <g>
                    <path d="M324.28,127.045c1.058-0.337,2.188-0.25,3.27-0.472c0.632-0.129,0.363-1.093-0.266-0.964
				c-1.085,0.222-2.207,0.133-3.271,0.472C323.402,126.276,323.664,127.242,324.28,127.045L324.28,127.045z"/>
                </g>
                <g>
                    <path d="M324.918,130.273c1.393,0.13,2.729-0.251,4.087-0.504c0.634-0.118,0.364-1.081-0.266-0.964
				c-1.273,0.237-2.514,0.589-3.821,0.468C324.275,129.213,324.281,130.214,324.918,130.273L324.918,130.273z"/>
                </g>
                <g>
                    <path d="M377.895,133.469c1.244,0.913,2.649,1.62,3.736,2.733c0.451,0.462,1.158-0.246,0.707-0.707
				c-1.148-1.175-2.625-1.926-3.94-2.889C377.879,132.224,377.381,133.092,377.895,133.469L377.895,133.469z"/>
                </g>
                <g>
                    <path d="M375.629,135.947c1.345,1.465,2.894,2.715,4.368,4.044c0.477,0.431,1.186-0.274,0.707-0.707
				c-1.475-1.329-3.023-2.579-4.368-4.044C375.899,134.764,375.193,135.473,375.629,135.947L375.629,135.947z"/>
                </g>
                <g>
                    <path d="M374.544,139.22c0.601,0.49,1.026,1.143,1.551,1.708c0.598,0.643,1.244,1.233,1.797,1.918
				c0.404,0.502,1.107-0.21,0.707-0.707c-0.504-0.624-1.08-1.178-1.633-1.758c-0.58-0.61-1.06-1.333-1.715-1.867
				C374.756,138.109,374.044,138.813,374.544,139.22L374.544,139.22z"/>
                </g>
                <g>
                    <path d="M390.416,84.326c1.534,7.722,1.445,15.861-0.321,23.548c-0.818,3.561-2.012,6.82-2.198,10.503
				c-0.197,3.903-1.696,7.753-2.844,11.45c-1.188,3.832-3.481,7.105-5.63,10.445c-2.125,3.304-4.061,6.717-6.249,9.985
				c-2.309,3.448-4.814,6.745-7.281,10.079c-1.515,2.048-3.983,3.912-4.258,6.592c-0.065,0.642,0.935,0.635,1,0
				c0.198-1.937,1.919-3.3,3.094-4.694c1.203-1.427,2.244-3.033,3.362-4.529c2.435-3.257,4.752-6.585,6.959-10.001
				c3.929-6.082,8.275-12.235,10.457-19.18c1.047-3.332,2.06-6.658,2.39-10.147c0.395-4.166,1.75-7.92,2.535-12.003
				c1.415-7.363,1.407-14.97-0.051-22.313C391.255,83.428,390.291,83.697,390.416,84.326L390.416,84.326z"/>
                </g>
                <g>
                    <path d="M350.239,59.713c2.684-1.145,5.105-1.882,8.061-1.781c2.829,0.097,5.75,0.591,8.483,1.307
				c4.557,1.194,9.813,4.123,12.732,7.883c0.396,0.509,1.098-0.204,0.707-0.707c-3.275-4.217-8.897-7.021-13.968-8.349
				c-2.829-0.741-5.943-1.066-8.855-1.166c-2.717-0.093-5.213,0.903-7.664,1.949C349.144,59.103,349.653,59.963,350.239,59.713
				L350.239,59.713z"/>
                </g>
                <g>
                    <path d="M363.876,55.21c8.216,1.119,16.347,5.238,20.806,12.459c0.338,0.547,1.203,0.045,0.863-0.505
				c-4.588-7.43-12.932-11.766-21.403-12.918C363.512,54.16,363.239,55.124,363.876,55.21L363.876,55.21z"/>
                </g>
                <g>
                    <path d="M307.453,164.216c-0.264-1.365,1.63-2.454,2.603-3.018c1.572-0.913,3.295-1.073,5.068-0.889c0.642,0.066,0.635-0.935,0-1
				c-2.245-0.232-4.249,0.187-6.164,1.382c-1.304,0.814-2.797,2.102-2.472,3.792C306.61,165.115,307.574,164.846,307.453,164.216
				L307.453,164.216z"/>
                </g>
                <path d="M311.195,164.433c4.159,5.332,18.298,13.795,29.388,13.851c11.09,0.057,14.427-3.327,19.528-5.617
			c5.102-2.29,5.478-2.975,8.48-2.458c3.001,0.518,5.37-2.11,5.528-4.571c0.158-2.464-5.127-3.409-9.166-0.257
			c-4.04,3.151-7.612,6.067-15.158,8.055c-7.546,1.988-17.414,1.498-25.147-2.084c-7.733-3.583-6.944-4.07-10.364-8.289
			C312.106,161.771,310.348,163.014,311.195,164.433z"/>
            </g>
            <g>
                <g>
                    <path fill={"#D17F3F"} d="M212.658,254.114c-0.226-5.073-0.573-9.827-1.514-14.767c-0.864-4.537-1.848-10.41,0.101-14.771
				c1.543-3.454,3.178-3.014,6.397-3.291c5.513-0.473,10.886-1.817,16.448-2.006c14.422-0.49,29.063-0.969,43.48-3.037
				c4.341-0.623,18.314-4.252,21.948,0.176c2.584,3.147,2.037,11.635,2.662,15.65c0.98,6.297,1.735,12.787,2.784,19.081
				c0.514,3.081,2.26,8.654-0.103,11.27c-1.761,1.948-5.149,1.534-7.513,2.134c-17.865,4.527-36.755,3.84-55.03,7.001
				c-6.84,1.183-21.145,6.526-26.809,0.181C211.939,267.732,212.887,259.254,212.658,254.114z"/>
                    <path fill={"#FBB03B"} d="M223.017,238.289c-1.037,5.187-1.037,11.408-1.037,16.595c0.345,6.567,6.222,5.878,11.407,5.528
				c3.111,0,3.802-0.344,4.148-3.109c0.346-1.729,0.691-4.84-1.037-5.529c-2.074-1.037-5.185,2.418-7.259,1.727
				c-2.075-0.69-1.729-4.146-1.729-6.223C227.51,244.167,229.93,234.833,223.017,238.289"/>
                    <path fill={"#FBB03B"} d="M244.051,236.51c-0.346,3.804,1.038,10.077,1.383,13.878c0.346,3.804-0.345,10.717,5.877,8.989
				c5.186-1.383,1.383-7.604,0.691-11.408c-0.691-3.802-1.534-11.232-2.074-11.752C249.387,235.695,245.779,235.471,244.051,236.51"
                    />
                    <path fill={"#FBB03B"} d="M242.173,229.355c1.361,6.368,9.175,3.087,6.12-1.921
				C246.701,224.826,242.173,226.474,242.173,229.355"/>
                    <path fill={"#FBB03B"} d="M257.597,234.488c0.691-1.038,3.568-1.873,4.602-1.615c1.035,0.258,2.657,8.183,4.387,12.33
				c0.691-3.109,3.146-11.919,4.22-12.922c4.556,0,4.833-1.058,0.618,10.85c-1.063,3.004-1.728,10.023-4.492,11.753
				c-3.457,2.765-4.494-4.841-4.841-6.915C260.708,243.476,259.325,238.637,257.597,234.488
				C257.366,233.414,257.597,234.488,257.597,234.488z"/>
                    <path fill={"#FBB03B"} d="M280.411,230.341c3.457-0.691,9.209-1.037,12.666-1.037c1.059,0,1.209,3.569,0.832,5.319
				c-2.074,0.346-5.023,0.528-7.098,0.528c-3.111,0.345-2.252,2.102-2.943,4.868c2.074,0,7.605-2.073,7.951,0.689
				c0.691,3.111-5.531,2.075-7.605,2.422c0,1.727-0.346,4.838,0.346,6.566c3.111-0.344,6.914-2.42,10.023-2.766
				c0.693,1.729,0.348,3.805,0.348,5.878c-2.766,0.69-5.877,0.345-8.643,0.69s-5.186,1.384-7.951,1.729
				c-1.037-3.803,0.346-10.37,1.037-14.52c0.346-3.456,0.691-6.912,1.037-10.023"/>
                </g>
                <g>
                    <path d="M217.174,223.771c-4.629,2.024-3.463,6.532-3.078,10.688c0.361,3.889,0.525,7.792,0.977,11.673
				c0.445,3.819,1.096,7.606,1.401,11.442c0.322,4.055,0.682,9.331,4.325,11.908c4.451,3.149,9.966,1.657,14.881,0.654
				c0.632-0.129,0.364-1.093-0.266-0.965c-4.822,0.984-10.315,2.536-14.531-0.899c-3.615-2.946-3.234-9.436-3.681-13.604
				c-0.62-5.773-1.452-11.483-1.872-17.282c-0.299-4.133-2.499-10.632,2.349-12.752
				C218.269,224.377,217.759,223.516,217.174,223.771L217.174,223.771z"/>
                </g>
                <g>
                    <path d="M287.171,211.699c4.153-1.033,8.628-1.191,12.455,0.999c2.871,1.644,4.08,5.114,5.2,8.015
				c0.23,0.595,1.197,0.337,0.965-0.266c-1.286-3.328-2.592-6.554-5.66-8.612c-3.779-2.536-9.045-2.14-13.226-1.1
				C286.279,210.89,286.545,211.855,287.171,211.699L287.171,211.699z"/>
                </g>
                <g>
                    <path d="M285.628,206.666c4.993-2.949,10.901-2.741,15.923,0.039c4.26,2.358,8.996,7.343,6.898,12.533
				c-0.241,0.598,0.727,0.855,0.965,0.266c2.161-5.349-2.166-10.138-6.296-13.001c-5.323-3.689-12.44-3.981-17.994-0.701
				C284.569,206.13,285.072,206.995,285.628,206.666L285.628,206.666z"/>
                </g>
                <g>
                    <path d="M285.327,200.776c5.144-2.468,10.789-4.652,16.593-3.799c4.299,0.632,8.499,3.269,10.984,6.805
				c2.404,3.421,2.769,7.404,2.625,11.432c-0.023,0.645,0.978,0.643,1,0c0.173-4.855-0.59-9.336-3.743-13.234
				c-2.74-3.387-7.174-5.463-11.411-6.086c-5.69-0.836-11.538,1.613-16.552,4.019C284.241,200.192,284.749,201.054,285.327,200.776
				L285.327,200.776z"/>
                </g>
            </g>
            <g>
                <g>
                    <path fill={"#FBB03B"} d="M117.446,83.002c-0.201,0.238-0.394,0.476-0.578,0.716c-4.474,5.784-4.18,12.288,0.712,16.124
				c5.096,3.994,10.492,4.526,16.294,6.944c5.801,2.422,58.357-32.232,58.383-32.17c0.025,0.063-4.709-12.294-14.83-15.257
				c-10.122-2.959-20.198,2.236-33.122,8.147c-12.925,5.911-21.588,8.165-27.253,15.971"/>
                    <path fill={"#FBCD85"} d="M131.306,108.498c-2.688-5.283,0.364-7.069-1.828-13.138c-2.191-6.069,3.098-12.053,10.818-13.126
				c7.72-1.074,13.258,2.367,16.797-3.153c3.538-5.518,5.025-16.057,16.959-9.521c6.289,3.445,15.421-1.945,18.549,3.475
				c3.129,5.425,6.189,17.15,11.814,30.513c5.626,13.36,10.177,27.847,9.317,35.8c-0.859,7.954,0.068,11.611-0.62,15.733
				c-0.686,4.122-3.277,3.597-9.198-3.225c-5.919-6.823-9.209-8.986-16.698-12.263c-7.488-3.275-20.682-8.547-24.971-11.041
				c-4.289-2.494-6.022-3.673-7.125-1.818c-1.103,1.853,2.899,7.582-0.888,7.778c-3.789,0.192-1.659-11.928-5.01-13.646
				c-2.923-1.498-4.665,0.648-2.361,5.377c2.844,5.832,8.743,21.408,4.005,23.816c-4.738,2.404-6.251-4.358-6.865-10.731
				c-0.614-6.374-1.991-17.121-5.357-22.032C135.282,112.386,134.36,114.504,131.306,108.498z"/>
                    <g>
                        <path fill={"#D17F3F"} d="M145.912,91.744c-8.961,3.786-12.791,17.907,1.411,22.893
					c14.202,4.985,29.849-1.394,26.106-11.122C169.684,93.784,159.852,85.852,145.912,91.744z"/>
                        <path fill={"#FBCD85"} d="M147.091,99.464c-0.382-0.66-1.113-1.284-1.933-1.162c-1.716,0.255-2.099,2.261-1.611,3.597
					c0.601,1.65,2.762,2.447,3.81,0.664C147.891,101.659,147.594,100.331,147.091,99.464z"/>
                        <path fill={"#FBCD85"} d="M154.947,93.693c-0.517-0.748-1.959-0.667-2.634-0.237c-1.936,1.231,2.446,3.994,3.076,1.754
					C155.555,94.618,155.273,94.166,154.947,93.693z"/>
                        <path fill={"#FBCD85"} d="M159.385,103.337c-0.735-1.124-2.273-1.835-3.598-1.618c-1.699,0.282-2.393,2.034-1.499,3.554
					c0.508,0.861,1.629,1.648,2.638,1.722C158.626,107.119,160.371,104.845,159.385,103.337z"/>
                        <path fill={"#FBCD85"} d="M160.548,97.64c-0.663-0.824-2.296-1.079-2.527,0.276c-0.251,1.476,1.868,1.75,2.537,0.687
					C160.748,98.303,160.786,97.934,160.548,97.64z"/>
                        <path fill={"#FBCD85"} d="M148.729,107.656c-2.462-0.197-0.731,3.893,1.564,2.741c0.319-0.158,0.518-0.47,0.47-0.834
					C150.627,108.54,149.757,107.74,148.729,107.656z"/>
                        <path fill={"#FBCD85"} d="M169.251,104.511c-1.007-1.516-3.603-2.823-4.985-1.07c-0.901,1.146-0.379,2.598,0.62,3.438
					c1.095,0.923,2.902,1.052,4.099,0.24C169.933,106.47,169.822,105.37,169.251,104.511z"/>
                        <path fill={"#FBCD85"} d="M156.659,110.372c-1.061,0.813,0.622,1.932,1.431,2.315c0.544,0.255,1.201,0.714,1.82,0.535
					c0.644-0.185,1.052-0.976,0.902-1.611c-0.328-1.4-2.8-1.979-3.897-1.401C156.818,110.264,156.732,110.316,156.659,110.372z"/>
                    </g>
                    <g>
                        <path fill={"#D17F3F"} d="M160.72,127.248c2.558-9.657,40.096-8.736,29.011,13.502
					C171.485,134.036,161.315,128.284,160.72,127.248z"/>
                        <path fill={"#FBCD85"} d="M168.234,126.316c-0.206,0.332-0.172,0.765,0.253,1.192c0.674,0.681,4.148,2.65,4.162,0.356
					C172.658,126.18,169.219,124.737,168.234,126.316z"/>
                        <path fill={"#FBCD85"} d="M181.33,126.126c-0.326-0.667-1.04-1.246-1.779-1.336c-0.507-0.062-1.411,0.079-1.49,0.72
					c-0.143,1.152,2.076,1.902,2.908,1.522C181.299,126.882,181.496,126.467,181.33,126.126z"/>
                        <path fill={"#FBCD85"} d="M178.556,129.218c-0.336-0.4-0.74-0.608-1.228-0.775c-0.091-0.032-0.176-0.038-0.26-0.034
					c-0.03,0.002-0.059,0.006-0.09,0.01c-0.865-0.039-0.782,0.977-0.38,1.392c0.343,0.352,1.003,0.657,1.505,0.516
					C178.568,130.197,178.915,129.649,178.556,129.218z"/>
                        <path fill={"#FBCD85"} d="M187.775,130.943c-0.77-0.629-2.219-1.103-3.111-0.505c-1.667,1.116,0.317,2.938,1.52,3.313
					c0.879,0.274,1.954,0.024,2.387-0.852C188.935,132.164,188.309,131.379,187.775,130.943z"/>
                    </g>
                    <g>
                        <path fill={"#D17F3F"} d="M191.271,89.887c-6.073,7.932-38.703-1.452-25.891-12.824c2.694-3.435,15.603-3.71,22.185-0.92
					C194.146,78.93,195.976,83.739,191.271,89.887z"/>
                        <path fill={"#FBCD85"} d="M188.475,87.097c0.18-0.346,0.112-0.773-0.344-1.166c-0.725-0.628-4.342-2.323-4.177-0.034
					C184.075,87.575,187.615,88.748,188.475,87.097z"/>
                        <path fill={"#FBCD85"} d="M175.433,88.302c0.376,0.639,1.133,1.161,1.877,1.195c0.511,0.021,1.4-0.188,1.43-0.832
					c0.054-1.161-2.217-1.737-3.018-1.295C175.405,87.546,175.241,87.974,175.433,88.302z"/>
                        <path fill={"#FBCD85"} d="M173.585,78.936c0.376,0.641,1.132,1.162,1.876,1.196c0.512,0.021,1.401-0.189,1.432-0.833
					c0.052-1.16-2.218-1.736-3.019-1.293C173.556,78.181,173.392,78.61,173.585,78.936z"/>
                        <path fill={"#FBCD85"} d="M177.959,85.004c0.367,0.373,0.785,0.548,1.285,0.679c0.093,0.022,0.179,0.022,0.261,0.014
					c0.031-0.004,0.06-0.011,0.089-0.015c0.867-0.029,0.704-1.038,0.271-1.42c-0.368-0.324-1.05-0.576-1.54-0.397
					C177.871,84.028,177.567,84.603,177.959,85.004z"/>
                        <path fill={"#FBCD85"} d="M183.343,81.069c0.367,0.375,0.785,0.548,1.284,0.678c0.094,0.024,0.18,0.023,0.262,0.016
					c0.031-0.005,0.059-0.012,0.089-0.016c0.866-0.028,0.704-1.037,0.271-1.42c-0.369-0.324-1.05-0.576-1.542-0.398
					C183.254,80.093,182.95,80.668,183.343,81.069z"/>
                        <path fill={"#FBCD85"} d="M168.633,83.998c0.818,0.568,2.298,0.929,3.141,0.263c1.575-1.243-0.545-2.904-1.771-3.187
					c-0.897-0.204-1.951,0.127-2.314,1.035C167.382,82.873,168.068,83.605,168.633,83.998z"/>
                    </g>
                    <g>
                        <path fill={"#D17F3F"} d="M200.781,94.675c-6.803-0.862-19.504,6.855-13.76,18.81c5.745,11.957,20.997,8.734,22.612,4.044
					C206.334,108.696,204.169,97.881,200.781,94.675z"/>
                        <path fill={"#FBCD85"} d="M192.551,104.324c-0.441-0.723-1.364-1.354-2.241-1.241c-1.422,0.179-1.362,1.444-0.446,2.243
					c0.469,0.41,1.066,0.656,1.698,0.616C192.315,105.897,193.041,105.127,192.551,104.324z"/>
                        <path fill={"#FBCD85"} d="M199.23,114.794c-0.273-0.756-0.992-1.302-1.765-1.467c-0.594-0.129-2.14,0.073-1.907,1.013
					c0.257,1.038,1.118,1.649,2.13,1.871C198.581,116.404,199.599,115.809,199.23,114.794z"/>
                        <path fill={"#FBCD85"} d="M192.866,111.088c-0.368-0.287-0.941-0.495-1.411-0.462c-0.519,0.038-1.188,0.489-0.679,1.063
					c0.538,0.611,1.17,0.863,1.951,0.555C193.208,112.054,193.253,111.391,192.866,111.088z"/>
                        <path fill={"#FBCD85"} d="M196.665,107.837c-0.662-0.507-1.534-0.739-1.287,0.319c0.165,0.707,0.604,1.04,1.331,1.006
					C197.768,109.113,197.319,108.338,196.665,107.837z"/>
                        <path fill={"#FBCD85"} d="M201.189,103.199c-0.669-0.648-2.497-0.714-3.218-0.131c-1.399,1.135,1.762,2.84,2.672,2.797
					C202.102,105.794,201.98,103.966,201.189,103.199z"/>
                        <path fill={"#FBCD85"} d="M196.037,99.374c-0.867-0.798-2.582,0.251-1.165,1.253c0.289,0.201,0.663,0.381,1.018,0.226
					c0.474-0.209,0.547-1.018,0.247-1.375C196.105,99.441,196.071,99.407,196.037,99.374z"/>
                        <path fill={"#FBCD85"} d="M203.208,108.78c-1.331,0.26-1.293,1.525-0.826,2.501c0.436,0.906,0.878,1.733,1.997,1.838
					C207.751,113.432,206.156,108.2,203.208,108.78z"/>
                    </g>
                </g>
                <g>
                    <path d="M116.482,90.916c-0.41-3.852,4.503-2.971,6.388-1.805c1.513,0.936,2.206,2.725,2.788,4.305
				c0.684,1.857,1.31,3.591,2.62,5.113c0.421,0.49,1.126-0.221,0.707-0.707c-2.989-3.473-2.465-8.172-7.039-10.355
				c-2.609-1.246-6.821,0.095-6.464,3.449C115.55,91.551,116.551,91.558,116.482,90.916L116.482,90.916z"/>
                </g>
                <g>
                    <path d="M139.856,99.693c-0.518,2.357-0.638,5.168,1.068,7.122c1.856,2.125,4.497,2.948,6.884,4.307
				c2.977,1.695,5.267,2.859,8.71,3.294c3.606,0.456,6.811-0.801,10.315-1.38c0.635-0.105,0.365-1.068-0.266-0.964
				c-2.812,0.464-5.471,1.436-8.346,1.491c-3.072,0.058-5.926-0.902-8.515-2.458c-1.859-1.117-3.808-1.993-5.7-3.041
				c-3.147-1.743-3.931-4.711-3.186-8.104C140.958,99.33,139.995,99.063,139.856,99.693L139.856,99.693z"/>
                </g>
                <g>
                    <path d="M166.534,77.647c-5.019,1.6-0.413,6.936,1.807,8.943c2.169,1.962,4.993,2.379,7.544,3.701
				c3.06,1.585,8.131,1.997,11.331,0.729c0.592-0.234,0.335-1.202-0.266-0.964c-2.876,1.139-7.116,0.679-9.952-0.385
				c-1.161-0.436-2.206-1.339-3.4-1.673c-1.036-0.289-2.109-0.43-3.053-0.977c-1.976-1.143-8.066-7.033-3.745-8.411
				C167.412,78.416,167.15,77.451,166.534,77.647L166.534,77.647z"/>
                </g>
                <g>
                    <path d="M187.885,103.178c-1.209,4.039-0.18,8.083,2.237,11.459c2.69,3.757,6.34,4.903,10.77,4.973c0.645,0.01,0.644-0.99,0-1
				c-4.456-0.07-7.675-1.359-10.313-5.044c-2.097-2.929-2.759-6.684-1.73-10.122C189.035,102.825,188.069,102.562,187.885,103.178
				L187.885,103.178z"/>
                </g>
                <g>
                    <path d="M208.513,126.805c0.774,1.944,1.34,3.879,1.521,5.973c0.222,2.56-0.965,4.314-1.749,6.607
				c-0.527,1.542-0.74,3.019-0.747,4.646c-0.009,2.086,1.03,4.163,0.334,6.206c-0.208,0.612,0.757,0.873,0.964,0.266
				c0.505-1.483,0.199-2.904-0.091-4.404c-0.59-3.048,0.129-5.752,1.475-8.479c1.708-3.46,0.594-7.719-0.745-11.081
				C209.241,125.948,208.274,126.206,208.513,126.805L208.513,126.805z"/>
                </g>
            </g>
        </g>
    </svg>
);


export {
    GameIcon,
    Line,
    Smile,
    Circle,
    Pentagram,
    HeartShaped,
    Blast,
    Claymorphism,
    Burst,
    Pointed,
    Platter,
    AcmeIcon,
    Cherry,
    Fa6SolidUpload,
    Life,
    LucideUndo,
    Fa6SolidTextSlash,
    ProgramIcon,
    LucideRedo,
    Fa6SolidRulerHorizontal,
    Fa6SolidGripLines,
    Fa6SolidList,
    Fa6SolidListOl,
    Fa6SolidListCheck,
    Fa6SolidQuoteRight,
    SolarUserBold,
    SolarCodeSquareBold,
    TableFilled,
    MageImageFill,
    GravityUiLayoutHeaderColumns,
    FaSolidBook,
    Fa6SolidPlus,
    Fa6SolidGrip,
    Fa6SolidCopy,
    Fa6SolidTrashCan,
    SolidDuplicate,
    F7HourglassBottomhalfFill,
    Fa6SolidTableColumns,
    BullhornOutline,
    LineMdMoonFilledAltToSunnyFilledLoopTransition,
    Fa6SolidEllipsisVertical,
    Apple,
    Fa6SolidAlignJustify,
    Fa6SolidAlignCenter,
    Fa6SolidAlignRight,
    Fa6SolidAlignLeft,
    Fa6SolidSuperscript,
    Fa6SolidSubscript,
    FluentDockRight16Filled,
    FluentDockLeft48Filled,
    StreamlinePenDrawSolid,
    Fa6SolidCode,
    Code16,
    Fa6SolidPalette,
    Fa6SolidStrikethrough,
    Fa6SolidItalic,
    Fa6SolidBold,
    Fa6SolidUnderline,
    MarkdownFill,
    CiCloseSm,
    SolarArrowRightUpLinear,
    EvaCloudUploadFill,
    Fa6SolidPencil,
    Fa6SolidLink,
    SolarLetterBold,
    ArrowRight,ArrowLeftIcon,ArrowRightIcon
};


