import {Button} from '@nextui-org/button'
import {Dropdown, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown'
import {useCallback} from 'react'
import {cn, DropdownItem} from "@nextui-org/react";
import React from 'react';
import {Icon} from "@iconify/react";

const FONT_SIZES = [
    {label: 'Smaller', value: '12px'},
    {label: 'Small', value: '14px'},
    {label: 'Medium', value: ''},
    {label: 'Large', value: '18px'},
    {label: 'Extra Large', value: '24px'},
]

export type FontSizePickerProps = {
    onChange: (value: string) => void // eslint-disable-line no-unused-vars
    value: string
}

export const FontSizePicker = ({onChange, value}: FontSizePickerProps) => {

    // current value
    const currentValue = FONT_SIZES.find(size => size.value === value)

    const currentSizeLabel = currentValue?.label.split(' ')[0] || 'Medium'

    const selectSize = useCallback((size: string) => () => onChange(size), [onChange])

    const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentSizeLabel]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="light"
                        className="capitalize"
                        size={"md"}
                        endContent={
                            <Icon icon={"fa6-solid:chevron-down"} width={12} height={12}/>
                        }
                    >
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys as any}
                >
                    {
                        FONT_SIZES.map(size => (
                            <DropdownItem
                                textValue={size.label}
                                className={cn({
                                    "bg-default-100/80": value === size.value
                                })}
                                key={size.label}
                                onPress={selectSize(size.value)}
                            >
                                <span style={{fontSize: size.value}}>{size.label}</span>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    )
}
