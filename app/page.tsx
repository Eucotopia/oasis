'use client'
import React from "react";
import Image from "next/image";
import { Carousel,Card} from "@/components/ui/apple-cards-carousel";

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },

    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
];
export default function Home() {

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true}/>
    ));

    // const {data: recentPosts, isLoading: isRecentPostLoading} = useGetRecentPostsQuery()

    return (
        <>
            <div className="w-full h-full py-20">
                <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Get to know your iSad.
                </h2>
                <Carousel items={cards} />
            </div>
            {/*<Tabs key={"solid"}*/}
            {/*      color={"warning"}*/}
            {/*      radius={"full"}*/}
            {/*      classNames={{*/}
            {/*          base: "flex flex-col sm:flex-row justify-center",*/}
            {/*          tabList: "mb-4",*/}
            {/*          tab: "max-w-full sm:max-w-fit",*/}
            {/*          tabContent: "w-full",*/}
            {/*          panel: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4",*/}
            {/*      }}*/}
            {/*      variant={"solid"}*/}
            {/*      aria-label="toggle home">*/}
            {/*    <Tab key="The Buzz Feed" title="The Buzz Feed">*/}
            {/*        {*/}
            {/*            recentPosts?.map((post, index) => (*/}
            {/*                <PostDetail key={index} {...post} />*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </Tab>*/}
            {/*    <Tab key="music" title="查看朋友们">*/}
            {/*        <Card>*/}
            {/*            <CardBody>*/}
            {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
            {/*                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
            {/*                laboris nisi ut aliquip ex ea commodo consequat.*/}
            {/*            </CardBody>*/}
            {/*        </Card>*/}
            {/*    </Tab>*/}
            {/*</Tabs>*/}
            {/*<section className="fixed h-svh dark:bg-hero w-screen"/>*/}
            {/*<Burst*/}
            {/*    size={900}*/}
            {/*    opacity={0.4}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        right: "0%",*/}
            {/*        top: "0%",*/}
            {/*        overflow: "hidden",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Pointed*/}
            {/*    size={300}*/}
            {/*    opacity={0.6}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "20%",*/}
            {/*        top: "10%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<Smile*/}
            {/*    size={200}*/}
            {/*    opacity={0.6}*/}
            {/*    fill={"#9263FF"}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "12%",*/}
            {/*        top: "40%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<Cherry*/}
            {/*    size={200}*/}
            {/*    opacity={0.5}*/}
            {/*    fill={"#FF2B4B"}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "5%",*/}
            {/*        top: "20%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<HeartShaped*/}
            {/*    size={250}*/}
            {/*    opacity={0.5}*/}
            {/*    fill={"#3B6CFF"}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "4%",*/}
            {/*        top: "65%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<Circle*/}
            {/*    size={200}*/}
            {/*    opacity={0.5}*/}
            {/*    fill={"#DBE7FF"}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "20%",*/}
            {/*        top: "60%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<Line*/}
            {/*    fill={"#FF3DC5"}*/}
            {/*    className="hidden md:block"*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        left: "20%",*/}
            {/*        top: "80%",*/}
            {/*        maxHeight: "100vh",*/}
            {/*        maxWidth: "100vw",*/}
            {/*        display: isMobile ? "none" : "block"*/}
            {/*    }}*/}
            {/*    size={150}*/}
            {/*/>*/}
            {/*<section className="flex flex-col justify-center items-center lg:pt-36 pt-28 gap-5 px-4">*/}
            {/*    <Chip*/}
            {/*        variant="solid"*/}
            {/*        radius={"sm"}*/}
            {/*        color={"warning"}*/}
            {/*        startContent={<Apple size={20}/>}*/}
            {/*    >*/}
            {/*        Coming in swiftly.*/}
            {/*    </Chip>*/}
            {/*    <div className="text-4xl md:text-7xl drop-shadow-md font-extrabold text-center">*/}
            {/*        <AnimatePresence>*/}
            {/*            {"Only you ".split("").map((char, i) => (*/}
            {/*                <motion.span*/}
            {/*                    key={i}*/}
            {/*                    initial="hidden"*/}
            {/*                    animate="visible"*/}
            {/*                    exit="hidden"*/}
            {/*                    variants={{*/}
            {/*                        hidden: {opacity: 0, x: -20},*/}
            {/*                        visible: {opacity: 1, x: 0},*/}
            {/*                    }}*/}
            {/*                    transition={{duration: 0.5, delay: i * 0.04}}*/}
            {/*                >*/}
            {/*                    {char === " " ? <span>&nbsp;</span> : char}*/}
            {/*                </motion.span>*/}
            {/*            ))}*/}
            {/*            {"can".split("").map((char, i) => (*/}
            {/*                <motion.span*/}
            {/*                    key={i}*/}
            {/*                    initial="hidden"*/}
            {/*                    animate="visible"*/}
            {/*                    exit="hidden"*/}
            {/*                    variants={{*/}
            {/*                        hidden: {opacity: 0, x: -20},*/}
            {/*                        visible: {opacity: 1, x: 0},*/}
            {/*                    }}*/}
            {/*                    transition={{duration: 0.5, delay: 9 * 0.04 + i * 0.04}}*/}
            {/*                    className="italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081]"*/}
            {/*                >*/}
            {/*                    {char === " " ? <span>&nbsp;</span> : char}*/}
            {/*                </motion.span>*/}
            {/*            ))}*/}
            {/*        </AnimatePresence>*/}
            {/*    </div>*/}
            {/*    <div className="text-4xl md:text-7xl drop-shadow-md font-extrabold w-full text-center">*/}
            {/*        <AnimatePresence>*/}
            {/*            {"control ".split("").map((char, i) => (*/}
            {/*                <motion.span*/}
            {/*                    key={i}*/}
            {/*                    initial="hidden"*/}
            {/*                    animate="visible"*/}
            {/*                    exit="hidden"*/}
            {/*                    variants={{*/}
            {/*                        hidden: {opacity: 0, x: -20},*/}
            {/*                        visible: {opacity: 1, x: 0},*/}
            {/*                    }}*/}
            {/*                    transition={{duration: 0.5, delay: 12 * 0.04 + i * 0.04}}*/}
            {/*                    className="italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081]"*/}
            {/*                >*/}
            {/*                    {char === " " ? <span>&nbsp;</span> : char}*/}
            {/*                </motion.span>*/}
            {/*            ))}*/}
            {/*            {"your future.".split("").map((char, i) => (*/}
            {/*                <motion.span*/}
            {/*                    key={i}*/}
            {/*                    initial="hidden"*/}
            {/*                    animate="visible"*/}
            {/*                    exit="hidden"*/}
            {/*                    variants={{*/}
            {/*                        hidden: {opacity: 0, x: -20},*/}
            {/*                        visible: {opacity: 1, x: 0},*/}
            {/*                    }}*/}
            {/*                    transition={{duration: 0.5, delay: 20 * 0.04 + i * 0.04}}*/}
            {/*                >*/}
            {/*                    {char === " " ? <span>&nbsp;</span> : char}*/}
            {/*                </motion.span>*/}
            {/*            ))}*/}
            {/*        </AnimatePresence>*/}
            {/*    </div>*/}

            {/*    <motion.h1*/}
            {/*        initial="hidden"*/}
            {/*        animate="visible"*/}
            {/*        transition={{duration: 2}}*/}
            {/*        variants={{*/}
            {/*            hidden: {filter: "blur(10px)", opacity: 0},*/}
            {/*            visible: {filter: "blur(0px)", opacity: 1},*/}
            {/*        }}*/}
            {/*        className="max-w-lg md:max-w-xl lg:max-w-2xl text-base text-default-400 text-center mb-5 px-4 md:px-0 mt-2"*/}
            {/*    >*/}
            {/*        When you feel like hope is gone, look inside you and search your soul. You will find a hero lies in*/}
            {/*        you. Dreams*/}
            {/*        are hard to follow, but don&apos;t let anyone steal your dream.*/}
            {/*    </motion.h1>*/}
            {/*    <Button*/}
            {/*        as={NextLink}*/}
            {/*        href="/about"*/}
            {/*        variant="solid"*/}
            {/*        size="lg"*/}
            {/*        color="warning"*/}
            {/*        radius="lg"*/}
            {/*        className="uppercase"*/}
            {/*        endContent={<ArrowRightIcon/>}*/}
            {/*    >*/}
            {/*        About Me*/}
            {/*    </Button>*/}
            {/*    <Blast*/}
            {/*        opacity={0.5}*/}
            {/*        size={250}*/}
            {/*        fill={"#FFAA4F"}*/}
            {/*        style={{*/}
            {/*            marginLeft: "auto",*/}
            {/*            marginRight: "auto",*/}
            {/*            marginTop: "2rem",*/}
            {/*            display: isMobile ? "none" : "block"*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</section>*/}
            {/*<div className={"flex flex-row justify-between items-end max-w-7xl mx-auto px-4"}>*/}
            {/*    <p className={"text-5xl"}>Life & Game</p>*/}
            {/*    <p className={""}>see all</p>*/}
            {/*</div>*/}
            {/*<ScrollShadow*/}
            {/*    className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8  p-4 max-w-7xl mx-auto justify-between">*/}
            {/*    <Card*/}
            {/*        isPressable*/}
            {/*        onPress={() => router.push("/category/game")}*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105 hover:cursor-pointer min-w-72",*/}
            {/*        }}*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 relative"*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-10 top-1 flex-col items-start">*/}
            {/*            <p className="text-tiny text-white/60 uppercase font-bold">Discover </p>*/}
            {/*            <h4 className="text-white/90 font-medium text-xl">Embark on a Zelda Adventure</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <Image*/}
            {/*            src=""*/}
            {/*            alt="Zelda Adventures"*/}
            {/*            className="object-cover w-full h-full"*/}
            {/*        />*/}
            {/*    </Card>*/}
            {/*    <Card*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105  min-w-72",*/}
            {/*        }}*/}
            {/*        isFooterBlurred*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 "*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-10 top-1 flex-col items-start">*/}
            {/*            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>*/}
            {/*            <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <GameIcon/>*/}
            {/*    </Card>*/}
            {/*    <Card*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105 min-w-72",*/}
            {/*        }}*/}
            {/*        isFooterBlurred*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 "*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-10 top-1 flex-col items-start">*/}
            {/*            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>*/}
            {/*            <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <ProgramIcon/>*/}
            {/*    </Card>*/}
            {/*    <Card*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105 min-w-72",*/}
            {/*        }}*/}
            {/*        isFooterBlurred*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 "*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-10 top-1 flex-col items-start">*/}
            {/*            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>*/}
            {/*            <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <Life/>*/}
            {/*    </Card>*/}
            {/*    <Card*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105 min-w-72",*/}
            {/*        }}*/}
            {/*        isFooterBlurred*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 "*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-50 top-1 flex-col items-start">*/}
            {/*            <p className="text-2xl text-white/60 uppercase font-bold">It&apos;s dangerous to go alone!</p>*/}
            {/*            <h4 className="text-6xl text-white/90 font-medium ">Take this.</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <Image src={"The Legend of Zelda.jpg"} width={800} alt="Legend of Zelda"/>*/}
            {/*    </Card>*/}
            {/*    <Card*/}
            {/*        classNames={{*/}
            {/*            base: "hover:scale-105 min-w-72",*/}
            {/*        }}*/}
            {/*        isFooterBlurred*/}
            {/*        className="w-full md:w-auto h-[300px] flex flex-1 "*/}
            {/*    >*/}
            {/*        <CardHeader className="absolute z-50 top-1 flex-col items-start">*/}
            {/*            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>*/}
            {/*            <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>*/}
            {/*        </CardHeader>*/}
            {/*        <Image src={"Super Mario Bros.jpeg"} width={800} height={800} alt="Super Mario Bros"/>*/}

            {/*    </Card>*/}
            {/*</ScrollShadow>*/}
        </>
    );
}
