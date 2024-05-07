import {LinkEditorPanel} from '@/components/tiptap/panels/LinkEditorPanel/LinkEditorPanel'
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import React from "react";

export type EditLinkPopoverProps = {
    onSetLink: (link: string, openInNewTab?: boolean) => void
}

export const EditLinkPopover = ({onSetLink}: EditLinkPopoverProps) => {
    return (
        <>
            <Popover placement={"bottom"}>
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        size={"sm"}
                        variant={"light"}
                    >
                        <Icon icon={"fa6-solid:link"} width={20} height={20}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <LinkEditorPanel onSetLink={onSetLink}/>
                </PopoverContent>
            </Popover>
        </>
    )
}
