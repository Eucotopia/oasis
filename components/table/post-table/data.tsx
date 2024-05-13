const columns = [
    {name: "ID", uid: "id", sortable: true},
    // {name: "USERNAME", uid: "username", sortable: true},
    // {name: "AGE", uid: "age", sortable: true},
    // {name: "ROLES", uid: "roles", sortable: true},
    // {name: "ADDRESS", uid: "address"},
    {name: "CREATE_TIME", uid: "create_time"},
    {name: "TITLE", uid: "title"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
    {name: "Published", uid: "published"},
    {name: "Draft", uid: "draft"},
    {name: "Deleted", uid: "deleted"},
];


export {columns, statusOptions};
