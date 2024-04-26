import ExtensionKit from "@/components/tiptap/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";
import './styles/index.css'
import 'katex/dist/katex.min.css'
import {saveLastPostContent} from "@/feature/post/lastPostContentSlice";
import {useAppDispatch} from "@/hook/store";
import {useLastPost} from "@/hook/useLastPost";
import debounce from 'lodash.debounce'

type BlockEditorProps = {
    content?: string,
    isEditor?: boolean
}

export const useBlockEditor = (blockEditorProps: BlockEditorProps) => {
    const dispatch = useAppDispatch()
    console.log("useBlockEditor", blockEditorProps?.content || "")
    const currentPost = useLastPost()
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        // content: blockEditorProps.isEditor ? (currentPost?.lastPostContent || "") : (blockEditorProps?.content || ""),
        content: blockEditorProps.content || "123213",
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
        editable: !!blockEditorProps.isEditor
    }, [blockEditorProps.content])
    const debouncedSave = debounce(() => {
        dispatch(saveLastPostContent(editor?.getHTML() || ""))
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

