import React from 'react'
import { Helmet } from "react-helmet";

import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { EditCourseForm } from '@/sections/courses'
import { useLocation, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCourseById, getStudentById, getStudents } from '@/lib/handlers';
import { CourseProps, StudentProps } from 'types';

const EditCoursePage = () => {

    const { id } = useParams();
    const queryClient = useQueryClient();
    // Queries
    const { data: course, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ['courses'], queryFn: () => getCourseById(Number(id)) })
    console.log("course ", course)
    // Mutations

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Edit Course | {COMPANY_INFO.name}</title>
            </Helmet>
            <div className='p-5'>
                <SectionHeading title="Update Course Record" />
                <div className='mt-5 max-w-screen-md'>
                    <EditCourseForm course={course as CourseProps} />
                </div>
            </div>
        </>
    )
}

export default EditCoursePage