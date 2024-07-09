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
    useLazyGetUserByEmailQuery,
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
import {removeCredentials, setCredentials} from "@/feature/auth/authSlice";
import {usePathname} from "next/navigation";
import ThemeSwitch from "@/components/theme-switch";
import {
    Button,
    cn,
    Input, InputProps,
    Listbox,
    ListboxItem,
    ModalHeader,
    ResizablePanel,
    Tooltip,
} from "@nextui-org/react";
import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion";
import {isWebKit} from "@react-aria/utils";
import {Icon} from "@iconify/react";
import {isVisible} from "y-prosemirror";
import {isInvalid} from "@react-stately/calendar/src/utils";
import {ArrowRightIcon} from "@nextui-org/shared-icons";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

const formVariants = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 10},
};

interface PasswordInputProps extends Omit<InputProps, 'type'> {
    isVisible: boolean;
    toggleVisibility: () => void;
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

interface LoginFormProps {
    onClose: () => void;
    setFormState: (state: 'login' | 'register' | 'forgotPassword') => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
                                                 onClose,
                                                 setFormState
                                             }) => {

    const dispatch = useAppDispatch()

    const [userLogin, {isLoading: isLoginLoading}] = useUserLoginMutation()

    // handle login
    const userLoginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 登录
        const auth = await userLogin(userState).unwrap()
        dispatch(setCredentials({...auth, isSelectRemember: isSelectRemember}))
        onClose()
    }

    const [isSelectRemember, setIsSelectRemember] = useState(true)

    const [userState, setUserState] = useState<UserLoginType>({
        email: "",
        password: "",
    })

    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = useCallback(() => setIsVisible(prev => !prev), []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserState(prev => ({...prev, [name]: value}));
    };

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)


    // validate email
    const isInvalid = useMemo(() => {
        if (userState.email === "") return false;
        return !validateEmail(userState.email);
    }, [userState.email]);

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
                          onPress={() => setFormState("forgotPassword")}
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

interface RegisterFormProps {
}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {

    const [isTermsAgreed, setIsTermsAgreed] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserState(prev => ({...prev, [name]: value}));
    };


    const [userState, setUserState] = useState<UserLoginType>({
        email: "",
        password: "",
    })

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

    const [isVisible, setIsVisible] = React.useState(false)

    // validate email
    const isInvalid = useMemo(() => {
        if (userState.email === "") return false;
        return !validateEmail(userState.email);
    }, [userState.email]);

    const [confirmPassword, setConfirmPassword] = useState<string>()

    const toggleVisibility = useCallback(() => setIsVisible(prev => !prev), []);


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

const ForgotPasswordForm = () => {
    const [getUserByEmail, {data, isLoading}] = useLazyGetUserByEmailQuery()
    const [passwordReset, setPasswordReset] = React.useState({
        email: "",
        verificationCode: "",
        password: ''
    })

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

    const [isVisible, setIsVisible] = React.useState(false)

    // validate email
    const isInvalid = useMemo(() => {
        if (passwordReset.email === "") return false;
        return !validateEmail(passwordReset.email);
    }, [passwordReset.email]);

    const [showVerificationCode, setShowVerificationCode] = useState(false);

    const handleLoginChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setPasswordReset((prev) => ({
        ...prev,
        [name]: value
    }))

    const findUserByEmail = async () => {
        const user = await getUserByEmail(passwordReset.email).unwrap()
        console.log(user)
    }

    return (
        <m.form
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={formVariants}
            className="flex flex-col gap-3"
        >
            <Input
                autoFocus
                name="email"
                size={"lg"}
                label="Email Address"
                labelPlacement={"inside"}
                type="email"
                isInvalid={isInvalid}
                errorMessage={isInvalid ? "Please enter a valid email" : ""}
                onChange={handleLoginChange}
                endContent={
                    !showVerificationCode && passwordReset.email.length > 0 &&
                    <Link className={"cursor-pointer flex self-center  text-default-500"}
                          onPress={findUserByEmail}>
                        <ArrowRight size={30}/>
                    </Link>
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault()
                        findUserByEmail()
                    }
                }}
            />
            {
                showVerificationCode &&
                <Input
                    name={"verificationCode"}
                    size={"lg"}
                    label="Verification Code"
                    labelPlacement={"inside"}
                    endContent={
                        passwordReset.verificationCode.length > 0 &&
                        <Link className={"cursor-pointer flex self-center text-default-500"}>
                            <ArrowRight size={30}/>
                        </Link>
                    }
                    type={"text"}
                    onChange={handleLoginChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            alert("进行验证")
                        }
                    }}
                />
            }

            {/*<Button color="primary" type="submit">*/}
            {/*    Reset Password*/}
            {/*</Button>*/}
        </m.form>
    )
}
export const Navbar = () => {

    const dispatch = useAppDispatch()

    const [formState, setFormState] = useState<'login' | 'register' | 'forgotPassword'>('login');

    const searchRef = useRef<HTMLInputElement>(null);

    const {
        isOpen: isSearchOpen,
        onOpen: onSearchOpen,
        onOpenChange: onSearchOpenChange,
        onClose: onSearchClose
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


    // get current path
    const pathname = usePathname()


    // get current user
    const {currentUser} = useAuth()


    const [userState, setUserState] = useState<UserLoginType>({
        email: "",
        password: "",
    })

    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    // const [register] = useRegisterMutation();


    const handleLoginChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setUserState((prev) => ({
        ...prev,
        [name]: value
    }))


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
                                                    <Link href="#" size="sm" onPress={() => setFormState("register")}>
                                                        Sign Up
                                                    </Link>
                                                </p>
                                            </>
                                        )}
                                        {formState === 'register' && (
                                            <>
                                                <RegisterForm/>
                                                <p className="text-center text-small">
                                                    Already have an account?&nbsp;
                                                    <Link href="#" size="sm" onPress={() => setFormState("login")}>
                                                        Log In
                                                    </Link>
                                                </p>
                                            </>
                                        )}
                                        {formState === 'forgotPassword' && <ForgotPasswordForm/>}
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
        </>
    )
};
