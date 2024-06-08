import React, {ChangeEvent, useCallback, useRef, useState} from "react";
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    CheckboxGroup,
    cn,
    Modal,
    ModalContent,
    ModalHeader,
    Switch,
    useDisclosure
} from "@nextui-org/react";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {EditorHeader} from "@/components/tiptap/EditorHeader";
import {ModalBody, ModalFooter} from "@nextui-org/modal";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {Icon} from "@iconify/react";
import {Link} from "@nextui-org/link";
import {Divider} from "@nextui-org/divider";
import {Input, Textarea} from "@nextui-org/input";
import {useGetTagsQuery} from "@/feature/api/tagApi";
import {PostType, useAddPostMutation} from "@/feature/api/postApi"
import TagGroupItem from "@/components/custom/TagGroupItem";
import {useGetCategoriesQuery} from "@/feature/api/categoryApi";
import {useGetColumnsQuery} from "@/feature/api/columnApi";
import {useUploadMutation} from "@/feature/api/fileApi";
import {useLastPost} from "@/hook/useLastPost";
import {useAppDispatch} from "@/hook/store";
import {removeLastPostContent} from "@/feature/post/lastPostContentSlice";
import {useFileUpload} from "@/hook/ImageUpload";
import {Image} from "@nextui-org/image";

const AddPost = () => {

    const [post, setPost] = React.useState<PostType>(
        {
            title: "",
            content: "",
            tags: [],
            summary: "",
            isPrivate: false,
            isTop: false,
            cover: "",
            rating: "5",
            categories: [],
            columns: [],
            status: true
        }
    );

    const {handleUploadClick, ref} = useFileUpload()

    const [uploadImage] = useUploadMutation();

    const uploadFile = useCallback(async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            const url = await uploadImage(formData).unwrap();
            setPost({
                ...post,
                cover: url
            })
        } catch (errPayload: any) {
            const error = errPayload?.response?.data?.error || 'Something went wrong'
            alert(error)
        }
    }, [uploadImage])

    const onFileChange = useCallback(
        // @ts-ignore
        (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
        [uploadFile],
    )
    const [isShow, setIsShow] = React.useState(false);

    const dispatch = useAppDispatch()


    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const {characterCount, editor} = useBlockEditor({isEditor: true})
    const currentPostRef = useRef(null);
    const useCurrentPostContent = useLastPost();
    const [isColumn, setIsColumn] = useState<boolean>(false)
    // add post
    const [addPost] = useAddPostMutation()
    // get all columns
    const {data: columns, isLoading: isLoadingColumns} = useGetColumnsQuery()
    // get all categories
    const {data: categories, isLoading: isLoadingCategories} = useGetCategoriesQuery()
    // get all tags
    const {data: tags, isLoading: isLoadingTags} = useGetTagsQuery()
    // set rating
    const setRating = (value: string) => {
        // @ts-ignore
        handleChange({target: {name: 'rating', value: value}})
    }
    const handeCategoryChange = (id: string) => {
        setPost({
            ...post,
            categories: categories?.filter(c => c.id === Number(id)) ?? []
        })
    }
    const handeColumnIdChange = (id: string) => {
        setPost({
            ...post,
            columns: columns?.filter(c => c.id === Number(id)) ?? []
        })
    }
    const [selectedFile, setSelectedFile] = useState(null);

    // const handleUpload = async () => {
    //     if (selectedFile) {
    //         const formData = new FormData();
    //         formData.append('image', selectedFile);
    //         const imageUrl = await uploadFile(formData).unwrap();
    //         console.log(imageUrl)
    //         // @ts-ignore
    //         handleChange({target: {name: 'cover', value: imageUrl.data}})
    //     }
    // };
    const handeTagChange = (value: string[]) => {
        setPost({
            ...post,
            tags: tags?.filter(t => value.includes(t.id.toString())) ?? []
        })
    }
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setPost((prev) => ({
        ...prev,
        [name]: value
    }))
    if (!editor || !categories || !tags || !columns) {
        return null
    }
    const handleSave = async () => {
        const postState = {
            ...post,
            content: editor.getHTML()
        }
        console.log(postState)
        const unwrap = await addPost(postState).unwrap();
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
                status: true
            })
        }
    }
    return (
        <>
            <Button
                onPress={onOpen}
                color={"primary"}
                endContent={
                    <Icon icon="fa6-solid:plus"/>
                }
            >
                Add new
            </Button>
            <Modal
                isDismissable={false}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"5xl"}
                radius={"sm"}
                classNames={{
                    body: "scrollbar-hide overflow-scroll rounded-lg mb-20",
                    // backdrop: "bg-gradient-to-br from-[#292f46]/50 to-secondary-500  backdrop-opacity-40",
                    base: "h-full",
                    header: "relative flex flex-row items-center",
                    footer: cn("absolute bottom-0 h-20 rounded-b-lg z-10 overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height w-full", {
                        "h-full rounded-t-lg": isShow,
                        "border-t-1 border-default-100 ": !isShow,
                    })
                }}
                scrollBehavior={"inside"}
                hideCloseButton
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
                                        <section className={"w-full pt-10 p-4"}>
                                            <div
                                                className={"h-full flex flex-col gap-4 w-full overflow-y-scroll overflow-x-hidden scrollbar-hide"}
                                                style={{height: 'calc(100% - 60px)'}}>
                                                <div className={"flex flex-row gap-4"}>
                                                    <div
                                                        className={"w-2/5 flex flex-col justify-center items-center gap-4"}>
                                                        {/*cover upload*/}
                                                        <div
                                                            className={"flex flex-col justify-center items-center bg-content2 rounded-md p-4 w-full text-center gap-4"}>
                                                            <Input
                                                                className="w-0 h-0 overflow-hidden opacity-0"
                                                                type="file"
                                                                ref={ref}
                                                                accept=".jpg,.jpeg,.png,.webp,.gif"
                                                                onChange={onFileChange}
                                                            />
                                                            {
                                                                post.cover.length > 0 ? (
                                                                    <Image src={post.cover} alt={"post cover"}
                                                                           radius={"sm"}
                                                                           className="max-w-[300px] max-h-[150px]"
                                                                           onClick={handleUploadClick}/>
                                                                ) : (
                                                                    <>
                                                                        <Icon icon="iconamoon:cloud-upload-fill"
                                                                              width={50}
                                                                              height={50}/>
                                                                        <p className={"text-sm text-default-500"}>Choose
                                                                            file or
                                                                            drag
                                                                            and drop
                                                                        </p>
                                                                        <Button variant={"solid"} color={"primary"}
                                                                                radius={"sm"}
                                                                                size={"sm"} onClick={handleUploadClick}>Choose
                                                                            File</Button>

                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                        {/*status*/}
                                                        <div
                                                            className={"flex flex-row  bg-content2 rounded-md justify-between w-full p-4"}>
                                                            <div className={"flex flex-col items-start justify-start"}>
                                                                <p className={"text-medium"}>Status</p>
                                                                <p className={"text-tiny text-default-500"}>Whether or
                                                                    not the post should be published</p>
                                                            </div>
                                                            <Switch isSelected={post.status} onValueChange={() => {
                                                                setPost({
                                                                    ...post,
                                                                    status: !post.status
                                                                })
                                                            }}/>
                                                        </div>
                                                        {/*isPrivate*/}
                                                        <div
                                                            className={"flex flex-row  bg-content2 rounded-md justify-between w-full p-4"}>
                                                            <div className={"flex flex-col items-start justify-start"}>
                                                                <p className={"text-medium"}>Private</p>
                                                                <p className={"text-tiny text-default-500"}>Whether or
                                                                    not the post should be private</p>
                                                            </div>
                                                            <Switch isSelected={post.isPrivate} onValueChange={() => {
                                                                setPost({
                                                                    ...post,
                                                                    isPrivate: !post.isPrivate
                                                                })
                                                            }}/>
                                                        </div>
                                                        {/*isTop*/}
                                                        <div
                                                            className={"flex flex-row  bg-content2 rounded-md justify-between w-full p-4"}>
                                                            <div className={"flex flex-col items-start justify-start"}>
                                                                <p className={"text-medium"}>Top</p>
                                                                <p className={"text-tiny text-default-500"}>Whether or
                                                                    not the post should be top</p>
                                                            </div>
                                                            <Switch isSelected={post.isTop} onValueChange={() => {
                                                                setPost({
                                                                    ...post,
                                                                    isTop: !post.isTop
                                                                })
                                                            }}/>
                                                        </div>
                                                        {/*category*/}
                                                        <div
                                                            className={"flex flex-row  bg-content1 rounded-md justify-between w-full p-4"}>
                                                            <Autocomplete
                                                                isRequired
                                                                labelPlacement={"outside-left"}
                                                                size={"lg"}
                                                                label="Chose a category"
                                                                defaultItems={categories}
                                                                placeholder="Chose a category"
                                                                onSelectionChange={handeCategoryChange as any}
                                                            >
                                                                {(item) => <AutocompleteItem
                                                                    key={item.id}>{item.name}</AutocompleteItem>}
                                                            </Autocomplete>
                                                        </div>
                                                    </div>
                                                    <div className={"flex flex-col w-3/5 gap-4"}>
                                                        <div
                                                            className={"flex flex-col bg-content2 rounded-md p-4 gap-4 "}>
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
                                                        </div>
                                                        {/*Tags*/}
                                                        <div
                                                            className={"flex flex-col gap-4 bg-content2 p-4 rounded-md "}>
                                                            <p className={"text-medium"}>Tags</p>
                                                            <CheckboxGroup
                                                                aria-label="Select tags"
                                                                orientation="horizontal"
                                                                classNames={{
                                                                    base: "flex flex-row justify-center items-center gap-1",
                                                                    wrapper: "flex flex-row gap-1 overflow-x-scroll flex-nowrap scrollbar-hide p-1 justify-start items-center w-full",
                                                                }}
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
                                                        <div
                                                            className={"flex flex-row  bg-content2 rounded-md justify-between w-full p-4"}>
                                                            {
                                                                isColumn ? (
                                                                    <Autocomplete
                                                                        isRequired
                                                                        labelPlacement={"outside-left"}
                                                                        size={"lg"}
                                                                        label="Chose a column"
                                                                        defaultItems={columns}
                                                                        placeholder="Chose a column"
                                                                        onSelectionChange={handeColumnIdChange as any}
                                                                    >
                                                                        {(item) => <AutocompleteItem
                                                                            key={item.id ? item.id : item.name}>{item.name}</AutocompleteItem>}
                                                                    </Autocomplete>
                                                                ) : (
                                                                    <>
                                                                        <div
                                                                            className={"flex flex-col items-start justify-start"}>
                                                                            <p className={"text-medium"}>Column</p>
                                                                            <p className={"text-tiny text-default-500"}>Whether
                                                                                or
                                                                                not the post should be private</p>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                            <Switch isSelected={isColumn} onValueChange={setIsColumn}/>
                                                        </div>
                                                    </div>
                                                </div>
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
    );
}

export default AddPost
