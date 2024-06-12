import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Snippet} from "@nextui-org/react";

const SnippetView = () => {
    return (
        <NodeViewWrapper>
            <Snippet
                variant={"bordered"}
                // symbol="#"
                hideSymbol
                autoFocus
                classNames={{
                    base:"w-full",
                    // copyButton:"absolute top-7 right-7",
                }}
                // className={"absolute top-1/2"}
                onCopy={() => {
                    alert("nice")
                }}
            >
                <NodeViewContent>
                </NodeViewContent>
            </Snippet>

        </NodeViewWrapper>
    )
}
export default SnippetView