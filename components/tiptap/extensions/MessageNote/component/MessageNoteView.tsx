import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import React from "react";
import {Icon} from "@iconify/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";
import {Chip, cn} from "@nextui-org/react";
import {Code} from "@nextui-org/code";

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
        // <NodeViewWrapper
        //     as={"p"}
        //     // className={cn("rounded-md my-8 mx-0 relative", {
        //     //     "bg-danger": node.attrs.type === "danger",
        //     //     "bg-success": node.attrs.type === "info",
        //     //     "bg-warning": node.attrs.type === "warning"
        //     // })}
        //     className={"w-full"}
        //     size={"lg"}
        // >
        <div>
            <div contentEditable={false}
                 className={cn("border-green-800 bg-green-800 rounded-br-md rounded-tl-md py-1 px-2 absolute top-0 text-tiny flex flex-row items-center ",
                     {
                         "bg-danger": node.attrs.type === "danger",
                         "bg-success": node.attrs.type === "info",
                         "bg-warning": node.attrs.type === "warning"
                     })}>
                <Icon icon="mage:information-square-fill"/>
                {node.attrs.type as NoteType}
            </div>
            <NodeViewContent className={cn("mt-8 p-4 text-black")}/>
        </div>
    )
}