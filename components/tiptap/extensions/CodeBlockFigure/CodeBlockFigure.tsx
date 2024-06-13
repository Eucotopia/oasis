import {ReactNodeViewRenderer} from "@tiptap/react";
import SnippetView from "./components/SnippetView";
import {CodeBlockLowlight} from "@tiptap/extension-code-block-lowlight";
import {mergeAttributes} from "@tiptap/core";
import {SnippetProps} from "@nextui-org/react";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        codeBlockFigure: {
            /**
             * Set a code block
             * @param attributes Code block attributes
             * @example editor.commands.setCodeBlock({ language: 'javascript' })
             */
            setCodeBlockFigure: (attributes?: { language: string; } | undefined) => ReturnType;

            /**
             * Toggle a code block
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            toggleCodeBlock: (attributes?: { language: string; } | undefined) => ReturnType;

            /**
             * set snippet color
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            setCodeBlockFigureColor: (color: SnippetProps['color']) => ReturnType;

            /**
             * set snippet variant
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            setCodeBlockFigureVariant: (variant: SnippetProps['variant']) => ReturnType;
        };
    }
}
export const CodeBlockFigure = CodeBlockLowlight.extend({
    name: "codeBlockFigure",

    defining: true,

    group:'block',

    content:'inline*',

    isolating: true,

    draggable: true,

    addKeyboardShortcuts() {
        return {
            ...this.parent?.(),
        }
    },

    addAttributes() {
        return {
            color: {
                default: 'default',
                parseHTML: element => element.getAttribute('data-color'),
                renderHTML: attributes => ({'data-color': attributes.color}),
            },
            variant: {
                default: 'bordered',
                parseHTML: element => element.getAttribute('data-variant'),
                renderHTML: attributes => ({'data-variant': attributes.variant}),
            },
        };
    },

    renderHTML({HTMLAttributes}) {
        return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'snippet-block'}), 0];
    },

    parseHTML() {
        return [
            {
                tag: 'div[data-type="snippet-block"]',
            },
        ];
    },

    addCommands() {
        return {
            setCodeBlockFigure:
                attributes => ({commands}) => {
                    return commands.setNode(this.name, attributes)
                },
            toggleCodeBlock:
                attributes => ({commands}) => {
                    return commands.toggleNode(this.name, 'paragraph', attributes)
                },
            setCodeBlockFigureColor: color => ({commands}) => {
                return commands.updateAttributes('codeBlockFigure', {color});
            },
            setCodeBlockFigureVariant: variant => ({commands}) => {
                return commands.updateAttributes('codeBlockFigure', {variant});
            },
        };
    },

    addNodeView() {
        return ReactNodeViewRenderer(SnippetView, {contentDOMElementTag: 'span'})
    },

})