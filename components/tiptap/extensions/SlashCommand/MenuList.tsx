import React, {useCallback, useEffect, useRef, useState} from 'react'

import {MenuListProps} from './types'
import {cn, Listbox, ListboxItem, ListboxSection} from '@nextui-org/react'
import {Icon} from "@iconify/react";

export const MenuList = React.forwardRef((props: MenuListProps, ref) => {
    const scrollContainer = useRef<HTMLDivElement>(null)
    const activeItem = useRef<HTMLButtonElement>(null)
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
    const [selectedCommandIndex, setSelectedCommandIndex] = useState(0)

    // Anytime the groups change, i.e. the user types to narrow it down, we want to
    // reset the current selection to the first menu item
    useEffect(() => {
        setSelectedGroupIndex(0)
        setSelectedCommandIndex(0)
    }, [props.items])

    const selectItem = useCallback(
        (groupIndex: number, commandIndex: number) => {
            const command = props.items[groupIndex].commands[commandIndex]
            props.command(command)
        },
        [props],
    )

    React.useImperativeHandle(ref, () => ({
        onKeyDown: ({event}: { event: React.KeyboardEvent }) => {
            if (event.key === 'ArrowDown') {
                if (!props.items.length) {
                    return false
                }

                const commands = props.items[selectedGroupIndex].commands

                let newCommandIndex = selectedCommandIndex + 1
                let newGroupIndex = selectedGroupIndex

                if (commands.length - 1 < newCommandIndex) {
                    newCommandIndex = 0
                    newGroupIndex = selectedGroupIndex + 1
                }

                if (props.items.length - 1 < newGroupIndex) {
                    newGroupIndex = 0
                }

                setSelectedCommandIndex(newCommandIndex)
                setSelectedGroupIndex(newGroupIndex)

                return true
            }

            if (event.key === 'ArrowUp') {
                if (!props.items.length) {
                    return false
                }

                let newCommandIndex = selectedCommandIndex - 1
                let newGroupIndex = selectedGroupIndex

                if (newCommandIndex < 0) {
                    newGroupIndex = selectedGroupIndex - 1
                    newCommandIndex = props.items[newGroupIndex]?.commands.length - 1 || 0
                }

                if (newGroupIndex < 0) {
                    newGroupIndex = props.items.length - 1
                    newCommandIndex = props.items[newGroupIndex].commands.length - 1
                }

                setSelectedCommandIndex(newCommandIndex)
                setSelectedGroupIndex(newGroupIndex)

                return true
            }

            if (event.key === 'Enter') {
                if (!props.items.length || selectedGroupIndex === -1 || selectedCommandIndex === -1) {
                    return false
                }

                selectItem(selectedGroupIndex, selectedCommandIndex)

                return true
            }

            return false
        },
    }))

    useEffect(() => {
        if (activeItem.current && scrollContainer.current) {
            const offsetTop = activeItem.current.offsetTop
            const offsetHeight = activeItem.current.offsetHeight

            scrollContainer.current.scrollTop = offsetTop - offsetHeight
        }
    }, [selectedCommandIndex, selectedGroupIndex])

    const createCommandClickHandler = useCallback(
        (groupIndex: number, commandIndex: number) => {
            return () => {
                selectItem(groupIndex, commandIndex)
            }
        },
        [selectItem],
    )

    if (!props.items.length) {
        return null
    }

    return (
        <>
            <Listbox
                ref={scrollContainer}
                variant="flat"
                aria-label="Listbox menu with sections"
                className="p-1 gap-0 rounded-md divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-scroll max-h-96 scrollbar-hide shadow-small "
                itemClasses={{
                    base: "px-2 rounded-medium gap-2 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >

                {props.items.map((group, groupIndex: number) => (
                    <ListboxSection
                        showDivider
                        key={group.title}
                        title={group.title}
                        className="w-full rounded-medium"
                    >
                        {group.commands.map((command, commandIndex: number) => (
                            <ListboxItem
                                key={command.label}
                                className={cn({
                                    "bg-default-100/80": selectedGroupIndex === groupIndex && selectedCommandIndex === commandIndex
                                })}
                                onClick={createCommandClickHandler(groupIndex, commandIndex)}
                                startContent={
                                    <Icon icon={command.iconName} width={20} height={20}/>
                                }
                                // aria-current={commandIndex === selectedCommandIndex ? 'true' : 'false'}
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
