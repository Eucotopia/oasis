'use client'
import Blockquote from '@tiptap/extension-blockquote'
import {TableOfContentNode} from "@/components/tiptap/extensions/TableOfContents/TableOfContentNode";
import Image from '@tiptap/extension-image'
import {Mathematics} from '@tiptap-pro/extension-mathematics'
import Youtube from '@tiptap/extension-youtube'
import {CodeBlockLowlight} from '@tiptap/extension-code-block-lowlight'
import {lowlight} from 'lowlight'
import Code from '@tiptap/extension-code'
import CodeBlock from '@tiptap/extension-code-block'
import Text from '@tiptap/extension-text'
import {Paragraph} from "@tiptap/extension-paragraph";
import { ImageUpload } from './ImageUpload'
import {
    SmilieReplacer,
    CharacterCount,
    ColorHighlighter,
    Color,
    BlockquoteFigure,
    SlashCommand,
    Dropcursor,
    Emoji,
    Figcaption,
    Document,
    HorizontalRule,
    Columns,
    Column,
    FileHandler,
    Focus,
    FontFamily,
    Highlight,
    ImageBlock,
    Placeholder,
    StarterKit,
    Subscript,
    Link,
    Superscript,
    TableOfContent,
    TextAlign,
    TextStyle,
    Typography,
    Underline,
    TaskItem,
    Heading,
    Selection,
    TaskList,
} from '.'
import {HardBreak} from "@tiptap/extension-hard-break";


export const ExtensionKit = () => [
    Paragraph,
    Text,
    StarterKit.configure({
        document: false,
        dropcursor: false,
        heading: false,
        horizontalRule: false,
        blockquote: false,
        history: false,
        codeBlock: false,
    }),
    Dropcursor,
    HorizontalRule,
    Selection,
    FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
            files.forEach(file => {
                const fileReader = new FileReader()

                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor.chain().insertContentAt(pos, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    }).focus().run()
                }
            })
        },
        onPaste: (currentEditor, files, htmlContent) => {
            files.forEach(file => {
                if (htmlContent) {
                    // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                    // you could extract the pasted file from this url string and upload it to a server for example
                    console.log(htmlContent) // eslint-disable-line no-console
                    return false
                }

                const fileReader = new FileReader()

                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    }).focus().run()
                }
            })
        },
    }),
    Image,
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
    }),
    TaskList,
    Link.configure({
        openOnClick: false,
    }),
    TaskItem,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    Figcaption,
    FontFamily,
    Youtube,
    SmilieReplacer,
    Placeholder,
    Document,
    HardBreak,
    BlockquoteFigure,
    CodeBlock,
    Mathematics,
    ColorHighlighter,
    Code,
    Blockquote,
    Columns,
    Column,
    ImageUpload,
    SlashCommand,
    ImageBlock,
    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: null,
    }),
    Underline,
    TextStyle,
    Superscript,
    Subscript,
    Color,
    TableOfContent,
    TableOfContentNode,
    Typography,
    Highlight,
    CharacterCount
]

export default ExtensionKit
