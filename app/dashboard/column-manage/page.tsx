'use client'
import React, {ChangeEvent, useCallback, useState} from "react";
import {Accordion, AccordionItem, Input, ModalHeader, Spinner} from "@nextui-org/react";
import {useGetColumnsQuery} from "@/feature/api/columnApi";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import {Modal, ModalBody, ModalContent, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Icon} from "@iconify/react";
import {useFileUpload} from "@/components/tiptap/extensions/ImageUpload/view/hooks";
import toast from "react-hot-toast";
import {useUploadMutation} from "@/feature/api/fileApi";
import {Image} from "@nextui-org/image";

export default function App() {
    const {data: columns, isLoading: isLoadingColumns} = useGetColumnsQuery()
    const {handleUploadClick, ref} = useFileUpload()
    const [uploadImage] = useUploadMutation();
    const [image, setImage] = useState<string>()

    const uploadFile = useCallback(async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            const url = await uploadImage(formData).unwrap();
            alert(url)
            setImage(url)
        } catch (errPayload: any) {
            const error = errPayload?.response?.data?.error || 'Something went wrong'
            toast.error(error)
        }
    }, [uploadImage])

    const onFileChange = useCallback(
        // @ts-ignore
        (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
        [uploadFile],
    )
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    if (isLoadingColumns) return <Spinner label="Loading..." color="warning"/>
    if (columns === undefined) return null
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Column</ModalHeader>
                            <ModalBody>
                                <div
                                    className={"flex flex-col items-center justify-center px-8 py-10 rounded-lg bg-opacity-80"}
                                >
                                    {
                                        image ? (
                                            <Image src={image} alt={"column cover"}/>
                                        ) : (
                                            <>
                                                <Icon icon={"fa6-solid:image"}
                                                      className="w-12 h-12 mb-4 text-black dark:text-white opacity-20"/>
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <div
                                                        className="text-sm font-medium text-center text-neutral-400 dark:text-neutral-500">
                                                        Drag and drop or
                                                    </div>
                                                    <div>
                                                        <Button size={"sm"} onClick={handleUploadClick}>
                                                            <Icon icon="fa6-solid:upload"></Icon>
                                                            Upload an image
                                                        </Button>
                                                    </div>
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

                                </div>
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