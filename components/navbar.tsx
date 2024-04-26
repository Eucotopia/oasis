'use client'
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import {link as linkStyles} from "@nextui-org/theme";
import {UserLoginType, useUserLoginMutation} from "@/feature/api/authApi"
import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {DiscordIcon, GithubIcon, Logo, SearchIcon, TwitterIcon,} from "@/components/icons";
import {useAuth} from "@/hook/useAuth";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";
import {Modal, ModalBody, ModalContent, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Divider} from "@nextui-org/divider";
import {Icon} from "@iconify/react";
import {Checkbox} from "@nextui-org/checkbox";
import {useAppDispatch} from "@/hook/store";
import React, {ChangeEvent, useMemo, useState} from "react";
import {removeCredentials, setCredentials} from "@/feature/auth/authSlice";
import {usePathname} from "next/navigation";
import ThemeSwitch from "@/components/theme-switch";
import {ModalHeader} from "@nextui-org/react";

export const Navbar = () => {
    const {isOpen: isSearchOpen, onOpen: onSearchOpen, onOpenChange: onSearchOpenChange} = useDisclosure();

    const [userLogin, {isLoading}] = useUserLoginMutation()
    // get current path
    const pathname = usePathname();
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    // get current user
    const {currentUser} = useAuth()
    const dispatch = useAppDispatch()
    const [userState, setUserState] = useState<UserLoginType>({
        email: "",
        password: "",
    })
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isSelectRemember, setIsSelectRemember] = useState(false)
    // const [register] = useRegisterMutation();

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    // validate email
    const isInvalid = useMemo(() => {
        if (userState.email === "") return false;
        return !validateEmail(userState.email);
    }, [userState.email]);

    const handleLoginChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setUserState((prev) => ({
        ...prev,
        [name]: value
    }))

    // handle login
    const userLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const auth = await userLogin(userState).unwrap()
            dispatch(setCredentials(auth))
        } catch (err: any) {
            console.error(err)
        } finally {
            setUserState({
                email: '',
                password: '',
            })
        }
    }
    const searchInput = (
        <Button
            onPress={onSearchOpen}
            aria-label={"Quick Search"}
            size={"md"}
            variant={"flat"}
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
            }
            endContent={
                <Kbd className="hidden lg:inline-block " keys={["command"]}>
                    K
                </Kbd>
            }
            className={"text-default-400 text-medium "}
        >
            Quick Search
        </Button>
    );

    return (
        <>
            <NextUINavbar maxWidth="xl" position="sticky">
                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo/>
                            <p className="font-bold text-inherit">ACME</p>
                        </NextLink>
                    </NavbarBrand>
                    <ul className="hidden lg:flex gap-4 justify-start ml-2">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href} isActive={pathname === item.href}>
                                <NextLink
                                    className={clsx(
                                        linkStyles({color: "foreground", isBlock: true}),
                                        "data-[active=true]:text-primary data-[active=true]:font-bold"
                                    )}
                                    color="foreground"
                                    href={item.href}
                                >
                                    {item.label}
                                </NextLink>
                            </NavbarItem>
                        ))}
                    </ul>
                </NavbarContent>
                <NavbarContent
                    className="hidden sm:flex basis-1/5 sm:basis-full"
                    justify="end"
                >
                    <NavbarItem className="hidden sm:flex gap-2">
                        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                            <TwitterIcon className="text-content4-foreground"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
                            <DiscordIcon className="text-content4-foreground"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-content4-foreground"/>
                        </Link>
                        <ThemeSwitch/>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                    <NavbarItem className={"hidden lg:flex"}>
                        {currentUser ? (
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name={currentUser.username}
                                        size="sm"
                                        src={currentUser.cover}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2" textValue={"Profile"}>
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">{currentUser.email}</p>
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
                                                  onPress={() => {
                                                      dispatch(removeCredentials())
                                                  }}>
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Button onPress={onOpen} variant={"flat"}>Login</Button>
                        )}
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                    <Link isExternal href={siteConfig.links.github} aria-label="Github">
                        <GithubIcon className="text-default-500"/>
                    </Link>
                    <NavbarMenuToggle/>
                </NavbarContent>

                <NavbarMenu>
                    {searchInput}
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {siteConfig.navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index === siteConfig.navMenuItems.length - 1
                                                ? "danger"
                                                : "foreground"
                                    }
                                    href="#"
                                    size="lg"
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </NavbarMenu>
            </NextUINavbar>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                hideCloseButton
                size={"sm"}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="flex h-full w-full items-center justify-center">
                                <div
                                    className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
                                    <p className="pb-2 text-xl font-medium">Log In</p>
                                    <form className="flex flex-col gap-3" onSubmit={(e) => userLoginHandler(e)}>
                                        <Input
                                            value={userState.email}
                                            onChange={handleLoginChange}
                                            name="email"
                                            label="Email Address"
                                            errorMessage={isInvalid && "Please enter a valid email"}
                                            placeholder="Enter your email"
                                            type="email"
                                            variant="bordered"
                                        />
                                        <Input
                                            endContent={
                                                <button type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <Icon
                                                            className="pointer-events-none text-2xl text-default-400"
                                                            icon="solar:eye-closed-linear"
                                                        />
                                                    ) : (
                                                        <Icon
                                                            className="pointer-events-none text-2xl text-default-400"
                                                            icon="solar:eye-bold"
                                                        />
                                                    )}
                                                </button>
                                            }
                                            label="Password"
                                            name={"password"}
                                            value={userState.password}
                                            onChange={handleLoginChange}
                                            placeholder="Enter your password"
                                            type={isVisible ? "text" : "password"}
                                            variant="bordered"
                                        />
                                        <div className="flex items-center justify-between px-1 py-2">
                                            <Checkbox name="remember" size="sm" isSelected={isSelectRemember}
                                                      onValueChange={setIsSelectRemember}>
                                                Remember me
                                            </Checkbox>
                                            <Link className="text-default-500" href="#" size="sm">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Button color="primary" type="submit" isLoading={isLoading} onPress={onClose}>
                                            Log In
                                        </Button>
                                    </form>
                                    <div className="flex items-center gap-4 py-2">
                                        <Divider className="flex-1"/>
                                        <p className="shrink-0 text-tiny text-default-500">OR</p>
                                        <Divider className="flex-1"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            startContent={<Icon icon="flat-color-icons:google" width={24}/>}
                                            variant="bordered"
                                        >
                                            Continue with Google
                                        </Button>
                                        <Button
                                            startContent={<Icon className="text-default-500" icon="fe:github"
                                                                width={24}/>}
                                            variant="bordered"
                                        >
                                            Continue with Github
                                        </Button>
                                    </div>
                                    <p className="text-center text-small">
                                        Need to create an account?&nbsp;
                                        <Link href="#" size="sm">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal
                isOpen={isSearchOpen}
                onOpenChange={onSearchOpenChange}
                hideCloseButton
                classNames={{
                    // body: "scrollbar-hide overflow-scroll rounded-lg mb-20",
                    // backdrop: "bg-gradient-to-br from-[#292f46]/50 to-secondary-500  backdrop-opacity-40",
                    base: "border-none bg-content1 shadow-2xl backdrop-blur-3xl",
                    header: "flex flex-row items-center border-b border-default-400/50 py-2 px-2",
                    // footer: cn("absolute bottom-0 h-20 rounded-b-lg z-10 overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height w-full ", {
                    //     "h-full rounded-t-lg": isShow,
                    //     "border-t-1 border-default-100 ": !isShow,
                    // })
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <Input
                                    variant={"bordered"}
                                    placeholder={"Search documentation"}
                                    radius={"none"}
                                    classNames={{
                                        inputWrapper: "border-none text-default-500",
                                        input: "w-full text-lg dark:placeholder:text-default-300 placeholder:text-default-500"
                                    }}
                                    startContent={
                                        <Icon icon={"iconamoon:search-light"} height={24}
                                              className={"text-default-500"}/>
                                    }
                                    endContent={
                                        <Kbd className="hidden lg:inline-block ">
                                            esc
                                        </Kbd>
                                    }/>
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    待开发
                                </p>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
        ;
};
