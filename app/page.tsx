'use client'
import React, {useState} from "react";
import {Icon} from "@iconify/react";
import {
    Button, CardHeader, Chip, cn, Image, Snippet
} from "@nextui-org/react";
import {useAddFaqMutation, useGetFaqsByAnswerQuery} from "@/feature/api/faqApi";
import NextLink from "next/link";
import {
    Blast,
    Burst,
    Cherry,
    Circle,
    GameIcon,
    HeartShaped, Life,
    Line,
    Pointed, ProgramIcon,
    Smile
} from "@/components/icons"
import {AnimatePresence, motion} from "framer-motion";
import {ArrowRightIcon} from "@nextui-org/shared-icons";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {useRouter} from "next/navigation";

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [question, setQuestion] = useState<string>();

    const router = useRouter();


    const {data: faqs} = useGetFaqsByAnswerQuery()

    const [addFaq] = useAddFaqMutation();

    const addFaqHandler = () => {
        if (question != null && question.length > 0) {
            addFaq({question: question, answer: ""})
            setIsOpen(false)
        } else {
            setIsOpen(true);
        }
    }

    if (!faqs) return null
    return (
        <>

            <section className="fixed h-svh dark:bg-hero w-screen"/>
            <Burst
                size={900}
                opacity={0.4}
                style={{
                    position: "absolute",
                    right: "0%",
                    top: "0%",
                    overflow: "hidden",
                    maxHeight: "100vh",
                    maxWidth: "100vw"
                }}
            />
            <Pointed style={{position: "absolute", left: "11%", top: "1%", maxHeight: "100vh", maxWidth: "100vw"}}
                     size={500} opacity={0.6}/>
            <Smile style={{position: "absolute", left: "12%", top: "40%", maxHeight: "100vh", maxWidth: "100vw"}}
                   size={200} opacity={0.6} fill={"#9263FF"}/>
            <Cherry opacity={0.5}
                    style={{position: "absolute", left: "5%", top: "20%", maxHeight: "100vh", maxWidth: "100vw"}}
                    size={200} fill={"#FF2B4B"}/>
            <HeartShaped opacity={0.5}
                         style={{position: "absolute", left: "4%", top: "65%", maxHeight: "100vh", maxWidth: "100vw"}}
                         size={250}
                         fill={"#3B6CFF"}/>
            <Circle opacity={0.5}
                    style={{position: "absolute", left: "20%", top: "60%", maxHeight: "100vh", maxWidth: "100vw"}}
                    size={200} fill={"#DBE7FF"}/>
            <Line fill={"#FF3DC5"}
                  style={{position: "absolute", left: "20%", top: "80%", maxHeight: "100vh", maxWidth: "100vw"}}
                  size={150}/>
            <section className="flex flex-col justify-center items-center lg:pt-36 pt-28 gap-5 px-4 ">
                <Chip
                    variant="solid"
                    radius={"sm"}
                    color={"warning"}
                    startContent={<Icon icon="ic:twotone-apple" height={20}/>}
                >
                    Coming in swiftly.
                </Chip>
                <div
                    className={"text-4xl md:text-7xl drop-shadow-md  font-extrabold  text-center "}>
                    <AnimatePresence>
                        {"Only you ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {opacity: 0, x: -20},
                                    visible: {opacity: 1, x: 0},
                                }}
                                transition={{duration: 0.5, delay: i * 0.04}}
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.span>
                        ))}
                        {"can".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {opacity: 0, x: -20},
                                    visible: {opacity: 1, x: 0},
                                }}
                                transition={{duration: 0.5, delay: 9 * 0.04 + i * 0.04}}
                                className={"italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081] "}
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </div>
                <div
                    className={"text-4xl md:text-7xl drop-shadow-md font-extrabold w-full text-center"}>
                    <AnimatePresence>
                        {"control ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {opacity: 0, x: -20},
                                    visible: {opacity: 1, x: 0},
                                }}
                                transition={{duration: 0.5, delay: 12 * 0.04 + i * 0.04}}
                                className={"italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081]"}
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.span>
                        ))}
                        {"your future.".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {opacity: 0, x: -20},
                                    visible: {opacity: 1, x: 0},
                                }}
                                transition={{duration: 0.5, delay: 20 * 0.04 + i * 0.04}}
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2}}
                    variants={{
                        hidden: {filter: "blur(10px)", opacity: 0},
                        visible: {filter: "blur(0px)", opacity: 1},
                    }}
                    className={cn(
                        "max-w-lg md:max-w-xl lg:max-w-2xl text-base text-default-400 text-center mb-5 px-4 md:px-0 mt-2",
                    )}
                >
                    When you feel like hope is gone, look inside you and search your soul. You will find a hero lies in
                    you. Dreams are hard to follow, but don&apos;t let anyone steal your dream.
                </motion.h1>
                <Button
                    as={NextLink}
                    href="/about"
                    variant="solid"
                    size="lg"
                    color="warning"
                    radius="lg"
                    className="uppercase"
                    endContent={
                        <ArrowRightIcon/>
                    }
                >
                    About Me
                </Button>
                <Blast opacity={0.5} size={250} fill={"#FFAA4F"} style={{marginLeft: "-20rem"}}/>
            </section>

            <section className={"flex flex-row gap-8 p-4 max-w-7xl mx-auto"}>
                <Card
                    classNames={{
                        base: "hover:scale-110",
                        body: "hover:cursor-pointer p-0"
                    }}
                    className="w-full h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start ">
                        <p className="text-tiny text-white/60 uppercase font-bold">Explore the Gaming World</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <CardBody onClick={() => router.push("/category/game")}>
                        <GameIcon/>
                    </CardBody>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-110",
                    }}
                    isFooterBlurred
                    className="w-full h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <GameIcon/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-110",
                    }}
                    isFooterBlurred
                    className="w-full h-[300px] flex flex-1 "
                >

                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <ProgramIcon/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-110",
                    }}
                    isFooterBlurred
                    className="w-full h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <Life/>
                </Card>
            </section>
            {/*</section>*/}
            {/*<section className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">*/}
            {/*    <div className={"flex flex-col justify-center items-center gap-6"}>*/}
            {/*        <Chip color={"warning"}>Featured Reviews</Chip>*/}
            {/*        <h1 className={"max-w-xl md:text-4xl text-2xl leading-tight font-extrabold"}>Reviews from Our*/}
            {/*            Community</h1>*/}
            {/*        <p className={"max-w-xl text-default-500"}>See what our users have to say about their experience*/}
            {/*            with Fulgent AI.</p>*/}
            {/*    </div>*/}
            {/*    <div className="columns-1 sm:columns-2 md:columns-3 gap-8 mt-24">*/}
            {/*        <ScrollingBanner isVertical duration={isMobile ? 20 : 12} shouldPauseOnHover={false}>*/}
            {/*            {fistColumn.map((testimonial, index) => (*/}
            {/*                <div*/}
            {/*                    key={`${testimonial.name}-${index}`}*/}
            {/*                    className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center gap-2">*/}
            {/*                        <Avatar alt={testimonial.name} className="h-7 w-7 " size="sm"*/}
            {/*                                src={testimonial.avatar}/>*/}
            {/*                        <span className="text-small text-foreground">{testimonial.name}</span>*/}
            {/*                    </div>*/}
            {/*                    <p className="text-default-700">{testimonial.content}</p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </ScrollingBanner>*/}
            {/*        <ScrollingBanner*/}
            {/*            isVertical*/}
            {/*            className="hidden sm:flex"*/}
            {/*            duration={10}*/}
            {/*            shouldPauseOnHover={false}*/}
            {/*        >*/}
            {/*            {testimonials2.map((testimonial, index) => (*/}
            {/*                <div*/}
            {/*                    key={`${testimonial.name}-${index}`}*/}
            {/*                    className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center gap-2">*/}
            {/*                        <Avatar alt={testimonial.name} className="h-7 w-7" size="sm"*/}
            {/*                                src={testimonial.avatar}/>*/}
            {/*                        <span className="text-small text-foreground">{testimonial.name}</span>*/}
            {/*                    </div>*/}
            {/*                    <p className="text-default-700">{testimonial.content}</p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </ScrollingBanner>*/}
            {/*        <ScrollingBanner*/}
            {/*            isVertical*/}
            {/*            className="hidden md:flex"*/}
            {/*            duration={10}*/}
            {/*            shouldPauseOnHover={false}*/}
            {/*        >*/}
            {/*            {testimonials3.map((testimonial, index) => (*/}
            {/*                <div*/}
            {/*                    key={`${testimonial.name}-${index}`}*/}
            {/*                    className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center gap-2">*/}
            {/*                        <Avatar alt={testimonial.name} className="h-7 w-7" size="sm"*/}
            {/*                                src={testimonial.avatar}/>*/}
            {/*                        <span className="text-small text-foreground">{testimonial.name}</span>*/}
            {/*                    </div>*/}
            {/*                    <p className="text-default-700">{testimonial.content}</p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </ScrollingBanner>*/}
            {/*        /!*<ScrollingBanner*!/*/}
            {/*        /!*    isVertical*!/*/}
            {/*        /!*    className="hidden lg:flex"*!/*/}
            {/*        /!*    duration={10}*!/*/}
            {/*        /!*    shouldPauseOnHover={false}*!/*/}
            {/*        /!*>*!/*/}
            {/*        /!*    {testimonials4.map((testimonial, index) => (*!/*/}
            {/*        /!*        <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />*!/*/}
            {/*        /!*    ))}*!/*/}
            {/*        /!*</ScrollingBanner>*!/*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section>*/}
            {/*    /!*FAQ*!/*/}
            {/*    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40">*/}
            {/*        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">*/}
            {/*            <h2 className="w-full max-w-3xl bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text px-2 text-center text-3xl font-bold leading-7 tracking-tight text-transparent md:text-5xl">*/}
            {/*                <span className="inline-block md:hidden">Eucotopia&apos;s FAQs</span>*/}
            {/*                <span className="hidden md:inline-block">Eucotopia&apos;s Frequently asked questions</span>*/}
            {/*            </h2>*/}
            {/*            <div className={"flex flex-row gap-4"}>*/}
            {/*                /!*<Button*!/*/}
            {/*                /!*    disableAnimation*!/*/}
            {/*                /!*    className="bg-gradient-to-br bg-transparent from-foreground to-foreground-600 font-medium text-background"*!/*/}
            {/*                /!*    endContent={<Icon icon="lucide:chevron-right" width={24}/>}*!/*/}
            {/*                /!*    variant="shadow"*!/*/}
            {/*                /!*>*!/*/}
            {/*                /!*    Learn More*!/*/}
            {/*                /!*</Button>*!/*/}
            {/*                <Popover shouldBlockScroll={false} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>*/}
            {/*                    <PopoverTrigger>*/}
            {/*                        <Button variant="bordered">Ask a question</Button>*/}
            {/*                    </PopoverTrigger>*/}
            {/*                    <PopoverContent className="w-[340px] p-3">*/}
            {/*                        <form className="flex w-full flex-col gap-2" onSubmit={(e) => e.preventDefault()}>*/}
            {/*                            <Textarea*/}
            {/*                                aria-label="Feedback"*/}
            {/*                                name="feedback"*/}
            {/*                                placeholder="Ideas or suggestions to improve our product"*/}
            {/*                                variant="faded"*/}
            {/*                                value={question}*/}
            {/*                                onChange={(e) => setQuestion(e.target.value)}*/}
            {/*                            />*/}

            {/*                            /!*<div className="flex w-full items-center justify-end gap-2 px-1">*!/*/}
            {/*                            /!*    <Icon*!/*/}
            {/*                            /!*        className="text-default-400 dark:text-default-300"*!/*/}
            {/*                            /!*        icon="la:markdown"*!/*/}
            {/*                            /!*        width={20}*!/*/}
            {/*                            /!*    />*!/*/}
            {/*                            /!*    <p className="text-tiny text-default-400 dark:text-default-300">*!/*/}
            {/*                            /!*        <Link*!/*/}
            {/*                            /!*            className="text-tiny text-default-500"*!/*/}
            {/*                            /!*            color="foreground"*!/*/}
            {/*                            /!*            href="https://guides.github.com/features/mastering-markdown/"*!/*/}
            {/*                            /!*            rel="noreferrer"*!/*/}
            {/*                            /!*            target="_blank"*!/*/}
            {/*                            /!*        >*!/*/}
            {/*                            /!*            Markdown*!/*/}
            {/*                            /!*            <Icon className="[&>path]:stroke-[2px]"*!/*/}
            {/*                            /!*                  icon="solar:arrow-right-up-linear"/>*!/*/}
            {/*                            /!*        </Link>*!/*/}
            {/*                            /!*        &nbsp;supported.*!/*/}
            {/*                            /!*    </p>*!/*/}
            {/*                            /!*</div>*!/*/}

            {/*                            <Divider className="my-2"/>*/}

            {/*                            <div className="flex w-full items-center justify-end">*/}
            {/*                                <Button color="primary" size="sm" type="submit" onClick={addFaqHandler}>*/}
            {/*                                    Submit*/}
            {/*                                </Button>*/}
            {/*                            </div>*/}
            {/*                        </form>*/}
            {/*                    </PopoverContent>*/}
            {/*                </Popover>*/}
            {/*            </div>*/}
            {/*            <Accordion*/}
            {/*                fullWidth*/}
            {/*                keepContentMounted*/}
            {/*                itemClasses={{*/}
            {/*                    base: "px-0 md:px-2 md:px-6",*/}
            {/*                    title: "font-medium",*/}
            {/*                    trigger: "py-6 flex-row-reverse",*/}
            {/*                    content: "pt-0 pb-6 text-base text-default-500",*/}
            {/*                    indicator: "rotate-0 data-[open=true]:-rotate-45",*/}
            {/*                }}*/}
            {/*                items={faqs}*/}
            {/*            >*/}
            {/*                {faqs.map((item, i) => (*/}
            {/*                    <AccordionItem*/}
            {/*                        key={i}*/}
            {/*                        indicator={<Icon className="text-secondary" icon="lucide:plus" width={24}/>}*/}
            {/*                        title={item.question}*/}
            {/*                    >*/}
            {/*                        {item.answer}*/}
            {/*                    </AccordionItem>*/}
            {/*                ))}*/}
            {/*            </Accordion>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</section>*/}
            {/*<ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}*/}
            {/*             className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>*/}
        </>
    );
}
