// import {useGetPostsQuery} from "@/feature/api/postApi";
// import {PageType} from "@/types";
//
// export const PostDetail = ({id, page}: { id: number, page: PageType }) => {
//     const {post} = useGetPostsQuery(page, {
//         selectFromResult: ({data}) => ({
//             post: data?.data.find((post) => post.id === id)
//         })
//     })
//
//     // if (isLoading) return <div>Loading...</div>
//     // if (!post) return <div>Missing post!</div>
//     return (
//         <ul>
//             <li>{post?.title}</li>
//             <li>{post?.content}</li>
//             <li>{post?.summary}</li>
//             <li>{post?.tags[0]?.name}</li>
//             <li>{post?.cover}</li>
//         </ul>
//     )
// }