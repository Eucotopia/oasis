import {MenuProps} from "@/components/tiptap/menus/types";
import {useCallback, useRef} from "react";
import {getRenderContainer} from "@/components/tiptap/lib/utils";
import {Instance, sticky} from "tippy.js";
import {Button, DropdownItem, SnippetProps} from "@nextui-org/react";
import {BubbleMenu as BaseBubbleMenu} from "@tiptap/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";
import {Dropdown, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";

export const MessageNoteMenu = ({editor, appendTo}: MenuProps) => {

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-messageNote')
        return renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)
    }, [editor])

    const tippyInstance = useRef<Instance | null>(null)

    const shouldShow = useCallback(() => {
        return editor.isActive('messageNote')
    }, [editor])

    const setMessageNoteType = useCallback((type: NoteType) => {
        if (type) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setMessageNoteType(type).run()
        }
    }, [editor]);

    return (
        <>
            <BaseBubbleMenu
                editor={editor}
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
                    appendTo: () => appendTo?.current,
                    plugins: [sticky],
                    sticky: 'popper',
                }}
            >
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            {editor.getAttributes("messageNote")?.type}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" onAction={(key) => setMessageNoteType(key as NoteType)}>
                        <DropdownItem key="info">info</DropdownItem>
                        <DropdownItem key="warning">warning</DropdownItem>
                        <DropdownItem key="danger">danger</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </BaseBubbleMenu>
        </>
    )

}