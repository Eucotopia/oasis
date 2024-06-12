import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Snippet} from "@nextui-org/react";

const SnippetCodeView = () => {
    return (
        <NodeViewWrapper>
            <Snippet className={"flex flex-row"} color="success" symbol="#">
                <NodeViewContent className="bg-inherit is-editable"/>
            </Snippet>
        </NodeViewWrapper>
    )
}
export default SnippetCodeView