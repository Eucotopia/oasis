import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Snippet} from "@nextui-org/react";

const SnippetView = () => {
    return (
        // <NodeViewWrapper>
        //     <NodeViewContent style={{
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         textAlign: 'center',
        //         backgroundColor: '#fff',
        //     }}>
        //         <Snippet
        //             variant={"bordered"}
        //             symbol="#"
        //             className={"w-full flex-row bg-pink-600"}
        //         >
        //         </Snippet>
        //     </NodeViewContent>
        // </NodeViewWrapper>
        <NodeViewWrapper>
            <Snippet
                variant={"bordered"}
                symbol="#"
                className={"w-full flex-row flex-1"}
            >
                <NodeViewContent>
                </NodeViewContent>
            </Snippet>

        </NodeViewWrapper>
    )
}
export default SnippetView