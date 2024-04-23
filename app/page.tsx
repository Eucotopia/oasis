'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";


export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {/*<PostList/>*/}
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://images.pexels.com/photos/417174/pexels-photo-417174.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        width={270}
                    />
                </CardBody>
            </Card>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
