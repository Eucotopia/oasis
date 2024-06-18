import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Snippet, SnippetProps} from "@nextui-org/react";

interface SnippetViewProps {
    editor: Editor;
    getPos: () => number;
    node: Node & {
        attrs: {
            color: SnippetProps['color'];
            variant: SnippetProps['variant'];
            radius: SnippetProps['radius']
        }
    };
    updateAttributes: (attrs: Record<string, any>) => void;
}

const SnippetView = (props: SnippetViewProps) => {

    const {node, updateAttributes} = props;

    return (
        <NodeViewWrapper>
            <Snippet
                classNames={{
                    base: "relative flex flex-row p-4",
                    content: "max-h-[600px] overflow-scroll scrollbar-hide",
                    pre: "max-h-[600px] overflow-scroll scrollbar-hide w-full overflow-x-scroll text-foreground",
                    copyButton: "absolute top-3 right-3",
                }}
                hideSymbol
                variant={node.attrs.variant}
                color={node.attrs.color}
                radius={node.attrs.radius}
                fullWidth
            >
                <NodeViewContent/>
            </Snippet>
        </NodeViewWrapper>
    )
}
export default SnippetView