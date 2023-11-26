function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const API_ROOT = `/api/v1`;


export const PATH_PAGE = {
    students: {
        root: path("/", "students"),
        new: path("/", "students/add-student"),
        get: (id: number) => path(API_ROOT, `/students/${id}`),
    },
    staff: {
        root: path("/", "staff"),
        new: path("/", "staff/add-staff"),
        get: (id: number) => path(API_ROOT, `/staff/${id}`),
    },
    course: {
        root: path("/", "course"),
        get: (id: number) => path(API_ROOT, `/course/${id}`),
    },
}

export const PATH_API = {
    students: {
        root: path(API_ROOT, '/students'),
        get: (id: number) => path(API_ROOT, `/students/${id}`),
        update: (id: number) => path(API_ROOT, `/students/${id}`),
        delete: (id: number) => path(API_ROOT, `/students/${id}`),

    },
    staff: {
        root: path(API_ROOT, '/staff'),
        get: (id: number) => path(API_ROOT, `/staff/${id}`),
        update: (id: number) => path(API_ROOT, `/staff/${id}`),
        delete: (id: number) => path(API_ROOT, `/staff/${id}`),
    },
}
