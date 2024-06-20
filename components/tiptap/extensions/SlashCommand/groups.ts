import {
    Fa6SolidList,
    Fa6SolidListCheck,
    Fa6SolidListOl,
    Fa6SolidQuoteRight, FaSolidBook, GravityUiLayoutHeaderColumns, MageImageFill,
    SolarCodeSquareBold, TableFilled
} from '@/components/icons'
import {Group} from './types'

export const GROUPS: Group[] = [
    {
        name: 'format',
        title: 'Format',
        commands: [
            {
                name: 'bulletList',
                label: 'Bullet List',
                description: 'Unordered list of items',
                aliases: ['ul'],
                action: editor => {
                    editor.chain().focus().toggleBulletList().run()
                },
                iconName: Fa6SolidList,
            },
            {
                name: 'numberedList',
                label: 'Numbered List',
                iconName: Fa6SolidListOl,
                description: 'Ordered list of items',
                aliases: ['ol'],
                action: editor => {
                    editor.chain().focus().toggleOrderedList().run()
                },
            },
            {
                name: 'taskList',
                label: 'Task List',
                iconName: Fa6SolidListCheck,
                description: 'Task list with todo items',
                aliases: ['todo'],
                action: editor => {
                    editor.chain().focus().toggleTaskList().run()
                },
            },
            {
                name: 'blockquote',
                label: 'Blockquote',
                iconName: Fa6SolidQuoteRight,
                description: 'Element for quoting',
                action: editor => {
                    editor.chain().focus().setBlockquote().run()
                },
            },
            {
                name: 'codeBlock',
                label: 'Code Block',
                iconName: SolarCodeSquareBold,
                description: 'Code block with syntax highlighting',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().setCodeBlockFigure().run()
                },
            },
        ],
    },
    {
        name: "note",
        title: "Note",
        commands: [
            {
                name: 'infoNote',
                label: 'Info Note',
                iconName: Fa6SolidList,
                description: '待定',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().setMessageNote().run()
                },
            },
        ]
    },
    {
        name: 'insert',
        title: 'Insert',
        commands: [
            {
                name: 'table',
                label: 'Table',
                iconName: TableFilled,
                description: 'Insert a table',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: false}).run()
                },
            },
            {
                name: 'image',
                label: 'Image',
                iconName: MageImageFill,
                description: 'Insert an image',
                aliases: ['img'],
                action: editor => {
                    editor.chain().focus().setImageUpload().run()
                },
            },
            {
                name: 'columns',
                label: 'Columns',
                iconName: GravityUiLayoutHeaderColumns,
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
                name: 'toc',
                label: 'Table of Contents',
                iconName: FaSolidBook,
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
