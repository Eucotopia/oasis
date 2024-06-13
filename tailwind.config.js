import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        backgroundImage: {
            hero: "radial-gradient(128.17% 50% at 50% 50%, #fb845920 0, transparent 100%)"
        },
        light: {
            backgroundImage: {
                index: "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)"
            },
        },
        extend: {
            animation: {
                "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
                "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
            },
            keyframes: {
                "scrolling-banner": {
                    from: {transform: "translateX(0)"},
                    to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
                },
                "scrolling-banner-vertical": {
                    from: {transform: "translateY(0)"},
                    to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
                },

                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
            backgroundImage: {
                "test": "linear-gradient(to bottom, #F7EEDD 30%, #F2D7BE 50%, #E9C4A5 70%)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
                themes: {
                    light: {},
                    dark: {
                        colors:{
                            test:"#fff"
                        }
                    },
                    "purple-dark": {
                        extend: "dark", // <- inherit default values from dark theme
                        colors: {
                            background: "#39193b",
                            foreground: "#ffffff",
                            primary: {
                                50: "#3B096C",
                                100: "#520F83",
                                200: "#7318A2",
                                300: "#9823C2",
                                400: "#c031e2",
                                500: "#DD62ED",
                                600: "#F182F6",
                                700: "#FCADF9",
                                800: "#FDD5F9",
                                900: "#FEECFE",
                                DEFAULT: "#DD62ED",
                                foreground: "#ffffff",
                            },
                            focus: "#F182F6",
                        },
                        layout: {
                            disabledOpacity: "0.3",
                            radius: {
                                small: "4px",
                                medium: "6px",
                                large: "8px",
                            },
                            borderWidth: {
                                small: "1px",
                                medium: "2px",
                                large: "3px",
                            },
                        },
                    },
                    political: {
                        "colors": {
                            "background": {
                                "DEFAULT": "#F0ECD8",
                                "foreground": "#0c0c0d"
                            },
                            "content1": "#e3ddc0",
                            "content2": "#13325d",
                            "content3": "#721C24",
                            "content4": "#8B0000",
                            "danger": {
                                "50": "#fff9f5",
                                "100": "#fff3eb",
                                "200": "#ffe4d1",
                                "300": "#ffd5b8",
                                "400": "#ffc9a3",
                                "500": "#ffac70",
                                "600": "#ff9447",
                                "700": "#f06400",
                                "800": "#a34400",
                                "900": "#4d2000",
                                "DEFAULT": "#FF6A00"
                            },
                            "default": {
                                "50": "#f9f9fb",
                                "100": "#f2f3f7",
                                "200": "#e2e4ee",
                                "300": "#d2d6e5",
                                "400": "#c5cadd",
                                "500": "#a5acca",
                                "600": "#8b95bb",
                                "700": "#596597",
                                "800": "#3c4567",
                                "900": "#1c2030",
                                "DEFAULT": "#e2e4ee",
                                "foreground": "#1c2030"
                            },
                            "divider": "#000",
                            "focus": "#1C4191",
                            "foreground": {
                                "50": "#fafafa",
                                "100": "#f5f5f5",
                                "200": "#e8e8e8",
                                "300": "#dbdbdb",
                                "400": "#d1d1d1",
                                "500": "#b8b8b8",
                                "600": "#a3a3a3",
                                "700": "#787878",
                                "800": "#525252",
                                "900": "#262626",
                                "DEFAULT": "#000000",
                                "foreground": "#fafafa"
                            },
                            "overlay": "#F0ECD8",
                            "primary": {
                                "50": "#f6f9fe",
                                "100": "#edf3fd",
                                "200": "#d6e5fa",
                                "300": "#bfd7f8",
                                "400": "#accbf6",
                                "500": "#7eaef1",
                                "600": "#5a97ed",
                                "700": "#1868d8",
                                "800": "#104793",
                                "900": "#082145",
                                "DEFAULT": "#0D2240"
                            },
                            "secondary": {
                                "50": "#fef5f6",
                                "100": "#feeced",
                                "200": "#fcd4d7",
                                "300": "#fbbcc1",
                                "400": "#f9a9af",
                                "500": "#f67983",
                                "600": "#f45260",
                                "700": "#e10e20",
                                "800": "#990a16",
                                "900": "#48050a",
                                "DEFAULT": "#E31B2C"
                            },
                            "success": {
                                "50": "#f6fef9",
                                "100": "#edfcf3",
                                "200": "#d8f9e5",
                                "300": "#c2f5d6",
                                "400": "#b0f2ca",
                                "500": "#9fefbf",
                                "600": "#61e596",
                                "700": "#22ce67",
                                "800": "#178c46",
                                "900": "#0b4221",
                                "DEFAULT": "#36C26E"
                            },
                            "warning": {
                                "50": "#fdfaf6",
                                "100": "#fcf6ee",
                                "200": "#f8ebd8",
                                "300": "#f4dfc3",
                                "400": "#f0d6b2",
                                "500": "#e8c087",
                                "600": "#e2ae65",
                                "700": "#c98526",
                                "800": "#895b1a",
                                "900": "#402b0c",
                                "DEFAULT": "#F5AF4E"
                            }
                        },
                        "extend": "light"
                    },
                    "posthog": {
                        "colors": {
                            "background": {
                                "DEFAULT": "#1C1E26",
                                "foreground": "#f9f9fb"
                            },
                            "content1": "#1c2030",
                            "content2": "#3c4567",
                            "content3": "#596597",
                            "content4": "#8b95bb",
                            "danger": {
                                "50": "#3f0d0d",
                                "100": "#871d1d",
                                "200": "#c62a2a",
                                "300":
                                    "#df6868"
                                ,


                                "400":

                                    "#eba2a2"
                                ,


                                "500":

                                    "#efb3b3"
                                ,


                                "600":

                                    "#f3c4c4"
                                ,


                                "700":

                                    "#f7d9d9"
                                ,


                                "800":

                                    "#fbeeee"
                                ,


                                "900":

                                    "#fdf7f7"
                                ,


                                "DEFAULT":

                                    "#F25555"


                            }
                            ,


                            "default":

                                {


                                    "50":

                                        "#262626"
                                    ,


                                    "100":

                                        "#525252"
                                    ,


                                    "200":

                                        "#787878"
                                    ,


                                    "300":

                                        "#a3a3a3"
                                    ,


                                    "400":

                                        "#c7c7c7"
                                    ,


                                    "500":

                                        "#d1d1d1"
                                    ,


                                    "600":

                                        "#dbdbdb"
                                    ,


                                    "700":

                                        "#e8e8e8"
                                    ,


                                    "800":

                                        "#f5f5f5"
                                    ,


                                    "900":

                                        "#fafafa"
                                    ,


                                    "DEFAULT":

                                        "#FAFAFA"
                                    ,


                                    foreground:

                                        "#1C1E26"


                                }
                            ,


                            "divider":

                                "#8b95bb"
                            ,


                            "focus":

                                "#F7A500"
                            ,


                            "foreground":

                                {


                                    "50":

                                        "#262626"
                                    ,


                                    "100":

                                        "#525252"
                                    ,


                                    "200":

                                        "#787878"
                                    ,


                                    "300":

                                        "#a3a3a3"
                                    ,


                                    "400":

                                        "#c7c7c7"
                                    ,


                                    "500":

                                        "#d1d1d1"
                                    ,


                                    "600":

                                        "#dbdbdb"
                                    ,


                                    "700":

                                        "#e8e8e8"
                                    ,


                                    "800":

                                        "#f5f5f5"
                                    ,


                                    "900":

                                        "#fafafa"
                                    ,


                                    "DEFAULT":

                                        "#FAFAFA"


                                }
                            ,


                            "overlay":

                                "#1C1E26"
                            ,


                            "primary":

                                {


                                    "50":

                                        "#4d3300"
                                    ,


                                    "100":

                                        "#a36d00"
                                    ,


                                    "200":

                                        "#f0a000"
                                    ,


                                    "300":

                                        "#ffc247"
                                    ,


                                    "400":

                                        "#ffda8f"
                                    ,


                                    "500":

                                        "#ffe0a3"
                                    ,


                                    "600":

                                        "#ffe7b8"
                                    ,


                                    "700":

                                        "#fff0d1"
                                    ,


                                    "800":

                                        "#fff8eb"
                                    ,


                                    "900":

                                        "#fffcf5"
                                    ,


                                    "DEFAULT":

                                        "#F7A500"


                                }
                            ,


                            "secondary":

                                {


                                    "50":

                                        "#072045"
                                    ,


                                    "100":

                                        "#104494"
                                    ,


                                    "200":

                                        "#1764d9"
                                    ,


                                    "300":

                                        "#5994ee"
                                    ,


                                    "400":

                                        "#99bef4"
                                    ,


                                    "500":

                                        "#accaf6"
                                    ,


                                    "600":

                                        "#bed6f8"
                                    ,


                                    "700":

                                        "#d5e4fb"
                                    ,


                                    "800":

                                        "#edf3fd"
                                    ,


                                    "900":

                                        "#f6f9fe"
                                    ,


                                    "DEFAULT":

                                        "#2F80FA"


                                }
                            ,


                            "success":

                                {


                                    "50":

                                        "#0b4221"
                                    ,


                                    "100":

                                        "#178c46"
                                    ,


                                    "200":

                                        "#22ce67"
                                    ,


                                    "300":

                                        "#61e596"
                                    ,


                                    "400":

                                        "#9fefbf"
                                    ,


                                    "500":

                                        "#b0f2ca"
                                    ,


                                    "600":

                                        "#c2f5d6"
                                    ,


                                    "700":

                                        "#d8f9e5"
                                    ,


                                    "800":

                                        "#edfcf3"
                                    ,


                                    "900":

                                        "#f6fef9"
                                    ,


                                    "DEFAULT":

                                        "#36C26E"


                                }
                            ,


                            "warning":

                                {


                                    "50":

                                        "#4d1800"
                                    ,


                                    "100":

                                        "#a33400"
                                    ,


                                    "200":

                                        "#f04c00"
                                    ,


                                    "300":

                                        "#ff8247"
                                    ,


                                    "400":

                                        "#ffb28f"
                                    ,


                                    "500":

                                        "#ffc0a3"
                                    ,


                                    "600":

                                        "#ffceb8"
                                    ,


                                    "700":

                                        "#ffe0d1"
                                    ,


                                    "800":

                                        "#fff1eb"
                                    ,


                                    "900":

                                        "#fff8f5"
                                    ,


                                    "DEFAULT":

                                        "#F54E00"


                                }


                        }
                        ,
                        "extend":

                            "dark"
                    }
                    ,
                }
            }
        )
    ]
}
