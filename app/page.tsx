'use client'
import React, {useState} from "react";
import ScrollToTop from "react-scroll-to-top";
import {Icon} from "@iconify/react";
import {
    Accordion,
    AccordionItem,
    Button,
    Divider,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Textarea
} from "@nextui-org/react";
import {useAddFaqMutation, useGetFaqsByAnswerQuery} from "@/feature/api/faqApi";


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
        <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {/*FAQ*/}
            <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
                    <h2 className="w-full max-w-3xl bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text px-2 text-center text-3xl font-bold leading-7 tracking-tight text-transparent md:text-5xl">
                        <span className="inline-block md:hidden">Eucotopia&apos;s FAQs</span>
                        <span className="hidden md:inline-block">Eucotopia&apos;s Frequently asked questions</span>
                    </h2>
                    <div className={"flex flex-row gap-4"}>
                        {/*<Button*/}
                        {/*    disableAnimation*/}
                        {/*    className="bg-gradient-to-br bg-transparent from-foreground to-foreground-600 font-medium text-background"*/}
                        {/*    endContent={<Icon icon="lucide:chevron-right" width={24}/>}*/}
                        {/*    variant="shadow"*/}
                        {/*>*/}
                        {/*    Learn More*/}
                        {/*</Button>*/}
                        <Popover shouldBlockScroll={false} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                            <PopoverTrigger>
                                <Button variant="bordered">Ask a question</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[340px] p-3">
                                <form className="flex w-full flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <Textarea
                                        aria-label="Feedback"
                                        name="feedback"
                                        placeholder="Ideas or suggestions to improve our product"
                                        variant="faded"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />

                                    {/*<div className="flex w-full items-center justify-end gap-2 px-1">*/}
                                    {/*    <Icon*/}
                                    {/*        className="text-default-400 dark:text-default-300"*/}
                                    {/*        icon="la:markdown"*/}
                                    {/*        width={20}*/}
                                    {/*    />*/}
                                    {/*    <p className="text-tiny text-default-400 dark:text-default-300">*/}
                                    {/*        <Link*/}
                                    {/*            className="text-tiny text-default-500"*/}
                                    {/*            color="foreground"*/}
                                    {/*            href="https://guides.github.com/features/mastering-markdown/"*/}
                                    {/*            rel="noreferrer"*/}
                                    {/*            target="_blank"*/}
                                    {/*        >*/}
                                    {/*            Markdown*/}
                                    {/*            <Icon className="[&>path]:stroke-[2px]"*/}
                                    {/*                  icon="solar:arrow-right-up-linear"/>*/}
                                    {/*        </Link>*/}
                                    {/*        &nbsp;supported.*/}
                                    {/*    </p>*/}
                                    {/*</div>*/}

                                    <Divider className="my-2"/>

                                    <div className="flex w-full items-center justify-end">
                                        <Button color="primary" size="sm" type="submit" onClick={addFaqHandler}>
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <Accordion
                        fullWidth
                        keepContentMounted
                        itemClasses={{
                            base: "px-0 md:px-2 md:px-6",
                            title: "font-medium",
                            trigger: "py-6 flex-row-reverse",
                            content: "pt-0 pb-6 text-base text-default-500",
                            indicator: "rotate-0 data-[open=true]:-rotate-45",
                        }}
                        items={faqs}
                    >
                        {faqs.map((item, i) => (
                            <AccordionItem
                                key={i}
                                indicator={<Icon className="text-secondary" icon="lucide:plus" width={24}/>}
                                title={item.question}
                            >
                                {item.answer}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <ScrollToTop smooth component={<Icon icon={"icon-park-twotone:up-c"} height={50} width={50}/>}
                         className={"!flex !flex-row !justify-center !items-center !bg-background !shadow-none !backdrop-blur"}/>
        </section>
    );
}
