import {useTextmenuCommands} from './hooks/useTextmenuCommands'
import {useTextmenuStates} from './hooks/useTextmenuStates'
import {BubbleMenu, Editor} from '@tiptap/react'
import {useTextmenuContentTypes} from './hooks/useTextmenuContentTypes'
import {Button, cn, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {EditLinkPopover} from "@/components/tiptap/menus/TextMenu/components/EditLinkPopover";
import {memo} from "react";
import {ColorPicker} from "@/components/tiptap/panels/Colorpicker";
import {Divider} from "@nextui-org/divider";
import {FontSizePicker} from "@/components/tiptap/menus/TextMenu/components/FontSizePicker";
import {FontFamilyPicker} from "@/components/tiptap/menus/TextMenu/components/FontFamilyPicker";

export type TextMenuProps = {
    editor: Editor
}

export const TextMenu = ({editor}: TextMenuProps) => {
    const MemoColorPicker = memo(ColorPicker)
    const commands = useTextmenuCommands(editor)
    const MemoFontSizePicker = memo(FontSizePicker)
    const MemoFontFamilyPicker = memo(FontFamilyPicker)

    const states = useTextmenuStates(editor)

    const blockOptions = useTextmenuContentTypes(editor)

    return (
        <BubbleMenu
            tippyOptions={{popperOptions: {placement: 'top-start'}}}
            editor={editor}
            pluginKey="textMenu"
            shouldShow={states.shouldShow}
            updateDelay={100}
            className={"text-black inline-flex h-full leading-none gap-1 flex-row px-1 items-center bg-content2 rounded-md"}
        >
            <MemoFontFamilyPicker onChange={commands.onSetFont} value={states.currentFont || ''}/>

            <MemoFontSizePicker onChange={commands.onSetFontSize} value={states.currentSize || ''}/>

            <div className="flex h-6 items-center self-center bg-default-500/20 w-0.5">
                <Divider orientation="vertical"/>
            </div>
            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onBold}
                className={cn("bg-transparent border-none rounded-md cursor-pointer",
                    {
                        "bg-content4": states.isBold
                    })}
            >
                <Icon icon={"fa6-solid:bold"} width={18} height={18}/>
            </Button>

            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onItalic}
                className={cn("bg-transparent border-none rounded-md cursor-pointer",
                    {
                        "bg-content4": states.isItalic
                    })}
            >
                <Icon icon={"fa6-solid:italic"} width={18} height={18}/>
            </Button>

            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onUnderline}
                className={cn("bg-transparent border-none rounded-md cursor-pointer",
                    {
                        "bg-content4": states.isUnderline
                    })}
            >
                <Icon icon={"fa6-solid:underline"} width={18} height={18}/>
            </Button>
            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onStrike}
                className={cn("bg-transparent border-none rounded-md cursor-pointer",
                    {
                        "bg-content4": states.isStrike
                    })}
            >
                <Icon icon={"fa6-solid:strikethrough"} width={18} height={18}/>
            </Button>
            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onCode}
                className={cn("bg-transparent border-none rounded-md cursor-pointer",
                    {
                        "bg-content4": states.isCode
                    })}
            >
                <Icon icon={"octicon:code-16"} width={18} height={18}/>
            </Button>
            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onCodeBlock}
                className={cn("bg-transparent border-none rounded-md cursor-pointer")}
            >
                <Icon icon={"fa6-solid:code"} width={18} height={18}/>
            </Button>
            <EditLinkPopover onSetLink={commands.onLink}/>
            <Popover
                placement="bottom">
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer",
                            {
                                "bg-content4": states.currentHighlight
                            })}
                    >
                        <Icon icon={"fa6-solid:broom"} width={20} height={20}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-1">
                        <MemoColorPicker
                            color={states.currentHighlight}
                            onChange={commands.onChangeHighlight}
                            onClear={commands.onClearHighlight}
                        />
                    </div>
                </PopoverContent>
            </Popover>

            <Popover
                placement="bottom">
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer",
                            {
                                "bg-content4": !!states.currentColor
                            })}
                    >
                        <Icon icon={"fa6-solid:palette"} width={20} height={20}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-1">
                        <MemoColorPicker
                            color={states.currentColor}
                            onChange={commands.onChangeColor}
                            onClear={commands.onClearColor}
                        />
                    </div>
                </PopoverContent>
            </Popover>

            <Popover
                radius={"sm"}
                placement="top">
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer")}
                    >
                        <Icon icon={"fa6-solid:ellipsis-vertical"} width={20} height={20}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={"flex flex-row gap-2"}>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onSubscript}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isSubscript
                            })}
                    >
                        <Icon icon={"fa6-solid:subscript"} width={20} height={20}/>
                    </Button>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onSuperscript}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isSuperscript
                            })}
                    >
                        <Icon icon={"fa6-solid:superscript"} width={20} height={20}/>
                    </Button>
                    <div className="flex h-5 items-center self-center  text-small">
                        <Divider orientation="vertical"/>
                    </div>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onAlignLeft}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isAlignLeft
                            })}
                    >
                        <Icon icon={"fa6-solid:align-left"} width={20} height={20}/>
                    </Button>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onAlignCenter}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isAlignCenter
                            })}
                    >
                        <Icon icon={"fa6-solid:align-center"} width={20} height={20}/>
                    </Button>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onAlignRight}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isAlignRight
                            })}
                    >
                        <Icon icon={"fa6-solid:align-center"} width={20} height={20}/>
                    </Button>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={commands.onAlignJustify}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer p-1",
                            "hover:bg-content4",
                            {
                                "bg-content4": states.isAlignJustify
                            })}
                    >
                        <Icon icon={"fa6-solid:align-justify"} width={20} height={20}/>
                    </Button>
                </PopoverContent>
            </Popover>
        </BubbleMenu>
    )
}
