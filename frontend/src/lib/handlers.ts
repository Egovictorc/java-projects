import { CourseProps, StaffProps, StudentProps } from "types";
import { PATH_API } from "../routes/paths";
import axiosInstance from "./axiosInstance";

// staff actions
export const getAllStaff = async (): Promise<StaffProps[]> => {
    const response = await axiosInstance.get(PATH_API.staff.root)
    return response.data;

}

export const getStaffById = async (id: number): Promise<StaffProps> => {
    const response = await axiosInstance.get(PATH_API.staff.get(id))
    return response.data;

}

export const deleteStaff = async (id: number ) => {
    const response = await axiosInstance.delete(PATH_API.staff.delete(id))
    return response.data;
}

export const addStaff = async(formData: StaffProps) => {
    const response = await axiosInstance.post(PATH_API.staff.root, formData);

    const newStudent: StaffProps = response.data;
    return newStudent;
}

export const updateStaff = async(id: number, formData: StaffProps) => {
    const response = await axiosInstance.put(PATH_API.staff.update(id), formData);

    const updatedStaff: StaffProps = response.data;
    return updatedStaff;
}


// student actions
export const getStudents = async (): Promise<StudentProps[]> => {
    const response = await axiosInstance.get(PATH_API.students.root)
    return response.data;

}

export const getStudentById = async (id: number): Promise<StudentProps> => {
    const response = await axiosInstance.get(PATH_API.students.get(id))
    return response.data;

}

export const deleteStudent = async (id: number ) => {
    const response = await axiosInstance.delete(PATH_API.students.delete(id))
    return response.data;

}

export const addStudent = async(
    formData: StudentProps
    ) => {

        console.log("called add student...", formData)
    const response = await axiosInstance.post(PATH_API.students.root, formData);

    const newStudent: StudentProps = response.data;
    return newStudent;
}

export const updateStudent = async(id: number, formData: StudentProps) => {
    const response = await axiosInstance.put(PATH_API.students.update(id), formData);

    const updatedStudent: StudentProps = response.data;
    return updatedStudent;
}


// course actions
export const getCourses = async (): Promise<CourseProps[]> => {
    const response = await axiosInstance.get(PATH_API.courses.root)
    return response.data;

}

export const getCourseById = async (id: number): Promise<CourseProps> => {
    const response = await axiosInstance.get(PATH_API.courses.get(id))
    return response.data;

}

export const deleteCourse = async (id: number ) => {
    const response = await axiosInstance.delete(PATH_API.courses.delete(id))
    return response.data;

}

export const addCourse = async(
    formData: CourseProps
    ) => {

    const response = await axiosInstance.post(PATH_API.courses.root, formData);

    const newCourse: CourseProps = response.data;
    return newCourse;
}

export const updateCourse = async(id: number, formData: CourseProps) => {
    const response = await axiosInstance.put(PATH_API.courses.update(id), formData);

    const updatedCourse: CourseProps = response.data;
    return updatedCourse;
}