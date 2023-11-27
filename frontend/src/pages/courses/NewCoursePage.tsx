import React from 'react'
import { Helmet } from "react-helmet";


import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global';
import { NewCourseForm } from '@/sections/courses'

const NewCoursePage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New Course | {COMPANY_INFO.name}</title>
            </Helmet>
            <div className='p-5'>
                <SectionHeading title="New Course" />
                <div className='mt-5 max-w-screen-md'>
                    <NewCourseForm />
                </div>
            </div>
        </>
    )
}

export default NewCoursePage