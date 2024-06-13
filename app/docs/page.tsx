'use client'

import {Button} from "@nextui-org/react";

export default function DocsPage() {
    return (
        <>
            <Button
                className="group linline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 gap-2 rounded-small px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent min-w-8 w-8 h-8 group relative z-10 text-large text-inherit data-[hover=true]:bg-transparent"
                type="button" aria-label="Copy to clipboard">
                <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation"
                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" width="1em"
                     className="absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100 transition-transform-opacity">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation"
                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                     viewBox="0 0 24 24" width="1em"
                     className="absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50 transition-transform-opacity">
                    <path
                        d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
                    <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
                    <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
                </svg>
            </Button>
        </>
    )
}
