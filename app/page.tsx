'use client'
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {Calendar} from "@nextui-org/calendar";
import {getLocalTimeZone, today} from "@internationalized/date";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";

export default function Home() {
    const {editor} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            <BlockEditor height={'100vh'} editor={editor}/>
            <Calendar
                aria-label="Date (Read Only)"
                value={today(getLocalTimeZone())}
                isReadOnly/>
            <div style={{marginTop: "150vh"}}/>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
