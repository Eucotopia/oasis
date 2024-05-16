import {type SidebarItem} from "./sidebar";

export const items: SidebarItem[] = [
    {
        key: "home",
        href: "#",
        icon: "solar:home-2-linear",
        title: "Home",
    },
    {
        key: "projects",
        href: "#",
        icon: "solar:widget-2-outline",
        title: "Projects",
    },
    {
        key: "tasks",
        href: "#",
        icon: "solar:checklist-minimalistic-outline",
        title: "Tasks",
    },
    {
        key: "tag-manage",
        href: "/dashboard/tag-manage",
        icon: "solar:users-group-two-rounded-outline",
        title: "Tag Manage",
    },
    {
        key: "tracker",
        href: "#",
        icon: "solar:sort-by-time-linear",
        title: "Tracker",
    },
    {
        key: "post-manage",
        href: "/dashboard/post-manage",
        icon: "solar:chart-outline",
        title: "Post Manage",
    },
    {
        key: "user-manage",
        href: "/dashboard/user-manage",
        icon: "solar:sort-by-time-linear",
        title: "User Manage",
    },
    {
        key: "column-manage",
        href: "/dashboard/column-manage",
        icon: "solar:bill-list-outline",
        title: "Column Manage",
    },
    {
        key: "settings",
        href: "#",
        icon: "solar:settings-outline",
        title: "Settings",
    },
];