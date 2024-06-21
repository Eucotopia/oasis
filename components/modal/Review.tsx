"use client";

import React, {useState} from "react";
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

const ModalReview = React.forwardRef<HTMLDivElement, Omit<ModalProps, "children">>(
    ({isOpen, onClose, onOpenChange, ...props}, ref) => (
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

                            console.log(data);

                            onClose?.();
                        }}
                    >
                        <Input
                            label="username"
                            name={"username"}
                            placeholder="Enter your username"
                            startContent={<SolarUserBold/>}
                        />
                        <Input
                            label="Email"
                            name={"email"}
                            placeholder="Enter your email"
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
                            placeholder="Title of your review"
                            startContent={<Fa6SolidPencil/>}
                        />
                        <Textarea
                            disableAutosize
                            classNames={{
                                input: "h-32 resize-y !transition-none",
                            }}
                            name={"comment"}
                            label="Comment"
                            placeholder="Enter your comment"
                        />
                        <Button color="primary" type="submit">
                            Send review
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    ),
);

ModalReview.displayName = "ModalReview";

export default ModalReview;