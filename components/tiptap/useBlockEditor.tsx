import ExtensionKit from "@/components/tiptap/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";
import './styles/index.css'
import 'katex/dist/katex.min.css'

export const useBlockEditor = () => {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: `
      <ul>
        <li>$\\\\LaTeX$</li>
      </ul>
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

