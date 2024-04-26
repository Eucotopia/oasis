'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import {PageType} from "@/types";
import {useDeletePostMutation, useGetHostPostsQuery, useGetPostQuery, useGetPostsQuery} from "@/feature/api/postApi";
import {Button} from "@nextui-org/react";

const page: PageType = {
    current: 0,
    pageSize: 10
}

export default function Home() {
    const {data: posts} = useGetPostsQuery(page)
    const {data: hostPosts} = useGetHostPostsQuery()
    const [deletePost] = useDeletePostMutation()
    const {post} = useGetPostsQuery(page, {
        selectFromResult: ({data}) => ({post: data?.find((post) => post.id === 1)})
    });
    // const {data: post} = useGetPostQuery(1);
    // const [deletePost, {isLoading: isLoadingDeletePost}] = useDeletePostMutation()
    // if (posts === undefined) return null
    // if (post === undefined) return null
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {
                hostPosts?.map((post) => (
                    <Button
                        size={"lg"}
                        color={"primary"}
                        key={post.id}
                        onClick={() => deletePost(Number(post.id))}
                    >
                        {post.title}
                    </Button>
                ))
            }
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
