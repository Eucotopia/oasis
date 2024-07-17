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
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";

import {link as linkStyles} from "@nextui-org/theme";
import {
    useLazyGetVerifyCodeByEmailQuery,
    useLazyResetPasswordQuery,
    useLazyVerifyCodeQuery,
    UserLoginType,
    useUserLoginMutation,
    useUserRegisterMutation
} from "@/feature/api/authApi"
import {siteConfig} from "@/config/site";
import NextLink from "next/link";

import {ArrowRight, DiscordIcon, GithubIcon, Logo, SearchIcon, TwitterIcon,} from "@/components/icons";
import {useAuth} from "@/hook/useAuth";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";
import {Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/modal";
import {Divider} from "@nextui-org/divider";
import {Checkbox} from "@nextui-org/checkbox";
import {useAppDispatch} from "@/hook/store";
import React, {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {removeCredentials} from "@/feature/auth/authSlice";
import {usePathname} from "next/navigation";
import ThemeSwitch from "@/components/theme-switch";
import NotificationItem from "./notification-item";
import {
    Button, Card, CardBody, CardHeader, Chip,
    cn,
    Input,
    InputProps,
    Listbox,
    ListboxItem, ModalFooter,
    ModalHeader, Popover, PopoverContent, PopoverTrigger,
    ResizablePanel, ScrollShadow, Tabs,
    Tooltip,
} from "@nextui-org/react";
import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion";
import {isWebKit} from "@react-aria/utils";
import {Icon} from "@iconify/react";
import {AppDispatch} from "@/app/store";
import {Badge} from "@nextui-org/badge";
import {Tab} from "@nextui-org/tabs";
import {CardFooter} from "@nextui-org/card";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const formVariants = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 10},
};
type Notification = {
    id: string;
    isRead?: boolean;
    avatar: string;
    description: string;
    name: string;
    time: string;
    type?: "default" | "request" | "file";
};

enum NotificationTabs {
    All = "all",
    Unread = "unread",
    Archive = "archive",
}

const notifications: Record<NotificationTabs, Notification[]> = {
    all: [
        {
            id: "1",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            description: "requested to join your Acme organization.",
            name: "Tony Reichert",
            time: "2 hours ago",
            type: "request",
        },
        {
            id: "2",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            description: "modified the Brand logo file.",
            name: "Ben Berman",
            time: "7 hours ago",
            type: "file",
        },
        {
            id: "3",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            description: "liked your post.",
            name: "Jane Doe",
            time: "Yesterday",
        },
        {
            id: "4",
            isRead: true,
            avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            description: "started following you.",
            name: "John Smith",
            time: "Yesterday",
        },
        {
            id: "5",
            isRead: true,
            avatar: "https://i.pravatar.cc/150?u=a04258a24a2d826712d",
            description: "mentioned you in a post.",
            name: "Jacob Jones",
            time: "2 days ago",
        },
        {
            id: "6",
            isRead: true,
            avatar: "https://i.pravatar.cc/150?u=a04458a24a2d826712d",
            description: "commented on your post.",
            name: "Amelie Dawson",
            time: "4 days ago",
        },
    ],
    unread: [
        {
            id: "1",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            description: "requested to join your Acme organization.",
            name: "Tony Reichert",
            time: "2 hours ago",
            type: "request",
        },
        {
            id: "2",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            description: "modified the Brand logo file.",
            name: "Ben Berman",
            time: "7 hours ago",
            type: "file",
        },
        {
            id: "3",
            isRead: false,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            description: "liked your post.",
            name: "Jane Doe",
            time: "Yesterday",
        },
    ],
    archive: [],
};

interface PasswordInputProps extends Omit<InputProps, 'type'> {
    isVisible: boolean;
    toggleVisibility: () => void;
}

interface FormProps extends PasswordInputProps {
    onClose?: () => void
    setFormState: (state: 'login' | 'register' | 'forgotPassword') => void
    userState: UserLoginType
    dispatch?: AppDispatch
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    isInvalid: boolean
    resetForm: () => void
}


const PasswordInput: React.FC<PasswordInputProps> = ({isVisible, toggleVisibility, ...props}) => (
    <Input
        {...props}
        type={isVisible ? "text" : "password"}
        variant="bordered"
        endContent={
            <button type="button" onClick={toggleVisibility}>
                <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon={isVisible ? "solar:eye-closed-linear" : "solar:eye-bold"}
                />
            </button>
        }
    />
);

const SocialLoginButtons: React.FC = () => (
    <div className="flex flex-col gap-2">
        <Button startContent={<Icon icon="flat-color-icons:google" width={24}/>} variant="bordered">
            Continue with Google
        </Button>
        <Button startContent={<Icon className="text-default-500" icon="fe:github" width={24}/>} variant="bordered">
            Continue with Github
        </Button>
    </div>
);


const LoginForm: React.FC<FormProps> = ({
                                            onClose,
                                            setFormState,
                                            userState,
                                            dispatch,
                                            handleChange,
                                            resetForm,
                                            isInvalid,
                                            isVisible,
                                            toggleVisibility
                                        }) => {

    const [userLogin, {isLoading: isLoginLoading}] = useUserLoginMutation()

    const userLoginHandle = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const auth = await userLogin(userState).unwrap()

        if (dispatch) {
            // dispatch(setCredentials({...auth, isSelectRemember: isSelectRemember}))
            resetForm()
        }
        if (onClose) {
            onClose()
        }
    }

    const [isSelectRemember, setIsSelectRemember] = useState(true)


    return (
        <>
            <m.form
                animate="visible"
                exit="hidden"
                initial="hidden"
                variants={formVariants}
                className="flex flex-col gap-3"
                onSubmit={userLoginHandle}
            >
                <Input
                    autoFocus
                    value={userState.email}
                    onChange={handleChange}
                    name="email"
                    label="Email Address"
                    isInvalid={isInvalid}
                    errorMessage={isInvalid ? "Please enter a valid email" : ""}
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                />
                <PasswordInput
                    label="Password"
                    name="password"
                    value={userState.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    isVisible={isVisible}
                    toggleVisibility={toggleVisibility}
                />
                <div className="flex items-center justify-between px-1 py-2">
                    <Checkbox
                        name="remember"
                        size="sm"
                        isSelected={isSelectRemember}
                        onValueChange={setIsSelectRemember}
                    >
                        Remember me
                    </Checkbox>
                    <Link className="text-default-500" href="#" size="sm"
                          onPress={() => {
                              setFormState("forgotPassword")
                              resetForm()
                          }}
                    >
                        Forgot password?
                    </Link>
                </div>
                <Button color="primary" type="submit" isLoading={isLoginLoading}>
                    Log In
                </Button>
            </m.form>
        </>
    )
};


const RegisterForm: React.FC<FormProps> = ({
                                               userState,
                                               handleChange,
                                               setFormState,
                                               resetForm,
                                               isInvalid,
                                               isVisible,
                                               toggleVisibility
                                           }) => {

    const [isTermsAgreed, setIsTermsAgreed] = React.useState(false);

    const [confirmPassword, setConfirmPassword] = useState<string>()

    const [userRegister, {isLoading: isRegisterLogin}] = useUserRegisterMutation()

    const userRegisterHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isTermsAgreed) {
            alert("Please agree to the Terms and Privacy Policy to proceed.")
            return
        }
        if (userState.password !== confirmPassword) {
            alert("Passwords do not match.")
            return
        }
        if (await userRegister(userState).unwrap() === 2001) {
            setConfirmPassword("")
            resetForm()
            setFormState("login")
        }
    }

    return (
        <m.form
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={formVariants}
            className="flex flex-col gap-3"
            onSubmit={userRegisterHandle}
        >
            <Input
                placeholder="Enter your email"
                autoFocus
                isInvalid={isInvalid}
                errorMessage={isInvalid ? "Please enter a valid email" : ""}
                onChange={handleChange}
                value={userState.email}
                isRequired
                label="Email Address"
                name="email"
                type="email"
                variant="bordered"
            />
            <PasswordInput
                isRequired
                value={userState.password}
                onChange={handleChange}
                label="Password"
                name="password"
                placeholder="Enter your password"
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
            />
            <PasswordInput
                isRequired
                errorMessage={userState.password !== confirmPassword ? "Passwords do not match." : ""}
                onChange={(e: InputChangeEvent) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
            />
            <Checkbox isRequired className="py-4" size="sm" isSelected={isTermsAgreed} onValueChange={setIsTermsAgreed}>
                I agree with the <Link href="#" size="sm">Terms</Link> and <Link href="#" size="sm">Privacy
                Policy</Link>
            </Checkbox>
            <Button color="primary" type="submit" isLoading={isRegisterLogin}>
                Sign Up
            </Button>
        </m.form>
    )
}

const ForgotPasswordForm: React.FC<FormProps> = ({
                                                     setFormState,
                                                     isInvalid,
                                                     isVisible,
                                                     resetForm,
                                                     toggleVisibility,
                                                     userState,
                                                     handleChange,
                                                 }) => {


    const [verifyCode, {data: isResetPassword, isLoading: isVerifyCodeLoading}] = useLazyVerifyCodeQuery()

    const [getVerifyCodeByEmail, {data, isLoading}] = useLazyGetVerifyCodeByEmailQuery()

    const [resetPassword] = useLazyResetPasswordQuery()


    const [stage, setStage] = useState<'getVerifyCode' | 'verifyCode' | 'resetPassword'>("getVerifyCode")

    const [confirmPassword, setConfirmPassword] = useState<string>()


    const getVerifyCode = async () => {
        const result = await getVerifyCodeByEmail(userState.email).unwrap()
        if (result.code == 200) {
            setStage('verifyCode')
        } else {
            alert(result.message)
        }
    }

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await resetPassword(userState).unwrap()
        if (result.code == 200) {
            setFormState("login")
            resetForm()
        }
    }

    return (
        <m.form
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={formVariants}
            className="flex flex-col gap-3"
            onSubmit={handleResetPassword}
        >
            <Input
                autoFocus
                name="email"
                size={"lg"}
                label="Email Address"
                labelPlacement={"inside"}
                type="email"
                isInvalid={isInvalid}
                value={userState.email}
                errorMessage={isInvalid ? "Please enter a valid email" : ""}
                onChange={handleChange}
                endContent={
                    stage === "getVerifyCode" && userState.email.length > 0 &&
                    <Link
                        className={"cursor-pointer flex self-center  text-default-500"}
                        onPress={getVerifyCode}
                    >
                        <ArrowRight size={30}/>
                    </Link>
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault()
                        getVerifyCode()
                    }
                }}
            />
            {
                stage === "verifyCode" &&
                <Input
                    name={"verifyCode"}
                    size={"lg"}
                    label="Verification Code"
                    labelPlacement={"inside"}
                    value={userState.verifyCode}
                    endContent={
                        userState.verifyCode && userState.verifyCode.length > 0 &&
                        <Link className={"cursor-pointer flex self-center text-default-500"}>
                            <ArrowRight size={30}/>
                        </Link>
                    }
                    type={"text"}
                    onChange={handleChange}
                    onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            // 验证码争取
                            if (await verifyCode(userState).unwrap()) {
                                // 可以设置密码
                                setStage("resetPassword")
                            }

                        }
                    }}
                />
            }
            {
                stage === "resetPassword" &&
                <>
                    <PasswordInput
                        isRequired
                        value={userState.password}
                        onChange={handleChange}
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        isVisible={isVisible}
                        toggleVisibility={toggleVisibility}
                    />
                    <PasswordInput
                        isRequired
                        errorMessage={userState.password !== confirmPassword ? "Passwords do not match." : ""}
                        onChange={(e: InputChangeEvent) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        isVisible={isVisible}
                        toggleVisibility={toggleVisibility}
                    />
                    <Button color="primary" type="submit">
                        Reset Password
                    </Button>
                </>
            }
            <div className={"flex flex-row justify-between mt-2 gap-4"}>
                <Button variant={"flat"} fullWidth onPress={() => setFormState("login")}>Log In</Button>
                <Button variant={"flat"} fullWidth onPress={() => setFormState("register")}>Sign Up</Button>
            </div>
        </m.form>
    )
}
export const Navbar = () => {
    const [activeTab, setActiveTab] = React.useState<NotificationTabs>(NotificationTabs.All);

    const activeNotifications = notifications[activeTab];
    // get current path
    const pathname = usePathname()

    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = useCallback(() => setIsVisible(prev => !prev), []);

    const [userState, setUserState] = React.useState<UserLoginType>({
        email: "",
        verifyCode: "",
        password: ''
    })

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (userState.email === "") return false;
        return !validateEmail(userState.email);
    }, [userState.email]);


    const dispatch = useAppDispatch()

    const [formState, setFormState] = useState<'login' | 'register' | 'forgotPassword'>('login');

    const searchRef = useRef<HTMLInputElement>(null);

    const {
        isOpen: isSearchOpen,
        onOpen: onSearchOpen,
        onOpenChange: onSearchOpenChange,
        onClose: onSearchClose
    } = useDisclosure()

    const {
        isOpen: isNotificationOpen,
        onOpen: onNotificationOpen,
        onOpenChange: onNotificationOpenChange,
        onClose: onNotificationClose
    } = useDisclosure()

    // Function to handle keypress event
    const handleKeyPress = (event: any) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            event.preventDefault();
            if (isSearchOpen) {
                onSearchClose();
            } else {
                onSearchOpen();
            }
        }
    };

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setUserState((prev) => ({
        ...prev,
        [name]: value
    }))

    // Adding event listener on component mount and removing on unmount
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isSearchOpen]);

    // Focus input when modal opens
    useEffect(() => {
        if (isSearchOpen && searchRef.current) {
            searchRef.current.focus();
        }
    }, [isSearchOpen]);

    // get current user
    const {currentUser} = useAuth()

    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const resetForm = () => {
        setUserState({
            email: "",
            verifyCode: "",
            password: ''
        })
        setIsVisible(false)
    }

    const searchInput = (
        <Button
            onPress={onSearchOpen}
            aria-label="Quick search"
            size={"md"}
            className="text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
            variant={"flat"}
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" strokeWidth={2}
                            size={18}
                />
            }
            endContent={
                <Kbd className="hidden py-0.5 px-2 lg:inline-block" keys={"command"}>
                    K
                </Kbd>
            }
        >
            Quick Search
        </Button>
    )

    const eventRef = useRef<"mouse" | "keyboard">();

    const onInputKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            eventRef.current = "keyboard";
            switch (e.key) {
                case "ArrowDown": {
                    e.preventDefault();
                    alert("adf")
                    break;
                }
                case "ArrowUp": {
                    e.preventDefault();
                    alert("adf")
                    break;
                }
                case "Control":
                case "Alt":
                case "Shift": {
                    e.preventDefault();
                    break;
                }
                case "Enter": {
                    alert("adf")

                    break;
                }
            }
        },
        [],
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
                    <ul className="hidden lg:flex gap-4 justify-start ml-2 uppercase">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href} isActive={pathname === item.href}>
                                <NextLink
                                    className={cn(
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
                        {/*TODO: Life in Progress*/}
                        <NavbarItem key={"life in progress"}>
                            <Tooltip
                                color="warning"
                                content={
                                    <Listbox
                                        aria-label="Actions"
                                    >
                                        <ListboxItem key="game&music" color={"default"}
                                                     startContent={<Icon icon={"mingcute:music-fill"}/>}
                                        >
                                            Game&Music
                                        </ListboxItem>
                                        <ListboxItem key="love" color={"success"}>Love</ListboxItem>
                                        <ListboxItem key="programming" color={"secondary"}>Programming</ListboxItem>
                                        <ListboxItem key="freesoul" color="primary">
                                            FreeSoul
                                        </ListboxItem>
                                    </Listbox>
                                }
                                delay={0}
                                closeDelay={0}
                                motionProps={{
                                    variants: {
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: 0.1,
                                                ease: "easeIn",
                                            }
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.15,
                                                ease: "easeOut",
                                            }
                                        },
                                    },
                                }}
                                classNames={{
                                    base: [
                                        // arrow color
                                        "before:bg-neutral-400 dark:before:bg-white",
                                    ],
                                    content: [
                                        "py-2 px-4 shadow-xl",
                                        "text-black bg-gradient-to-br from-white to-neutral-400",
                                    ],
                                }}
                            >
                                <NextLink
                                    className={cn(
                                        linkStyles({color: "foreground", isBlock: true}),
                                        "data-[active=true]:text-primary data-[active=true]:font-bold"
                                    )}
                                    color="foreground"
                                    href={"#"}
                                >
                                    Life in Progress
                                </NextLink>
                            </Tooltip>
                        </NavbarItem>
                    </ul>
                </NavbarContent>
                {/*FreeSoul*/}
                <NavbarContent
                    className="hidden sm:flex basis-1/5 sm:basis-full"
                    justify="end"
                >
                    <NavbarItem className="hidden sm:flex gap-2">
                        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                            <TwitterIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
                            <DiscordIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-default-500"/>
                        </Link>
                        <ThemeSwitch/>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                    <NavbarItem className={"hidden lg:flex"}>
                        {currentUser ? (
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        as="button"
                                        color={"success"}
                                        className="transition-transform"
                                        name={currentUser.username}
                                        size="sm"
                                        src={currentUser.avatar}
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
                                    <DropdownItem key="notification" textValue={"Notification"}
                                                  onPress={onNotificationOpen}>
                                        Notification
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
                backdrop={"blur"}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ResizablePanel
                                className={"flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small"}>
                                <p className="pb-2 text-xl font-medium">
                                    {formState === 'login' ? "Log In" : formState === 'register' ? "Sign Up" : "Reset Password"}
                                </p>
                                <AnimatePresence initial={false} mode="popLayout">
                                    <LazyMotion features={domAnimation}>
                                        {formState === 'login' && (
                                            <>
                                                <LoginForm
                                                    isVisible={isVisible}
                                                    toggleVisibility={toggleVisibility}
                                                    isInvalid={isInvalid}
                                                    handleChange={handleChange}
                                                    dispatch={dispatch}
                                                    userState={userState}
                                                    resetForm={resetForm}
                                                    setFormState={setFormState}
                                                    onClose={onClose}
                                                />
                                                <div className="flex items-center gap-4 py-2">
                                                    <Divider className="flex-1"/>
                                                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                                                    <Divider className="flex-1"/>
                                                </div>
                                                <SocialLoginButtons/>
                                                <p className="text-center text-small">
                                                    Need to create an account?&nbsp;
                                                    <Link href="#" size="sm" onPress={() => {
                                                        setFormState("register")
                                                        resetForm()
                                                    }}>
                                                        Sign Up
                                                    </Link>
                                                </p>
                                            </>
                                        )}
                                        {formState === 'register' && (
                                            <>
                                                <RegisterForm
                                                    handleChange={handleChange}
                                                    isVisible={isVisible}
                                                    isInvalid={isInvalid}
                                                    setFormState={setFormState}
                                                    resetForm={resetForm}
                                                    toggleVisibility={toggleVisibility}
                                                    userState={userState}
                                                />
                                                <p className="text-center text-small">
                                                    Already have an account?&nbsp;
                                                    <Link href="#" size="sm" onPress={() => {
                                                        setFormState("login")
                                                        resetForm()
                                                    }}>
                                                        Log In
                                                    </Link>
                                                </p>
                                            </>
                                        )}
                                        {formState === 'forgotPassword' &&
                                            <ForgotPasswordForm
                                                handleChange={handleChange}
                                                isVisible={isVisible}
                                                isInvalid={isInvalid}
                                                setFormState={setFormState}
                                                resetForm={resetForm}
                                                toggleVisibility={toggleVisibility}
                                                userState={userState}
                                            />
                                        }
                                    </LazyMotion>
                                </AnimatePresence>
                            </ResizablePanel>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal
                isOpen={isSearchOpen}
                onOpenChange={onSearchOpenChange}
                hideCloseButton
                onClose={onSearchClose}
                placement="top-center"
                scrollBehavior="inside"
                size="xl"
                backdrop="opaque"
                classNames={{
                    base: [
                        "mt-[20vh]",
                        "border-small",
                        "dark:border-default-100",
                        "supports-[backdrop-filter]:bg-background/80",
                        "dark:supports-[backdrop-filter]:bg-background/30",
                        "supports-[backdrop-filter]:backdrop-blur-md",
                        "supports-[backdrop-filter]:backdrop-saturate-150",
                    ],
                    header: "flex items-center w-full px-4 py-0 border-b border-default-400/50 dark:border-default-100",
                    backdrop: ["bg-black/80"],
                }}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader aria-label={"Quick search command"}>
                                <SearchIcon strokeWidth={2} width={24} height={24} className={"text-default-400"}/>
                                <input
                                    ref={searchRef}
                                    autoFocus={!isWebKit()}
                                    className={"w-full px-2 h-14 font-sans text-lg outline-none rounded-none bg-transparent text-default-700 placeholder-default-500 dark:text-default-500 dark:placeholder:text-default-200"}
                                    placeholder="Search documentation"
                                    onKeyDown={onInputKeyDown}
                                />
                                <Kbd
                                    className="py-0 space-x-0.5 rtl:space-x-reverse items-center font-sans text-center shadow-small bg-default-100 text-foreground-600 rounded-small hidden md:block border-none px-2 ml-2 font-medium text-[0.6rem]">
                                    ESC
                                </Kbd>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex items-center justify-between">
                                    <p className="text-default-600">Recent</p>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal
                isOpen={isNotificationOpen}
                onClose={onNotificationClose}
                onOpenChange={onNotificationOpenChange}
                hideCloseButton
                classNames={{
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div
                                    className="flex w-full items-center justify-between">
                                    <div className="inline-flex items-center gap-1">
                                        <h4 className="inline-block align-middle text-large font-medium">Notifications</h4>
                                        <Chip size="sm" variant="flat">
                                            12
                                        </Chip>
                                    </div>
                                    <Button className="h-8" color="primary" radius="full"
                                            variant="light">
                                        Mark all as read
                                    </Button>
                                </div>
                                <Tabs
                                    aria-label="Notifications"
                                    classNames={{
                                        base: "w-full",
                                        tabList: "gap-6  py-0 w-full relative rounded-none border-b border-divider",
                                        cursor: "w-full",
                                        tab: "max-w-fit  h-12",
                                    }}
                                    color="primary"
                                    selectedKey={activeTab}
                                    variant="underlined"
                                    onSelectionChange={(selected) => setActiveTab(selected as NotificationTabs)}
                                >
                                    <Tab
                                        key="all"
                                        title={
                                            <div className="flex items-center space-x-2">
                                                <span>All</span>
                                                <Chip size="sm" variant="flat">
                                                    9
                                                </Chip>
                                            </div>
                                        }
                                    />
                                    <Tab
                                        key="unread"
                                        title={
                                            <div className="flex items-center space-x-2">
                                                <span>Unread</span>
                                                <Chip size="sm" variant="flat">
                                                    3
                                                </Chip>
                                            </div>
                                        }
                                    />
                                    <Tab key="archive" title="Archive"/>
                                </Tabs>
                            </ModalHeader>
                            <ModalBody >
                                <ScrollShadow className="h-[500px] w-full" hideScrollBar>
                                    {activeNotifications?.length > 0 ? (
                                        activeNotifications.map((notification) => (
                                            <NotificationItem
                                                key={notification.id} {...notification} />
                                        ))
                                    ) : (
                                        <div
                                            className="flex h-full w-full flex-col items-center justify-center gap-2">
                                            <Icon className="text-default-400"
                                                  icon="solar:bell-off-linear" width={40}/>
                                            <p className="text-small text-default-400">No
                                                notifications yet.</p>
                                        </div>
                                    )}
                                </ScrollShadow>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    variant={activeTab === NotificationTabs.Archive ? "flat" : "light"}>
                                    Settings
                                </Button>
                                {activeTab !== NotificationTabs.Archive &&
                                    <Button variant="flat">Archive All</Button>}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
};
