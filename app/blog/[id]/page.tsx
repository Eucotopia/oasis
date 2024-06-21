'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/react";
import ModalReview from "@/components/modal/Review";
import {Fa6SolidPencil} from "@/components/icons";

export default function Page({params}: {
    params: {
        id: number
    }
}) {

    // Remove the defaultOpen property from useDisclosure when using the component
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure({defaultOpen: false});

    const {data: post} = useGetPostQuery(params.id)

    const {characterCount, editor} = useBlockEditor({isEditor: false, content: post?.content})

    if (editor === null) return null

    return (
        <>
            <BlockEditor editor={editor}/>
            {/*评论功能*/}

            <Button endContent={<Fa6SolidPencil size={14}/>} variant="bordered" onPress={onOpen}>
                Write a review
            </Button>

            <ModalReview isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} id={String(params.id)}/>
        </>
    );
}
