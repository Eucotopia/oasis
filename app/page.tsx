import {PostDetail} from "@/components/post/PostDetail"

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <PostDetail id={"1"}/>
        </section>
    );
}
