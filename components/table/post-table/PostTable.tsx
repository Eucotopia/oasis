import React, {useState} from "react";
import {
    Chip,
    ChipProps,
    DropdownItem,
    Input,
    Pagination,
    Selection,
    SortDescriptor,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import {PostType, useDeletePostMutation} from "@/feature/api/postApi";
import {Dropdown, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {columns, statusOptions} from "./data";
import {Icon} from "@iconify/react";
import {SearchIcon} from "@/components/icons";
import {ChevronDownIcon} from "@nextui-org/shared-icons";
import {capitalize} from "@nextui-org/shared-utils";
import AddPost from "@/components/post/AddPost";
import UpdatePost from "@/components/post/UpdatePost";
import {useDisclosure} from "@nextui-org/modal";

const statusColorMap: Record<string, ChipProps["color"]> = {
    published: "success",
    draft: "warning",
    deleted: "danger",
};
const INITIAL_VISIBLE_COLUMNS = ["id", "title", "status", "actions", "create_time"];
export default function UserTable({postList}: {
    postList: PostType[]
}) {
    const [currentPost, setCurrentPost] = useState<PostType>()


    const {isOpen: isEditPostOpen, onOpen: onEditPostOpen, onOpenChange: onEditPostOpenChange} = useDisclosure();

    const handleEditPost = (post: PostType) => {
        setCurrentPost(post);
        onEditPostOpen()
    };
    const [deletePost] = useDeletePostMutation()

    const [filterValue, setFilterValue] = React.useState("");

    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));

    const hasSearchFilter = Boolean(filterValue);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(1);

    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");

    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "views",
        direction: "ascending",
    });

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...postList];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.title.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((post) =>
                Array.from(statusFilter).includes(post.status),
            );
        }

        return filteredUsers;
    }, [postList, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: PostType, b: PostType) => {
            const first = a[sortDescriptor.column as keyof PostType] as number;
            const second = b[sortDescriptor.column as keyof PostType] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);
    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-cente ">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
                <Pagination
                    showControls
                    showShadow
                    color="success"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4 ">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon aria-hidden="true"
                                                  fill="none"
                                                  focusable="false"
                                                  height="1em"
                                                  role="presentation"
                                                  viewBox="0 0 24 24"
                                                  width="1em"/>}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" aria-hidden="true"
                                                                     fill="none"
                                                                     focusable="false"
                                                                     height="1em"
                                                                     role="presentation"
                                                                     viewBox="0 0 24 24"
                                                                     width="1em"/>} variant="flat">
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small"/>} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        {/*<Button color="primary" endContent={*/}
                        {/*    <Icon icon="fa6-solid:plus"></Icon>*/}
                        {/*}>*/}
                        {/*    Add New*/}
                        {/*</Button>*/}
                        <AddPost/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {postList.length} users</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        postList.length,
        hasSearchFilter,
    ]);
    const handleDeletePost = (id: number | undefined) => {
        if (!id) return
        deletePost(id)
    }

    const renderCell = React.useCallback((post: PostType, columnKey: React.Key) => {

        switch (columnKey) {
            case "create_time":
                const create_time = post["createTime"]
                return (
                    <p className={"w-44"}>{create_time}</p>
                )
            case "id":
                const id = post["id"]
                return (
                    <p>{id}</p>
                )
            case "title":
                const title = post["title"];
                return (
                    <p className={"line-clamp-1"}>
                        {title}
                    </p>
                );
            case "status":
                const status = post["status"];
                return (
                    <Chip className="capitalize" color={statusColorMap[post.status === 0 ? "published" : "draft"]}
                          size="sm" variant="flat">
                        {status === 0 ? "published" : "draft"}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <Icon icon={"fa6-solid:ellipsis-vertical"} width={20} height={20}/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem href={`/blog/${post.id}`}>View</DropdownItem>
                                <DropdownItem onPress={() => handleEditPost(post)}>Edit</DropdownItem>
                                <DropdownItem onPress={() => handleDeletePost(post.id)}>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            // default:
            //     return cellValue;
        }
    }, []);
    return (
        <>
            {currentPost && (
                <UpdatePost postParam={currentPost} key={currentPost.id} isEditPostOpen={isEditPostOpen}
                            onEditPostOpenChange={onEditPostOpenChange}/>
            )}
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}
