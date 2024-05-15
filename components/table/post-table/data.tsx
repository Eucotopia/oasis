const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "TAGS", uid: "tags"},
    {name: "CATEGORIES", uid: "categories"},
    {name: "TITLE", uid: "title"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "CREATE_TIME", uid: "create_time"},
    {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
    {name: "Published", uid: "published"},
    {name: "Draft", uid: "draft"},
    {name: "Deleted", uid: "deleted"},
];


export {columns, statusOptions};
