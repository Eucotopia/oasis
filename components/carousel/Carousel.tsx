import React, {useEffect, useState} from "react";
import {Button, cn} from "@nextui-org/react";
import {motion} from "framer-motion";
import {ArrowLeftIcon, ArrowRightIcon} from "@/components/icons";
import { CarouselContext } from "../card/AnimatedCard";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

export const Carousel = ({items, initialScroll = 0}: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{onCardClose: handleCardClose, currentIndex}}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "mx-auto"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-4 mr-10">
                    <Button
                        variant={"light"}
                        color={"primary"}
                        aria-label="left"
                        radius={"full"}
                        className={"disabled:opacity-50"}
                        isIconOnly
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}>
                        <ArrowLeftIcon size={35}/>
                    </Button>
                    <Button
                        variant={"light"}
                        color={"secondary"}
                        aria-label="right"
                        radius={"full"}
                        className={"disabled:opacity-50"}
                        isIconOnly
                        onClick={scrollRight}
                        disabled={!canScrollRight}>
                        <ArrowRightIcon size={35}/>
                    </Button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};