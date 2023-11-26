import { SectionHeading } from '@/components/headings'
import { NewStudentForm } from '@/sections/students'
import React from 'react'

const AddStudentPage = () => {
    return (
        <div className='p-5'>
            <SectionHeading title="Add Student" />
            <div className='mt-5 max-w-screen-md'>

            <NewStudentForm />
            </div>
        </div>
    )
}

export default AddStudentPage