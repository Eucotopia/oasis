import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import React from "react";
import {Icon} from "@iconify/react";
import {NoteType} from "@/components/tiptap/extensions/MessageNote";
import {Chip, cn, SnippetProps, Tabs} from "@nextui-org/react";
import {Code} from "@nextui-org/code";
import {Tab} from "@nextui-org/tabs";
import {Card, CardBody} from "@nextui-org/card";

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

    const getIcon = () => {
        switch (node.attrs.color) {
            case "primary":
                return "hugeicons:note-done";
            case "danger":
                return "maki:danger";
            case "warning":
                return "typcn:warning";
            default:
                return "hugeicons:note-done";
        }
    }

    return (
        <>
            <NodeViewWrapper>
                <Code className={"w-full no-style pt-8 pb-4 px-5 sm:px-8 my-8"}
                      size={node.attrs.size}
                      color={node.attrs.color}
                      radius={node.attrs.radius}>
                    <div
                        className={cn("flex flex-row items-center text-2xl gap-2")}>
                        <Icon icon={getIcon()} width={"3rem"} height={"3rem"}/>
                        <NodeViewContent className={"font-bold w-full line-clamp-1"}/>
                    </div>
                </Code>
            </NodeViewWrapper>
        </>
    )
}