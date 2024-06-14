import {TypewriterEffectSmooth} from "@/components/type/typewriter-effect";

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
export default function Page() {
    return (
        <>
            <div className={"flex flex-col items-center justify-center"}>
                <p className={"text-danger text-2xl"}>
                    Welcome to Here
                </p>
                <TypewriterEffectSmooth words={words}/>
            </div>
        </>
    );
}
