import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages";
import {  StudentsPage, AddStudentPage } from "./pages/students";
import {   PATH_PAGE } from "./routes/paths";
import {Providers} from "./providers";
import { AddStaffPage, StaffListPage } from "./pages/staff";

const router = createBrowserRouter([

  {
    path: "/",
    element: (<HomePage />),
    children: [
      {
        path: PATH_PAGE.students.root,
        element: (<StudentsPage />),
      },
      {
        path: PATH_PAGE.students.new,
        element: (<AddStudentPage />),
      },
      {
        path: PATH_PAGE.staff.root,
        element: (<StaffListPage />),
      },
      {
        path: PATH_PAGE.staff.new,
        element: (<AddStaffPage />),
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
