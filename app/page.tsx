'use client'
import {PostDetail} from "@/components/post/PostDetail"
import {Button} from "@nextui-org/button";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";
import React from "react";
import {useAuth} from "@/hook/useAuth";

export default function Home() {
    const {currentUser} = useAuth()
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name={currentUser?.username}
                        size="sm"
                        src={currentUser?.cover}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2" textValue={"Profile"}>
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{currentUser?.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings" textValue={"Settings"}>My Settings</DropdownItem>
                    <DropdownItem key="team_settings" textValue={"Team Settings"}>Team
                        Settings</DropdownItem>
                    <DropdownItem key="analytics" textValue={"Analytics"}>Analytics</DropdownItem>
                    <DropdownItem key="system" textValue={"System"}>System</DropdownItem>
                    <DropdownItem key="configurations"
                                  textValue={"Configurations"}>Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback" textValue={"Help & Feedback"}>Help &
                        Feedback</DropdownItem>
                    <DropdownItem key="logout" textValue={"Log Out"} color="danger"
                                  onPress={() => alert(7868)}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </section>
    );
}
