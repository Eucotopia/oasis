import {useDropZone, useFileUpload, useUploader} from '@/hook/ImageUpload'
import {ChangeEvent, useCallback} from 'react'
import {Button, cn, Spinner} from "@nextui-org/react";
import {Icon} from '@iconify/react';

export const ImageUploader = ({onUpload}: { onUpload: (url: string) => void }) => {
    const {loading, uploadFile} = useUploader({onUpload})
    const {handleUploadClick, ref} = useFileUpload()
    const {draggedInside, onDrop, onDragEnter, onDragLeave} = useDropZone({uploader: uploadFile})

    const onFileChange = useCallback(
        // @ts-ignore
        (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
        [uploadFile],
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8 rounded-lg min-h-[10rem] bg-opacity-80">
                <Spinner label="Loading..." color="primary"/>
            </div>
        )
    }

    const wrapperClass = cn(
        'flex flex-col items-center justify-center px-8 py-10 rounded-lg bg-opacity-80',
        draggedInside && 'bg-neutral-100',
    )

    return (
        <div
            className={wrapperClass}
            onDrop={onDrop}
            onDragOver={onDragEnter}
            onDragLeave={onDragLeave}
            contentEditable={false}
        >
            <Icon icon={"fa6-solid:image"} className="w-12 h-12 mb-4 text-black dark:text-white opacity-20"/>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-sm font-medium text-center text-neutral-400 dark:text-neutral-500">
                    {draggedInside ? 'Drop image here' : 'Drag and drop or'}
                </div>
                <div>
                    <Button disabled={draggedInside} onClick={handleUploadClick} size={"sm"}>
                        <Icon icon="fa6-solid:upload"></Icon>
                        Upload an image
                    </Button>
                </div>
            </div>
            <input
                className="w-0 h-0 overflow-hidden opacity-0"
                ref={ref}
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.gif"
                onChange={onFileChange}
            />
        </div>
    )
}

export default ImageUploader
