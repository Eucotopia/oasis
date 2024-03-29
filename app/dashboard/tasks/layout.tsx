import { Button } from "@nextui-org/button";

export default function ProjectsLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-3xl">
                <div className="inline-block  justify-center">
                    {children}
                </div>
            </section>
        </>

    );
}
