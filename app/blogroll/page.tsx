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
    ModalHeader, Spacer, Textarea,
    useDisclosure
} from "@nextui-org/react";
import ImageUploader from "@/components/file/ImageUploader";
import {
    BlogRollType,
    useAddBlogRollMutation,
    useGetBlogRollsQuery, useGetHighQualityBlogRollsQuery,
    useGetRecommendedBlogRollsQuery
} from "@/feature/api/blogRoll";
import {Image} from "@nextui-org/image";
import ScrollingBanner from "@/components/scrolling/scrolling-banner";

import {
    Logo1, Logo10,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7, Logo8, Logo9
} from "@/app/blogroll/logos";
import TeamMemberCard, {type TeamMember} from "@/app/blogroll/basic-team-page/team-member-card";

const teamMembers: TeamMember[] = [
    {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        role: "CEO",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@john-doe",
            linkedin: "john-doe",
            github: "@john-doe",
        },
    },
    {
        name: "Jane Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
        role: "CTO",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@jane-doe",
            linkedin: "jane-doe",
            github: "@jane-doe",
        },
    },
    {
        name: "Robert Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29066708c",
        role: "Principal Designer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@robert-doe",
            linkedin: "robert-doe",
            github: "@robert-doe",
        },
    },
    {
        name: "Mark Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
        role: "Principal Engineer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@mark-doe",
            linkedin: "mark-doe",
            github: "@mark-doe",
        },
    },
    {
        name: "Frank Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29526708c",
        role: "Frontend Engineer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@frank-doe",
            linkedin: "frank-doe",
            github: "@frank-doe",
        },
    },
    {
        name: "Zoe Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29926708c",
        role: "Backend Engineer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@zoe-doe",
            linkedin: "zoe-doe",
            github: "@zoe-doe",
        },
    },
    {
        name: "Bob Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29b26708c",
        role: "Product Manager",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@bob-doe",
            linkedin: "bob-doe",
            github: "@bob-doe",
        },
    },
    {
        name: "Francis Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258b14e29326708c",
        role: "Product Designer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@francis-doe",
            linkedin: "francis-doe",
            github: "@francis-doe",
        },
    },
    {
        name: "Milan Doe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29326708c",
        role: "Customer Support",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        social: {
            twitter: "@milan-doe",
            linkedin: "milan-doe",
            github: "@milan-doe",
        },
    },
];
const logos = [
    {
        key: "logo-1",
        logo: Logo1,
    },
    {
        key: "logo-2",
        logo: Logo2,
    },
    {
        key: "logo-3",
        logo: Logo3,
    },
    {
        key: "logo-4",
        logo: Logo4,
    },
    {
        key: "logo-5",
        logo: Logo5,
    },
    {
        key: "logo-6",
        logo: Logo6,
    },
    {
        key: "logo-7",
        logo: Logo7,
    },
    {
        key: "logo-8",
        logo: Logo8,
    },
    {
        key: "logo-9",
        logo: Logo9,
    },
    {
        key: "logo-10",
        logo: Logo10,
    },
];
export default function BlogRoll() {

    const [addBlogRoll] = useAddBlogRollMutation()

    const {data: blogRollList, isLoading} = useGetBlogRollsQuery()

    const {data: recommendBlogRoll, isLoading: isRecommendBlogRollLoading} = useGetRecommendedBlogRollsQuery()

    const {data: highQualityBlogRoll, isLoading: isHighQualityBlogRoll} = useGetHighQualityBlogRollsQuery()

    const randomAccessBlogRoll = () => {

    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [blogRoll, setBlogRollState] = React.useState<BlogRollType>({
        title: "",
        description: "",
        link: "",
        avatar: "",
        status: 2,
        level: 0
    });
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setBlogRollState((prev) => ({
        ...prev,
        [name]: value
    }))
    const handleAction = async () => {
        try {
            const string1 = await addBlogRoll(blogRoll).unwrap()
        } catch (error: any) {

        } finally {
            setBlogRollState({
                title: "",
                description: "",
                link: "",
                avatar: "",
                status: 2,
                level: 0
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

            <Button color={"secondary"} size={"lg"}>random access</Button>
            <Button onPress={onOpen} size={"lg"} color={"success"}>Apply</Button>

            {/*<section className="w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">*/}
            {/*    <ScrollingBanner shouldPauseOnHover duration={50} gap="40px">*/}
            {/*        {logos.map(({key, logo}) => (*/}
            {/*            <div key={key} className="flex items-center justify-center text-foreground">*/}
            {/*                {logo}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </ScrollingBanner>*/}
            {/*    <Spacer y={12}/>*/}
            {/*    <ScrollingBanner isReverse shouldPauseOnHover duration={50} gap="40px">*/}
            {/*        {logos.map(({key, logo}) => (*/}
            {/*            <div key={key} className="flex items-center justify-center text-foreground">*/}
            {/*                {logo}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </ScrollingBanner>*/}
            {/*</section>*/}

            {/*High Quality*/}
            <div className={"flex flex-col items-start gap-4 mb-8 w-full"}>
                <p className={"text-2xl font-bold"}>Active</p>
                <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"}>
                    {
                        highQualityBlogRoll?.map((roll) => (
                            <div
                                key={roll.id}
                                className={"flex flex-row shadow-small p-4 py-3 bg-content1 rounded-md gap-4 items-center justify-start hover:cursor-pointer hover:scale-110"}>
                                <div>
                                    <Avatar isBordered radius="sm" src={roll.avatar} showFallback
                                            className="w-20 h-20 text-large"/>
                                </div>
                                <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                                    <p className={"text-xl"}>{roll.title}</p>
                                    <p className={"text-sm text-default-500 line-clamp-1 "}>{roll.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*recommend*/}
            <div className={"flex flex-col items-start gap-4  mb-8"}>
                <p className={"text-2xl font-bold"}>Recommend</p>
                <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"}>
                    {
                        recommendBlogRoll?.map((roll) => (
                            <div
                                key={roll.id}
                                className={"flex flex-row p-4 py-3 shadow-small bg-content1 rounded-md gap-4 items-center justify-start hover:cursor-pointer hover:scale-110"}>
                                <div>
                                    <Avatar isBordered radius="sm" src={roll.avatar}
                                            showFallback
                                            className="w-20 h-20 text-large"/>
                                </div>
                                <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                                    <p className={"text-xl"}>{roll.title}</p>
                                    <p className={"text-sm text-default-500 line-clamp-1 "}>{roll.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*All*/}
            <div className={"flex flex-col items-start gap-4"}>
                <p className={"text-2xl font-bold"}>All</p>
                <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"}>

                    {
                        blogRollList?.map((roll) => (
                            <div
                                key={roll.id}
                                className={"flex flex-row p-4 shadow-small py-3 bg-content1 rounded-md gap-4 items-center justify-start hover:cursor-pointer hover:scale-110"}>
                                <div>
                                    <Avatar isBordered radius="sm" src={roll.avatar}
                                            showFallback
                                            className="w-20 h-20 text-large"/>
                                </div>
                                <div className={"flex flex-col gap-4 mt-14 h-full overflow-hidden"}>
                                    <p className={"text-xl"}>{roll.title}</p>
                                    <p className={"text-sm text-default-500 line-clamp-1 "}>{roll.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
