'use client'
import React from "react";
import {useGetBlogRollsQuery} from "@/feature/api/BlogRoll";


export default function App() {

    const {data: blogRollList, isLoading} = useGetBlogRollsQuery();
    console.log(blogRollList)
    if (blogRollList === undefined) return null

    return (
        <>
            asdf
        </>
    )
}
