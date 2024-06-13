import {Editor, NodeViewContent, NodeViewWrapper, useReactNodeView} from "@tiptap/react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Snippet} from "@nextui-org/react";
import {useState} from "react";
import {SnippetProps,} from "@nextui-org/react";

interface SnippetViewProps {
    editor: Editor;
    getPos: () => number;
    node: Node & {
        attrs: {
            color: SnippetProps['color'];
            variant: SnippetProps['variant'];
        }
    };
    updateAttributes: (attrs: Record<string, any>) => void;
}

const SnippetView = (props: SnippetViewProps) => {

    const {node, updateAttributes} = props;

    return (
        <NodeViewWrapper>
            <Snippet
                as={"span"}
                classNames={{
                    base: "relative flex flex-row flex-start justify-start p-0 px-1",
                    content: "max-h-96 overflow-scroll scrollbar-hide",
                    pre: "max-h-96 overflow-scroll scrollbar-hide w-full overflow-x-scroll",
                    copyButton: "absolute top-3 right-3",
                }}
                variant={node.attrs.variant as SnippetProps['variant']}
                color={node.attrs.color as SnippetProps['color']}
                hideSymbol
                autoFocus
                radius={"sm"}
                fullWidth
            >
                <NodeViewContent style={{
                    width: '100%',
                    padding: 0,
                    boxSizing: 'border-box',
                }}/>
            </Snippet>
        </NodeViewWrapper>
    )
}
export default SnippetView