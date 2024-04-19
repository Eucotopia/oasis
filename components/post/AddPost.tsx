import React, {useEffect} from "react";
import {
    Autocomplete,
    AutocompleteItem,
    Button, CheckboxGroup,
    cn,
    Modal,
    ModalContent,
    ModalHeader,
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
import {TagType, useAddTagMutation, useGetTagsQuery} from "@/feature/api/tagApi";
import {PostType, useAddPostMutation} from "@/feature/api/postApi"
import TagGroupItem from "@/components/radio/TagGroupItem";

export const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
];

const AddPost = () => {
    // add post
    const [addPost] = useAddPostMutation()
    // get all tags
    const {data: tags, isLoading: isLoadingTags} = useGetTagsQuery()

    const [isShow, setIsShow] = React.useState(false);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const {characterCount, editor} = useBlockEditor()
    const [post, setPost] = React.useState<PostType>(
        {
            title: "",
            content: "",
            tags: [],
            summary: "",
            isPrivate: false,
            isTop: false,
            cover: "1",
            categoryId: "1",
            columnId: 0,
            rating: "4",
        }
    );
    const handeTagChange = (value: string[]) => setPost((prev) => ({...prev, tags: value}))
    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setPost((prev) => ({
        ...prev,
        [name]: value
    }))

    if (!editor) {
        return null
    }
    const handleSave = async () => {
        const updatedPostState = {
            ...post,
            content: editor?.getHTML()
        };
        const unwrap = await addPost(updatedPostState).unwrap();
    }

    return (
        <>
            <Button onPress={onOpen}>Add new</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"5xl"}
                radius={"lg"}
                classNames={{
                    body: "scrollbar-hide overflow-scroll rounded-lg mb-20",
                    backdrop: "bg-gradient-to-br from-[#292f46]/50 to-secondary-500  backdrop-opacity-40",
                    base: "h-full",
                    header: "relative flex flex-row items-center",
                    footer: cn("absolute bottom-0 h-20 rounded-b-lg z-10 overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height w-full ", {
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
                                        <section className={"w-full pt-10 pl-4"}>
                                            <div className={"h-full flex flex-col gap-4"}
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
                                                    label="summary"
                                                    placeholder="Enter post summary "
                                                />
                                                <div className={"flex flex-row gap-4"}>
                                                    <Autocomplete
                                                        isRequired
                                                        labelPlacement={"outside"}
                                                        size={"lg"}
                                                        label="Chose a category"
                                                        defaultItems={animals}
                                                        placeholder="Search an animal"
                                                        defaultSelectedKey="cat"
                                                        className="w-1/3"
                                                    >
                                                        {(item) => <AutocompleteItem
                                                            key={item.value}>{item.label}</AutocompleteItem>}
                                                    </Autocomplete>
                                                    <div
                                                        className="flex flex-row items-center justify-between gap-2 w-2/3">
                                                        <CheckboxGroup aria-label="Select amenities" className="gap-1"
                                                                       orientation="horizontal"
                                                                       value={post.tags}
                                                                       onChange={handeTagChange as any}>
                                                            {
                                                                // @ts-ignore
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
                                                        {/*TODO add tag*/}
                                                        {/*<Input*/}
                                                        {/*    className={"w-3/12"}*/}
                                                        {/*    variant={"underlined"}*/}
                                                        {/*    placeholder={"add tag"}*/}
                                                        {/*    onKeyDown={(e) => {*/}
                                                        {/*        if (e.key === "Enter") {*/}
                                                        {/*            // setTags([...tags, {*/}
                                                        {/*            //     id: tags.length + 1,*/}
                                                        {/*            //     name: e.currentTarget.value*/}
                                                        {/*            // }])*/}
                                                        {/*            e.currentTarget.value = ""*/}
                                                        {/*        }*/}
                                                        {/*    }}*/}
                                                        {/*/>*/}
                                                    </div>
                                                </div>
                                                <Button onClick={handleSave}>onClick</Button>
                                            </div>
                                            <Divider className={"w-full border-default-100"}/>
                                            <div
                                                className={"flex flex-row justify-end gap-2 h-20 items-center"}>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onPress={onClose}>
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
                            {/*    <CardFooter*/}
                            {/*        className={cn(*/}
                            {/*            "absolute bottom-0 h-[120px] overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height",*/}
                            {/*            {*/}
                            {/*                "h-full": isShow,*/}
                            {/*                "border-t-1 border-default-100": !isShow,*/}
                            {/*            },*/}
                            {/*        )}*/}
                            {/*    >*/}
                            {/*        {*/}
                            {/*            isShow ? (*/}
                            {/*                <div*/}
                            {/*                    className="h-full w-full items-start justify-center overflow-scroll px-4 pb-24 pt-20">*/}
                            {/*                    /!*cover*!/*/}
                            {/*                    <div>*/}
                            {/*                        /!*<input type="file"  name="image"*!/*/}
                            {/*                        /!*       className="hidden"*!/*/}
                            {/*                        /!*       id="upload-input"/>*!/*/}
                            {/*                        /!*<label htmlFor="upload-input"*!/*/}
                            {/*                        /!*       className="rounded-full w-20 h-20 bg-gray-200 flex items-center justify-center cursor-pointer">*!/*/}
                            {/*                        /!*    {*!/*/}
                            {/*                        /!*        selectedFile && postState.cover ? (*!/*/}
                            {/*                        /!*                <Image src={postState.cover}*!/*/}
                            {/*                        /!*                       height={100}*!/*/}
                            {/*                        /!*                       radius={"full"}*!/*/}
                            {/*                        /!*                       alt=""/>*!/*/}
                            {/*                        /!*            )*!/*/}
                            {/*                        /!*            : (<PlusIcon/>)*!/*/}
                            {/*                        /!*    }*!/*/}
                            {/*                        /!*</label>*!/*/}
                            {/*                        <input type={'file'} name={"image"}*/}
                            {/*                               className={"rounded-full w-20 h-full"}/>*/}
                            {/*                        <button>上传图片</button>*/}
                            {/*                    </div>*/}
                            {/*                    /!*<div className="flex flex-row gap-6">*!/*/}
                            {/*                    /!*    <Input*!/*/}
                            {/*                    /!*        autoFocus*!/*/}
                            {/*                    /!*        fullWidth*!/*/}
                            {/*                    /!*        aria-label="Affiliate code"*!/*/}
                            {/*                    /!*        name={"title"}*!/*/}
                            {/*                    /!*        onChange={handleChange}*!/*/}
                            {/*                    /!*        classNames={{*!/*/}
                            {/*                    /!*            inputWrapper: "group-data-[focus-visible=true]:outline-foreground",*!/*/}
                            {/*                    /!*        }}*!/*/}
                            {/*                    /!*        label="Enter post title"*!/*/}
                            {/*                    /!*        labelPlacement="outside"*!/*/}
                            {/*                    /!*        placeholder="E.g. ACME123"*!/*/}
                            {/*                    /!*    />*!/*/}
                            {/*                    /!*    <Input*!/*/}
                            {/*                    /!*        autoFocus*!/*/}
                            {/*                    /!*        fullWidth*!/*/}
                            {/*                    /!*        aria-label="Affiliate code"*!/*/}
                            {/*                    /!*        classNames={{*!/*/}
                            {/*                    /!*            inputWrapper: "group-data-[focus-visible=true]:outline-foreground",*!/*/}
                            {/*                    /!*        }}*!/*/}
                            {/*                    /!*        label="Enter post summary"*!/*/}
                            {/*                    /!*        name={"summary"}*!/*/}
                            {/*                    /!*        onChange={handleChange}*!/*/}
                            {/*                    /!*        labelPlacement="outside"*!/*/}
                            {/*                    /!*        placeholder="E.g. ACME123"*!/*/}
                            {/*                    /!*    />*!/*/}
                            {/*                    /!*</div>*!/*/}
                            {/*                    /!*<Switch isSelected={postState.isTop} onValueChange={onIsTopChange}*!/*/}
                            {/*                    /!*        name={"isTop"}>*!/*/}
                            {/*                    /!*    isTop*!/*/}
                            {/*                    /!*</Switch>*!/*/}
                            {/*                    /!*<Switch isSelected={postState.isPrivate}*!/*/}
                            {/*                    /!*        onValueChange={onIsPrivateChange}*!/*/}
                            {/*                    /!*        name={"isPrivate"}>*!/*/}
                            {/*                    /!*    isPrivate*!/*/}
                            {/*                    /!*</Switch>*!/*/}
                            {/*                    /!*<Switch isSelected={isColumn} onValueChange={setIsColumn}>*!/*/}
                            {/*                    /!*    isColumn*!/*/}
                            {/*                    /!*</Switch>*!/*/}
                            {/*                    /!*{*!/*/}
                            {/*                    /!*    isColumn && <div>选择专栏</div>*!/*/}
                            {/*                    /!*}*!/*/}
                            {/*                    /!*<Autocomplete*!/*/}
                            {/*                    /!*    defaultItems={rootCategories?.data}*!/*/}
                            {/*                    /!*    label="Favorite Animal"*!/*/}
                            {/*                    /!*    placeholder="Search an animal"*!/*/}
                            {/*                    /!*    className="max-w-xs"*!/*/}
                            {/*                    /!*    onSelectionChange={handeCategoryIdChange as any}*!/*/}
                            {/*                    /!*>*!/*/}
                            {/*                    /!*    {(category) => <AutocompleteItem*!/*/}
                            {/*                    /!*        key={category.id}>{category.name}</AutocompleteItem>}*!/*/}
                            {/*                    /!*</Autocomplete>*!/*/}
                            {/*                    /!*<div className="my-auto flex max-w-lg flex-col gap-2">*!/*/}
                            {/*                    /!*    <h3 className="text-medium font-medium leading-8 text-default-600">Tags</h3>*!/*/}
                            {/*                    /!*    <CheckboxGroup aria-label="Select amenities" className="gap-1"*!/*/}
                            {/*                    /!*                   orientation="horizontal"*!/*/}
                            {/*                    /!*                   value={postState.tagId}*!/*/}
                            {/*                    /!*                   onChange={handeTagChange as any}>*!/*/}
                            {/*                    /!*        {*!/*/}
                            {/*                    /!*            tags?.data.map((item, index) => {*!/*/}
                            {/*                    /!*                return (*!/*/}
                            {/*                    /!*                    <TagGroupItem icon="ic:baseline-apple"*!/*/}
                            {/*                    /!*                                  value={String(item.id)} key={item.id}>*!/*/}
                            {/*                    /!*                        {item.name}*!/*/}
                            {/*                    /!*                    </TagGroupItem>*!/*/}
                            {/*                    /!*                )*!/*/}
                            {/*                    /!*            })*!/*/}
                            {/*                    /!*        }*!/*/}
                            {/*                    /!*    </CheckboxGroup>*!/*/}
                            {/*                    /!*    <RatingRadioGroup className="mt-2 w-72" value={postState.rating}*!/*/}
                            {/*                    /!*                      setValue={setRating}/>*!/*/}
                            {/*                    /!*</div>*!/*/}
                            {/*                    <Divider className="mb-8 mt-10"/>*/}

                            {/*                    <Button color="danger" variant="light" onPress={onClose}>*/}
                            {/*                        Close*/}
                            {/*                    </Button>*/}
                            {/*                    <Button color="primary" onPress={onClose}>*/}
                            {/*                        Publish*/}
                            {/*                    </Button>*/}
                            {/*                </div>*/}
                            {/*            ) : (*/}
                            {/*                <div className={"flex flex-row justify-between w-full"}>*/}
                            {/*                    <div className={"flex flex-col"}>*/}
                            {/*                        <p className="text-small text-default-500">{characterCount.words()}&nbsp;words</p>*/}
                            {/*                        <p className="text-small text-default-500">{characterCount.characters()}&nbsp;characters</p>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">*/}
                            {/*                        <Icon*/}
                            {/*                            className="text-default-400 dark:text-default-300"*/}
                            {/*                            icon="la:markdown"*/}
                            {/*                            width={20}*/}
                            {/*                        />*/}
                            {/*                        <p className="text-tiny text-default-400 dark:text-default-300">*/}
                            {/*                            <Link*/}
                            {/*                                className="text-tiny text-default-500"*/}
                            {/*                                color="foreground"*/}
                            {/*                                href="https://guides.github.com/features/mastering-markdown/"*/}
                            {/*                                rel="noreferrer"*/}
                            {/*                                target="_blank"*/}
                            {/*                            >*/}
                            {/*                                Markdown*/}
                            {/*                                <Icon className="[&>path]:stroke-[2px]"*/}
                            {/*                                      icon="solar:arrow-right-up-linear"/>*/}
                            {/*                            </Link>*/}
                            {/*                            &nbsp;supported.*/}
                            {/*                        </p>*/}
                            {/*                    </div>*/}

                            {/*                </div>*/}
                            {/*            )*/}
                            {/*        }*/}
                            {/*    </CardFooter>*/}
                            {/*</Card>*/}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddPost
