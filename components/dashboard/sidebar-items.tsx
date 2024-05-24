import {type SidebarItem, SidebarItemType} from "./sidebar";

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
        icon: "ic:round-tag",
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
        icon: "ri:article-fill",
        title: "Post Manage",
    },
    {
        key: "user-manage",
        href: "/dashboard/user-manage",
        icon: "mingcute:user-3-fill",
        title: "User Manage",
    },
    {
        key: "column-manage",
        href: "/dashboard/column-manage",
        icon: "fluent:column-triple-edit-20-filled",
        title: "Column Manage",
    },
    {
        key: "settings",
        href: "#",
        icon: "mingcute:settings-4-fill",
        title: "Settings",
    },
];