import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages";
import { StudentsPage, AddStudentPage, EditStudentPage } from "./pages/students";
import { PATH_PAGE } from "./routes/paths";
import { Providers } from "./providers";
import { AddStaffPage, StaffListPage, EditStaffPage } from "./pages/staff";
import { SnackbarProvider } from "notistack";
import { CourseListPage, EditCoursePage, NewCoursePage } from "./pages/courses";

const router = createBrowserRouter([

  {
    path: "/",
    element: (<HomePage />),
    children: [
      {
        path: PATH_PAGE.courses.root,
        element: (<CourseListPage />),
      },
      {
        path: PATH_PAGE.courses.new,
        element: (<NewCoursePage />),
      },
      {
        path: PATH_PAGE.courses.edit,
        // path: "/courses/:id",
        element: (<EditCoursePage />),
      },
      // students routes
      {
        path: PATH_PAGE.students.root,
        element: (<StudentsPage />),
      },
      {
        path: PATH_PAGE.students.new,
        element: (<AddStudentPage />),
      },
      {
        path: PATH_PAGE.students.edit,
        // path: "/students/:id",
        element: (<EditStudentPage />),
      },
      // staff routes
      {
        path: PATH_PAGE.staff.root,
        element: (<StaffListPage />),
      },
      {
        path: PATH_PAGE.staff.new,
        element: (<AddStaffPage />),
      },
      {
        path: PATH_PAGE.staff.edit,
        element: (<EditStaffPage />),
      },
    ]
  },

]);

export default function App() {

  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
