import {PostType, useUpdatePostMutation} from "@/feature/api/postApi";
import {Autocomplete, AutocompleteItem, Button, CheckboxGroup, cn, ModalHeader, Switch} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalFooter} from "@nextui-org/modal";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {EditorContent} from "@tiptap/react";
import {EditorHeader} from "@/components/tiptap/EditorHeader";
import {Icon} from "@iconify/react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {Input, Textarea} from "@nextui-org/input";
import TagGroupItem from "@/components/radio/TagGroupItem";
import RatingRadioGroup from "@/components/rating/RatingRadioGroup";
import {Divider} from "@nextui-org/divider";
import {Link} from "@nextui-org/link";
import React, {useEffect, useState} from "react";
import {useGetCategoriesQuery} from "@/feature/api/categoryApi";
import {useGetTagsQuery} from "@/feature/api/tagApi";
import {useGetColumnsQuery} from "@/feature/api/columnApi";
import {removeLastPostContent} from "@/feature/post/lastPostContentSlice";
import {useAppDispatch} from "@/hook/store";
import {useUploadMutation} from "@/feature/api/fileApi";

type UpdatePostProps = {
    postParam: PostType
    isEditPostOpen: boolean
    onEditPostOpenChange: () => void
}
const UpdatePost = ({postParam, isEditPostOpen, onEditPostOpenChange}: UpdatePostProps) => {
    const [post, setPost] = React.useState<PostType>(postParam)
    useEffect(() => {
        setPost(postParam)
    }, [postParam]);
    const [isShow, setIsShow] = React.useState(false);
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setPost((prev) => ({
        ...prev,
        [name]: value
    }))
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useAppDispatch()
    const [uploadFile] = useUploadMutation();

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            const imageUrl = await uploadFile(formData).unwrap();
            console.log(imageUrl)
            // @ts-ignore
            handleChange({target: {name: 'cover', value: imageUrl.data}})
        }
    };

    const [isColumn, setIsColumn] = useState<boolean>(false)

    const handeCategoryChange = (id: string) => {
        setPost({
            ...post,
            categories: categories?.filter(c => c.id === Number(id)) ?? []
        })
    }
    const [updatePost] = useUpdatePostMutation()

    const {data: tags, isLoading: isLoadingTags} = useGetTagsQuery()
    const {data: columns, isLoading: isLoadingColumns} = useGetColumnsQuery()
    const setRating = (value: string) => {
        // @ts-ignore
        handleChange({target: {name: 'rating', value: value}})
    }
    const handeTagChange = (value: string[]) => {
        setPost({
            ...post,
            tags: tags?.filter(t => value.includes(t.id.toString())) ?? []
        })
    }
    const handeColumnIdChange = (id: string) => {
        setPost({
            ...post,
            columns: columns?.filter(c => c.id === Number(id)) ?? []
        })
    }
    // get all categories
    const {data: categories, isLoading: isLoadingCategories} = useGetCategoriesQuery()
    const {characterCount, editor} = useBlockEditor({isEditor: true, content: post.content})

    if (!editor || !categories || !tags || !columns) {
        return null
    }

    const handleSave = async () => {
        const postState = {
            ...post,
            content: editor.getHTML()
        }
        const unwrap = await updatePost(postState).unwrap();
        if (unwrap.code === 200) {
            dispatch(removeLastPostContent())
            editor.commands.clearContent()
            setPost({
                title: "",
                content: "",
                tags: [],
                summary: "",
                isPrivate: false,
                isTop: false,
                cover: "",
                rating: "1",
                categories: [],
                columns: [],
                status: 0
            })
        }
    }
    return (
        <>
            <Modal
                hideCloseButton
                isDismissable={false}
                isOpen={isEditPostOpen}
                onOpenChange={onEditPostOpenChange}
                size={"5xl"}
                backdrop={"blur"}
                radius={"sm"}
                classNames={{
                    body: "scrollbar-hide overflow-scroll rounded-lg mb-20",
                    // backdrop: "bg-gradient-to-br from-[#292f46]/50 to-secondary-500  backdrop-opacity-40",
                    base: "h-full",
                    header: "relative flex flex-row items-center",
                    footer: cn("absolute bottom-0 h-20 rounded-b-lg z-10 overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height w-full ", {
                        "h-full rounded-t-lg": isShow,
                        "border-t-1 border-default-100 ": !isShow,
                    })
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <EditorHeader editor={editor}/>
                                <Button
                                    className="z-20"
                                    isIconOnly={isShow}
                                    radius="full"
                                    size="sm"
                                    onPress={() => setIsShow((prev) => !prev)}
                                >
                                    {isShow ? <Icon icon="ci:close-sm" width={24}/> : "Apply"}
                                </Button>
                            </ModalHeader>
                            <ModalBody>
                                <BlockEditor editor={editor}/>
                            </ModalBody>
                            <ModalFooter>
                                {
                                    isShow ? (
                                        <section className={"w-full pt-10 pl-4 "}>
                                            <div className={"h-full flex flex-col gap-4 overflow-scroll scrollbar-hide"}
                                                 style={{height: 'calc(100% - 60px)'}}>
                                                <Input
                                                    variant={"faded"}
                                                    value={post.title}
                                                    isRequired
                                                    name={"title"}
                                                    onChange={handleChange}
                                                    size={"lg"}
                                                    type="text"
                                                    label="Title"
                                                    placeholder="Enter post title"
                                                    labelPlacement="outside"
                                                />
                                                <Textarea
                                                    name={"summary"}
                                                    value={post.summary}
                                                    onChange={handleChange}
                                                    isRequired
                                                    size={"lg"}
                                                    labelPlacement="outside"
                                                    variant={"faded"}
                                                    maxRows={3}
                                                    label="Summary"
                                                    placeholder="Enter post summary "
                                                />
                                                <div className={"flex flex-row gap-8"}>
                                                    <Autocomplete
                                                        isRequired
                                                        labelPlacement={"outside"}
                                                        size={"lg"}
                                                        label="Chose a category"
                                                        defaultItems={categories}
                                                        placeholder="Chose a category"
                                                        className="w-1/3"
                                                        onSelectionChange={handeCategoryChange as any}
                                                    >
                                                        {(item) => <AutocompleteItem
                                                            key={item.id}>{item.name}</AutocompleteItem>}
                                                    </Autocomplete>
                                                </div>
                                                <div
                                                    className="flex flex-col items-start gap-2 w-2/3">
                                                    <div
                                                        className={"text-medium after:content-['*'] after:text-danger"}>Chose
                                                        some tags
                                                    </div>
                                                    <CheckboxGroup
                                                        aria-label="Select tags"
                                                        orientation="horizontal"
                                                        onChange={handeTagChange as any}>
                                                        {
                                                            tags?.map((item, index) => {
                                                                return (
                                                                    <TagGroupItem icon="ic:baseline-apple"
                                                                                  value={String(item.id)}
                                                                                  key={item.id}>
                                                                        {item.name}
                                                                    </TagGroupItem>
                                                                )
                                                            })
                                                        }
                                                    </CheckboxGroup>
                                                </div>
                                                <div className={"flex flex-row mt-5 gap-4"}>
                                                    <Switch isSelected={post.isTop} onValueChange={() => {
                                                        setPost(prevState => ({
                                                            ...prevState,
                                                            isTop: !prevState.isTop
                                                        }))
                                                    }}
                                                            name={"isTop"}>
                                                        isTop
                                                    </Switch>
                                                    <Switch isSelected={post.isPrivate}
                                                            onValueChange={() => {
                                                                setPost(prevState => ({
                                                                    ...prevState,
                                                                    isPrivate: !prevState.isPrivate
                                                                }))
                                                            }}
                                                            name={"isPrivate"}>
                                                        isPrivate
                                                    </Switch>
                                                    <Switch isSelected={isColumn} onValueChange={setIsColumn}>
                                                        isColumn
                                                    </Switch>
                                                    {
                                                        isColumn && <Autocomplete
                                                            isRequired
                                                            labelPlacement={"outside"}
                                                            size={"lg"}
                                                            label="Chose a column"
                                                            defaultItems={columns}
                                                            placeholder="Chose a column"
                                                            className="w-1/3"
                                                            onSelectionChange={handeColumnIdChange as any}
                                                        >
                                                            {(item) => <AutocompleteItem
                                                                key={item.id}>{item.name}</AutocompleteItem>}
                                                        </Autocomplete>
                                                    }
                                                </div>
                                                <div>
                                                    <RatingRadioGroup className="mt-2 w-72" value={post.rating}
                                                                      setValue={setRating}/>
                                                </div>
                                                <input type="file" onChange={(e) => {
                                                    // @ts-ignore
                                                    setSelectedFile(e.target.files[0]);
                                                }}
                                                       name="image"
                                                       className="hidden"
                                                       id="upload-input"/>
                                                <button onClick={handleUpload}>上传图片</button>
                                            </div>
                                            <Divider className={"w-full border-default-100"}/>
                                            <div
                                                className={"flex flex-row justify-end gap-2 h-20 items-center"}>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onPress={onClose} onClick={handleSave}>
                                                    Publish
                                                </Button>
                                            </div>

                                        </section>
                                    ) : (
                                        <div className={"flex flex-row justify-between w-full rounded-lg "}>
                                            <div className={"flex flex-col"}>
                                                <p className="text-small text-default-500">{characterCount.words()}&nbsp;words</p>
                                                <p className="text-small text-default-500">{characterCount.characters()}&nbsp;characters</p>
                                            </div>
                                            <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">
                                                <Icon
                                                    className="text-default-400 dark:text-default-300 "
                                                    icon="la:markdown"
                                                    width={20}
                                                />
                                                <p className="text-tiny text-default-400 dark:text-default-300">
                                                    <Link
                                                        className="text-tiny text-default-500"
                                                        color="foreground"
                                                        href="https://guides.github.com/features/mastering-markdown/"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        Markdown
                                                        <Icon className="[&>path]:stroke-[2px]"
                                                              icon="solar:arrow-right-up-linear"/>
                                                    </Link>
                                                    &nbsp;supported.
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default UpdatePost