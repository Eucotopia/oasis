import ExtensionKit from "@/components/tiptap/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";

export const useBlockEditor = () => {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: `
        <h2>Heading</h2>
        <p style="text-align: center">first paragraph</p>
        <p style="text-align: right">second paragraph</p>
      `,
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
    }, [])
    useEffect(() => {
        if (!editor) {
            return undefined
        }
    })
    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}

