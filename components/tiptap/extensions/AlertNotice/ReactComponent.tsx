import {mergeAttributes, Node} from '@tiptap/core'
import {ReactNodeViewRenderer} from '@tiptap/react'
import {AlertNoticeView} from "@/components/tiptap/extensions/AlertNotice/components/AlertNoticeView";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        alertNotice: {
            /**
             * Set a code block
             * @param attributes Code block attributes
             * @example editor.commands.setCodeBlock({ language: 'javascript' })
             */
            setCodeBlockFigure: (attributes?: { language: string; } | undefined) => ReturnType;
        };
    }
}
export const ReactComponent = Node.create({
    name: 'reactComponent',

    group: 'block',

    content: 'inline*',

    parseHTML() {
        return [
            {
                tag: 'react-component',
            },
        ]
    },

    addKeyboardShortcuts() {
        return {
            'Mod-Enter': () => {
                return this.editor.chain().insertContentAt(this.editor.state.selection.head, {type: this.type.name}).focus().run()
            },
        }
    },

    renderHTML({HTMLAttributes}) {
        return ['react-component', mergeAttributes(HTMLAttributes), 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(AlertNoticeView)
    },
})