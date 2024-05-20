'use client'
import React, {ChangeEvent, useCallback, useState} from "react";
import {Accordion, AccordionItem, cn, Input, ModalHeader, Spinner, Textarea} from "@nextui-org/react";
import {ColumnType, useAddColumnMutation, useGetColumnsQuery} from "@/feature/api/columnApi";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import {Modal, ModalBody, ModalContent, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Icon} from "@iconify/react";
import {useFileUpload} from "@/components/tiptap/extensions/ImageUpload/view/hooks";
import toast from "react-hot-toast";
import {useUploadMutation} from "@/feature/api/fileApi";
import {Image} from "@nextui-org/image";

export default function App() {
    const [addColumn] = useAddColumnMutation()
    const [column, setColumn] = useState<ColumnType>({
        name: "",
        description: "",
        avatar: "",
        rating: 5,
    })
    const {data: columns, isLoading: isLoadingColumns} = useGetColumnsQuery()
    const {handleUploadClick, ref} = useFileUpload()
    const [uploadImage] = useUploadMutation();

    const uploadFile = useCallback(async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            const url = await uploadImage(formData).unwrap();
            setColumn({
                ...column,
                avatar: url
            })
        } catch (errPayload: any) {
            const error = errPayload?.response?.data?.error || 'Something went wrong'
            toast.error(error)
        }
    }, [column, uploadImage])

    const onFileChange = useCallback(
        // @ts-ignore
        (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
        [uploadFile],
    )
    const AddColumn = async () => {
        const res = await addColumn(column).unwrap()
        if (res) {
            setColumn({
                name: "",
                description: "",
                avatar: "",
                rating: 5,
            })
        }
    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    if (isLoadingColumns) return <Spinner label="Loading..." color="warning"/>
    if (columns === undefined) return null
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    body: "flex flex-col items-center justify-center rounded-lg bg-opacity-80 gap-2",
                    // backdrop: "bg-gradient-to-br from-[#292f46]/50 to-secondary-500  backdrop-opacity-40",
                    base: "",
                    header: "",
                    footer: ""
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Column</ModalHeader>
                            <ModalBody>

                                {
                                    column.avatar.length > 0 ? (
                                        <Image src={column.avatar} alt={"column cover"}/>
                                    ) : (
                                        <>
                                            <div onClick={handleUploadClick}
                                                 className={"cursor-pointer w-full h-full mx-auto flex items-center justify-center"}>
                                                <Icon icon={"fa6-solid:image"}
                                                      className="w-12 h-12 mb-4 text-black dark:text-white opacity-20"/>
                                            </div>
                                            <Input
                                                className="w-0 h-0 overflow-hidden opacity-0"
                                                type="file"
                                                ref={ref}
                                                accept=".jpg,.jpeg,.png,.webp,.gif"
                                                onChange={onFileChange}
                                            />
                                        </>
                                    )
                                }
                                <Input
                                    onChange={(e) => setColumn({...column, name: e.target.value})}
                                    value={column.name}
                                    className={"mt-4"}
                                    key={"column name"}
                                    type="text"
                                    isRequired
                                    label="column name"
                                    labelPlacement={"outside"}
                                    placeholder="Enter column name"
                                />

                                <Textarea
                                    onChange={(e) => setColumn({...column, description: e.target.value})}
                                    value={column.description}
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={AddColumn}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Button onPress={onOpen}>Open Modal</Button>
            <Accordion variant="splitted">
                {
                    columns.map(column => (
                        <AccordionItem
                            key={column.id}
                            aria-label={column.name}
                            startContent={
                                <Avatar
                                    isBordered
                                    color="primary"
                                    radius="lg"
                                    src={column.avatar}
                                />
                            }
                            title={column.name}
                            subtitle={
                                <p className={"line-clamp-1"}>{column.description}</p>
                            }
                        >
                            {column.posts?.map(post => (
                                <div key={post.id}
                                     className={"flex flex-row mx-5 rounded-md shadow-2xl border gap-10 p-5 mb-2"}>
                                    <div>{post.title}</div>
                                </div>
                            ))}
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    );
}