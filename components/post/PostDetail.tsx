import {useGetPostQuery} from "@/feature/api/postApi";

export const PostDetail = ({id}: { id: string }) => {
    // const {
    //     data: post,
    //     isFetching,
    //     isLoading,
    // } = useGetPostQuery(1)
    //
    // if (isLoading) return <div>Loading...</div>
    // if (!post) return <div>Missing post!</div>

    return (
        <div>
            {/*{post.name} {isFetching ? '...refetching' : ''}*/}
        </div>
    )
}