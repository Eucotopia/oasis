import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Snippet} from "@nextui-org/react";
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
    const { node, updateAttributes } = props;

    const [color, setColor] = useState<SnippetProps['color']>("default")

    const [variant, setVariant] = useState<SnippetProps['variant']>("solid")

    const handleColorChange = (color: SnippetProps['color']) => {
        updateAttributes({ color });
    };

    const handleVariantChange = (variant: SnippetProps['variant']) => {
        updateAttributes({ variant });
    };



    return (
        <NodeViewWrapper>

            <Snippet
                classNames={{
                    base: "relative",
                    content: "max-h-96 overflow-scroll scrollbar-hide",
                    pre: "max-h-96 overflow-scroll scrollbar-hide",
                    copyButton: "absolute top-3 right-3"
                }}
                variant={node.attrs.variant as SnippetProps['variant']}

                color={node.attrs.color as SnippetProps['color']}
                hideSymbol
                autoFocus
                radius={"sm"}
                fullWidth
            >
                <NodeViewContent>
                </NodeViewContent>
            </Snippet>
        </NodeViewWrapper>
    )
}
export default SnippetView