'use client'
import React from "react";
import {useGetPostsQuery} from "@/feature/api/postApi";
import PostTable from "@/components/table/post-table/PostTable";

export default function DocsPage() {
    const {data: postList, refetch} = useGetPostsQuery()

    if (postList == undefined) return null
    return (
        <>
            {
                postList.map((post) => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            }
        </>
    )
}
