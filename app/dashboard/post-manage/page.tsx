'use client'
import React from "react";
import {useGetPostsQuery} from "@/feature/api/postApi";
import PostTable from "@/components/table/post-table/PostTable";

export default function App() {
    const {data:postList} = useGetPostsQuery()
    if (postList === undefined) return null
    return <PostTable postList={postList}/>
}
