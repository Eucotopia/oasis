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
export default function AboutPage() {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <p className={"text-danger text-2xl"}>
                Welcome to Here
            </p>
            <TypewriterEffectSmooth words={words}/>
        </div>
        //
        // <div className="flex flex-col items-center justify-center h-[40rem]  ">
        //     <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        //         The road to freedom starts from here
        //     </p>
        //     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        //         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        //             Join now
        //         </button>
        //         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
        //             Signup
        //         </button>
        //     </div>
        // </div>
    );
}
