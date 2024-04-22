import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {selectCurrentPostContent} from "@/feature/post/currentPostContentSlice";

export const useCurrentPost = () => {
    const currentPostContent = useSelector(selectCurrentPostContent)

    return useMemo(() => ({currentPostContent}), [currentPostContent])
}
