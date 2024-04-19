import React from "react";
import {Button, cn, Modal, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {EditorHeader} from "@/components/tiptap/EditorHeader";
import {ModalBody, ModalFooter} from "@nextui-org/modal";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {Icon} from "@iconify/react";
import {Link} from "@nextui-org/link";
import {Divider} from "@nextui-org/divider";

const AddPost = () => {
    const [isShow, setIsShow] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {characterCount, editor} = useBlockEditor()
    if (!editor) {
        return null
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
                    body: "scrollbar-hide",
                    // backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "h-full",
                    header: "relative flex flex-col gap-1",
                    footer: cn("absolute bottom-0 h-[80px] rounded-b-lg z-10 overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height w-full", {
                        "h-full rounded-t-lg": isShow,
                        "border-t-1 border-default-100": !isShow,
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
                            </ModalHeader>
                            <ModalBody>
                                <BlockEditor height={"200px"} editor={editor}/>
                                <Button
                                    className="absolute right-4 top-4 z-20"
                                    isIconOnly={isShow}
                                    radius="full"
                                    size="sm"
                                    onPress={() => setIsShow((prev) => !prev)}
                                >
                                    {isShow ? <Icon icon="ci:close-sm" width={24}/> : "Apply"}
                                </Button>
                            </ModalBody>
                            <ModalFooter>
                                {
                                    isShow ? (
                                        <div className={"rounded-t-lg w-full"}>
                                            <Divider className="mb-8 mt-10"/>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Publish
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className={"flex flex-row justify-between w-full rounded-lg"}>
                                            <div className={"flex flex-col"}>
                                                <p className="text-small text-default-500">{characterCount.words()}&nbsp;words</p>
                                                <p className="text-small text-default-500">{characterCount.characters()}&nbsp;characters</p>
                                            </div>
                                            <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">
                                                <Icon
                                                    className="text-default-400 dark:text-default-300"
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
