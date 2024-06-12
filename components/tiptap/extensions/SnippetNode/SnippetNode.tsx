import {mergeAttributes, Node} from '@tiptap/core'
import {ReactNodeViewRenderer} from '@tiptap/react'
import SnippetView from "./SnippetView";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        SnippetNode: {
            insertSnippet: () => ReturnType
        }
    }
}

export const SnippetNode = Node.create({
    name: 'snippet',

    group: 'block',

    content: 'inline*',

    draggable: true,

    parseHTML() {
        return [
            {
                tag: 'snippet',
            },
        ]
    },


    renderHTML({HTMLAttributes}) {
        return ['snippet', mergeAttributes(HTMLAttributes),0]
    },


    addKeyboardShortcuts() {
        return {
            'Mod-g': () => this.editor.commands.insertSnippet(),
            'Mod-G': () => this.editor.commands.insertSnippet()
        }
    },

    addNodeView() {
        return ReactNodeViewRenderer(SnippetView, {contentDOMElementTag: 'span'})
    },

    addCommands() {
        return {
            insertSnippet:
                () =>
                    ({commands}) => {
                        return commands.insertContent({
                            type: this.name,
                        })
                    },
        }
    },
})