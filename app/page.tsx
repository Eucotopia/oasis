'use client'
import React, {useState} from "react";
import {Icon} from "@iconify/react";
import {
    Button, CardHeader, Chip, cn, Image, ScrollShadow, Snippet
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
import {useMediaQuery} from "usehooks-ts";

export default function Home() {

    const isMobile = useMediaQuery("(max-width: 768px)");

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
            {/*<section className="fixed h-svh dark:bg-hero w-screen"/>*/}
            <Burst
                size={900}
                opacity={0.4}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    right: "0%",
                    top: "0%",
                    overflow: "hidden",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"
                }}
            />
            <Pointed
                size={300}
                opacity={0.6}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "10%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"

                }}
            />
            <Smile
                size={200}
                opacity={0.6}
                fill={"#9263FF"}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "12%",
                    top: "40%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"

                }}
            />
            <Cherry
                size={200}
                opacity={0.5}
                fill={"#FF2B4B"}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "5%",
                    top: "20%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"

                }}
            />
            <HeartShaped
                size={250}
                opacity={0.5}
                fill={"#3B6CFF"}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "4%",
                    top: "65%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"

                }}
            />
            <Circle
                size={200}
                opacity={0.5}
                fill={"#DBE7FF"}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "60%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"

                }}
            />
            <Line
                fill={"#FF3DC5"}
                className="hidden md:block"
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "80%",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    display: isMobile ? "none" : "block"
                }}
                size={150}
            />
            <section className="flex flex-col justify-center items-center lg:pt-36 pt-28 gap-5 px-4">
                <Chip
                    variant="solid"
                    radius={"sm"}
                    color={"warning"}
                    startContent={<Icon icon="ic:twotone-apple" height={20}/>}
                >
                    Coming in swiftly.
                </Chip>
                <div className="text-4xl md:text-7xl drop-shadow-md font-extrabold text-center">
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
                                className="italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081]"
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="text-4xl md:text-7xl drop-shadow-md font-extrabold w-full text-center">
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
                                className="italic bg-clip-text text-transparent bg-gradient-radial from-[#ff8c00] to-[#ff4081]"
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
                    className="max-w-lg md:max-w-xl lg:max-w-2xl text-base text-default-400 text-center mb-5 px-4 md:px-0 mt-2"
                >
                    When you feel like hope is gone, look inside you and search your soul. You will find a hero lies in
                    you. Dreams
                    are hard to follow, but don&apos;t let anyone steal your dream.
                </motion.h1>
                <Button
                    as={NextLink}
                    href="/about"
                    variant="solid"
                    size="lg"
                    color="warning"
                    radius="lg"
                    className="uppercase"
                    endContent={<ArrowRightIcon/>}
                >
                    About Me
                </Button>
                <Blast
                    opacity={0.5}
                    size={250}
                    fill={"#FFAA4F"}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "2rem",
                        display: isMobile ? "none" : "block"
                    }}
                />
            </section>
            <div className={"flex flex-row justify-between items-end max-w-7xl mx-auto px-4"}>
                <p className={"text-5xl"}>Life & Game</p>
                <p className={""}>see all</p>
            </div>
            <ScrollShadow
                className="flex flex-col md:flex-row flex-wrap  gap-4 md:gap-8  p-4 max-w-7xl mx-auto justify-between">
                <Card
                    isPressable
                    onPress={() => router.push("/category/game")}
                    classNames={{
                        base: "hover:scale-105 hover:cursor-pointer min-w-72",
                    }}
                    className="w-full md:w-auto h-[300px] flex flex-1 relative"
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Discover </p>
                        <h4 className="text-white/90 font-medium text-xl">Embark on a Zelda Adventure</h4>
                    </CardHeader>
                    <Image
                        src=""
                        alt="Zelda Adventures"
                        className="object-cover w-full h-full"
                    />
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-105  min-w-72",
                    }}
                    isFooterBlurred
                    className="w-full md:w-auto h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <GameIcon/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-105 min-w-72",
                    }}
                    isFooterBlurred
                    className="w-full md:w-auto h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <ProgramIcon/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-105 min-w-72",
                    }}
                    isFooterBlurred
                    className="w-full md:w-auto h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <Life/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-105 min-w-72",
                    }}
                    isFooterBlurred
                    className="w-full md:w-auto h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <Life/>
                </Card>
                <Card
                    classNames={{
                        base: "hover:scale-105 min-w-72",
                    }}
                    isFooterBlurred
                    className="w-full md:w-auto h-[300px] flex flex-1 "
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/90 font-medium text-xl">Adventures in Gaming</h4>
                    </CardHeader>
                    <Life/>
                </Card>
            </ScrollShadow>
        </>
    );
}
