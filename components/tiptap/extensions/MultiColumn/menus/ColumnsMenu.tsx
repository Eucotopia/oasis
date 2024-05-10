import {BubbleMenu as BaseBubbleMenu} from '@tiptap/react'
import {useCallback} from 'react'
import {sticky} from 'tippy.js'
import {v4 as uuid} from 'uuid'
import {MenuProps} from '@/components/tiptap/menus/types'
import {getRenderContainer} from '@/components/tiptap/lib/utils'
import {ColumnLayout} from '../Columns'
import {Button, cn} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export const ColumnsMenu = ({editor, appendTo}: MenuProps) => {
    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'columns')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isColumns = editor.isActive('columns')
        return isColumns
    }, [editor])

    const onColumnLeft = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.SidebarLeft).run()
    }, [editor])

    const onColumnRight = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.SidebarRight).run()
    }, [editor])

    const onColumnTwo = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.TwoColumn).run()
    }, [editor])

    return (
        <BaseBubbleMenu
            editor={editor}
            pluginKey={`columnsMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                getReferenceClientRect,
                appendTo: () => appendTo?.current,
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            <div className={"text-black inline-flex h-full leading-none gap-0.5 flex-row p-1 items-center"}>
                <Button
                    isIconOnly
                    size={"sm"}
                    variant={"light"}
                    onPress={onColumnLeft}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer",
                        {
                            "bg-content4": editor.isActive('columns', { layout: ColumnLayout.SidebarLeft })
                        })}
                >
                    <Icon icon={"mdi:dock-left"} width={26} height={26}/>
                </Button>
                <Button
                    isIconOnly
                    size={"sm"}
                    variant={"light"}
                    onPress={onColumnTwo}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer",
                        {
                            "bg-content4": editor.isActive('columns', { layout: ColumnLayout.TwoColumn })
                        })}
                >
                    <Icon icon={"fa6-solid:table-columns"} width={20} height={20}/>
                </Button>
                <Button
                    isIconOnly
                    size={"sm"}
                    variant={"light"}
                    onPress={onColumnRight}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer",
                        {
                            "bg-content4": editor.isActive('columns', { layout: ColumnLayout.SidebarRight })
                        })}
                >
                    <Icon icon={"mdi:dock-right"} width={26} height={26}/>
                </Button>
            </div>
        </BaseBubbleMenu>
    )
}

export default ColumnsMenu