import {NodeViewContent, NodeViewWrapper} from '@tiptap/react'
import React from 'react'

export const AlertNoticeView = () => {
    return (
        <NodeViewWrapper className="text-pink-500">
            <label contentEditable={true}>React Component</label>

            <NodeViewContent className="text-red-500"/>
        </NodeViewWrapper>
    )
}