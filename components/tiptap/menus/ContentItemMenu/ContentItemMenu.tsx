import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import {Editor} from '@tiptap/react'

import useContentItemActions from './hooks/useContentItemActions'
import {useData} from './hooks/useData'
import React, {useEffect, useState} from 'react'
import {Icon} from "@iconify/react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {useTextmenuStates} from "@/components/tiptap/menus/TextMenu/hooks/useTextmenuStates";
import {
    Fa6SolidCopy,
    Fa6SolidGrip,
    Fa6SolidPlus,
    Fa6SolidTextSlash,
    Fa6SolidTrashCan,
    SolidDuplicate
} from "@/components/icons";

export type ContentItemMenuProps = {
    editor: Editor
}

export const ContentItemMenu = ({editor}: ContentItemMenuProps) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const data = useData()
    const actions = useContentItemActions(editor, data.currentNode, data.currentNodePos)
    const states = useTextmenuStates(editor)

    useEffect(() => {
        if (menuOpen) {
            editor.commands.setMeta('lockDragHandle', true)
        } else {
            editor.commands.setMeta('lockDragHandle', false)
        }
    }, [editor, menuOpen])

    return (
        <>
            <DragHandle
                pluginKey="ContentItemMenu"
                editor={editor}
                onNodeChange={data.handleNodeChange}
                tippyOptions={{
                    offset: [-2, 16],
                    zIndex: 99,
                }}
            >

                <div className="flex items-center space-x-2">
                    <p className={"text-gray-400"}>{actions.getHeadingType()}</p>
                    <Link onPress={actions.handleAdd} isBlock color="foreground">
                        <Fa6SolidPlus size={20}/>
                    </Link>
                    <Dropdown>
                        <DropdownTrigger>
                            <Link color="foreground" isBlock>
                                <Fa6SolidGrip size={20}/>
                            </Link>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                key="clear formatting"
                                onPress={actions.resetTextFormatting}
                                startContent={<Fa6SolidTextSlash/>}
                            >
                                Clear formatting
                            </DropdownItem>
                            <DropdownItem
                                key="copy to clipboard"
                                onPress={actions.copyNodeToClipboard}
                                startContent={<Fa6SolidCopy/>}
                            >
                                Copy to clipboard
                            </DropdownItem>
                            <DropdownItem
                                key="duplicate"
                                onPress={actions.duplicateNode}
                                startContent={<SolidDuplicate/>}
                            >
                                Duplicate
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                onPress={actions.deleteNode}
                                startContent={<Fa6SolidTrashCan/>}
                            >
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </DragHandle>
        </>
    )
}
