'use client'
import React from "react";
import {useGetUsersQuery} from "@/feature/api/authApi";
import UserTable from "@/components/table/user-table/UserTable";


export default function App() {
    const {data: userList} = useGetUsersQuery();
    if (userList === undefined) return null
    return <UserTable userList={userList}/>
}
