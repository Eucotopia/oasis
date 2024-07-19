import {PostType} from "@/feature/api/postApi";
import React from "react";
import {useGetUserQuery} from "@/feature/api/authApi";
import {Card, CardBody, CardHeader, Popover, PopoverContent, PopoverTrigger, User} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";
import {UserTwitterCard} from "@/components/user/UserTwitterCard";
import {useRouter} from "next/navigation";

export const PostDetail: React.FC<PostType> = ({authorId, title, summary, id}) => {

    const router = useRouter();

    const {data: user, isLoading} = useGetUserQuery(authorId ?? '', {skip: !authorId});
    if (user === undefined) return null
    return (
        <>
            <Card
                isPressable
                onPress={() => router.push(`/blog/${id}`)}
                classNames={{
                    base: "bg-gradient-to-tl from-content1 via-45% to-background",
                    header: "pb-0 ",
                    body: "text-default-400 text-sm pb-0",
                    footer: "",
                }}>
                <CardHeader>
                    <p className={"line-clamp-1 "}>{title}</p>

                </CardHeader>
                <CardBody>
                    <p className={"line-clamp-3 "}>
                        {summary}
                    </p>
                </CardBody>
                <CardFooter>
                    <Popover showArrow placement="bottom">
                        <PopoverTrigger>
                            <User
                                classNames={{
                                    base: "",
                                    wrapper: "",
                                    name: "text-tiny",
                                    description: "text-[10px]",
                                }}
                                isFocusable
                                as="button"
                                name={user?.username}
                                description={user?.motto}
                                avatarProps={{
                                    size: "sm",
                                    src: `${user?.avatar}`
                                }}
                            />
                        </PopoverTrigger>
                        <PopoverContent className="p-1 ">
                            <UserTwitterCard {...user}/>
                        </PopoverContent>
                    </Popover>
                </CardFooter>
            </Card>
        </>
    )
}