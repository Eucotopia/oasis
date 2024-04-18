'use client'
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {Calendar} from "@nextui-org/calendar";
import {getLocalTimeZone, today} from "@internationalized/date";

export default function Home() {
    const {editor} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <BlockEditor height={'100vh'} editor={editor}/>
            <Calendar
                aria-label="Date (Read Only)"
                value={today(getLocalTimeZone())}
                isReadOnly/>
        </section>
    );
}
