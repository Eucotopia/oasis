'use client'

import {
    BlockquoteFigure,
    CharacterCount,
    Color,
    Document,
    Dropcursor,
    Emoji,
    Figcaption,
    FileHandler,
    Focus,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    HorizontalRule,
    ImageBlock,
    Link,
    ColorHighlighter,
    Placeholder,
    Selection,
    SlashCommand,
    StarterKit,
    Subscript,
    Superscript,
    Table,
    SmilieReplacer,
    TableOfContents,
    TableCell,
    TableHeader,
    TableRow,
    TextAlign,
    TextStyle,
    TrailingNode,
    Typography,
    Mathematics,
    Underline,
    Columns,
    Column,
    TaskItem,
    TaskList,
    emojiSuggestion,
} from '.'
import SnippetCode from "@/components/tiptap/extensions/SnippetCode/SnippetCode";
import Youtube from '@tiptap/extension-youtube'
import {CodeBlockLowlight} from '@tiptap/extension-code-block-lowlight'
import {ImageUpload} from './ImageUpload'
import History from '@tiptap/extension-history'
import {TableOfContentsNode} from './TableOfContentsNode'
import {lowlight} from 'lowlight'
import {useUploadMutation} from "@/feature/api/fileApi";
import Image from '@tiptap/extension-image'

const UploadImageHandle = async (file: File) => {
    const [uploadImage] = useUploadMutation();
    const formData = new FormData();
    formData.append('image', file);
    return await uploadImage(formData).unwrap();
}
export const ExtensionKit = () => [
    Document,
    // TODO:部分样式不可用
    Mathematics,
    Columns,
    ColorHighlighter,
    SmilieReplacer,
    TaskList,
    TaskItem.configure({
        nested: true,
    }),
    History,
    Column,
    Image,
    TableOfContents,
    TableOfContentsNode,
    Selection,
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
    }),
    SnippetCode,
    Youtube,
    HorizontalRule,
    StarterKit.configure({
        document: false,
        dropcursor: false,
        heading: false,
        horizontalRule: false,
        blockquote: false,
        history: false,
        codeBlock: false,
    }),
    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: null,
    }),
    TextStyle,
    FontSize,
    FontFamily,
    Color,
    TrailingNode,
    Link.configure({
        openOnClick: false,
    }),
    Highlight.configure({multicolor: true}),
    Underline,
    CharacterCount.configure({limit: 50000}),
    ImageUpload.configure({}),
    ImageBlock,
    FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
            files.forEach(async (file: File) => {
                const formData = new FormData();
                formData.append('image', file);
                const url = await UploadImageHandle(file);

                currentEditor.chain().setImageBlockAt({pos, src: url}).focus().run()
            })
        },
        onPaste: (currentEditor, files) => {
            files.forEach(async (file: File) => {
                const url = await UploadImageHandle(file);

                return currentEditor
                    .chain()
                    .setImageBlockAt({pos: currentEditor.state.selection.anchor, src: url})
                    .focus()
                    .run()
            })
        },
    }),
    Emoji.configure({
        enableEmoticons: true,
        suggestion: emojiSuggestion,
    }),
    TextAlign.extend({
        addKeyboardShortcuts() {
            return {}
        },
    }).configure({
        types: ['heading', 'paragraph'],
    }),
    Subscript,
    Superscript,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Typography,
    Placeholder.configure({
        includeChildren: true,
        showOnlyCurrent: false,
        placeholder: () => '',
    }),
    SlashCommand,
    Focus,
    Figcaption,
    BlockquoteFigure,
    Dropcursor.configure({
        width: 2,
        class: 'ProseMirror-dropcursor border-black',
    }),
]

export default ExtensionKit
