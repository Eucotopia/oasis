import React from 'react'
import {Editor as CoreEditor} from '@tiptap/core'
import {Editor} from '@tiptap/react'
import {EditorState} from '@tiptap/pm/state'
import {EditorView} from '@tiptap/pm/view'
import {SnippetProps} from "@nextui-org/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";

export interface MenuProps {
    editor: Editor
    appendTo?: React.RefObject<any>
    shouldHide?: boolean
}

export interface ShouldShowProps {
    editor?: CoreEditor
    view: EditorView
    state?: EditorState
    oldState?: EditorState
    from?: number
    to?: number
}


