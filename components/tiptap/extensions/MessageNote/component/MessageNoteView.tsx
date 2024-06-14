import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import React from "react";
import {Icon} from "@iconify/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";

interface MessageNoteProps {
    editor: Editor;
    getPos: () => number;
    node: Node & {
        attrs: {
            type: NoteType;
        }
    };
    updateAttributes: (attrs: Record<string, any>) => void;
}

export const MessageNoteView = (props: MessageNoteProps) => {

    const {node, updateAttributes} = props;


    return (
        <NodeViewWrapper
            className={"bg-green-100 border-2 border-solid border-green-500 rounded-md my-8 mx-0 relative"}>
            <div contentEditable={false}
                 className={"border-green-800 bg-green-800 rounded-br-md rounded-tl-md py-1 px-2 absolute top-0 text-tiny flex flex-row items-center"}>
                <Icon icon="mage:information-square-fill"/>
                {node.attrs.type as NoteType}
            </div>
            <NodeViewContent className={"mt-8 p-4 text-black"}/>
        </NodeViewWrapper>
    )
}