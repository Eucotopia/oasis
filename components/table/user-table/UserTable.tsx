import React from "react";
import {
    Button,
    Chip,
    ChipProps,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Pagination,
    Selection,
    SortDescriptor,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    useDisclosure,
    User
} from "@nextui-org/react";
import {UserType} from "@/feature/api/authApi";
import {columns, statusOptions} from "./data";
import {SearchIcon} from "@/components/icons";
import {ChevronDownIcon} from "@nextui-org/shared-icons";
import {capitalize} from "@nextui-org/shared-utils";
import {Icon} from "@iconify/react";
import {roleType} from "@/feature/api/roleApi";

const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};
const INITIAL_VISIBLE_COLUMNS = ["username", "roles", "status", "actions", "id",  "email"];
export default function UserTable({userList}: { userList: UserType[] }) {
    const {isOpen: isAddNewUserOpen, onOpen: onAddNewUserOpen, onOpenChange: onAddNewUserOpenChange} = useDisclosure();

    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...userList];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.username.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [userList, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: UserType, b: UserType) => {
            const first = a[sortDescriptor.column as keyof UserType] as number;
            const second = b[sortDescriptor.column as keyof UserType] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user: UserType, columnKey: React.Key) => {
        switch (columnKey) {
            case "id":
                const id = user["id"]
                return (
                    <p>{id}</p>
                )
            case "username":
                const username = user["username"];
                return (
                    <User
                        avatarProps={{radius: "lg", src: user.avatar}}
                        description={user.email}
                        name={username}
                    >
                        {user.email}
                    </User>
                );
            case "roles":
                const roles: roleType[] = user["roles"];

                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{roles.map((role) => {
                            return role.name
                        })}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{user.address}</p>
                    </div>
                );
            case "status":
                const status: number = user["status"];

                return (
                    <Chip className="capitalize" color={statusColorMap[user.status === 0 ? "active" : "paused"]}
                          size="sm" variant="flat">
                        {status === 0 ? "active" : "paused"}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-center items-center gap-2 ">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <Icon icon={"fa6-solid:ellipsis-vertical"} width={20} height={20}/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Table Columns3">
                                <DropdownItem onClick={() => {
                                }}>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem onClick={() => {
                                    // deleteUser(user.id)
                                }}>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return user[columnKey as keyof UserType];
        }
    }, []);

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

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

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
                                aria-label="Table Columns2"
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
                                aria-label="Table Columns1"
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
                        <Button color="primary" onPress={onAddNewUserOpen} endContent={
                            <Icon icon="fa6-solid:plus"></Icon>
                        }>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {userList.length} users</span>
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
        userList.length,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-cente ">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
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

    return (
        <>
            <Modal isOpen={isAddNewUserOpen} onOpenChange={onAddNewUserOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New User</ModalHeader>
                            <ModalBody>
                                A better tomorrow
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Table
                aria-label="user table"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[400px]",
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
                            {/*@ts-ignore*/}
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}
