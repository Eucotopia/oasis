import {BubbleMenu, Editor, EditorContent, FloatingMenu} from "@tiptap/react";

import {RadioGroup} from "@nextui-org/radio";
import React from "react";
import {Link} from "@nextui-org/link";
import {COLOR_GROUP} from "@/components/tiptap/data/ColorGroup";
import {Icon} from "@iconify/react";
import {Button, cn} from "@nextui-org/react";
import {Divider} from "@nextui-org/divider";
import {Tooltip} from "@nextui-org/tooltip";
import {Kbd} from "@nextui-org/kbd";
import {Input} from "@nextui-org/input";
import PopoverLinkWrapper from "@/components/popover/PopoverLinkWrapper";
import PopoverHighlightWrapper from "@/components/popover/PopoverHighlightWrapper";
import PopoverColorWrapper from "@/components/popover/PopoverColorWrapper";
import PopoverMoreOptionWrapper from "@/components/popover/PopoverMoreOptionWrapper";
import HighlightRadioItem from "@/components/radio/HighlightRadioItem";
import ColorRadioItem from "@/components/radio/ColorRadioItem";

export const BlockEditor = ({editor}: {
    editor: Editor
}) => {
    const [isSelected, setIsSelected] = React.useState(false);
    const [link, setLink] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["inter"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <>
            {editor &&
                <BubbleMenu tippyOptions={{duration: 100}} editor={editor}
                            className={"flex flex-row border rounded-lg bg-content1 p-1 shadow-medium outline-none gap-2 w-[590px]"}>
                    {/*<Dropdown>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Link*/}
                    {/*            size={"sm"}*/}
                    {/*            color={"foreground"}*/}
                    {/*            onPress={() => editor.chain().focus().toggleBold().run()}*/}
                    {/*            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",*/}
                    {/*                "hover:bg-gray-50",*/}
                    {/*                {*/}
                    {/*                    "bg-content4": editor.isActive("bold")*/}
                    {/*                })}*/}
                    {/*        >*/}
                    {/*            AI Tool*/}
                    {/*            /!*<Icon icon={"fa6-solid:paragraph"} width={20} height={20}/>*!/*/}
                    {/*        </Link>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">*/}
                    {/*        <DropdownSection title="Actions" showDivider>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="new"*/}
                    {/*                shortcut="⌘N"*/}
                    {/*                description="Create a new file"*/}
                    {/*                // startContent={<AddNoteIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                New file*/}
                    {/*            </DropdownItem>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="copy"*/}
                    {/*                shortcut="⌘C"*/}
                    {/*                description="Copy the file link"*/}
                    {/*                // startContent={<CopyDocumentIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                Copy link*/}
                    {/*            </DropdownItem>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="edit"*/}
                    {/*                shortcut="⌘⇧E"*/}
                    {/*                description="Allows you to edit the file"*/}
                    {/*                // startContent={<EditDocumentIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                Edit file*/}
                    {/*            </DropdownItem>*/}
                    {/*        </DropdownSection>*/}
                    {/*        <DropdownSection title="Danger zone">*/}
                    {/*            <DropdownItem*/}
                    {/*                key="delete"*/}
                    {/*                className="text-danger"*/}
                    {/*                color="danger"*/}
                    {/*                shortcut="⌘⇧D"*/}
                    {/*                description="Permanently delete the file"*/}
                    {/*                // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}*/}
                    {/*            >*/}
                    {/*                Delete file*/}
                    {/*            </DropdownItem>*/}
                    {/*        </DropdownSection>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <div className="flex h-5 items-center self-center  text-small">
                        <Divider orientation="vertical"/>
                    </div>
                    {/*<Dropdown>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Link*/}
                    {/*            size={"sm"}*/}
                    {/*            color={"foreground"}*/}
                    {/*            onPress={() => editor.chain().focus().toggleBold().run()}*/}
                    {/*            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",*/}
                    {/*                "hover:bg-gray-50",*/}
                    {/*                {*/}
                    {/*                    "bg-content4": editor.isActive("bold")*/}
                    {/*                })}*/}
                    {/*        >*/}
                    {/*            <Icon icon={"fa6-solid:paragraph"} width={20} height={20}/>*/}
                    {/*        </Link>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">*/}
                    {/*        <DropdownSection title="Actions" showDivider>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="new"*/}
                    {/*                shortcut="⌘N"*/}
                    {/*                description="Create a new file"*/}
                    {/*                // startContent={<AddNoteIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                New file*/}
                    {/*            </DropdownItem>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="copy"*/}
                    {/*                shortcut="⌘C"*/}
                    {/*                description="Copy the file link"*/}
                    {/*                // startContent={<CopyDocumentIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                Copy link*/}
                    {/*            </DropdownItem>*/}
                    {/*            <DropdownItem*/}
                    {/*                key="edit"*/}
                    {/*                shortcut="⌘⇧E"*/}
                    {/*                description="Allows you to edit the file"*/}
                    {/*                // startContent={<EditDocumentIcon className={iconClasses} />}*/}
                    {/*            >*/}
                    {/*                Edit file*/}
                    {/*            </DropdownItem>*/}
                    {/*        </DropdownSection>*/}
                    {/*        <DropdownSection title="Danger zone">*/}
                    {/*            <DropdownItem*/}
                    {/*                key="delete"*/}
                    {/*                className="text-danger"*/}
                    {/*                color="danger"*/}
                    {/*                shortcut="⌘⇧D"*/}
                    {/*                description="Permanently delete the file"*/}
                    {/*                // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}*/}
                    {/*            >*/}
                    {/*                Delete file*/}
                    {/*            </DropdownItem>*/}
                    {/*        </DropdownSection>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    {/*<Dropdown>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Link*/}
                    {/*            size={"sm"}*/}
                    {/*            color={"foreground"}*/}
                    {/*            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",*/}
                    {/*                "hover:bg-gray-50",*/}
                    {/*                {*/}
                    {/*                    "bg-content4": editor.isActive("bold")*/}
                    {/*                })}*/}
                    {/*        >*/}
                    {/*            {selectedValue}*/}
                    {/*        </Link>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu*/}
                    {/*        aria-label="Single selection example"*/}
                    {/*        variant="flat"*/}
                    {/*        disallowEmptySelection*/}
                    {/*        selectionMode="single"*/}
                    {/*        selectedKeys={selectedKeys}*/}
                    {/*        onSelectionChange={setSelectedKeys as any}*/}
                    {/*    >*/}
                    {/*        <DropdownItem key="inter"*/}
                    {/*                      onPress={() => editor.chain().focus().setFontFamily('Inter').run()}>Inter</DropdownItem>*/}
                    {/*        <DropdownItem key="comic_sans" onPress={() => editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}>Comic Sans</DropdownItem>*/}
                    {/*        <DropdownItem key="date">Date</DropdownItem>*/}
                    {/*        <DropdownItem key="single_date">{editor.getAttributes('textStyle')?.fontFamily}</DropdownItem>*/}
                    {/*        <DropdownItem key="iteration">Iteration</DropdownItem>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <div className="flex h-5 items-center self-center  text-small">
                        <Divider orientation="vertical"/>
                    </div>
                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <div className="flex flex-row items-center justify-between gap-4 ">
                                <p className={"text-[12px]"}>Italic</p>
                                <Kbd className={"text-[10px]"} keys={["command"]}>B</Kbd>
                            </div>
                        }>
                        <Link
                            color={"foreground"}
                            onPress={() => editor.chain().focus().toggleBold().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("bold")
                                })}
                        >
                            <Icon icon={"fa6-solid:bold"} width={20} height={20}/>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <div className="flex flex-row items-center justify-between gap-4 ">
                                <p className={"text-[12px]"}>Italic</p>
                                <Kbd className={"text-[10px]"} keys={["command"]}>I</Kbd>
                            </div>
                        }>
                        <Link
                            color={"foreground"}
                            onPress={() => editor.chain().focus().toggleItalic().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("italic")
                                })}
                        >
                            <Icon icon={"fa6-solid:italic"} width={20} height={20}/>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <div className="flex flex-row items-center justify-between gap-4 ">
                                <p className={"text-[12px]"}>Underline</p>
                                <Kbd className={"text-[10px]"} keys={["command"]}>U</Kbd>
                            </div>
                        }>
                        <Link
                            color={"foreground"}
                            onPress={() => editor.chain().focus().toggleUnderline().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("underline")
                                })}
                        >
                            <Icon icon={"fa6-solid:underline"} width={20} height={20}/>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <div className="flex flex-row items-center justify-between gap-4 ">
                                <p className={"text-[12px]"}>Strikethrough</p>
                                <Kbd className={"text-[10px]"} keys={["command", "shift"]}>S</Kbd>
                            </div>
                        }>
                        <Link
                            color={"foreground"}
                            onPress={() => editor.chain().focus().toggleStrike().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("strike")
                                })}
                        >
                            <Icon icon={"fa6-solid:strikethrough"} width={20} height={20}/>
                        </Link>
                    </Tooltip>

                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <div className="flex flex-row items-center justify-between gap-4 ">
                                <p className={"text-[12px]"}>Code</p>
                                <Kbd className={"text-[10px]"} keys={["command"]}>E</Kbd>
                            </div>
                        }
                    >
                        <Link
                            color={"foreground"}

                            onPress={() => editor.chain().focus().toggleCode().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("code")
                                })}
                        >
                            <Icon icon={"octicon:code-16"} width={20} height={20}/>
                        </Link>
                    </Tooltip>

                    <Tooltip
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                            variants: {
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    }
                                },
                                enter: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                    }
                                },
                            },
                        }}
                        content={
                            <p className={"text-[12px]"}>Code block</p>
                        }>
                        <Link
                            color={"foreground"}

                            onPress={() => editor.chain().focus().toggleCodeBlock().run()}
                            className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                                "hover:bg-content4",
                                {
                                    "bg-content4": editor.isActive("codeBlock")
                                })}
                        >
                            <Icon icon={"fa6-solid:code"} width={20} height={20}/>
                        </Link>
                    </Tooltip>
                    {/* TODO: bug:无法实现 open a new tab 切换*/}
                    <PopoverLinkWrapper icon="fa6-solid:link" className={"flex flex-col items-center"}
                                        editor={editor} title={"Set Link"}>
                        <div className={"flex flex-row items-center justify-center mb-2 gap-2"}>
                            <Input placeholder={"https://"} size={"sm"} value={link}
                                   onValueChange={(value) => setLink(value)}
                                   radius={"sm"}
                                   className={"w-full"}/>
                            <Button
                                size={"sm"}
                                radius={"sm"}
                                onPress={() => {
                                    const previousUrl = editor.getAttributes('link').href
                                    if (previousUrl === undefined) {
                                        if (editor.isActive('link')) {
                                            editor.chain().focus().extendMarkRange('link').unsetLink()
                                                .run()
                                            return
                                        }
                                        if (link === "") return
                                        if (isSelected) {
                                            editor.chain().focus().extendMarkRange('link',).setLink({
                                                href: link,
                                                target: '_blank'
                                            }).run()
                                        } else {
                                            editor.chain().focus().extendMarkRange('link',).setLink({
                                                href: link
                                            }).run()
                                        }
                                    } else {
                                        editor.chain().focus().extendMarkRange('link').unsetLink()
                                            .run()
                                    }
                                    setLink("")
                                }
                                }>
                                Set Link</Button>
                        </div>
                    </PopoverLinkWrapper>

                    <PopoverHighlightWrapper icon="fa6-solid:palette" className={"flex flex-col items-center"}
                                             editor={editor} title={"Highlight color"}>
                        <RadioGroup
                            aria-label="HighlightColor"
                            classNames={{
                                wrapper: "gap-2 grid grid-cols-10 ",
                            }}
                            orientation="horizontal"
                        >
                            {
                                COLOR_GROUP.map((item, index) => {
                                    return <HighlightRadioItem key={index} color={item.color} tooltip={item.tooltip}
                                                               value={item.value}
                                                               editor={editor}/>
                                })
                            }
                        </RadioGroup>
                    </PopoverHighlightWrapper>
                    <PopoverColorWrapper icon="fa6-solid:broom" className={"flex flex-col items-center"}
                                         editor={editor} title={"Text color"}>
                        <RadioGroup
                            aria-label="TextColor"
                            classNames={{
                                wrapper: "gap-2 grid grid-cols-10 ",
                            }}
                            orientation="horizontal"
                        >
                            {
                                COLOR_GROUP.map((item, index) => {
                                    return <ColorRadioItem key={index} color={item.color} tooltip={item.tooltip}
                                                           value={item.value}
                                                           editor={editor}/>
                                })
                            }
                        </RadioGroup>
                    </PopoverColorWrapper>
                    <PopoverMoreOptionWrapper icon="fa6-solid:ellipsis-vertical"
                                              className={"flex flex-row gap-2 "}
                                              editor={editor} title={"More options"}>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Subscript</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>.</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().toggleSubscript().run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive("subscript")
                                    })}
                            >
                                <Icon icon={"fa6-solid:subscript"} width={20} height={20}/>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Superscript</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>,</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().toggleSuperscript().run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer  p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive("superscript")
                                    })}
                            >
                                <Icon icon={"fa6-solid:superscript"} width={20} height={20}/>
                            </Link>
                        </Tooltip>

                        <div className="flex h-5 items-center self-center  text-small">
                            <Divider orientation="vertical"/>
                        </div>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Align center</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd keys={["shift"]}></Kbd>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>L</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().setTextAlign('left').run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive({textAlign: 'left'})
                                    })}
                            >
                                <Icon icon={"fa6-solid:align-left"} width={20} height={20}/>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Align center</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd keys={["shift"]}></Kbd>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>E</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().setTextAlign('center').run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer  p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive({textAlign: 'center'})
                                    })}
                            >
                                <Icon icon={"fa6-solid:align-center"} width={20} height={20}/>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Align right</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd keys={["shift"]}></Kbd>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>R</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().setTextAlign('right').run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer  p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive({textAlign: 'right'})
                                    })}
                            >
                                <Icon icon={"fa6-solid:align-right"} width={20} height={20}/>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            delay={0}
                            closeDelay={0}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            content={
                                <div className="flex flex-row items-center justify-between gap-4 ">
                                    <p className={"text-[12px]"}>Justify</p>
                                    <div className={"flex flex-row gap-1"}>
                                        <Kbd keys={["shift"]}></Kbd>
                                        <Kbd className={"text-[10px]"} keys={["command"]}></Kbd>
                                        <Kbd className={"text-[10px]"}>J</Kbd>
                                    </div>
                                </div>
                            }>
                            <Link
                                color={"foreground"}
                                onPress={() => editor.chain().focus().setTextAlign('justify').run()}
                                className={cn("bg-transparent border-none rounded-md cursor-pointer  p-1",
                                    "hover:bg-content4",
                                    {
                                        "bg-content4": editor.isActive({textAlign: "justify"})
                                    })}
                            >
                                <Icon icon={"fa6-solid:align-justify"} width={20} height={20}/>
                            </Link>
                        </Tooltip>
                    </PopoverMoreOptionWrapper>
                </BubbleMenu>
            }
            {/*{editor && <FloatingMenu className="floating-menu" tippyOptions={{duration: 100}} editor={editor}>*/}
            {/*    <Link*/}
            {/*        color={"foreground"}*/}
            {/*        onPress={() => editor.chain().focus().setHorizontalRule().run()}*/}
            {/*        className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1")}>*/}
            {/*        <Icon icon={"fa6-solid:ruler-horizontal"} width={20} height={20}/>*/}
            {/*    </Link>*/}
            {/*    <button*/}
            {/*        onPress={() => editor.chain().focus().toggleHeading({level: 2}).run()}*/}
            {/*        className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}*/}
            {/*    >*/}
            {/*        H2*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        onPress={() => editor.chain().focus().toggleBulletList().run()}*/}
            {/*        className={editor.isActive('bulletList') ? 'is-active' : ''}*/}
            {/*    >*/}
            {/*        Bullet List*/}
            {/*    </button>*/}
            {/*</FloatingMenu>}*/}
            <EditorContent editor={editor} className={"!h-full"}/>
            {/*<TableOfContents editor={editor}/>*/}
            {/*<TableOfContents onItemClick={handlePotentialClose} editor={editor} />*/}
        </>
    );
}