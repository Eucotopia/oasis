'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useDisclosure} from "@nextui-org/modal";
import {Button, Input, Select, SelectItem} from "@nextui-org/react";
import ModalReview from "@/components/modal/Review";
import {Fa6SolidPencil} from "@/components/icons";
import {Icon} from "@iconify/react";
import {useGetCommentsQuery} from "@/feature/api/commentApi";
import CardReview from "@/components/comment/CardReview";
import reviews from "@/components/comment/reviews";
import {scaleInOut} from "@nextui-org/modal/dist/modal-transition";

export default function Page({params}: {
    params: {
        id: number
    }
}) {

    // Remove the defaultOpen property from useDisclosure when using the component
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure({defaultOpen: false});

    const {data: post} = useGetPostQuery(params.id)

    const {data: comments,} = useGetCommentsQuery(params.id)

    const {characterCount, editor} = useBlockEditor({isEditor: false, content: post?.content})

    if (editor === null) return null

    return (
        <>
            <BlockEditor editor={editor}/>
            {/*评论功能*/}

            <header className="mb-8 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap md:px-2">
                <Button endContent={<Fa6SolidPencil size={14}/>} variant="bordered" onPress={onOpen}>
                    Write a review
                </Button>
                <div className="flex w-full items-center justify-end gap-4">
                    <Input
                        fullWidth
                        aria-label="Search"
                        className="w-72"
                        labelPlacement="outside"
                        placeholder="Search reviews"
                        startContent={<Icon icon="solar:magnifer-linear"/>}
                    />
                    <Select
                        aria-label="Sort by"
                        className="w-40"
                        defaultSelectedKeys={["most_recent"]}
                        labelPlacement="outside"
                    >
                        <SelectItem key="most_recent" value="most_recent">
                            Most recent
                        </SelectItem>
                        <SelectItem key="most_helpful" value="most_helpful">
                            Most helpful
                        </SelectItem>
                        <SelectItem key="highest_rating" value="highest_rating">
                            Highest rating
                        </SelectItem>
                    </Select>
                </div>
            </header>
            {/*<div className="flex flex-col gap-4">*/}
            {/*    {reviews.map((review, index) => (*/}
            {/*        <CardReview key={index} {...review} />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="flex flex-col gap-4">
                {
                    comments && comments.map((comment, index) => (
                        <CardReview key={index} {...comment} />
                    ))
                }

            </div>

            <ModalReview isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} id={String(params.id)}/>
        </>
    );
}
