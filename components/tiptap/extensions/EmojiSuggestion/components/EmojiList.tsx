import {EmojiItem} from '@tiptap-pro/extension-emoji'
import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from 'react'

import {EmojiListProps} from '../types'
import {cn, Listbox, ListboxItem} from "@nextui-org/react";
import {Image} from "@nextui-org/image";

const EmojiList = forwardRef((props: EmojiListProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => setSelectedIndex(0), [props.items])

    const selectItem = useCallback(
        (index: number) => {
            const item = props.items[index]

            if (item) {
                props.command({name: item.name})
            }
        },
        [props],
    )

    useImperativeHandle(
        ref,
        () => {
            const scrollIntoView = (index: number) => {
                const item = props.items[index]

                if (item) {
                    const node = document.querySelector(`[data-emoji-name="${item.name}"]`)

                    if (node) {
                        node.scrollIntoView({block: 'nearest'})
                    }
                }
            }

            const upHandler = () => {
                const newIndex = (selectedIndex + props.items.length - 1) % props.items.length
                setSelectedIndex(newIndex)
                scrollIntoView(newIndex)
            }

            const downHandler = () => {
                const newIndex = (selectedIndex + 1) % props.items.length
                setSelectedIndex(newIndex)
                scrollIntoView(newIndex)
            }

            const enterHandler = () => {
                selectItem(selectedIndex)
            }

            return {
                onKeyDown: ({event}: { event: React.KeyboardEvent }) => {
                    if (event.key === 'ArrowUp') {
                        upHandler()
                        return true
                    }

                    if (event.key === 'ArrowDown') {
                        downHandler()
                        return true
                    }

                    if (event.key === 'Enter') {
                        enterHandler()
                        return true
                    }

                    return false
                },
            }
        },
        [props, selectedIndex, selectItem],
    )

    const createClickHandler = useCallback((index: number) => () => selectItem(index), [selectItem])

    if (!props.items || !props.items.length) {
        return null
    }

    return (
        <>
            <Listbox
                variant="flat"
                aria-label="Listbox menu with sections"
                className="p-1 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-scroll max-h-96 scrollbar-hide shadow-small"
                itemClasses={{
                    base: "px-2 rounded-medium gap-2 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >
                {props.items.map((item: EmojiItem, index: number) => (
                    <ListboxItem
                        key={item.name}
                        className={cn({
                            "bg-default-100/80": index === selectedIndex
                        })}
                        startContent={
                            <>
                                {
                                    item.fallbackImage &&
                                    <Image src={item.fallbackImage} height={20} width={20} alt="emoji"/>
                                }
                            </>
                        }
                        onPress={createClickHandler(index)}
                    >
                        <span className={"truncate text-ellipsis"}>:{item.name}</span>
                    </ListboxItem>
                ))}
            </Listbox>
        </>
    )
})

EmojiList.displayName = 'EmojiList'

export default EmojiList
