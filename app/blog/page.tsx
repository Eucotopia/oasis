'use client'

import AddPost from "@/components/post/AddPost";
import {useGetPostsQuery} from "@/feature/api/postApi";

export default function BlogPage() {
    return (
        <div>
            <AddPost/>
        </div>
    );
}
