'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import Discout from "@/components/discount-card/App"
import {Button} from "@nextui-org/react";
export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            <Button color={"primary"}></Button>
            <Button color={"secondary"}></Button>
            <Button color={"warning"}></Button>
            <Button color={"danger"}></Button>
            <Button color={"success"}></Button>
            <p className={"text-content1"}>asdf</p>
            <p className={"text-content2"}>asdf</p>
            <p className={"text-content3"}>asdf</p>
            <p className={"text-content4"}>asdf</p>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
