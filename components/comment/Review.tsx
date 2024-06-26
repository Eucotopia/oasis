"use client";

import React from "react";
import {cn, User} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {CommentType} from "@/feature/api/commentApi";


export type ReviewProps = React.HTMLAttributes<HTMLDivElement> & CommentType;

const Review = React.forwardRef<HTMLDivElement, ReviewProps>(
    ({children, user, title, content, rating, date, ...props}, ref) => (
        <div ref={ref} {...props}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <User
                        avatarProps={{
                            // src: user.avatar,
                            src: `${user?.avatar}`
                        }}
                        classNames={{
                            name: "font-medium",
                            description: "text-small",
                        }}
                        description={new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        }).format(new Date("2021-08-01T12:00:00.000Z"))}
                        name={user?.username}
                    />
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({length: 5}, (_, i) => {
                        const isSelected = i + 1 <= rating;
                        return (
                            <Icon
                                key={i}
                                className={cn(
                                    "text-lg sm:text-xl",
                                    isSelected ? "text-warning" : "text-default-200",
                                )}
                                icon="solar:star-bold"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="mt-4 max-w-full">
                <p className="font-medium text-default-900 break-words">{title}</p>
                <p className="mt-2 text-default-500 break-words">{content || children}</p>
            </div>
        </div>
    ),
);

Review.displayName = "Review";

export default Review;