import ExtensionKit from "@/components/tiptap/extensions/extension-kit";
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

//TODO 这里获取 BlockEditorProps 会出现多次获取，并且第一次总是为空，这里需要优化；会造成页面闪烁一次
export const useBlockEditor = (blockEditorProps: BlockEditorProps) => {
    const dispatch = useAppDispatch()
    const currentPost = useLastPost()
    // 如果传入内容，要么显示、要么修改
    let editContent
    if (blockEditorProps.content) {
        editContent = blockEditorProps.content || ""
    }
    if (blockEditorProps.isEditor && !blockEditorProps.content) {
        editContent = currentPost?.lastPostContent || ""
    }

    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: editContent,
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
        editable: !!blockEditorProps.isEditor
    }, [blockEditorProps?.content])
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

