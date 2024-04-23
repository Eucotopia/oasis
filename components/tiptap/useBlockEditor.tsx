import ExtensionKit from "@/components/tiptap/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";
import './styles/index.css'
import 'katex/dist/katex.min.css'
import {saveCurrentPostContent} from "@/feature/post/currentPostContentSlice";
import {useAppDispatch} from "@/hook/store";
import {useCurrentPost} from "@/hook/useCurrentPost";

export const useBlockEditor = () => {
    const dispatch = useAppDispatch()
    const currentPost = useCurrentPost()
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: currentPost === null ? "" : currentPost.currentPostContent,
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
        onUpdate: () => {
            dispatch(saveCurrentPostContent(editor?.getHTML() || ""))
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

