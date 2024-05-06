'use client'
import {useGetPostQuery} from "@/feature/api/postApi";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import React from "react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {LampContainer} from "@/components/lamp";
import {motion} from "framer-motion";

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
        <>d
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    {post?.title}
                    {/*Build lamps <br /> the right way*/}
                </motion.h1>
            </LampContainer>
            {/*<div*/}
            {/*    className={"flex flex-col items-center justify-center gap-2 w-screen bg-test h-48 md:h-64 lg:h-80 p-4 md:p-8 lg:p-12"}>*/}
            {/*    <div className={"flex flex-row gap-2"}>*/}
            {/*        {*/}
            {/*            post?.tags?.map((tag, index) => (*/}
            {/*                <Chip*/}
            {/*                    color={"primary"}*/}
            {/*                    variant="dot"*/}
            {/*                    key={index}*/}
            {/*                    radius={'sm'}*/}
            {/*                    className={"text-bold"}*/}
            {/*                >{tag.name}</Chip>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <p className={"text-5xl"}>{post?.title}</p>*/}
            {/*    <div>*/}
            {/*        {post?.createTime}*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {characterCount.characters()}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={"w-[896px] border bg-content1 rounded-2xl mx-auto"}>
                <BlockEditor editor={editor}/>
            </div>
        </>
    );
}
