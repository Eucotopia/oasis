'use client'
import React, {ChangeEvent} from "react";
import {TextGenerateEffect} from "@/components/type/text-generate-effect";
import {Avatar} from "@nextui-org/avatar";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Textarea,
    useDisclosure
} from "@nextui-org/react";
import ImageUploader from "@/components/file/ImageUploader";
import {BlogRollType, useAddBlogRollMutation} from "@/feature/api/BlogRoll";
import {Image} from "@nextui-org/image";

export default function BlogRoll() {
    const [addBlogRoll, isLoading] = useAddBlogRollMutation()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [blogRoll, setBlogRollState] = React.useState<BlogRollType>({
        title: "",
        description: "",
        link: "",
        avatar: "",
        status: 2
    });
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setBlogRollState((prev) => ({
        ...prev,
        [name]: value
    }))
    const handleAction = async () => {
        try {
            const string1 = await addBlogRoll(blogRoll).unwrap()
            alert(string1)
        } catch (error: any) {

        } finally {
            setBlogRollState({
                title: "",
                description: "",
                link: "",
                avatar: "",
                status: 2
            })
        }
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    body: "flex flex-col justify-center items-center",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 ">Apply for Friend Chain</ModalHeader>
                            <ModalBody>
                                {
                                    blogRoll.avatar.length > 0 ? (
                                        <Image src={blogRoll.avatar} height={200} alt={"avatar"}/>
                                    ) : (
                                        <ImageUploader onUpload={(url: string) => {
                                            setBlogRollState({
                                                ...blogRoll,
                                                avatar: url
                                            })
                                        }}/>
                                    )
                                }
                                <Input isRequired placeholder="Enter website title" name={"title"}
                                       onChange={handleChange}
                                       labelPlacement={"outside"} label={"Title"} radius={"sm"} size={"lg"}/>

                                <Input isRequired placeholder="Enter website link" name={"link"} onChange={handleChange}
                                       labelPlacement={"outside"} label={"Link"} radius={"sm"} size={"lg"}/>

                                <Textarea
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    name={"description"}
                                    onChange={handleChange}
                                    placeholder="Enter website description"
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={handleAction}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className={"h-screen flex flex-col"}>
                <p className={"text-2xl font-bold md:text-4xl lg:text-5xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"}>Blogroll
                    Brigade</p>
                <TextGenerateEffect
                    words={"The journey of creating and sharing content is not for the faint of heart. It takes grit, determination, and a passion for spreading ideas and inspiration to keep going, especially when it comes to writing blog posts. Yet, you persist, and that's something to be proud of!"}/>
            </div>
            <Button onPress={onOpen} size={"lg"}>Open Modal</Button>
            {/*recommend*/}
            <div className={"flex flex-col items-start gap-4"}>
                <p className={"text-2xl font-bold"}>Recommend</p>
                <div className={"grid grid-cols-4 gap-4"}>
                    <div
                        className={"flex flex-row p-4 py-3 bg-content1 rounded-md gap-4 items-center justify-start hover:cursor-pointer hover:scale-110"}>
                        <div>
                            <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                    className="w-20 h-20 text-large"/>
                        </div>
                        <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                            <p className={"text-xl"}>title</p>
                            <p className={"text-sm text-default-500 line-clamp-1 "}>descriptiondescriptiondescriptiondescscriptiondescriptiondescriptiondescription</p>
                        </div>
                    </div>
                    <div className={"flex flex-row p-4 py-3 bg-content1 rounded-md gap-4 items-center justify-start "}>
                        <div>
                            <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                    className="w-20 h-20 text-large"/>
                        </div>
                        <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                            <p className={"text-xl"}>title</p>
                            <p className={"text-sm text-default-500 line-clamp-1 "}>descriptiondescriptiondescriptiondescscriptiondescriptiondescriptiondescription</p>
                        </div>
                    </div>
                    <div className={"flex flex-row p-4 py-3 bg-content1 rounded-md gap-4 items-center justify-start "}>
                        <div>
                            <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                    className="w-20 h-20 text-large"/>
                        </div>
                        <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                            <p className={"text-xl"}>title</p>
                            <p className={"text-sm text-default-500 line-clamp-1 "}>descriptiondescriptiondescriptiondescscriptiondescriptiondescriptiondescription</p>
                        </div>
                    </div>
                    <div className={"flex flex-row p-4 py-3 bg-content1 rounded-md gap-4 items-center justify-start "}>
                        <div>
                            <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                    className="w-20 h-20 text-large"/>
                        </div>
                        <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                            <p className={"text-xl"}>title</p>
                            <p className={"text-sm text-default-500 line-clamp-1 "}>descriptiondescriptiondescriptiondescscriptiondescriptiondescriptiondescription</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
