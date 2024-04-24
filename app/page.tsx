'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import {PageType} from "@/types";
import {useDeletePostMutation, useGetPostsQuery} from "@/feature/api/postApi";
import {Button} from "@nextui-org/react";

const page: PageType = {
    current: 0,
    pageSize: 10
}

export default function Home() {
    const {data:posts} = useGetPostsQuery(page)
    console.log(posts)
    const [deletePost, {isLoading: isLoadingDeletePost}] = useDeletePostMutation()
    if (posts===undefined) return null
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {
                posts.map((post,index)=>{
                    return(
                            <p key={index}>{post.title}</p>
                    )
                })
            }
            <Button onClick={()=>{
                deletePost(10)
            }}>delete</Button>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
