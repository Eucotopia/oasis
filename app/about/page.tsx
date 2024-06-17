import {TypewriterEffectSmooth} from "@/components/type/typewriter-effect";
import {Snippet, SnippetProps} from "@nextui-org/react";

const words = [
    {
        text: "It's",
    },
    {
        text: "enough",
    },
    {
        text: "moment.",
        className: "text-blue-500 dark:text-blue-500",
    },
];
export default function AboutPage() {
    return (
        <>
            <Snippet
                classNames={{
                    base: "relative  py-0 px-1 flex flex-row",
                    content: "max-h-96 overflow-scroll scrollbar-hide",
                    pre: "max-h-96 overflow-scroll scrollbar-hide w-full overflow-x-scroll",
                    copyButton: "absolute top-3 right-3",
                }}
                radius={"sm"}
                fullWidth
            />
        </>
    );
}
