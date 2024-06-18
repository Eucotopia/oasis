import {MenuProps} from "@/components/tiptap/menus/types";
import {useCallback, useRef} from "react";
import {getRenderContainer} from "@/components/tiptap/lib/utils";
import {Instance, sticky} from "tippy.js";
import {Button, DropdownItem, SnippetProps} from "@nextui-org/react";
import {BubbleMenu as BaseBubbleMenu} from "@tiptap/react";
import {Dropdown, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {CodeProps} from "@nextui-org/code";

export const MessageNoteMenu = ({editor, appendTo}: MenuProps) => {

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-messageNote')
        return renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)
    }, [editor])

    const tippyInstance = useRef<Instance | null>(null)

    const setColor = useCallback((color: CodeProps['color']) => {
        if (color) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setMessageNoteColor(color).run();
        }
    }, [editor]);

    const setRadius = useCallback((radius: CodeProps['radius']) => {
        if (radius) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setMessageNoteRadius(radius).run();
        }
    }, [editor]);

    const setSize = useCallback((size: CodeProps['size']) => {
        if (size) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setMessageNoteSize(size).run();
        }
    }, [editor]);

    const shouldShow = useCallback(() => {
        return editor.isEditable && editor.isActive('messageNote')
    }, [editor])

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
                className={"flex flex-row gap-4"}
            >
                <Dropdown size={"sm"}>
                    <DropdownTrigger>
                        <Button
                            size={"sm"}
                        >
                            {editor.getAttributes("messageNote")?.color}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => setColor(key as CodeProps['color'])}>
                        <DropdownItem key={"default"}>Default</DropdownItem>
                        <DropdownItem key={"primary"}>Primary</DropdownItem>
                        <DropdownItem key={"secondary"}>Secondary</DropdownItem>
                        <DropdownItem key="success">Success</DropdownItem>
                        <DropdownItem key="warning">Warning</DropdownItem>
                        <DropdownItem key="danger">Danger</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            size={"sm"}
                        >
                            {editor.getAttributes("messageNote")?.radius}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => setRadius(key as CodeProps['radius'])}>
                        <DropdownItem key={"none"}>None</DropdownItem>
                        <DropdownItem key={"sm"}>Sm</DropdownItem>
                        <DropdownItem key={"md"}>Md</DropdownItem>
                        <DropdownItem key="lg">Lg</DropdownItem>
                        <DropdownItem key="full">Full</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown size={"sm"}>
                    <DropdownTrigger>
                        <Button
                            size={"sm"}
                        >
                            {editor.getAttributes("messageNote")?.size}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => setSize(key as CodeProps['size'])}>
                        <DropdownItem key={"sm"}>Sm</DropdownItem>
                        <DropdownItem key={"md"}>Md</DropdownItem>
                        <DropdownItem key="lg">Lg</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </BaseBubbleMenu>
        </>
    )

}