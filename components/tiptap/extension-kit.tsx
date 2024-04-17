'use client'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'

export const ExtensionKit = () => [
    StarterKit.configure({
        // Disable an included extension
        history: false,
        // Configure an included extension
        heading: {
            levels: [1, 2, 3],
        },
    }),
    TextStyle,
    Color,
    Typography,
    Highlight,
    CharacterCount
]

export default ExtensionKit
