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
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
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
            <div>
                <div className={"w-[896px]  rounded-xl mx-auto"}>
                    <BlockEditor editor={editor}/>
                </div>
            </div>
        </>
    );
}
