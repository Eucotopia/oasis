import {Slider, SliderValue} from '@nextui-org/react'
import {memo, useCallback, useEffect, useState} from 'react'

export type ImageBlockWidthProps = {
    onChange: (value: number) => void
    value: number
}

export const ImageBlockWidth = memo(({onChange, value}: ImageBlockWidthProps) => {
    const [currentValue, setCurrentValue] = useState(value)

    useEffect(() => {
        setCurrentValue(value)
    }, [value])

    const handleChange = useCallback(
        (value: SliderValue) => {
            onChange(value as number)
        },
        [onChange],
    )

    return (
        <>
            <Slider
                size="sm"
                aria-label="Select brightness"
                value={currentValue}
                minValue={25}
                className="w-32"
                defaultValue={80}
                maxValue={100}
                onChange={(value: SliderValue) => {
                    handleChange(value)
                }}
            />
        </>
    )
})

ImageBlockWidth.displayName = 'ImageBlockWidth'
