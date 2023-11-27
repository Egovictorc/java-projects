import React from 'react'
import { Helmet } from "react-helmet";


import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global';
import { NewStudentForm } from '@/sections/students'

const AddStudentPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Student | {COMPANY_INFO.name}</title>
            </Helmet>
            <div className='p-5'>
                <SectionHeading title="Add Student" />
                <div className='mt-5 max-w-screen-md'>

                    <NewStudentForm />
                </div>
            </div>
        </>
    )
}

export default AddStudentPage