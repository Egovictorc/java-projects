import { SectionHeading } from '@/components/headings'
import { NewStaffForm } from '@/sections/staff'
import React from 'react'

const AddStaffPage = () => {
    return (
        <div className='p-5'>
            <SectionHeading title="Add Staff" />
            <div className='mt-5 max-w-screen-md'>

            <NewStaffForm />
            </div>
        </div>
    )
}

export default AddStaffPage