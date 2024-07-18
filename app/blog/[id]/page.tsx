'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useDisclosure} from "@nextui-org/modal";
import {Accordion, AccordionItem, Button, Input, Select, SelectItem} from "@nextui-org/react";
import ModalReview from "@/components/modal/Review";
import {Fa6SolidPencil} from "@/components/icons";
import {Icon} from "@iconify/react";
import {useGetCommentsQuery} from "@/feature/api/commentApi";
import CardReview from "@/components/comment/CardReview";

export default function Page({params}: {
    params: {
        id: number
    }
}) {
    //
    //
    // const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure({defaultOpen: false});
    //
    const {data: post} = useGetPostQuery('5687621c-7221-4308-aa7d-2a3f5a0a4836')
    console.log(post)
    //
    // const {data: comments,} = useGetCommentsQuery(params.id)
    //
    // const {characterCount, editor} = useBlockEditor({isEditor: false, content: post?.content})
    //
    // const itemClasses = {
    //     base: "py-0 w-full",
    //     title: "font-normal text-medium",
    //     trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    //     indicator: "text-medium",
    //     content: "text-small px-2",
    // };

    return (
        <>
            {/*<div className={"flex flex-col max-w-4xl items-center "}>*/}
            {/*    <BlockEditor editor={editor}/>*/}
            {/*    <header className="mb-8 flex flex-row items-center justify-between gap-4 md:flex-nowrap w-full">*/}
            {/*        <Button endContent={<Fa6SolidPencil size={14}/>} variant="bordered" onPress={onOpen}>*/}
            {/*            Write a review*/}
            {/*        </Button>*/}
            {/*        <div className="flex w-full items-center justify-end gap-4">*/}
            {/*            <Input*/}
            {/*                fullWidth*/}
            {/*                aria-label="Search"*/}
            {/*                className="w-72"*/}
            {/*                labelPlacement="outside"*/}
            {/*                placeholder="Search reviews"*/}
            {/*                startContent={<Icon icon="solar:magnifer-linear"/>}*/}
            {/*            />*/}
            {/*            <Select*/}
            {/*                aria-label="Sort by"*/}
            {/*                className="w-40"*/}
            {/*                defaultSelectedKeys={["most_recent"]}*/}
            {/*                labelPlacement="outside"*/}
            {/*            >*/}
            {/*                <SelectItem key="most_recent" value="most_recent">*/}
            {/*                    Most recent*/}
            {/*                </SelectItem>*/}
            {/*                <SelectItem key="most_helpful" value="most_helpful">*/}
            {/*                    Most helpful*/}
            {/*                </SelectItem>*/}
            {/*                <SelectItem key="highest_rating" value="highest_rating">*/}
            {/*                    Highest rating*/}
            {/*                </SelectItem>*/}
            {/*            </Select>*/}
            {/*        </div>*/}
            {/*    </header>*/}
            {/*    <div className="flex flex-col gap-4 w-full">*/}
            {/*        {*/}
            {/*            comments && comments.map((comment, index) => (*/}
            {/*                <CardReview key={index} {...comment} className={"max-w-full"}/>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<ModalReview isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} id={String(params.id)}/>*/}
        </>
    );
}
