import {useGetPostQuery} from "@/feature/api/postApi";

export const PostDetail = ({id}: { id: string }) => {
    // const {
    //     data: post,
    //     isFetching,
    //     isLoading,
    // } = useGetPostQuery(69)

    // if (isLoading) return <div>Loading...</div>
    // if (!post) return <div>Missing post!</div>

    return (
        <div>
            {/*<h1>{post.content}</h1>*/}
        </div>
    )
}