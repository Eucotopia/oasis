'use client'

import AddPost from "@/components/post/AddPost";
import {useGetPostsQuery} from "@/feature/api/postApi";
import {Card, CardBody} from "@nextui-org/card";
import NextLink from "next/link";
import {Link} from "@nextui-org/link";

export default function BlogPage() {
    const {data: postList} = useGetPostsQuery()

    if (postList === undefined) return null

    return (
        <>
            {
                postList.map((post) => (
                    <div key={post.id}>
                        <Link key={post.id} href={`/blog/${post.id}`}>
                            {post.id}--{post.title}
                        </Link>
                    </div>
                ))
            }
        </>
    );
}
