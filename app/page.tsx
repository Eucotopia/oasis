'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import {PostType, useGetPostsQuery, useUpdatePostMutation} from "@/feature/api/postApi";
import {PageType} from "@/types";
import {Button} from "@nextui-org/react";

const page: PageType = {
    current: 0,
    pageSize: 10
}
const post: PostType =
    {
        "id": 1,
    "comments": 1,
    "userId":1,
    "content": "112312312",
    "title": "zzzzzzzzzzzz",
    "summary": "1",
    "isPrivate": true,
    "isTop": true,
    "cover": "1",
    "views": 1,
    "rating": "1.2",
    "tags": [
        {
            "id": 2,
            "name": "OT11A"
        }
    ],
    "columns": [
        {
            "id":1,
            "name": "OTA",
            "description": "OTA 升777级",
            "rating": 5,
            "avatar": "http://localhost:8080/column/1/avatar"
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "JAVA",
            "parentId": "1"
        }
    ]
}

export default function Home() {
    const [updatePost] = useUpdatePostMutation()
    const {data: posts} = useGetPostsQuery(page)
    if (posts===undefined) return null

    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {
                posts?.map((post, index) => {
                    return (
                        <div key={index}>
                            <p>{post.title}</p>
                        </div>
                    )
                })
            }
            <Button onClick={()=>{
                updatePost(post).unwrap()
            }}>Update</Button>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
