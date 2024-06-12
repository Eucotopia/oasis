import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import {Editor} from '@tiptap/react'

import useContentItemActions from './hooks/useContentItemActions'
import {useData} from './hooks/useData'
import {useEffect, useState} from 'react'
import {Icon} from "@iconify/react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {useTextmenuStates} from "@/components/tiptap/menus/TextMenu/hooks/useTextmenuStates";

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
                    <Link onPress={actions.handleAdd} isBlock color="foreground">
                        <Icon icon="fa6-solid:plus" height={20} width={20}/>
                    </Link>
                    <Dropdown>
                        <DropdownTrigger>
                            <Link color="foreground" isBlock>
                                <Icon icon="fa6-solid:grip" height={20} width={20}/>
                            </Link>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                key="clear formatting"
                                onPress={actions.resetTextFormatting}
                                startContent={<Icon icon="fa6-solid:text-slash" width={18} height={18}/>}
                            >
                                Clear formatting
                            </DropdownItem>
                            <DropdownItem
                                key="copy to clipboard"
                                onPress={actions.copyNodeToClipboard}
                                startContent={<Icon icon="fa6-solid:copy" width={18} height={18}/>}
                            >
                                Copy to clipboard
                            </DropdownItem>
                            <DropdownItem
                                key="duplicate"
                                onPress={actions.duplicateNode}
                                startContent={<Icon icon="fa6-solid:copy" width={18} height={18}/>}
                            >
                                Duplicate
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                onPress={actions.deleteNode}
                                startContent={<Icon icon="fa6-solid:trash" width={18} height={18}/>}
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
