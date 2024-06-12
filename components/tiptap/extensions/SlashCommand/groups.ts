import {Group} from './types'

export const GROUPS: Group[] = [
    {
        name: 'format',
        title: 'Format',
        commands: [
            {
                name: 'heading1',
                label: 'Heading 1',
                iconName: 'mdi:format-heading-1',
                description: 'High priority section title',
                aliases: ['h1'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 1}).run()
                },
            },
            {
                name: 'heading2',
                label: 'Heading 2',
                iconName: 'mdi:format-heading-2',
                description: 'Medium priority section title',
                aliases: ['h2'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 2}).run()
                },
            },
            {
                name: 'heading3',
                label: 'Heading 3',
                iconName: 'mdi:format-heading-3',
                description: 'Low priority section title',
                aliases: ['h3'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 3}).run()
                },
            },
            {
                name: 'bulletList',
                label: 'Bullet List',
                iconName: 'fa6-solid:list',
                description: 'Unordered list of items',
                aliases: ['ul'],
                action: editor => {
                    editor.chain().focus().toggleBulletList().run()
                },
            },
            {
                name: 'numberedList',
                label: 'Numbered List',
                iconName: 'fa6-solid:list-ol',
                description: 'Ordered list of items',
                aliases: ['ol'],
                action: editor => {
                    editor.chain().focus().toggleOrderedList().run()
                },
            },
            {
                name: 'taskList',
                label: 'Task List',
                iconName: 'fa6-solid:list-check',
                description: 'Task list with todo items',
                aliases: ['todo'],
                action: editor => {
                    editor.chain().focus().toggleTaskList().run()
                },
            },
            {
                name: 'blockquote',
                label: 'Blockquote',
                iconName: 'fa6-solid:quote-right',
                description: 'Element for quoting',
                action: editor => {
                    editor.chain().focus().setBlockquote().run()
                },
            },
            {
                name: 'codeBlock',
                label: 'Code Block',
                iconName: 'fa6-solid:file-code',
                description: 'Code block with syntax highlighting',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().setCodeBlock().run()
                },
            },
        ],
    },
    {
        name: 'insert',
        title: 'Insert',
        commands: [
            {
                name: 'Snippet',
                label: 'Snippet',
                iconName: 'fa6-solid:table',
                description: 'Insert a table',
                // shouldBeHidden: editor => editor.isActive('snippet'),
                action: editor => {
                    editor.chain().focus().insertSnippet().run()
                },
            },
            {
                name: 'table',
                label: 'Table',
                iconName: 'fa6-solid:table',
                description: 'Insert a table',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: false}).run()
                },
            },
            {
                name: 'image',
                label: 'Image',
                iconName: 'fa6-solid:image',
                description: 'Insert an image',
                aliases: ['img'],
                action: editor => {
                    editor.chain().focus().setImageUpload().run()
                },
            },
            {
                name: 'columns',
                label: 'Columns',
                iconName: 'fa6-solid:table-columns',
                description: 'Add two column content',
                aliases: ['cols'],
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor
                        .chain()
                        .focus()
                        .setColumns()
                        .focus(editor.state.selection.head - 1)
                        .run()
                },
            },
            {
                name: 'horizontalRule',
                label: 'Horizontal Rule',
                iconName: 'fa6-solid:grip-lines',
                description: 'Insert a horizontal divider',
                aliases: ['hr'],
                action: editor => {
                    editor.chain().focus().setHorizontalRule().run()
                },
            },
            {
                name: 'toc',
                label: 'Table of Contents',
                iconName: 'fa6-solid:book',
                aliases: ['outline'],
                description: 'Insert a table of contents',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTableOfContents().run()
                },
            },
        ],
    },
]

export default GROUPS
