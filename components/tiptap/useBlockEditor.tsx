import ExtensionKit from "@/components/tiptap/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";
import './styles/index.css'
import 'katex/dist/katex.min.css'
import {saveCurrentPostContent} from "@/feature/post/currentPostContentSlice";
import {useAppDispatch} from "@/hook/store";
import {useCurrentPost} from "@/hook/useCurrentPost";
import debounce from 'lodash.debounce'

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

    }, [])
    const debouncedSave = debounce(() => {
        dispatch(saveCurrentPostContent(editor?.getHTML() || ""))
    }, 3000)
    useEffect(() => {
        if (!editor) {
            return undefined
        }
        editor.on("update", () => {
            debouncedSave()
        })
        return () => {
            editor.off("update", () => {
                debouncedSave()
            })
        }
    }, [editor, debouncedSave])
    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}

