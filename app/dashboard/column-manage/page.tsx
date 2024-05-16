'use client'
import React from "react";
import {Accordion, AccordionItem, Input, ModalHeader, Spinner} from "@nextui-org/react";
import {useGetColumnsQuery} from "@/feature/api/columnApi";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import {Modal, ModalBody, ModalContent, ModalFooter, useDisclosure} from "@nextui-org/modal";


export default function App() {
    const {data: columns, isLoading: isLoadingColumns} = useGetColumnsQuery()
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
                                <Input type={"file"} labelPlacement={"outside-left"} label={"chose image"}/>
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
            <Accordion selectionMode="multiple" variant="splitted">
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