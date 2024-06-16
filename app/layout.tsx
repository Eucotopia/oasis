"use client"
import "@/styles/globals.css";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import {Button, cn, Input} from "@nextui-org/react";
import {Icon, type IconProps} from "@iconify/react";
import React, {useState} from "react";
import {AcmeIcon} from "@/components/icons";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
    services: [
        {name: "Branding", href: "#"},
        {name: "Data Analysis", href: "#"},
        {name: "E-commerce Solutions", href: "#"},
        {name: "Market Research", href: "#"},
    ],
    supportOptions: [
        {name: "Pricing Plans", href: "#"},
        {name: "User Guides", href: "#"},
        {name: "Tutorials", href: "#"},
        {name: "Service Status", href: "#"},
    ],
    aboutUs: [
        {name: "Our Story", href: "#"},
        {name: "Latest News", href: "#"},
        {name: "Career Opportunities", href: "#"},
        {name: "Media Enquiries", href: "#"},
        {name: "Collaborations", href: "#"},
    ],
    legal: [
        {name: "Claim", href: "#"},
        {name: "Privacy", href: "#"},
        {name: "Terms", href: "#"},
        {name: "User Agreement", href: "#"},
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook"/>,
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram"/>,
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter"/>,
        },
        {
            name: "GitHub",
            href: "#",
            icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github"/>,
        },
    ],
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isShow, setIsShow] = useState(true);
    const renderList = React.useCallback(
        ({title, items}: { title: string; items: { name: string; href: string }[] }) => (
            <div>
                <h3 className="text-small font-semibold text-default-600">{title}</h3>
                <ul className="mt-6 space-y-4">
                    {items.map((item) => (
                        <li key={item.name}>
                            <Link className="text-default-400" href={item.href} size="sm">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ),
        [],
    );
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <Providers
            themeProps={{
                attribute: "class",
                defaultTheme: "dark",
                themes: ["light", "dark", "posthog", "political", "purple-dark"]
            }}>
            <div className="relative flex flex-col h-screen">
                {/*需要修改*/}
                {/*{*/}
                {/*    isShow && (*/}
                {/*        <div*/}
                {/*            className={cn("flex w-full items-center gap-x-3 border-b-1 border-divider bg-gradient-radial from-default-100 via-danger-100 to-danger-100 px-6 py-2 sm:px-3.5 sm:before:flex-1", {*/}
                {/*                "invisible": !isShow,*/}
                {/*            })}>*/}
                {/*            <p className="text-small text-foreground">*/}
                {/*                <Link className="text-inherit" href="#">*/}
                {/*                    Congratulations to T1 on winning the 2024 Global Championship.&nbsp;*/}
                {/*                </Link>*/}
                {/*            </p>*/}
                {/*            <Button*/}
                {/*                as={Link}*/}
                {/*                className="group relative h-9 overflow-hidden bg-transparent text-small font-normal"*/}
                {/*                color="default"*/}
                {/*                endContent={*/}
                {/*                    <Icon*/}
                {/*                        className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"*/}
                {/*                        icon="solar:arrow-right-linear"*/}
                {/*                        width={16}*/}
                {/*                    />*/}
                {/*                }*/}
                {/*                href="#"*/}
                {/*                style={{*/}
                {/*                    border: "solid 2px transparent",*/}
                {/*                    backgroundImage: `linear-gradient(hsl(var(--nextui-danger-50)), hsl(var(--nextui-danger-50))), linear-gradient(to right, #F871A0, #9353D3)`,*/}
                {/*                    backgroundOrigin: "border-box",*/}
                {/*                    backgroundClip: "padding-box, border-box",*/}
                {/*                }}*/}
                {/*                variant="bordered"*/}
                {/*            >*/}
                {/*                Explore*/}
                {/*            </Button>*/}
                {/*            <div className="flex flex-1 justify-end">*/}
                {/*                <Button isIconOnly aria-label="Close Banner" className="-m-1" size="sm" variant="light"*/}
                {/*                        onClick={() => setIsShow(false)}>*/}
                {/*                    <Icon aria-hidden="true" className="text-default-500" icon="lucide:x" width={20}/>*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
                <Navbar/>
                <main className="container max-w-screen-2xl mx-auto  py-4">
                    {children}
                </main>
                <footer className="flex w-full flex-col">
                    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-8 md:pr-8">
                                <div className="flex items-center justify-start">
                                    <AcmeIcon size={44}/>
                                    <span className="text-medium font-medium">ACME</span>
                                </div>
                                <p className="text-small text-default-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
                                </p>
                                <div className="flex space-x-6">
                                    {footerNavigation.social.map((item) => (
                                        <Link key={item.name} isExternal className="text-default-400" href={item.href}>
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon aria-hidden="true" className="w-6"/>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>{renderList({title: "Services", items: footerNavigation.services})}</div>
                                    <div className="mt-10 md:mt-0">
                                        {renderList({title: "Support", items: footerNavigation.supportOptions})}
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>{renderList({title: "About Us", items: footerNavigation.aboutUs})}</div>
                                    <div className="mt-10 md:mt-0">
                                        {renderList({title: "Legal", items: footerNavigation.legal})}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="my-10 rounded-medium bg-default-200/20 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2">
                            <div>
                                <h3 className="text-small font-semibold text-default-600">
                                    Subscribe to our newsletter
                                </h3>
                                <p className="mt-2 text-small text-default-400">
                                    Receive weekly updates with the newest insights, trends, and tools, straight to your
                                    email.
                                </p>
                            </div>
                            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                                <Input
                                    isRequired
                                    aria-label="Email"
                                    autoComplete="email"
                                    id="email-address"
                                    labelPlacement="outside"
                                    name="email-address"
                                    color={"default"}
                                    variant={"flat"}
                                    placeholder="johndoe@email.com"
                                    startContent={<Icon className="text-default-500" icon="solar:letter-linear"/>}
                                    type="email"
                                />
                                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                    <Button color="warning" type="submit">
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2 pt-8">
                            <p className="text-small text-default-400">&copy; 2024 Acme Inc. All rights reserved.</p>
                            <Link href={"https://beian.miit.gov.cn/"} isExternal
                                  className={"text-small text-default-400"}>鄂ICP备2024058930号</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}
