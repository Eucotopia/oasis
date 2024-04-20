'use client'
import AddPost from "@/components/post/AddPost";
import {PostDetail} from "@/components/post/PostDetail";

export default function BlogPage() {
    return (
        <div>
            <PostDetail id={"1"}/>
            <AddPost/>
        </div>
    );
}
