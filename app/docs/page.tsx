'use client'
import React from "react";
import {Input} from "@nextui-org/react";

export default function DocsPage() {

    return (
        <>
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
