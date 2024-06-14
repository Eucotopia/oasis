import {Editor, NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Snippet, SnippetProps} from "@nextui-org/react";
import {createContext, useContext} from "react";
import {ReactNodeViewContextProps} from "@tiptap/react";

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
                classNames={{
                    base: "relative  py-0 px-1 flex flex-row",
                    content: "max-h-96 overflow-scroll scrollbar-hide",
                    pre: "max-h-96 overflow-scroll scrollbar-hide w-full overflow-x-scroll",
                    copyButton: "absolute top-3 right-3",
                }}
                contentEditable={false}
                variant={node.attrs.variant as SnippetProps['variant']}
                color={node.attrs.color as SnippetProps['color']}
                radius={"sm"}
                fullWidth
            >
            {/*        <NodeViewContent*/}
            {/*            as={Snippet}*/}
            {/*            variant={node.attrs.variant as SnippetProps['variant']}*/}
            {/*            color={node.attrs.color as SnippetProps['color']}*/}
            {/*            radius={"sm"}*/}
            {/*            fullWidth*/}
            {/*            contentEditable={true}*/}
            {/*            classNames={{*/}
            {/*                base: "relative  py-0 px-1 flex flex-row",*/}
            {/*                content: "max-h-96 overflow-scroll scrollbar-hide",*/}
            {/*                pre: "max-h-96 overflow-scroll scrollbar-hide w-full overflow-x-scroll",*/}
            {/*                copyButton: "absolute top-3 right-3",*/}
            {/*            }}*/}
            {/*        ></NodeViewContent>*/}
            </Snippet>
        </NodeViewWrapper>
    )
}
export default SnippetView