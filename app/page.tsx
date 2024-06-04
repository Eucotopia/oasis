'use client'
import React, {useState} from "react";
import {Icon} from "@iconify/react";
import {
    Button, Chip,
} from "@nextui-org/react";
import {useAddFaqMutation, useGetFaqsByAnswerQuery} from "@/feature/api/faqApi";
import ScrollingBanner from "@/components/scrolling/scrolling-banner";
import {Link} from "@nextui-org/link";


export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [question, setQuestion] = useState<string>();

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
            <section className={"flex flex-col justify-center items-center lg:pt-36 pt-28 gap-5"}>
                <Chip
                    variant="solid"
                    className={"dark:text-[#ff8c00] dark:bg-[#ff8c001f] px-3 py-4 mb-3 text-medium uppercase"}
                    startContent={
                        <Icon icon="ic:twotone-apple" height={20}></Icon>
                    }>
                    wwdc 2024 Coming in swiftly.
                </Chip>
                <div className={"text-4xl md:text-6xl font-extrabold w-[574px] text-center"}>
                    Only you &nbsp;
                    <i className={"bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081] "}>
                        can control &nbsp;
                    </i>
                    your future.
                </div>
                <div className={"max-w-2xl text-base text-default-500 text-center mb-5"}>
                    When you feel like hope is gone, look inside you and search your soul. you will find a hero lies in
                    you. dreams are hard to follow, but don&apos;t let anyone steal your dream.
                </div>
                <Button
                    as={Link}
                    href={"/about"}
                    variant={"solid"}
                    size={"lg"}
                    color={"warning"}
                    radius={"lg"}
                    className={"uppercase"}
                >
                    About Me
                </Button>
            </section>
            <section className="w-full px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
                <ScrollingBanner shouldPauseOnHover duration={50} gap="40px">

                </ScrollingBanner>
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
