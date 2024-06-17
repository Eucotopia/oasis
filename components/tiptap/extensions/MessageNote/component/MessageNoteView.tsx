import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import React from "react";
import {Icon} from "@iconify/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";
import {Chip, cn, SnippetProps} from "@nextui-org/react";
import {Code} from "@nextui-org/code";

interface MessageNoteProps {
    editor: Editor;
    getPos: () => number;
    node: Node & {
        attrs: {
            color: SnippetProps['color'];
            size: SnippetProps['size'];
            radius: SnippetProps['radius']
        }
    };
    updateAttributes: (attrs: Record<string, any>) => void;
}

export const MessageNoteView = (props: MessageNoteProps) => {

    const {node, updateAttributes} = props;


    return (
        <NodeViewWrapper>

            <Code className={"w-full no-style"}
                  size={node.attrs.size}
                  color={node.attrs.color}
                  radius={node.attrs.radius}
                  contentEditable={false}>
                <div contentEditable={false}
                     className={cn("border-green-800 bg-green-800 rounded-br-md rounded-tl-md py-1 px-2 absolute top-0 text-tiny flex flex-row items-center",
                         {})}>
                    <Icon icon="mage:information-square-fill"/>
                </div>
                <NodeViewContent contentEditable={true} className={"outline-none"}/>
            </Code>
        </NodeViewWrapper>
    )
}