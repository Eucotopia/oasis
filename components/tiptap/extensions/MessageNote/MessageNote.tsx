import {mergeAttributes, Node} from '@tiptap/core'
import {ReactNodeViewRenderer} from "@tiptap/react";
import {MessageNoteView} from "./component/MessageNoteView";
import {CodeProps} from "@nextui-org/code";

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

            /**
             * set snippet color
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            setMessageNoteColor: (color: CodeProps['color']) => ReturnType;

            /**
             * set snippet radius
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            setMessageNoteRadius: (radius: CodeProps['radius']) => ReturnType;

            setMessageNoteSize: (size: CodeProps['size']) => ReturnType
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
            color: {
                default: 'default',
                parseHTML: element => element.getAttribute('data-color'),
                renderHTML: attributes => ({'data-color': attributes.color}),
            },
            radius: {
                default: 'sm',
                parseHTML: element => element.getAttribute('data-radius'),
                renderHTML: attributes => ({'data-radius': attributes.radius}),
            },
            size: {
                default: 'sm',
                parseHTML: element => element.getAttribute('data-size'),
                renderHTML: attributes => ({'data-size': attributes.size}),
            }
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
            setMessageNoteColor: color => ({commands}) => {
                return commands.updateAttributes(this.name, {color});
            },
            setMessageNoteSize: size => ({commands}) => {
                return commands.updateAttributes(this.name, {size});
            },
            setMessageNoteRadius: radius => ({commands}) => {
                return commands.updateAttributes(this.name, {radius})
            }
        };
    },
})