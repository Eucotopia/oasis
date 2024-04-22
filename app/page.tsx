'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
