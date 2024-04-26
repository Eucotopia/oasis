import {useMemo} from 'react'
import {useAppSelector} from "@/hook/store";

/**
 * Get recently edited post ✔
 */
export const useLastPost = () => {

    const lastPostContent = useAppSelector(state => state.lastPost.lastPostContent);

    return useMemo(() => ({lastPostContent}), [lastPostContent])
}
