import React, {useCallback, useEffect, useRef, useState} from 'react'

import {MenuListProps} from './types'
import {cn, Listbox, ListboxItem, ListboxSection} from '@nextui-org/react'
import {Icon} from "@iconify/react";

export const MenuList = React.forwardRef((props: MenuListProps, ref) => {

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0-0"]));

    const refRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refRef.current != null) {
            refRef.current.autofocus
        }
    })
    const selectItem = useCallback(
        (groupIndex: number, commandIndex: number) => {
            const command = props.items[groupIndex].commands[commandIndex]
            props.command(command)
        },
        [props],
    )

    if (!props.items.length) {
        return null
    }
    return (
        <>
            <Listbox
                ref={refRef}
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys as any}
                shouldFocusWrap
                defaultSelectedKeys={selectedKeys}
                // selectionMode={"single"}
                onAction={(key) => {
                    const strings = key.toLocaleString().split("-");
                    selectItem(parseInt(strings[0]), parseInt(strings[1]))
                }}
                variant="flat"
                aria-label="Slashcommand"
                classNames={{
                    base: "flex flex-col gap-10 overflow-scroll max-h-96 scrollbar-hide shadow-small p-2 rounded-md bg-content1 max-w-[300px] p-3",
                }}
                itemClasses={{
                    base: cn("py-3 px-3 mt-2"),
                }}
            >
                {props.items.map((group, groupIndex: number) => (
                    <ListboxSection
                        classNames={{
                            heading: cn("text-md text-default-500")
                        }}
                        key={groupIndex}
                        title={group.title}
                    >
                        {group.commands.map((command, commandIndex: number) => (
                            <ListboxItem
                                key={`${groupIndex}-${commandIndex}`}
                                startContent={
                                    <Icon icon={command.iconName} width={20} height={20}/>
                                }
                            >
                                {command.label}
                            </ListboxItem>
                        ))}
                    </ListboxSection>
                ))}
            </Listbox>
        </>
    )
})

MenuList.displayName = 'MenuList'

export default MenuList
