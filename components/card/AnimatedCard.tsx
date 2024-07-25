import React, {createContext, useCallback, useContext, useEffect, useRef, useState} from "react";
import {Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/modal";
import {useOutsideClick} from "@/hook/use-outside-click";
import {AnimatePresence, motion} from "framer-motion";
import {Button, CardHeader, ModalFooter, ModalHeader, Card, Image} from "@nextui-org/react";

type AnimatedCard = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {
    },
    currentIndex: 0,
});
export const AnimatedCard = ({
                         card,
                         index,
                         layout = false,
                     }: {
    card: AnimatedCard;
    index: number;
    layout?: boolean;
}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const {onCardClose} = useContext(CarouselContext);

    const handleClose = useCallback(() => {
        setOpen(false);
        onCardClose(index);
    }, [index, onCardClose]);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [handleClose, open]);

    useOutsideClick(containerRef, () => handleClose());


    return (
        <>
            <AnimatePresence>
                <Modal
                    size={"5xl"}
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    onClose={handleClose}
                    scrollBehavior={"outside"}
                    hideCloseButton
                    backdrop={"blur"}
                    motionProps={{
                        variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                },
                            },
                            exit: {
                                y: -20,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                },
                            }
                        }
                    }}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    <motion.p
                                        layoutId={layout ? `card-${card.title}` : undefined}
                                    >
                                        {card.title}
                                    </motion.p>
                                </ModalHeader>

                                <ModalBody>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        ref={containerRef}
                                        layoutId={layout ? `card-${card.title}` : undefined}
                                    >
                                        <motion.p
                                            layoutId={layout ? `category-${card.title}` : undefined}
                                            className="text-base font-medium text-black dark:text-white"
                                        >
                                            {card.category}
                                        </motion.p>
                                        <motion.p
                                            layoutId={layout ? `title-${card.title}` : undefined}
                                            className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                                        >
                                            {card.title}
                                        </motion.p>
                                        <div className="py-10">{card.content}</div>
                                    </motion.div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={onOpen}
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
            >
                <div
                    className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none"/>
                <div className="relative z-40 p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white text-sm md:text-base font-medium font-sans text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
            </motion.button>
            <Card className="w-56 md:w-96 h-[300px] md:h-[40rem] overflow-hidden" onPress={onOpen} isPressable>
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <motion.p className="text-tiny text-white/60 uppercase font-bold">{card.category}</motion.p>
                    <h4 className="text-white font-medium text-large">{card.title}</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt={card.title}
                    className="z-0 w-full h-full object-cover"
                    src={card.src}
                    isBlurred
                />
            </Card>
        </>
    );
};