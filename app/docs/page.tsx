'use client'
import React from "react";
import {useGetPostsQuery} from "@/feature/api/postApi";
import PostTable from "@/components/table/post-table/PostTable";
import {Listbox, ListboxItem} from "@nextui-org/react";

export default function DocsPage() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    );
    return (
        <>
            <Listbox
                shouldFocusWrap
                autoFocus={true}
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys as any}
            >

                <ListboxItem key="text" autoFocus={true}>Text</ListboxItem>
                <ListboxItem key="number" autoFocus>Number</ListboxItem>
                <ListboxItem key="date">Date</ListboxItem>
                <ListboxItem key="single_date">Single Date</ListboxItem>
                <ListboxItem key="iteration">Iteration</ListboxItem>
            </Listbox>
            <p>{selectedValue}</p>
            {/*{*/}
            {/*    postList.map((post) => (*/}
            {/*        <div key={post.id}>*/}
            {/*            {post.title}*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </>
    )
}
