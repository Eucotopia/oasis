'use client'
import React from "react";
import {useGetPostsByPageQuery,useGetPostsQuery} from "@/feature/api/postApi";
import PostTable from "@/components/table/post-table/PostTable";

const statusColorMap = {
    published: "success",
    draft: "warning",
    deleted: "danger",
};
const INITIAL_VISIBLE_COLUMNS = ["id", "title", "status", "actions"];
export default function App() {
    const {data:postList} = useGetPostsQuery()
    // const {data: postList} = useGetPostsByPageQuery({current: 0, pageSize: 10})
    if (postList === undefined) return null
    return <PostTable postList={postList}/>
}
