'use client'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextStyle from '@tiptap/extension-text-style'
import Document from '@tiptap/extension-document'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import Heading from '@tiptap/extension-heading'
import FontFamily from '@tiptap/extension-font-family'
import {Color} from '@tiptap/extension-color'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Underline from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import CodeBlock from '@tiptap/extension-code-block'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
import {Paragraph} from "@tiptap/extension-paragraph";


export const ExtensionKit = () => [
    StarterKit.configure({
        // Disable an included extension
        history: false,
        // Configure an included extension
        heading: {
            levels: [1, 2, 3],
        },
    }),
    TaskList,
    Link.configure({
        validate: href => /^https?:\/\//.test(href),
    }),
    TaskItem,
    Paragraph,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    FontFamily,
    Text,
    Heading,
    Document,
    CodeBlock,
    Code,
    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: null,
    }),
    Underline,
    TextStyle,
    Superscript,
    Subscript,
    Color,
    Typography,
    Highlight,
    CharacterCount
]

export default ExtensionKit
