import {useTextmenuCommands} from './hooks/useTextmenuCommands'
import {useTextmenuStates} from './hooks/useTextmenuStates'
import {BubbleMenu, Editor} from '@tiptap/react'
import {useTextmenuContentTypes} from './hooks/useTextmenuContentTypes'
import {Button, cn, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {EditLinkPopover} from "@/components/tiptap/menus/TextMenu/components/EditLinkPopover";
import {memo} from "react";
import {ColorPicker} from "@/components/tiptap/panels/Colorpicker";
import {Divider} from "@nextui-org/divider";
import {FontSizePicker} from "@/components/tiptap/menus/TextMenu/components/FontSizePicker";
import {FontFamilyPicker} from "@/components/tiptap/menus/TextMenu/components/FontFamilyPicker";
import {
    Code16,
    Fa6SolidAlignCenter,
    Fa6SolidAlignJustify,
    Fa6SolidAlignLeft,
    Fa6SolidAlignRight,
    Fa6SolidBold,
    Fa6SolidCode,
    Fa6SolidEllipsisVertical,
    Fa6SolidItalic,
    Fa6SolidPalette,
    Fa6SolidStrikethrough,
    Fa6SolidSubscript,
    Fa6SolidSuperscript,
    Fa6SolidUnderline,
    StreamlinePenDrawSolid
} from "@/components/icons";
import {Icon} from "next/dist/lib/metadata/types/metadata-types";

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
                <Fa6SolidBold size={18}/>
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
                <Fa6SolidItalic size={18}/>
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
                <Fa6SolidUnderline size={18}/>
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
                <Fa6SolidStrikethrough size={18}/>
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
                <Code16 size={18}/>
            </Button>
            <Button
                isIconOnly
                size={"sm"}
                variant={"light"}
                onPress={commands.onCodeBlock}
                className={cn("bg-transparent border-none rounded-md cursor-pointer")}
            >
                <Fa6SolidCode size={20}/>
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
                        <StreamlinePenDrawSolid size={20}/>
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
                        <Fa6SolidPalette size={20}/>
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
                        <Fa6SolidEllipsisVertical size={20}/>
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
                        <Fa6SolidSubscript size={20}/>
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
                        <Fa6SolidSuperscript size={20}/>
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
                        <Fa6SolidAlignLeft size={20}/>
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
                        <Fa6SolidAlignCenter size={20}/>
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
                        <Fa6SolidAlignRight size={20}/>
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
                        <Fa6SolidAlignJustify size={20}/>
                    </Button>
                </PopoverContent>
            </Popover>
        </BubbleMenu>
    )
}
