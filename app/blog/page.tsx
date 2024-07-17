'use client'

import {useGetHotPostsQuery, useGetRecentPostsQuery} from "@/feature/api/postApi";
import {Card, CardBody, Chip, DateInput, Image, Popover, PopoverContent, PopoverTrigger, User} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";
import {UserTwitterCard} from "@/components/user/UserTwitterCard";
import {parseDate} from "@internationalized/date";
import ScrollingBanner from "@/components/scrolling/scrolling-banner";
import {useMediaQuery} from "usehooks-ts";
import {ChipProps} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useGetHotCategoriesQuery} from "@/feature/api/categoryApi";
import {BullhornOutline, F7HourglassBottomhalfFill} from "@/components/icons";

// Define an array of possible colors based on ChipProps['color']
const colors: ChipProps['color'][] = ["default", "primary", "secondary", "success", "warning", "danger"];

// Function to get a random color
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

export default function BlogPage() {

    const {data: hotPosts, isLoading: isGetHotPostsLoading} = useGetHotPostsQuery();
    const {data: hotCategories, isLoading: isGetHotCategoriesLoading} = useGetHotCategoriesQuery();

    const {data: recentPosts, isLoading: isGetRecentPostsLoading} = useGetRecentPostsQuery()

    const router = useRouter();

    const isMobile = useMediaQuery("(max-width: 768px)");

    if (hotPosts === undefined || hotCategories == undefined || recentPosts == undefined) return null;

    return (
        <>
            <div className={"w-container px-6"}>
                <div className={"grid grid-cols-7 gap-14 "}>
                    <div className={"col-span-5"}>
                        <div className={"flex flex-col gap-2"}>
                            <div className={"flex flex-row items-center gap-2 font-extrabold"}>
                                <F7HourglassBottomhalfFill size={40}/>
                                <p className={"text-3xl"}>Today&apos;s top highlights</p>
                            </div>
                            <p className={"text-md text-default-500"}>
                                Latest breaking news, pictures, videos, and special reports
                            </p>
                            <div className={"grid grid-cols-2 gap-6 mt-8"}>
                                {hotPosts.map((post, index) => (
                                    <Card
                                        shadow="sm"
                                        isPressable
                                        onPress={() => router.push(`/blog/${post.id}`)}
                                        key={index}
                                    >
                                        <CardBody
                                            className="overflow-visible pt-4  rounded-b-none relative flex-grow-0 flex-shrink-0 ">
                                            <Image
                                                alt={post.title}
                                                shadow="sm"
                                                radius={"lg"}
                                                width="100%"
                                                className="w-full object-cover"
                                                src={post.cover}
                                                // fallbackSrc="https://via.placeholder.com/700x600"
                                            />
                                            <div className={"absolute top-2 left-2 z-20 flex flex-row gap-2"}>
                                                {
                                                    post.categories.map((category, index) => (
                                                        <Chip key={index} radius={"sm"} size={"sm"}
                                                              color={getRandomColor()}>{category.name}</Chip>
                                                    ))
                                                }
                                            </div>
                                        </CardBody>
                                        <CardFooter
                                            className="flex flex-col items-start justify-between text-start gap-4 h-full ">
                                            <div className={"flex flex-col gap-2"}>
                                                <b className={"text-2xl"}>{post.title}</b>
                                                <p className="text-default-500 line-clamp-3">{post.summary}</p>
                                            </div>
                                            <div className={"flex flex-row justify-between gap-4 w-full"}>
                                                <Popover showArrow placement="bottom">
                                                    <PopoverTrigger>
                                                        <User
                                                            as="button"
                                                            name={post.user?.username}
                                                            description={post.user?.motto ? post.user.motto : "lose"}
                                                            className="transition-transform"
                                                            avatarProps={{
                                                                src: post.user?.avatar ? `${post.user.avatar}` : "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                                            }}
                                                            classNames={{
                                                                wrapper: "max-w-52 line-clamp-1 overflow-x-scroll scrollbar-hide ",
                                                                name: "max-w-52 line-clamp-1 overflow-x-scroll scrollbar-hide",
                                                                description: "max-w-52 line-clamp-1 overflow-x-scroll scrollbar-hide"
                                                            }}
                                                        />
                                                    </PopoverTrigger>
                                                    <PopoverContent className="p-1">
                                                        <UserTwitterCard/>
                                                    </PopoverContent>
                                                </Popover>
                                                <DateInput
                                                    label={null}
                                                    size="sm"
                                                    isReadOnly
                                                    className={"max-w-28 border-none bg-inherit "}
                                                    defaultValue={post.createTime ? parseDate(post.createTime.split(" ")[0]) : parseDate("2024-04-04")}
                                                />
                                            </div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-2"}>
                        <div className={"flex flex-col"}>
                            <p className={"mt-4 mb-3 text-2xl font-extrabold"}>Trending topics</p>
                            <div className={"flex flex-col gap-6"}>
                                {
                                    hotCategories.map((category, index) => (
                                        <div key={index}>{category.name}</div>
                                    ))
                                }
                                <p className={"underline text-center"}>View all categories</p>
                            </div>
                        </div>
                        <div className={"flex flex-col mt-4"}>
                            <p className={"mt-4 mb-3 text-2xl font-extrabold"}>Recent post</p>
                            <div className={"flex flex-col gap-6"}>
                                {
                                    recentPosts.map((post, index) => (
                                        <>
                                            <div>{post.title}</div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"flex flex-col gap-2 mt-8 "}>
                        <div className={"flex flex-row items-center gap-2 font-extrabold"}>
                            <BullhornOutline size={40}/>
                            <p className={"text-3xl"}>Sponsored news</p>
                        </div>
                    </div>
                    <ScrollingBanner isVertical={false} duration={isMobile ? 200 : 120} shouldPauseOnHover={false}>
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <Image
                            width={300}
                            height={200}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                    </ScrollingBanner>
                </div>
            </div>
        </>
    );
}
