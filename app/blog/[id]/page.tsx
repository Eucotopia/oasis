'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";

export default function Page({params}: {
    params: {
        id: number
    }
}) {

    const {data: post} = useGetPostQuery(params.id)

    const {characterCount, editor} = useBlockEditor({isEditor: false, content: post?.content})
    if (editor === null) return null
    return (
        <>
            <BlockEditor editor={editor}/>
        </>
    );
}
