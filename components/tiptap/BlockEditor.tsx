import {BubbleMenu, FloatingMenu, Editor, EditorContent} from "@tiptap/react";
import './styles/index.css'
import {Button, Divider} from "@nextui-org/react";
import {HexColorPicker} from "react-colorful";
import {RadioGroup} from "@nextui-org/radio";
import ColorRadioItem from "@/components/colorful/ColorRadioItem";
import PopoverFilterWrapper from "@/components/colorful/PopoverFilterWrapper";
import React from "react";

export const BlockEditor = ({height, editor}: {
    height: string,
    editor: Editor
}) => {
    return (
        <>
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{duration: 100}} editor={editor}>
                <Button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </Button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
                <PopoverFilterWrapper title="Theme" className={"flex flex-col items-center"}>
                    {/*<section className={"w-full"}>*/}
                    {/*    <HexColorPicker className={"mx-auto w-full"}*/}
                    {/*                    color={editor.getAttributes('textStyle').color}*/}
                    {/*                    onChange={(color: string) => {*/}
                    {/*                        editor.chain().focus().setColor(color).run()*/}
                    {/*                    }}*/}
                    {/*    />*/}
                    {/*</section>*/}
                    {/*<Divider className={"my-4"}/>*/}
                    <RadioGroup
                        aria-label="Color"
                        classNames={{
                            wrapper: "gap-2",
                        }}
                        orientation="horizontal"
                    >
                        <ColorRadioItem color="#3F3F46" tooltip="Gray" value="gray" editor={editor}/>
                        <ColorRadioItem color="#F31260" tooltip="Red" value="red" editor={editor}/>
                        <ColorRadioItem color="#006FEE" tooltip="Blue" value="blue" editor={editor}/>
                        <ColorRadioItem color="#17C964" tooltip="Green" value="green" editor={editor}/>
                        <ColorRadioItem color="#F5A524" tooltip="Yellow" value="yellow" editor={editor}/>
                        <ColorRadioItem color="#222222" tooltip="Black" value="black" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                        <ColorRadioItem color="#ffffff" tooltip="White" value="white" editor={editor}/>
                    </RadioGroup>
                </PopoverFilterWrapper>
            </BubbleMenu>}

            {editor && <FloatingMenu className="floating-menu" tippyOptions={{duration: 100}} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                    className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    Bullet List
                </button>
            </FloatingMenu>}
            <EditorContent editor={editor} style={{minHeight: height}}/>
        </>
    );
}