import { Snippet } from '@nextui-org/react'
import { NodeViewWrapper } from '@tiptap/react'
import React from 'react'

interface Props {
    node: {
        attrs: {
            count: number
        }
    },
    updateAttributes: (attrs: { count: number }) => void
}

const MyComponent: React.FC<Props> = (props) => {
    const increase = () => {
        props.updateAttributes({
            count: props.node.attrs.count + 1,
        })
    }

    return (
        <NodeViewWrapper className="react-component">
            <label>React Component</label>
            {/*<div className="content">*/}
                <Snippet>npm install @nextui-org/react</Snippet>
                {/*<button onClick={increase}>*/}
                {/*    This button has been clicked {props.node.attrs.count} times.*/}
                {/*</button>*/}
            {/*</div>*/}
        </NodeViewWrapper>
    )
}

export default MyComponent