import {BubbleMenu as BaseBubbleMenu} from '@tiptap/react'
import React, {forwardRef, useCallback, useRef} from 'react'
import {Instance, sticky} from 'tippy.js'

import {ImageBlockWidth} from './ImageBlockWidth'
import {MenuProps} from "@/components/tiptap/menus/types";
import {getRenderContainer} from "@/components/tiptap/lib/utils";
import {Button, cn} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {actionAlignHorizontallyCentered} from "@excalidraw/excalidraw/types/actions";
import {Divider} from "@nextui-org/divider";

export const ImageBlockMenu = ({editor, appendTo}: MenuProps): JSX.Element => {
    const menuRef = useRef<HTMLDivElement>(null)
    const tippyInstance = useRef<Instance | null>(null)

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-imageBlock')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isActive = editor.isActive('imageBlock')

        return isActive
    }, [editor])

    const onAlignImageLeft = useCallback(() => {
        editor.chain().focus(undefined, {scrollIntoView: false}).setImageBlockAlign('left').run()
    }, [editor])

    const onAlignImageCenter = useCallback(() => {
        editor.chain().focus(undefined, {scrollIntoView: false}).setImageBlockAlign('center').run()
    }, [editor])

    const onAlignImageRight = useCallback(() => {
        editor.chain().focus(undefined, {scrollIntoView: false}).setImageBlockAlign('right').run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor.chain().focus(undefined, {scrollIntoView: false}).setImageBlockWidth(value).run()
        },
        [editor],
    )

    return (
        <BaseBubbleMenu
            editor={editor}
            // pluginKey={`imageBlockMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                getReferenceClientRect,
                onCreate: (instance: Instance) => {
                    tippyInstance.current = instance
                },
                appendTo: () => {
                    return appendTo?.current
                },
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            {shouldShow() && (
                <div ref={menuRef} className={"flex flex-row "}>
                    <Button
                        aria-label={"Align image left"}
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={onAlignImageLeft}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer",
                            {
                                "bg-content4": editor.isActive('imageBlock', {align: 'left'})
                            })}
                    >
                        <Icon icon="f7:sidebar-left" width={18} height={18}></Icon>
                    </Button>
                    <Button
                        aria-label={"Align image center"}
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={onAlignImageCenter}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer",
                            {
                                "bg-content4": editor.isActive('imageBlock', {align: 'center'})
                            })}
                    >
                        <Icon icon="f7:text-aligncenter" width={18} height={18}></Icon>
                    </Button>
                    <Button
                        aria-label={"Align image right"}
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                        onPress={onAlignImageRight}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer",
                            {
                                "bg-content4": editor.isActive('imageBlock', {align: 'right'})
                            })}
                    >
                        <Icon icon="f7:sidebar-right" width={18} height={18}></Icon>
                    </Button>
                    <ImageBlockWidth onChange={onWidthChange}
                                     value={parseInt(editor.getAttributes('imageBlock').width)}/>
                </div>
            )
            }
        </BaseBubbleMenu>
    )
}

export default ImageBlockMenu
