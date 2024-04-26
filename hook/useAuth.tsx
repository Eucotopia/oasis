import {useMemo} from 'react'
import {useAppSelector} from "@/hook/store";

/**
 * get current user ✔
 */
export const useAuth = () => {

    const currentUser = useAppSelector(state => state.auth.currentUser);

    return useMemo(() => ({currentUser}), [currentUser])
}
