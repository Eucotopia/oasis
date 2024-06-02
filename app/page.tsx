'use client'
import React, {useState} from "react";
import {Icon} from "@iconify/react";
import {
    Accordion, AccordionItem, Avatar,
    Button, Chip, cn, Popover, PopoverContent, PopoverTrigger, Spacer, Textarea,
} from "@nextui-org/react";
import {useAddFaqMutation, useGetFaqsByAnswerQuery} from "@/feature/api/faqApi";
import ScrollingBanner from "@/components/scrolling/scrolling-banner";
import {useMediaQuery} from "usehooks-ts";
import {
    Android,
    AppleLogo,
    CSSLogo,
    HtmlLogo,
    MusicLogo, MysqlLogo,
    PlayStationLogo, RabbitMQ,
    ReactLogo, Redis, RiotGame, SpringBoot, Swift,
    SwitchLogo,
    TypeScriptLogo
} from "@/components/icons";

const Life = [
    {
        key: "logo-1",
        logo: <AppleLogo/>
    },
    {
        key: "logo-2",
        logo: <MusicLogo/>

    },
    {
        key: "logo-3",
        logo: <SwitchLogo/>

    },
    {
        key: "logo-4",
        logo: <PlayStationLogo/>


    },
    {
        key: "logo-5",
        logo: <RiotGame/>
    }
];
const Survive = [
    {
        key: "logo-1",
        logo: <Android/>
    },
    {
        key: "logo-2",
        logo: <Swift/>

    },
    {
        key: "logo-3",
        logo: <RabbitMQ/>

    },
    {
        key: "logo-4",
        logo: <Redis/>


    },
    {
        key: "logo-5",
        logo: <SpringBoot/>

    },
    {
        key: "logo-6",
        logo: <MysqlLogo/>

    },
    {
        key: "logo-7",
        logo: <CSSLogo/>


    },
    {
        key: "logo-8",
        logo: <HtmlLogo/>

    },
    {
        key: "logo-9",
        logo: <TypeScriptLogo/>

    },
    {
        key: "logo-10",
        logo: <ReactLogo/>

    },
];
type Testimonial = {
    avatar: string;
    name: string;
    role: string;
    content: string;
};

const testimonials: Testimonial[] = [
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        name: "John Doe",
        role: "CEO at Ipsum",
        content:
            "Acme has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
        name: "Jane Smith",
        role: "Marketing Director at Lorem",
        content:
            "I used to be a Incflow user. I relied on Incflow for all my freelance projects. However, when Acme was launched, I was amazed by its smooth performance. Typically, it took me around 5 days to complete websites, but with Acme, I did it in just 2 days. @Acme is impressive! 🔥",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260250",
        name: "Alice Johnson",
        role: "Project Manager at Consectetur",
        content: "Acme's project management tools have streamlined our workflow tremendously.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260251",
        name: "Michael Brown",
        role: "Lead Developer at Adipiscing",
        content: "The development features in Acme  are top-notch and have increased our productivity.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260252",
        name: "Linda Davis",
        role: "Creative Director at Elit",
        content:
            "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260253",
        name: "David Wilson",
        role: "CTO at Dolor",
        content:
            "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260254",
        name: "Richard Miller",
        role: "CEO at Sit",
        content:
            "Acme offers an unparalleled design experience with its seamless integration of design and development. It's user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to quickly bring their ideas to life.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260255",
        name: "Susan Wilson",
        role: "Marketing Director at Amet",
        content:
            "The user interface of Acme  is intuitive and easy to navigate, making my job much easier.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260256",
        name: "Maria Jones",
        role: "Project Manager at Consectetur",
        content: "Acme 's project management tools have streamlined our workflow tremendously.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260257",
        name: "Paul Taylor",
        role: "Lead Developer at Adipiscing",
        content:
            "My experience with Acme has been nothing short of exceptional. It has elevated my design process, empowered collaboration, and helped me deliver outstanding results. If you're a designer looking to level up your skills and create stunning interactive designs, I highly recommend giving Acme a try.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260258",
        name: "Karen Wilson",
        role: "Creative Director at Elit",
        content:
            "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260259",
        name: "Mark Davis",
        role: "CTO at Dolor",
        content:
            "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260260",
        name: "John Doe",
        role: "CEO at Ipsum",
        content:
            "Acme  has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260261",
        name: "Jane Smith",
        role: "Marketing Director at Lorem",
        content:
            "Acme has helped me to create much more functional no-code sites for my customers due to the increased speed and freedom to create the UI.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260262",
        name: "Alice Johnson",
        role: "Project Manager at Consectetur",
        content:
            "Acme has helped me to create much more functional no-code sites for my customers due to the increased speed and freedom to create the UI.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260263",
        name: "Michael Brown",
        role: "Lead Developer at Adipiscing",
        content: "The development features in Acme  are top-notch and have increased our productivity.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260264",
        name: "Linda Davis",
        role: "Creative Director at Elit",
        content:
            "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260265",
        name: "David Wilson",
        role: "CTO at Dolor",
        content:
            "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
    },
    {
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260266",
        name: "Richard Miller",
        role: "CEO at Sit",
        content:
            "Acme  has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
    },
];
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
    const testimonials1 = testimonials.slice(0, 4);
    const testimonials2 = testimonials.slice(4, 8);
    const testimonials3 = testimonials.slice(8, 12);
    const testimonials4 = testimonials.slice(12, 16);

    const isMobile = useMediaQuery("(max-width: 768px)");

    const fistColumn = React.useMemo(
        () => (isMobile ? testimonials : testimonials1),
        [isMobile, testimonials1],
    );
    if (!faqs) return null
    return (
        <>
            <section className="bg-fixed h-svh dark:bg-hero w-screen absolute"/>
            <section className={"flex flex-col justify-center items-center lg:pt-36 pt-28 gap-5"}>
                <Chip
                    variant="solid"
                    className={"dark:text-[#ff8c00] dark:bg-[#ff8c001f] px-3 py-4 mb-3"}
                    startContent={
                        <Icon icon="line-md:star-pulsating-loop"></Icon>
                    }>
                    <strong className={"ml-1 mr-2"}>NEW</strong>
                    Powered by Advanced AI Technology
                </Chip>
                <div className={"text-4xl md:text-6xl font-extrabold w-[600px]"}>
                    Most Advance&nbsp;
                    <i className={"bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081] "}>
                        AI Headshot&nbsp;
                    </i>
                    Generator
                </div>
                <div className={"max-w-2xl text-base text-default-500 text-center"}>
                    Fulgent AI uses the latest technology to ensure that the generated images closely resemble actual
                    photographs, making them suitable for professional use.
                </div>
                <Button
                    variant={"solid"}
                    size={"lg"}
                    color={"warning"}
                    radius={"lg"}
                    startContent={
                        <Icon icon="line-md:star-pulsating-loop"></Icon>
                    }
                >
                    Open Studio
                </Button>
                <section className="w-full px-6 py-20 sm:py-32 lg:px-8 lg:py-36">
                    <ScrollingBanner shouldPauseOnHover duration={50} gap="40px">
                        {Life.map(({key, logo}) => (
                            <div key={key} className="flex items-center justify-center text-foreground">
                                {logo}
                            </div>
                        ))}
                    </ScrollingBanner>
                    <Spacer y={12}/>
                    <ScrollingBanner isReverse shouldPauseOnHover duration={50} gap="40px">
                        {Survive.map(({key, logo}) => (
                            <div key={key} className="flex items-center justify-center text-foreground">
                                {logo}
                            </div>
                        ))}
                    </ScrollingBanner>
                </section>
            </section>
            <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
                <div className={"flex flex-col justify-center items-center gap-6"}>
                    <Chip color={"warning"}>Featured Reviews</Chip>
                    <h1 className={"max-w-xl md:text-4xl text-2xl leading-tight font-extrabold"}>Reviews from Our
                        Community</h1>
                    <p className={"max-w-xl text-default-500"}>See what our users have to say about their experience
                        with Fulgent AI.</p>
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-8 mt-24">
                    <ScrollingBanner isVertical duration={isMobile ? 20 : 12} shouldPauseOnHover={false}>
                        {fistColumn.map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}
                            >
                                <div className="flex items-center gap-2">
                                    <Avatar alt={testimonial.name} className="h-7 w-7 " size="sm"
                                            src={testimonial.avatar}/>
                                    <span className="text-small text-foreground">{testimonial.name}</span>
                                </div>
                                <p className="text-default-700">{testimonial.content}</p>
                            </div>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden sm:flex"
                        duration={10}
                        shouldPauseOnHover={false}
                    >
                        {testimonials2.map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}
                            >
                                <div className="flex items-center gap-2">
                                    <Avatar alt={testimonial.name} className="h-7 w-7" size="sm"
                                            src={testimonial.avatar}/>
                                    <span className="text-small text-foreground">{testimonial.name}</span>
                                </div>
                                <p className="text-default-700">{testimonial.content}</p>
                            </div>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden md:flex"
                        duration={10}
                        shouldPauseOnHover={false}
                    >
                        {testimonials3.map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className={cn("flex flex-col gap-2.5 rounded-medium bg-content1 p-5 shadow-small")}
                            >
                                <div className="flex items-center gap-2">
                                    <Avatar alt={testimonial.name} className="h-7 w-7" size="sm"
                                            src={testimonial.avatar}/>
                                    <span className="text-small text-foreground">{testimonial.name}</span>
                                </div>
                                <p className="text-default-700">{testimonial.content}</p>
                            </div>
                        ))}
                    </ScrollingBanner>
                    {/*<ScrollingBanner*/}
                    {/*    isVertical*/}
                    {/*    className="hidden lg:flex"*/}
                    {/*    duration={10}*/}
                    {/*    shouldPauseOnHover={false}*/}
                    {/*>*/}
                    {/*    {testimonials4.map((testimonial, index) => (*/}
                    {/*        <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />*/}
                    {/*    ))}*/}
                    {/*</ScrollingBanner>*/}
                </div>
            </section>
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
