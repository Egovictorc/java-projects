import { StaffProps } from "types";
import { PATH_API } from "../routes/paths";
import axiosInstance from "./axiosInstance";

// staff actions


export const getAllStaff = async (): Promise<StaffProps[]> => {
    const response = await axiosInstance.get(PATH_API.staff.root)
    return response.data;

}

export const deleteStaff = async (id: number ) => {
    const response = await axiosInstance.delete(PATH_API.staff.delete(id))
    return response.data;
}

export const addStaff = async(formData: StaffProps) => {
    const response = await axiosInstance.post(PATH_API.students.root, formData);

    const newStudent: StaffProps = response.data;
    return newStudent;
}

// student actions
export const getStudents = async (): Promise<StaffProps[]> => {
    const response = await axiosInstance.get(PATH_API.students.root)
    return response.data;

}

export const deleteStudent = async (id: number ) => {
    const response = await axiosInstance.delete(PATH_API.students.delete(id))
    return response.data;

}

export const addStudent = async(
    email: string,
    firstName: string, 
    lastName: string,
    course: string
    ) => {
    const response = await axiosInstance.post(PATH_API.students.root, { email, course, firstName, lastName });

    const newStudent: StaffProps = response.data;
    return newStudent;
}

export const updateStudent = async(
    email: string,
    firstName: string, 
    lastName: string,
    course: string,
    id: number
    ) => {
    const response = await axiosInstance.post(PATH_API.students.update(id), { email, course, firstName, lastName });

    const updatedStudent: StaffProps = response.data;
    return updatedStudent;
}