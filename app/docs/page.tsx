'use client'
import React from "react";
import {Input, Snippet} from "@nextui-org/react";

export default function DocsPage() {

    return (
        <>
            <Snippet color="success" symbol="#"
                     classNames={{
                         base: "!bg-pink-400",
                         pre: "!pre-classes bg-red-400",
                         content: "!bg-red-400",
                     }}
            >
                asdfasd
            </Snippet>
            <Input
                type="email"
                label="Email"
                variant="bordered"
                defaultValue="junior2nextui.org"
                isInvalid={true}
                errorMessage="Please enter a valid email"
                className="max-w-xs"
            />        </>
    )
}
