import {mergeAttributes, Node} from '@tiptap/core'
import {ReactNodeViewRenderer} from "@tiptap/react";
import {MessageNoteView} from "./component/MessageNoteView";

export type NoteType = 'info' | 'danger' | 'warning';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        messageNote: {
            /**
             * Set a message note
             * @param attributes Message Note attributes
             */
            setMessageNote: (attributes?: { type: NoteType; } | undefined) => ReturnType

            toggleMessageNote: (attributes?: { type: NoteType; } | undefined) => ReturnType

            setMessageNoteType: (type: NoteType) => ReturnType
        }
    }
}

export const MessageNote = Node.create({

    name: "messageNote",

    group: 'block',

    content: 'inline*',

    draggable: true,

    addAttributes() {
        return {
            type: {
                default: 'info',
                parseHTML: element => element.getAttribute('data-type'),
                renderHTML: attributes => ({'data-type': attributes.type}),
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'messageNote'
            }
        ]
    },

    renderHTML({HTMLAttributes}) {
        return ['messageNote', mergeAttributes(HTMLAttributes), 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(MessageNoteView)
    },

    addCommands() {
        return {
            setMessageNote:
                attributes => ({commands}) => {
                    return commands.setNode(this.name, attributes)
                },
            toggleMessageNote:
                attributes => ({commands}) => {
                    return commands.toggleNode(this.name, 'paragraph', attributes)
                },
            setMessageNoteType:
                type => ({commands}) => {
                    return commands.updateAttributes('messageNote', {type});
                }
        };
    },
})