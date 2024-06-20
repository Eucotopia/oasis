'use client'
import {AcmeIcon, TwitterIcon} from "@/components/icons";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image";
import React from "react";
import {Button, Input} from "@nextui-org/react";
import {Icon, IconProps} from "@iconify/react";

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
            icon: (props: SocialIconProps) => <TwitterIcon className="text-default-500"/>,
        },
        {
            name: "GitHub",
            href: "#",
            icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github"/>,
        },
    ],
};
export const Footer = () => {
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
        <>
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
                        <div className={"flex flex-row gap-4"}>
                            <Link
                                isExternal
                                href={"https://www.beian.gov.cn"}
                                className={"text-small text-default-400"}
                            >
                                <Image src={"https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png"} height={15}
                                       width={15} alt={"gov logo"}/>
                                &nbsp;粤公网安备44030002003865号
                            </Link>
                            <Link
                                href={"https://beian.miit.gov.cn/"}
                                isExternal
                                className={"text-small text-default-400"}
                            >
                                鄂ICP备2024058930号
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}