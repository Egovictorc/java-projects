import React from 'react'
import { Helmet } from "react-helmet";

import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { EditStudentForm } from '@/sections/students'
import { useLocation, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getStudentById, getStudents } from '@/lib/handlers';
import { StudentProps } from 'types';

const EditStudentPage = () => {

    const { id } = useParams();
    const queryClient = useQueryClient();
    // Queries
    const { data: student, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ['student'], queryFn: () => getStudentById(Number(id)) })
    console.log("student ", student)
    // Mutations

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Edit Student | {COMPANY_INFO.name}</title>
            </Helmet>
            <div className='p-5'>
                <SectionHeading title="Update Student Record" />
                <div className='mt-5 max-w-screen-md'>
                    <EditStudentForm student={student as StudentProps} />
                </div>
            </div>
        </>
    )
}

export default EditStudentPage