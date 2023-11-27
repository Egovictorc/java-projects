import { PATH_PAGE } from "./routes/paths";

const navConfig = [

    {
        header: "Courses",
        children: [
            {
            title: 'All Courses',
            icon: "ic:sharp-account-circle",
            path: PATH_PAGE.courses.root,
        },
            {
            title: 'Add Course',
            icon: "ic:sharp-account-circle",
            path: PATH_PAGE.courses.new,
        },
    ]
    },
    {
        header: "Students",
        children: [
            {
            title: 'All Students',
            icon: "ic:sharp-account-circle",
            path: PATH_PAGE.students.root,
        },
            {
            title: 'Add Student',
            icon: "ic:sharp-account-circle",
            path: PATH_PAGE.students.new,
        },
    ]
    },
    {
        header: "Staff",
        children: [
            {
                title: 'All Staff',
                icon: "entypo:mail",
                path: PATH_PAGE.staff.root,
            },
            {
                title: 'Add Staff',
                icon: "entypo:mail",
                path: PATH_PAGE.staff.new,
            },
        ]
    }

]

export default navConfig;