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
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {},
                dark: {},
                "purple-dark": {
                    extend: "dark",
                    backgroundColor: {
                        'site9': "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                    },
                    backgroundImage: {
                        'site': 'radial-gradient(circle, #d16ba5, #aa679f, #856193, #655880, #4d4e68, #4c566f, #4b5e75, #4b667a, #4f89a1, #4daec3, #4ed4de, #5ffbf1)',
                    },
                    colors: {
                        background: "#0D001A",
                        foreground: "#ffffff",
                        "content1":"#3B096C",
                        "content2":"#520F83",
                        "content3":"#9823C2",
                        "content4":"#F182F6",
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
                        success: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
                            foreground: "#ffffff",
                        },
                        danger: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
                            foreground: "#ffffff",
                        },
                        info: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
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
            },
        }),
    ],
}
