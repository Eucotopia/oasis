import {mergeAttributes, Node} from '@tiptap/core'
import {ReactNodeViewRenderer} from '@tiptap/react'
import SnippetCodeView from "@/components/tiptap/extensions/SnippetCode/SnippetCodeView";

export default Node.create({
    name: 'snippetCode',

    group: 'block',

    content: 'inline*',

    parseHTML() {
        return [
            {
                tag: 'snippetCode',
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
        return ['snippetCode', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return ReactNodeViewRenderer(SnippetCodeView)
    },
})