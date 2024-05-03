'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {EditorHeader} from "@/components/tiptap/EditorHeader";
import React, {useEffect} from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {Image} from "@nextui-org/image";
import {Chip} from "@nextui-org/react";

export default function Page({params}: {
    params: {
        id: number
    }
}) {
    const {data: post} = useGetPostQuery(params.id)
    console.log(post)
    const {characterCount, editor} = useBlockEditor({isEditor: false, content: post?.content})
    if (editor === null) return null
    return (
        <>
            <div className={"flex flex-col items-start"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex flex-row gap-2"}>
                        {
                            post?.tags?.map((tag, index) => (
                                <Chip
                                    color={"primary"}
                                    variant="dot"
                                    key={index}
                                    radius={'sm'}
                                    className={"text-bold"}
                                >{tag.name}</Chip>
                            ))
                        }
                    </div>
                    <p className={"text-5xl"}>{post?.title}</p>
                    <div>
                        {post?.createTime}
                    </div>
                    <div>
                        {characterCount.characters()}
                    </div>
                </div>
                <div className={"flex flex-row gap-10"}>
                    <div className={"max-w-4xl border bg-content1 rounded-2xl"}>
                        <BlockEditor editor={editor}/>
                    </div>
                    <div className={"bg-red-700 p-20"}>
                        adf
                    </div>
                </div>
            </div>
        </>
    );
}
