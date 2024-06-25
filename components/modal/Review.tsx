"use client";

import React, {ChangeEvent, useState} from "react";
import {
    Divider,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Textarea,
    type ModalProps,
    Button,
} from "@nextui-org/react";

import RatingRadioGroup from "./rating-radio-group";
import {Fa6SolidPencil, SolarLetterBold, SolarUserBold} from "@/components/icons";
import {CommentType, useAddCommentMutation} from "@/feature/api/commentApi";

const ModalReview = React.forwardRef<HTMLDivElement, Omit<ModalProps, "children">>(
    ({isOpen, onClose, onOpenChange, ...props}, ref) => {

        const [addComment] = useAddCommentMutation()

        const [comment, setComment] = useState<CommentType>({
            title: "",
            content: "",
            username: "",
            email: "",
            postId: Number(props.id),
            rating: 5,
            parentId: ""
        });

        const handleChange = ({
                                  target: {
                                      name,
                                      value
                                  }
                              }: ChangeEvent<HTMLInputElement>) => setComment((prev) => ({
            ...prev,
            [name]: value
        }))

        const handleTextareaChange = (value: string) =>
            setComment((prev) => ({
                ...prev,
                content: value,
            }));

        return (
            <>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...props} ref={ref}>
                    <ModalContent>
                        <ModalHeader className="flex-col pt-8">
                            <h1 className="text-large font-semibold">Write a review</h1>
                            <p className="text-small font-normal text-default-400">
                                Share your thoughts on this article
                            </p>
                        </ModalHeader>
                        <ModalBody className="pb-8">
                            <form
                                className="flex flex-col gap-6"
                                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const data = Object.fromEntries(formData.entries());
                                    setComment((pre) => ({
                                        ...pre,
                                        rating: Number(data.rating.toString())
                                    }))
                                    const result = addComment(comment).unwrap()
                                    onClose?.();
                                }}
                            >
                                <Input
                                    label="username"
                                    name={"username"}
                                    placeholder="Enter your username"
                                    value={comment.username}
                                    onChange={handleChange}
                                    startContent={<SolarUserBold/>}
                                />
                                <Input
                                    label="Email"
                                    name={"email"}
                                    value={comment.email}
                                    placeholder="Enter your email"
                                    onChange={handleChange}

                                    startContent={<SolarLetterBold/>}
                                />
                                <Divider/>
                                <RatingRadioGroup
                                    hideStarsText
                                    className="flex-col-reverse items-start"
                                    color="warning"
                                    name={"rating"}
                                    label={<span className="text-small">Rating</span>}
                                />
                                <Input
                                    label="Title"
                                    name={"title"}
                                    value={comment.title}
                                    onChange={handleChange}

                                    placeholder="Title of your review"
                                    startContent={<Fa6SolidPencil/>}
                                />
                                <Textarea
                                    disableAutosize
                                    classNames={{
                                        input: "h-32 resize-y !transition-none",
                                    }}
                                    value={comment.content}
                                    name={"comment"}
                                    label="Comment"
                                    onValueChange={handleTextareaChange}
                                    placeholder="Enter your comment"
                                />
                                <Button color="primary" type="submit">
                                    Send review
                                </Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        )

    }
    ,
);

ModalReview.displayName = "ModalReview";

export default ModalReview;