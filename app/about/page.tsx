'use client'
import React from "react";
import CraftCover from "./CraftCover"
import clsx from "clsx";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {fontAboutHeading} from "@/config/fonts"

const TableItem = [
    {
        key: 'tools',
        Icon: () => <Icon icon="fluent:window-dev-tools-24-filled"/>,
        children: [
            {
                Icon: () => <Icon icon={'codicon:vscode'} width={35} height={35}/>,
                title: 'Vs Code',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:intellijidea'} width={35} height={35}/>,
                title: 'JetBrains IDE',
                href: 'https://www.jetbrains.com',
            }, {
                Icon: () => <Icon icon={'mdi:android-studio'} width={35} height={35}/>,
                title: 'Android Studio',
                href: 'https://developer.android.google.cn/studio?hl=zh-cn',
            }, {
                Icon: () => <Icon icon={'devicon-plain:xcode'} width={35} height={35}/>,
                title: 'Xcode',
                href: 'https://developer.apple.com/xcode/',
            }, {
                Icon: () => <Icon icon={'simple-icons:excalidraw'} width={35} height={35}/>,
                title: 'Excalidraw',
                href: 'https://excalidraw.com',
            }
        ]
    }, {
        key: 'languages',
        Icon: () => <Icon icon={'ph:code-bold'}/>,
        children: [
            {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'bxl:typescript'} width={35} height={35}/>,
                title: 'TypeScript',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'nonicons:html-16'} width={35} height={35}/>,
                title: 'Html',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'nonicons:css-16'} width={35} height={35}/>,
                title: 'CSS',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'bi:git'} width={35} height={35}/>,
                title: 'Git',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:cplusplus'} width={35} height={35}/>,
                title: 'C++',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'cib:swift'} width={35} height={35}/>,
                title: 'Swift',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }, {
        key: 'frameworks',
        Icon: () => <Icon icon={'ph:code-bold'}/>,
        children: [
            {
                Icon: () => <Icon icon={'simple-icons:springboot'} width={35} height={35}/>,
                title: 'SpringBoot',
                href: 'https://spring.io/',
            }, {
                Icon: () => <Icon icon={'nonicons:vue-16'} width={35} height={35}/>,
                title: 'Vue',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:react'} width={35} height={35}/>,
                title: 'React/NextJS',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }
]
export default function App() {
    return (
        <>
            <div
                className={clsx("relative max-w-screen-2xl h-screen select-none", fontAboutHeading.className)}>
                <div className={'absolute top-36 left-36 self-center text-center'}>
                    <h1 className={"text-6xl mt-5"}>Always remember you&apos;re unique, </h1>
                    <h1 className={"text-7xl mb-4 bg-gradient-to-br from-sky-500 to-blue-500 bg-clip-text text-transparent"}>just
                        like everyone else</h1>
                    <h1 className={'text-2xl text-gray-500'}>No matter how bad or good you think life is, wake up each
                        day and be
                        thankful. Someone somewhere is fighting to survive</h1>
                    <div className={"flex flex-row gap-4 justify-center mt-10"}>
                        <Button size={"lg"} variant={"flat"} color={"primary"}>Learn More</Button>
                        <Button size={"lg"} variant={"flat"} color={'success'}>Learn More</Button>
                    </div>
                </div>
                <div className={'absolute top-16 right-36'}>
                    <CraftCover/>
                </div>
            </div>
            {/*<div*/}
            {/*    className={'relative h-screen w-screen  overflow-hidden bg-gradient-to-b from-slate-700 to-slate-500 '}>*/}
            {/*    <div className={'absolute top-0 left-20'}>*/}
            {/*        <UserProfile/>*/}
            {/*    </div>*/}
            {/*    <div className={'absolute top-32 right-52'}>*/}
            {/*        <motion.div*/}
            {/*            initial={{opacity: 0, scale: 0.5}}*/}
            {/*            animate={{opacity: 1, scale: 1}}*/}
            {/*            transition={{duration: 0.5}}*/}
            {/*            className={'col-span-8 place-self-center text-center sm:text-left justify-self-start'}*/}
            {/*        >*/}
            {/*            <p className={'text-3xl text-gray-500'}>LENNY BAYER</p>*/}
            {/*            <h1 className={'text-9xl font-bold'}>Developer</h1>*/}
            {/*            <div*/}
            {/*                className={"text-5xl text-transparent bg-clip-text bg-gradient-to-br from-secondary-600 via-primary-400 to-content1 before:content-['+']"}>*/}
            {/*                <TypeAnimation*/}
            {/*                    sequence={[*/}
            {/*                        "Fullstack Developer",*/}
            {/*                        1000,*/}
            {/*                        "Web Developer",*/}
            {/*                        1000,*/}
            {/*                        "Software Engineer",*/}
            {/*                        1000,*/}
            {/*                        "UI/UX Designer",*/}
            {/*                        1000*/}
            {/*                    ]}*/}
            {/*                    wrapper="span"*/}
            {/*                    speed={50}*/}
            {/*                    style={{fontSize: '1em', display: 'inline-block'}}*/}
            {/*                    repeat={Infinity}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </motion.div>*/}
            {/*        <div className={'flex flex-row justify-center gap-12 mt-8'}>*/}
            {/*            <Button>asd</Button>*/}
            {/*            <Button>asd</Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"flex flex-col bg-gradient-to-b from-slate-500 to-slate-800  h-screen items-center"}>*/}
            {/*    <h1 className={'text-8xl font-bold bg-gradient-to-r from-background to-slate-900 text-transparent bg-clip-text w-full text-center'}>SKILLS</h1>*/}
            {/*    <h1 className={'text-gray-500 text-4xl font-bold bg-gradient-to-r from-background to-slate-900 text-transparent bg-clip-text w-full text-center mb-8'}>If*/}
            {/*        you really want to abuse yourself, learn programming</h1>*/}
            {/*    <GitHubCalendar username={"Eucotopia"} year={new Date().getFullYear()}/>*/}
            {/*    <div className={'relative w-screen'}>*/}
            {/*        <div className={'absolute left-40 top-20'}>*/}
            {/*            <div className="flex w-full flex-col p-6">*/}
            {/*                <Tabs*/}
            {/*                    aria-label="Options"*/}
            {/*                    color="primary"*/}
            {/*                    variant="underlined"*/}
            {/*                    classNames={{*/}
            {/*                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",*/}
            {/*                        cursor: "w-full bg-[#22d3ee]",*/}
            {/*                        tab: "max-w-fit px-0 h-12",*/}
            {/*                        tabContent: "group-data-[selected=true]:text-[#06b6d4] text-3xl",*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    {*/}
            {/*                        TableItem.map((item, index) => {*/}
            {/*                            return (*/}
            {/*                                <Tab*/}
            {/*                                    key={item.key}*/}
            {/*                                    title={*/}
            {/*                                        <div className="flex items-center space-x-2 ">*/}
            {/*                                            {<item.Icon/>}*/}
            {/*                                            <span>{item.key.toUpperCase()}</span>*/}
            {/*                                            <Chip size="md" variant="faded">{item.children.length}</Chip>*/}
            {/*                                        </div>*/}
            {/*                                    }*/}
            {/*                                >*/}
            {/*                                    <div className={"text-2xl grid-cols-1 grid gap-4 md:grid-cols-3"}>*/}
            {/*                                        {item.children.map((child, index) => {*/}
            {/*                                            return (*/}
            {/*                                                <>*/}
            {/*                                                    <a href={child.href}*/}
            {/*                                                       key={index}*/}
            {/*                                                       target={'_blank'}*/}
            {/*                                                       className={'hover:scale-105'}>*/}
            {/*                                                        <div*/}
            {/*                                                            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
            {/*                                                            <child.Icon/>*/}
            {/*                                                            <p>{child.title}</p>*/}
            {/*                                                        </div>*/}
            {/*                                                    </a>*/}
            {/*                                                </>*/}
            {/*                                            )*/}
            {/*                                        })}*/}
            {/*                                    </div>*/}
            {/*                                </Tab>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </Tabs>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={'absolute -top-36 right-1'}>*/}
            {/*            <Mac/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={'flex flex-col bg-gradient-to-b from-slate-800 to-slate-500  items-center mt-8'}>*/}
            {/*    <h1 className={'text-8xl font-bold bg-gradient-to-r from-background to-slate-900 text-transparent bg-clip-text w-full text-center'}>EXPERIENCE</h1>*/}
            {/*    <ExperienceTimeLine/>*/}
            {/*</div>*/}

        </>
    );
}
